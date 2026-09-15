const express = require("express");
const app = express();
const PORT = 3000;

// Updated data based on the whiteboard
const foods = [
    {
        id: 1,
        food: "Adobo",
        price: 75
    },
    {
        id: 2,
        food: "Menudo",
        price: 80
    },
    {
        id: 3,
        food: "Burat", // As written on the whiteboard
        price: 15
    }
];

// Retrieve all food items
app.get("/api/foods", (req, res) => {
    res.json(foods);
});

// Retrieve one food item through id
app.get("/api/foods/:id", (req, res) => {
    const id = Number(req.params.id);
    const food = foods.find(f => f.id === id);

    if (!food) {
        return res.status(404).json({
            message: "Food not found"
        });
    }
    res.json(food);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});