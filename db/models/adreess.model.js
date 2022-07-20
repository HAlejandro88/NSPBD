const { Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE} = require("./user.model");

const ADDRESS_TABLE = 'address';

const AddressSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
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
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Address extends Model {
    static associate(models) {
        this.belongsTo(models.User, {as: 'user'});
    }



    static config(sequelize) {
        return {
            sequelize,
            tableName: ADDRESS_TABLE,
            modelName: 'Address',
            timestamps: true,
        };
    }
}

module.exports = {
    ADDRESS_TABLE,
    AddressSchema,
    Address,
};