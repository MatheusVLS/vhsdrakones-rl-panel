const express = require('express');
const fetch = require('node-fetch');
const { createCanvas } = require('canvas');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Painel do Rocket League está funcionando! 🚀');
});

// Endpoint para gerar a imagem dinâmica
app.get('/panel.png', async (req, res) => {
  const canvas = createCanvas(800, 400);
  const ctx = canvas.getContext('2d');

  // Fundo
  ctx.fillStyle = '#202020';
  ctx.fillRect(0, 0, 800, 400);

  // Texto inicial
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px Arial';
  ctx.fillText('VHSDrakones Rocket League Panel', 50, 100);
  ctx.fillText('Rank: (exemplo)', 50, 200);

  res.setHeader('Content-Type', 'image/png');
  canvas.createPNGStream().pipe(res);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
