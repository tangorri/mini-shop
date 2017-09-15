/*
    Fichier modèle :
    regroupe toutes les requetes nécessaires pour stagiaire
*/
const db = require('../db/db');



const getStagiaireDetails = (id) => {

    return db.query('select * from stagiaire where id = ?', [id]);

}

const getListeStagiaires = () => {
    return db.query('SELECT * FROM stagiaire');
}

const postNewStagiaire = (newStagiaire) => {

    const params = [ // on construit le tableau de parametres nécessaire au formatage de la requete
        newStagiaire.nom,
        newStagiaire.prenom,
        newStagiaire.age,
        newStagiaire.sexe
    ];
    const sql = `INSERT INTO stagiaire (nom, prenom, age, sexe) VALUES (?,?,?,?)`; // préparation de la requete
    return db.query(sql, params).then(
        function success(result) {
            console.log('result');
            // Si ok retourner l'objet complet (avec champs ID généré)
            const stagiaireId = result.insertId;
            return getStagiaireDetails(stagiaireId);
        }
    );
}

const majStagiaire = (params, id) => { // méthode qui met à jour un stagiaire dans la base et prends en entree tous les parametres nécessaires
    const sql = `update stagiaire set nom= ?, prenom=?, age=?, sexe=? where id=?`; // on prépare la requete 
    return db.query(sql, [params.nom, params.prenom, params.age, params.sexe, id]).then( // on renvoie le resultat de la requete en passant en parametre la chaine (requete) et les parametres necessaires au formatage de la requete 
        succes = (result) => { // si la mise a jour en base s'est bien faite
            return getStagiaireDetails(id); // on retourne l'entree modifiée dans la base en faisant appel à la méthode getStagiaireDetail en fonction de l'id
        }
    );
}

const delStagiaire = (id) => { // méthode qui supprime un stagiaire dans la base en fonction d'un id
    return db.query('delete from stagiaire where id=?', [id]); // on supprime un stagiaire dans la base en fonction d'un id
}

// on exporte les méthodes
const stagiaireModel = {
    list: getListeStagiaires, // liste tous les stagiaires 
    retrieve: getStagiaireDetails, // retourne un seul stagiaire ( id nécessaire en entree)
    create: postNewStagiaire, // ajoute un nouveau stagiaire 
    update: majStagiaire, // met à jour un stagiaire en fonction de parametres
    delete: delStagiaire // supprime un stagiaire
}

module.exports = stagiaireModel;