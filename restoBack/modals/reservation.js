import mongoose from 'mongoose';

const reservationFoodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  commande: [{
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food'
    },
    quantity: Number,
    prixUnitaire: Number
  }],
  prixTotale: Number
});

const reservationFood = mongoose.model('ReservationFood', reservationFoodSchema);

export default reservationFood;