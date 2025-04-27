import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 2000;

app.use(express.json());

let mahasiswa = [
    { nama: "Rifki Taufikurrohman", nim: "2311104033" },
    { nama: "Salman Alfarisi", nim: "2311104036" },
    { nama: "Fajar Budiawan", nim: "2311104037" }
];

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Mahasiswa',
            version: '1.0.0',
            description: 'API untuk mengelola data mahasiswa',
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
 *     Mahasiswa:
 *       type: object
 *       properties:
 *         nama:
 *           type: string
 *           description: Nama mahasiswa
 *         nim:
 *           type: string
 *           description: NIM mahasiswa
 */

/**
 * @swagger
 * /api/mahasiswa:
 *   get:
 *     summary: Mengambil semua data mahasiswa
 *     responses:
 *       200:
 *         description: List semua mahasiswa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mahasiswa'
 */
app.get('/api/mahasiswa', (req, res) => {
    res.json(mahasiswa);
});

/**
 * @swagger
 * /api/mahasiswa/{index}:
 *   get:
 *     summary: Mengambil data mahasiswa berdasarkan index
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: integer
 *         description: Index mahasiswa dalam array
 *     responses:
 *       200:
 *         description: Data mahasiswa yang ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mahasiswa'
 *       404:
 *         description: Mahasiswa tidak ditemukan
 */
app.get('/api/mahasiswa/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < mahasiswa.length) {
        res.json(mahasiswa[index]);
    } else {
        res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    }
});

/**
 * @swagger
 * /api/mahasiswa:
 *   post:
 *     summary: Menambahkan mahasiswa baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mahasiswa'
 *     responses:
 *       201:
 *         description: Mahasiswa berhasil ditambahkan
 */
app.post('/api/mahasiswa', (req, res) => {
    const { nama, nim } = req.body;
    mahasiswa.push({ nama, nim });
    res.status(201).json({ message: "Mahasiswa berhasil ditambahkan" });
});

/**
 * @swagger
 * /api/mahasiswa/{index}:
 *   delete:
 *     summary: Menghapus mahasiswa berdasarkan index
 *     parameters:
 *       - in: path
 *         name: index
 *         required: true
 *         schema:
 *           type: integer
 *         description: Index mahasiswa yang ingin dihapus
 *     responses:
 *       200:
 *         description: Mahasiswa berhasil dihapus
 *       404:
 *         description: Mahasiswa tidak ditemukan
 */
app.delete('/api/mahasiswa/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < mahasiswa.length) {
        mahasiswa.splice(index, 1);
        res.json({ message: "Mahasiswa berhasil dihapus" });
    } else {
        res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Swagger UI tersedia di http://localhost:${port}/api-docs`);
});
