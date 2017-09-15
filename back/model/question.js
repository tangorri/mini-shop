const db = require('../db/db');

const getQuestionDetails = (id) => {
    return db.query('select * from question where id = ?', [id]);
}

const getQuestionsList = () => {
    return db.query('SELECT * FROM question');
}

const postNewQuestion = (newQuestion) => {
    const params = [
        newQuestion.intitule,
        newQuestion.reponse,
    ];
    const sql = `INSERT INTO question (intitule, reponse) VALUES (?,?)`;
    return db.query(sql, params).then(
        function success(result) {
            console.log('result');
            const questionId = result.insertId;
            return getQuestionDetails(questionId);
        });
}

const majQuestion = (params, id) => {
    const sql = `update question set intitule= ?, reponse=? where id=?`;
    return db.query(sql, [params.intitule, params.reponse, id]).then( 
        succes = (result) => {
            return getQuestionDetails(id);
        }
    );
}
const delQuestion = (id) => {
    return db.query('delete from question where id=?', [id]);
}

const questionModel = {
    list: getQuestionsList,
    create: postNewQuestion,
    retrieve: getQuestionDetails,
    update: majQuestion,
    delete: delQuestion
}

module.exports = questionModel;