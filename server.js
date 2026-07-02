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
     <p style="margin-top: 20px;"><i>
     1. Que s'est-il passé après la tentative de déploiement sur la plateforme PaaS ?
     Réponse : La connexion du dépôt GitHub au PaaS déclenche automatiquement un pipeline CI/CD (Déploiement Continu). La plateforme récupère le code source, installe les dépendances nécessaires (npm install via le package.json) et compile l'application Node.js pour tenter de l'exposer sur une URL publique sécurisée.

     2. Qui gère les mises à jour de sécurité du serveur dans ce modèle ?
     Réponse : C'est la responsabilité exclusive du Cloud Provider. Toute la gestion de l'infrastructure sous-jacente (système d'exploitation, correctifs de sécurité, serveurs web et virtualisation) est totalement masquée pour le développeur, qui a uniquement la charge de sécuriser son propre code applicatif.

     3. Quel serait l'inconvénient du PaaS si votre application avait des besoins système très spécifiques ?
     Réponse : Le PaaS impose un environnement d'exécution très standardisé et rigide. Si notre application exige des configurations OS sur-mesure, des packages Linux spécifiques ou des accès bas niveau au noyau (kernel), le PaaS devient bloquant. Il faudrait alors basculer sur du IaaS (Infrastructure as a Service) pour configurer notre propre machine virtuelle.

     4. Le serveur s'éteint automatiquement après 15 minutes d'inactivité. Quel concept Cloud cela illustre-t-il ?
     Réponse : Cela illustre le concept de Scale-to-Zero (Scalabilité automatique à zéro). Les fournisseurs de Cloud l'utilisent pour optimiser leurs ressources physiques : en l'absence de trafic, l'application est mise en veille pour libérer la mémoire et la puissance de calcul. C'est indispensable pour réduire les coûts opérationnels et l'empreinte énergétique des offres gratuites.</i></p>
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
