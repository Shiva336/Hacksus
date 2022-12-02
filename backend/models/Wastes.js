module.exports = (sequelize, DataTypes) => {
    const Wastes = sequelize.define("Wastes", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        distance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        M: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        G: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        P: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
    return Wastes;
};