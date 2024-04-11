const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001; 

app.use(express.json());


app.get('/api/data', async (req, res) => {
  try {
    
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1');
    if (!response.ok) {
      throw new Error('Erro ao recuperar dados da API externa');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao recuperar dados da API externa:', error);
    res.status(500).json({ error: 'Erro ao recuperar dados da API externa' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor intermediário rodando na porta ${PORT}`);
});