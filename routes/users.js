

// Importerar Express för att skapa rutter och funktioner för användar-API
import express from 'express';

// Importerar de controller-funktioner som hanterar logiken för varje route
import { getUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController } from '../controllers/users.js';

// Skapar en Express-router som används för att definiera API-rutter
const router = express.Router();

// Definierar en GET-rutt för att hämta alla användare
// Anropar getUsersController för att hantera logiken
router.get('/', getUsersController);

// Definierar en GET-rutt för att hämta en specifik användare via ID
// Anropar getUserByIdController för att hantera logiken
router.get('/:id', getUserByIdController);

// Definierar en POST-rutt för att skapa en ny användare
// Anropar createUserController för att hantera logiken
router.post('/', createUserController);

// Definierar en PUT-rutt för att uppdatera en användare
// Anropar updateUserController för att hantera logiken
router.put('/:id', updateUserController);

// Definierar en DELETE-rutt för att ta bort en användare
// Anropar deleteUserController för att hantera logiken
router.delete('/:id', deleteUserController);

// Exporterar router för användning i andra delar av applikationen
export default router;