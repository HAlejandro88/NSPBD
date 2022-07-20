const { Model, DataTypes, Sequelize } = require('sequelize');

// nombre de la base de datos
const PROJECT_TABLE = 'projects';

// Define la estructura de la base datos
const ProjectSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    },
};

class Project extends Model {


    static config(sequelize) {
        return {
            sequelize,
            tableName: PROJECT_TABLE,
            modelName: 'Project',
            timestamps: true,
        };
    }
}

module.exports = {
    PROJECT_TABLE,
    ProjectSchema,
    Project,
};
