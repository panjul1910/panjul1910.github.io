const express = require('express');
const fetch = require('node-fetch');
const app = express();

const apiKey = '1f3f7427210b444d8783aba06140ab85';
const country = 'id';
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

app.use(express.static('public'));

app.get('/news', async (req, res) => {
  try {
    const response = await fetch(newsApiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
