const { Model, DataTypes, Sequelize } = require('sequelize');
const {EMPLOYEES_TABLE} = require("./employees.model");
const {PROJECT_TABLE} = require("./projects.model");

// nombre de la base de datos
const EMPLOYEE_PROJECT_TABLE = 'employeeProject';

// Define la estructura de la base datos
const EmployeeProjectSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    /*updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    },*/
    employeeId: {
        field: 'employee_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: EMPLOYEES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    projectId: {
        field: 'project_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PROJECT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }

};

class EmployeeProject extends Model {


    static config(sequelize) {
        return {
            sequelize,
            tableName: EMPLOYEE_PROJECT_TABLE,
            modelName: 'EmployeeProject',
            timestamps: false,
        };
    }
}

module.exports = {
    EMPLOYEE_PROJECT_TABLE,
    EmployeeProjectSchema,
    EmployeeProject,
};
