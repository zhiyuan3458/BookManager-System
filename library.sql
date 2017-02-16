/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : library

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2017-02-16 09:24:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) NOT NULL,
  `publicer` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `book_num` int(11) NOT NULL,
  `book_pic` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', '商业模式全史', '哈哈', '吕智源', '5', '商业模式全史.jpg', '经济');
INSERT INTO `book` VALUES ('2', '经济投资学', '嘻嘻', '汁源', '3', '商业模式全史.jpg', '经济');
INSERT INTO `book` VALUES ('3', '康德思想哲学', '滴滴', '志远', '8', '商业模式全史.jpg', '哲学');
INSERT INTO `book` VALUES ('4', '儒家思想深究', '卡卡', '小圆', '2', '商业模式全史.jpg', '哲学');
INSERT INTO `book` VALUES ('5', '数学思想', '咯叽哇', '小志', '1', '商业模式全史.jpg', '理工');
INSERT INTO `book` VALUES ('6', '物理科学世界', '搜搜', '林金汉', '6', '商业模式全史.jpg', '理工');
INSERT INTO `book` VALUES ('7', '文学家的思维奥秘', '灰常', '黄盛辉', '5', '商业模式全史.jpg', '文学');
INSERT INTO `book` VALUES ('8', '朝花夕拾', '哈尔滨', '鲁迅', '2', '商业模式全史.jpg', '文学');
INSERT INTO `book` VALUES ('9', '巴金散文', '北京大学', '巴金', '1', '商业模式全史.jpg', '文学');
INSERT INTO `book` VALUES ('10', '儒家学问研究', '复旦大学', '张天旭', '1', '商业模式全史.jpg', '哲学');

-- ----------------------------
-- Table structure for bookdetail
-- ----------------------------
DROP TABLE IF EXISTS `bookdetail`;
CREATE TABLE `bookdetail` (
  `book_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) DEFAULT NULL,
  `bookNo` bigint(20) NOT NULL,
  `isInLibrary` tinyint(2) NOT NULL,
  PRIMARY KEY (`book_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bookdetail
-- ----------------------------
INSERT INTO `bookdetail` VALUES ('1', '商业模式全史', '1111', '1');
INSERT INTO `bookdetail` VALUES ('2', '商业模式全史', '1112', '0');
INSERT INTO `bookdetail` VALUES ('3', '商业模式全史', '1113', '1');
INSERT INTO `bookdetail` VALUES ('4', '商业模式全史', '1114', '0');
INSERT INTO `bookdetail` VALUES ('5', '商业模式全史', '1115', '0');
INSERT INTO `bookdetail` VALUES ('6', '经济投资学', '1211', '0');
INSERT INTO `bookdetail` VALUES ('7', '经济投资学', '1212', '0');
INSERT INTO `bookdetail` VALUES ('8', '经济投资学', '1213', '0');
INSERT INTO `bookdetail` VALUES ('9', '康德思想哲学', '1311', '1');
INSERT INTO `bookdetail` VALUES ('10', '康德思想哲学', '1312', '0');
INSERT INTO `bookdetail` VALUES ('11', '康德思想哲学', '1313', '0');
INSERT INTO `bookdetail` VALUES ('12', '康德思想哲学', '1314', '0');
INSERT INTO `bookdetail` VALUES ('13', '康德思想哲学', '1315', '0');
INSERT INTO `bookdetail` VALUES ('14', '康德思想哲学', '1316', '0');
INSERT INTO `bookdetail` VALUES ('15', '康德思想哲学', '1317', '0');
INSERT INTO `bookdetail` VALUES ('16', '康德思想哲学', '1318', '0');
INSERT INTO `bookdetail` VALUES ('17', '儒家思想深究', '1319', '0');
INSERT INTO `bookdetail` VALUES ('18', '儒家思想深究', '1320', '1');
INSERT INTO `bookdetail` VALUES ('19', '数学思想', '1411', '1');
INSERT INTO `bookdetail` VALUES ('20', '物理科学世界', '1412', '0');
INSERT INTO `bookdetail` VALUES ('21', '物理科学世界', '1413', '0');
INSERT INTO `bookdetail` VALUES ('22', '物理科学世界', '1414', '0');
INSERT INTO `bookdetail` VALUES ('23', '物理科学世界', '1415', '0');
INSERT INTO `bookdetail` VALUES ('24', '物理科学世界', '1416', '0');
INSERT INTO `bookdetail` VALUES ('25', '物理科学世界', '1417', '0');
INSERT INTO `bookdetail` VALUES ('26', '文学家的思想奥秘', '1511', '0');
INSERT INTO `bookdetail` VALUES ('27', '文学家的思想奥秘', '1512', '0');
INSERT INTO `bookdetail` VALUES ('28', '文学家的思想奥秘', '1513', '0');
INSERT INTO `bookdetail` VALUES ('29', '文学家的思想奥秘', '1514', '0');
INSERT INTO `bookdetail` VALUES ('30', '文学家的思想奥秘', '1515', '0');
INSERT INTO `bookdetail` VALUES ('31', '朝花夕拾', '1516', '0');
INSERT INTO `bookdetail` VALUES ('32', '朝花夕拾', '1517', '0');
INSERT INTO `bookdetail` VALUES ('33', '巴金散文', '1518', '0');
INSERT INTO `bookdetail` VALUES ('34', '儒家学问研究', '1321', '1');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(11) NOT NULL,
  `book_name` varchar(60) NOT NULL,
  `book_no` bigint(20) NOT NULL,
  `now_date` date NOT NULL,
  `return_date` date NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  `book_count` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '20133100107', '12345678', '0');
INSERT INTO `users` VALUES ('13', '20133100105', '12345678', '0');
INSERT INTO `users` VALUES ('14', '20133100104', '12345678', '0');
INSERT INTO `users` VALUES ('16', '20133100108', '12345678', '0');
INSERT INTO `users` VALUES ('18', '20133100101', '12345678', '0');
