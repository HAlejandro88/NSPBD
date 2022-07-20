const { Model, DataTypes, Sequelize } = require('sequelize');

// nombre de la base de datos
const EMPLOYEES_TABLE = 'employee';

// Define la estructura de la base datos
const EmployeesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    area: {
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

class Employee extends Model {

    static assocciate(models) {
        this.belongsToMany(models.Project, {
            as: 'projects',
            through: models.EmployeeProject,
            foreignKey: 'employeeId',
            otherKey: 'projectId'
        });

    }


    static config(sequelize) {
        return {
            sequelize,
            tableName: EMPLOYEES_TABLE,
            modelName: 'Employee',
            timestamps: true,
        };
    }
}

module.exports = {
    EMPLOYEES_TABLE,
    EmployeesSchema,
    Employee,
};
