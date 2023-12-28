
import reservationFood from '../modals/reservation.js';

 export const getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationFood.find().populate('user').populate('commande.food');
    res.json(reservations);
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const reservation = await  reservationFood.findById(req.params.id).populate('user').populate('commande.food');
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createReservation = async (req, res) => {
  try {

    const { userId, foodId, quantity, prix } = req.body;
    const newReservation = new reservationFood({ user: userId, commande: { food: foodId, quantity, prix } });
    await newReservation.save();

    // Return a success message or the created reservation
    res.status(201).json({ message: 'Reservation created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateReservation = async (req, res) => {
  try {

    const { quantity, prix } = req.body;
    await reservationFood.findByIdAndUpdate(req.params.id, { $set: { 'commande.quantity': quantity, 'commande.prix': prix } });

    // Return a success message or the updated reservation
    res.json({ message: 'Reservation updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

 export const deleteReservation = async (req, res) => {
  try {

    await reservationFood.findByIdAndDelete(req.params.id);

    // Return a success message
    res.json({ message: 'Reservation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


