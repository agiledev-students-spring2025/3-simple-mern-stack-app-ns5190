const express = require('express');
const router = express.Router();

const aboutData = {
    paragraph: "Hello! I'm [Your Name]. I am passionate about web development and love creating interactive web applications.",
    imageUrl: "http://localhost:7002/images/headshot.png"  // Ensure this URL matches your image's location and name
};

router.get('/', (req, res) => {
    res.json(aboutData);
});

module.exports = router;
