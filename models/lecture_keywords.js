module.exports = (sequelize, Datatypes) => {
    return sequelize.define("Lecture_Keywords", {
        id: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            unique: true,
            primaryKey: true
        },
		keyword: {
			type: Datatypes.STRING(255),
			allowNull: false
		},
        weight: {
            type: Datatypes.FLOAT,
            allowNull: false
        }
    }, {
        underscored: true,
		timestamps: false
    });
};