'use strict'
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
        },
        createAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updateAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING
        },
    });
    return Lead;
};