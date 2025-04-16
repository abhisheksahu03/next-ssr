const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const blogs = [
  {
    id: '1',
    title: 'First Blog Post',
    content: 'This is the first blog post.',
    image: 'https://via.placeholder.com/600x300',
    author: 'John Doe',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    content: 'This is the second blog post.',
    image: 'https://via.placeholder.com/600x300',
    author: 'Jane Doe',
  },
];

app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/api/blogs/:id', (req, res) => {
  const blog = blogs.find((b) => b.id === req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

app.listen(5000, () => {
  console.log('API Server running at http://localhost:5000');
});
