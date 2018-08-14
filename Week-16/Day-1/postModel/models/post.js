module.exports = function (sequelize, DataTypes) {
	var Post = sequelize.define("post", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 160]
			}
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		category: {
			type: DataTypes.STRING,
			defaultValue: "Personal"
		}
	});

	return Post;
};