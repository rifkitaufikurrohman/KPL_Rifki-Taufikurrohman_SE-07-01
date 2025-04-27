import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 2000;

app.use(express.json());

let movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    description: "Two imprisoned men bond over a number of years."
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    stars: ["Marlon Brando", "Al Pacino", "James Caan"],
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description: "Batman battles the Joker in Gotham City."
  }
];

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movies API',
      version: '1.0.0',
      description: 'API untuk mengelola data Movies',
    },
    servers: [
      {
        url: 'http://localhost:2000',
      },
    ],
  },
  apis: ['./server.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         director:
 *           type: string
 *         stars:
 *           type: array
 *           items:
 *             type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * /api/Movies:
 *   get:
 *     summary: Mengambil semua movie
 *     responses:
 *       200:
 *         description: List semua movie
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
app.get('/api/Movies', (req, res) => {
  res.json(movies);
});

/**
 * @swagger
 * /api/Movies/{id}:
 *   get:
 *     summary: Mengambil movie berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID Movie
 *     responses:
 *       200:
 *         description: Data Movie ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie tidak ditemukan
 */
app.get('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    res.json(movies[id]);
  } else {
    res.status(404).json({ message: "Movie tidak ditemukan" });
  }
});

/**
 * @swagger
 * /api/Movies:
 *   post:
 *     summary: Menambahkan movie baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie berhasil ditambahkan
 */
app.post('/api/Movies', (req, res) => {
  const { title, director, stars, description } = req.body;
  movies.push({ title, director, stars, description });
  res.status(201).json({ message: "Movie berhasil ditambahkan" });
});

/**
 * @swagger
 * /api/Movies/{id}:
 *   delete:
 *     summary: Menghapus movie berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID Movie
 *     responses:
 *       200:
 *         description: Movie berhasil dihapus
 *       404:
 *         description: Movie tidak ditemukan
 */
app.delete('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    movies.splice(id, 1);
    res.json({ message: "Movie berhasil dihapus" });
  } else {
    res.status(404).json({ message: "Movie tidak ditemukan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
  console.log(`Swagger UI tersedia di http://localhost:${port}/api-docs`);
});
