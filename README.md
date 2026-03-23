# 📚 API REST - Cursos e Livros de Programação

**Aluno:** Lucas  
**R.A:** 251072046  
**Curso:** Engenharia de Software - Centro Universitário Filadélfia (UniFil)  

## 🚀 Sobre o Projeto
Esta é uma API RESTful desenvolvida em Node.js com Express para gerenciar um catálogo de livros e cursos de programação, cumprindo os requisitos exigidos da disciplina.

## 📌 Endpoints Documentados

### 1. Listar todas as obras
- **Método:** `GET`
- **URL:** `http://localhost:3000/api/obras`
- **Body:** Vazio
- **Resposta de Sucesso (200 OK):** Retorna um array com todas as obras cadastradas.
```json
[
  {
    "id": 1,
    "titulo": "Java Completo",
    "tipo": "Curso",
    "capitulos": 150,
    "status": "Em andamento",
    "criadoEm": "2026-03-23T10:00:00.000Z"
  }
]