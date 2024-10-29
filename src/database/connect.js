const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projetonode.2h3jt.mongodb.net/meubanco?retryWrites=true&w=majority&appName=projetoNode`);
        console.log("Conexão ao banco de dados realizada com sucesso!");
    } catch (error) {
        console.log("Ocorreu um erro ao tentar se conectar ao banco de dados!", error);
    }
};

module.exports = connectToDatabase;