module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        age: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        timestamps: true
    })

    return User
}