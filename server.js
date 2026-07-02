const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Cloud Computing M1 MIAGE</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; line-height: 1.6;">
      <h1>Cloud Computing M1 MIAGE</h1>
      <h2>Informations de l'environnement PaaS</h2>
      
      <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
        <tr>
          <td><b>Hostname</b></td>
          <td>${process.env.HOSTNAME || 'local'}</td>
        </tr>
        <tr>
          <td><b>Port</b></td>
          <td>${PORT}</td>
        </tr>
        <tr>
          <td><b>Node version</b></td>
          <td>${process.version}</td>
        </tr>
        <tr>
          <td><b>Platform</b></td>
          <td>${process.platform}</td>
        </tr>
        <tr>
          <td><b>Heure serveur</b></td>
          <td>${new Date().toISOString()}</td>
        </tr>
           <tr>
          <td><b>Hawa Kaba et Affou Coulibaly</b></td>
          <td>Hawa Kaba et Affou Coulibaly M1 MIAGE</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px;"><i>Déployé sur Render.com (PaaS)</i></p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
