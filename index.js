// index.js
const express = require('express');
const app = express();
app.use(express.json());

let obras = [];
let idCounter = 1;

// GET: Listar todos os endpoints
app.get('/api/obras', (req, res) => {
    res.status(200).json(obras);
});

// POST: Criar novo recurso com validações COMPLETAS
app.post('/api/obras', (req, res) => {
    const { titulo, tipo, capitulos, status } = req.body;

    // Validação 1: Presença e tipo das strings
    if (!titulo || typeof titulo !== 'string') {
        return res.status(400).json({ erro: 'O campo "titulo" é obrigatório e deve ser texto.' });
    }
    
    // Validação 2: Enum restrito
    if (!tipo || (tipo !== 'Livro' && tipo !== 'Curso')) {
        return res.status(400).json({ erro: 'O campo "tipo" deve ser exatamente "Mangá" ou "Anime".' });
    }
    
    // Validação 3: Regra de negócio (números inteiros e positivos)
    if (capitulos === undefined || typeof capitulos !== 'number' || capitulos <= 0) {
        return res.status(422).json({ erro: 'O campo "capitulos" deve ser um número maior que zero.' });
    }
    
    // Validação 4: Campo obrigatório
    if (!status || typeof status !== 'string') {
        return res.status(400).json({ erro: 'O campo "status" é obrigatório (ex: "Em andamento", "Finalizado").' });
    }

    const novaObra = {
        id: idCounter++,
        titulo,
        tipo,
        capitulos,
        status,
        criadoEm: new Date().toISOString()
    };

    obras.push(novaObra);
    res.status(201).json(novaObra);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 API rodando em http://localhost:${PORT}`);
}); 