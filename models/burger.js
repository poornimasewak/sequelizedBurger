// burger model creates a table and its column 
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
                // validate: {
                //     len: [1]
                // }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        date: {
            type: DataTypes.DATE
        }
        // classMethods: {
        //     associate: function (models) {
        //         burger.belongsTo(models.customer, {
        //             onDelete: "cascade",
        //             foreignKey: {
        //                 allowNull: false
        //             }
        //         });
        //     }
        // }

    });
    return Burger;
};