

// Importerar funktioner från db.js som hanterar användardata
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../db.js';

// Hämta alla användare
export const getUsersController = (req, res) => {
    try {
        // Hämtar alla användare från fejkdatabasen och skickar som svar
        res.json(getUsers());
    } catch (error) {
        // Om något går fel, returneras 500 med felmeddelande
        res.status(500).json({ message: error.message });
    }
};

// Hämta en specifik användare via ID
export const getUserByIdController = (req, res) => {
    try {
        // Hämtar en användare med det ID som skickats som parameter
        const user = getUserById(req.params.id);
        
        // Om användaren inte finns, returneras 404 med felmeddelande
        if (!user) return res.status(404).json({ message: "User not found" });
        
        // Om användaren finns, returneras användarens data
        res.json(user);
    } catch (error) {
        // Om något går fel, returneras 500 med felmeddelande
        res.status(500).json({ message: error.message });
    }
};

// Skapa en ny användare
export const createUserController = (req, res) => {
    try {
        // Om 'name' inte finns med i request body, returneras 400 med felmeddelande
        if (!req.body.name) {
            return res.status(400).json({ message: "Name is required" });
        }
        
        // Skapar en ny användare och returnerar den
        const newUser = createUser(req.body.name);
        res.status(201).json(newUser);
    } catch (error) {
        // Om något går fel, returneras 400 med felmeddelande
        res.status(400).json({ message: error.message });
    }
};

// Uppdatera en användare
export const updateUserController = (req, res) => {
    try {
        // Uppdaterar användaren med det angivna ID:t och namn
        const updatedUser = updateUser(req.params.id, req.body.name);
        
        // Om användaren inte finns, returneras 404 med felmeddelande
        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        
        // Om användaren har uppdaterats, returneras den nya användardatan
        res.json(updatedUser);
    } catch (error) {
        // Om något går fel, returneras 500 med felmeddelande
        res.status(500).json({ message: error.message });
    }
};

// Ta bort en användare
export const deleteUserController = (req, res) => {
    try {
        // Försöker ta bort användaren med det angivna ID:t
        const deletedUser = deleteUser(req.params.id);
        
        // Om användaren inte finns, returneras 404 med felmeddelande
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        
        // Returnerar den borttagna användaren
        res.json(deletedUser);
    } catch (error) {
        // Om något går fel, returneras 500 med felmeddelande
        res.status(500).json({ message: error.message });
    }
};