'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.channelId = this.belongsTo(models.Channel, {foreignKey: 'channel_id'});
    }
  }
  Video.init(
    {
      // id: DataTypes.DataTypes.INTEGER,
      title: DataTypes.STRING,
      channelId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'channel',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Video',
      //freezeTableName: true,
    }
  );
  return Video;
};
