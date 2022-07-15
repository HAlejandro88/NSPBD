const {Model, DataTypes} = require('sequelize')

const userSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'users',
            modelName: 'User',
            timestamps: true
        }
    }
}



module.exports = {
    User,
    userSchema
};

