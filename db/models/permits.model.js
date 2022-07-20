const { Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE} = require("./user.model");

const PERMITS_TABLE = 'permits';

const PermitsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    read: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    write: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    dashboard: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    comments: {
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
    userId: {
        field: 'userId_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

};

class Permits extends Model {

    static assocciate(models) {
        this.belongsTo(models.User,{
            as: 'user'
        })
    }


    static config(sequelize) {
        return {
            sequelize,
            tableName: PERMITS_TABLE,
            modelName: 'Permits',
            timestamps: true,
        };
    }
}

module.exports = {
    PermitsSchema,
    PERMITS_TABLE,
    Permits
};
