# 📌 Objectif - Application React

Dans ce projet, nous allons consommer une API publique (`jsonplaceholder`) pour obtenir et afficher une liste d’utilisateurs. Ce point de contrôle permet de pratiquer l’utilisation de **React Hooks** (`useState`, `useEffect`) et de la librairie **axios** pour les requêtes HTTP.

---

## 👤 Auteur
- **Nom :** Med Karim Slouma  
- **GitHub :** [mokas2017](https://github.com/mokas2017/cp-api1.git)

---

## 🚀 Instructions

1. **Créer le projet React**
   ```bash
   npx create-react-app objectif
   cd objectif
- Installer axios
npm install axios
- Créer le composant UserList.js dans le dossier src
- Ce composant va :
- Utiliser axios pour récupérer les données depuis l’API.
- Stocker les données dans un état listOfUser grâce à useState.
- Utiliser useEffect pour lancer la requête au montage du composant.
- Mapper listOfUser pour afficher la liste des utilisateurs.
📂 Structure du projetobjectif/
 ├── src/
 │    ├── App.js
 │    ├── UserList.js
 │    ├── index.js
 │    └── ...
 ├── package.json
 └── README.md
🧑‍💻 Exemple de code : UserList.jsimport React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
🎨 Personnalisation- Tu peux styliser la liste avec CSS ou Bootstrap.
- Ajouter plus d’informations (adresse, téléphone, site web).
- Créer des cartes utilisateurs au lieu d’une simple liste.
▶️ Lancer l’applicationnpm start
L’application sera disponible sur http://localhost:3000.
