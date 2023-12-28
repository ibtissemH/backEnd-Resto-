import express from 'express';

import {
    createReservation,
    deleteReservation,
    getAllReservations,
    getReservationById,
    updateReservation
} from '../controllers/reservation.js';

const router = express.Router();

router.get('/reservations', getAllReservations);
router.get('/reservations/:id', getReservationById);
router.post('/reservations', createReservation);
router.put('/reservations/:id', updateReservation);
router.delete('/reservations/:id', deleteReservation);

export default router;