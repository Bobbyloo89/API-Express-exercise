

// Importerar 'crypto' för att generera unika ID:n
import crypto from 'crypto';

// Fejk-databas som lagrar användare som en array av objekt
let users = [
    { id: "1", name: 'Alice' },
    { id: "2", name: 'Bob' },
    { id: "3", name: 'Charlie' }
];

// Funktion för att hämta alla användare
const getUsers = () => users;

// Funktion för att hämta en specifik användare baserat på ID
const getUserById = (id) => users.find(user => user.id === id);

// Funktion för att skapa en ny användare
const createUser = (name) => {
    const newUser = { id: crypto.randomUUID(), name }; // Skapar ett nytt användarobjekt med unikt ID
    users.push(newUser); // Lägger till användaren i arrayen
    return newUser; // Returnerar den skapade användaren
};

// Funktion för att uppdatera en befintlig användare
const updateUser = (id, name) => {
    const userIndex = users.findIndex(user => user.id === id); // Hittar användaren i arrayen
    if (userIndex !== -1) { // Om användaren finns
        users[userIndex].name = name; // Uppdaterar användarens namn
        return users[userIndex]; // Returnerar den uppdaterade användaren
    }
    return null; // Returnerar null om användaren inte hittades
};

// Funktion för att ta bort en användare baserat på ID
const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id); // Hittar användaren i arrayen
    if (userIndex !== -1) { // Om användaren finns
        return users.splice(userIndex, 1)[0]; // Tar bort användaren och returnerar den
    }
    return null; // Returnerar null om användaren inte hittades
};

// Exporterar alla funktioner så de kan användas i andra filer
export { getUsers, getUserById, createUser, updateUser, deleteUser };
