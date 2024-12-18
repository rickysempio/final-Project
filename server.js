const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;


require('dotenv').config();


app.use(express.static('public'));


app.get('/api/search', async (req, res) => {
  const query = req.query.query;
  const API_KEY = '730b2adde7914bd283a95b7a5185794b';// process.env.SPOONACULAR_API_KEY; // Add API key in .env file 
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Error fetching recipes');
  }
});

//server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
