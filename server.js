

// Importerar Express-ramverket för att skapa en webbserver
import express from 'express';

// Importerar router för användarrelaterade endpoints
import usersRouter from './routes/users.js';

// Skapar en Express-applikation
const app = express();

// Definierar portnumret som servern ska lyssna på
const PORT = 3000;

// Middleware för att kunna tolka inkommande JSON-data i request-body
app.use(express.json());

// Kopplar ihop användarrutterna med "/users", så alla anrop till "/users" går till usersRouter
app.use('/users', usersRouter);

// Middleware för att hantera 404-fel (om en route inte hittas)
app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});

// Global felhanterare som fångar upp och returnerar serverfel
app.use((err, req, res, next) => {
    console.error(err.stack); // Loggar felet i serverkonsolen
    res.status(500).json({ message: "Internal Server Error" }); // Returnerar felmeddelande
});

// Startar servern och lyssnar på den angivna porten
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});