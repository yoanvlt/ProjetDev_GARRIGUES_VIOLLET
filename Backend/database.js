const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Melanie13170!',
      database: 'projetuf'
    });
    await connection.end();
    return 'Oui, la connexion avec la base de données est établie.';
  } catch (error) {
    return 'Non, la connexion à la base de données a échoué: ' + error.message;
  }
}

module.exports = { testConnection };
