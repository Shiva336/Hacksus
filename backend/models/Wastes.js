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
        m: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        g: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        p: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });
    return Wastes;
};