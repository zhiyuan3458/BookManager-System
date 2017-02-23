/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : library

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2017-02-23 00:04:11
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
  `jianjie` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', '商业模式全史', '哈哈', '吕智源', '5', '商业模式全史.jpg', '经济', '<p>本书的书名蕴含了两层含义：一是关于商业术语及经营战略术语的历史；二是商业模式变革的历史。</p>\r\n<p>商业术语发展至今可谓一路坎坷，甚至随着网络泡沫的崩溃，人们都认为“商业模式”这类术语也会像其他经营流行语一样最终因过时而惨遭淘汰。不过，“商业模式”竟奇迹般地存活了下来。而关于商业模式变革的历史又远比商业术语的历史范围更大、内容更深。</p>\r\n<p>迄今为止，商业模式似乎很好地解释了创新的实现和商业的持续竞争优势这两大课题，在我们拍手称赞的同时，也不要忘记，我们面临的最终挑战：那就是如何运用商业模式来成功解决这些问题。</p>\r\n<p>本书共涉及70个商业模式、200家公司、140位改革先驱和商业领袖，读者可以从中细细品读，去挖掘商业模式作为改革创新源泉的真正意义所在。</p>');
INSERT INTO `book` VALUES ('2', '经济投资学', '嘻嘻', '汁源', '3', '商业模式全史.jpg', '经济', '<p class=\"text-left\">本书在上一版的基础上，根据近几年来投资经济学领域新的发展变化进行了修订。全书首先对投资的概念和投资理论进行了分析，然后分析了投资的基本要素，最后，从宏观的角度分析了投资的宏观调控问题。本次修订主要集中在以下几个方面：</p>\r\n<p class=\"text-left\">一是对部分章节进行了重新调整，各章内部的结构也进行了必要的修改，使之更科学、合理。</p>\r\n<p class=\"text-left\">二是在体例形式上做了一些调整。各章新增了“学习目标”以突出各章节的学习重点，一些补充知识和内容则以“专栏”形式出现。</p>\r\n<p class=\"text-left\">三是删除了一些过时的内容，增加了有关该领域*发展变化的内容。对涉及法律法规、政策文件等变化的内容以及数据等进行了更新。</p>\r\n<p class=\"text-left\">本书适合于高等院校经济、管理学科本科生的教材或教学参考书，也可供从事相关行业的经济管理人员阅读和参考。</p>');
INSERT INTO `book` VALUES ('3', '康德思想哲学', '滴滴', '志远', '8', '商业模式全史.jpg', '哲学', '<p> 一种知识不论以何种方式和通过什么手段与对象发生关系，它借以和对象发生直接关系、并且一切思维作为手段以之为目的的，还是直观。但直观只是在对象被给予我们时才发生；而这种事至少对我们人类来说又只是由于对象以某种方式刺激内心才是可能的。通过我们被对象所刺激的方式来获得表象的这种能力（接受能力），就叫作感性。所以，借助于感性，对象被给予我们，且只有感性才给我们提供出直观；但这些直观通过知性而被思维，而从知性产生出概念。但一切思维必须无论是直截了当地（直接地）还是转弯抹角地（间接地）借助于某些标志最终与直观、因而对我们人类来说与感性发生关系，因为以别的方式不可能有任何对象给予我们。</p>\r\n<p>当我们被一个对象所刺激时，它在表象能力上所产生的结果就是感觉。那种经过感觉与对象相关的直观就叫作经验性的直观。一个经验性的直观的未被规定的对象叫作现象。</p>');
INSERT INTO `book` VALUES ('4', '儒家思想深究', '卡卡', '小圆', '2', '商业模式全史.jpg', '哲学', '<p> 《传习录》：《传习录》全书分为上、中下三卷，上卷经王阳明本人审阅，中卷里的书信出自王阳明亲笔，是他晚年的著述，下卷虽未经本人审阅，但较为具体地解说了他晚年的思想，并记载了王阳明提出的“四句教”。王阳明是我国明代最著名的思想家、哲学家和军事家，精通儒、释、道三教，是中国历史上罕见的全能大儒，被后世称为“立德、立功、立言”三不朽的“完人”。</p>\r\n<p>　《易经》：《易经》被尊为“六经之首”，尊享着无比崇高的地位。而在道家经典中，《易经》也享有与其在儒家经典中相同的地位，被道家奉为“三玄之冠”。真正算得上是“群经之首，大道之源”。</p>');
INSERT INTO `book` VALUES ('5', '数学思想', '咯叽哇', '小志', '1', '商业模式全史.jpg', '理工', '<p> 《古今数学思想》是数学史的经典名著，初版以来其影响力一直长盛不衰。著作可谓博大精深，洋洋百万余言，阐述了从古代直到20世纪头几十年中的数学创造和发展，特别着重于主流数学的工作。大量第一手资料的旁征博引，非常全面地提及各个历史时期的数学家特别是著名数学家的贡献，是全书的一大特色。本书所关心的还有：对数学本身的看法，不同时期中这种看法的改变，以及数学家对于他们自己成就的理解。本书体现了作者的深厚功力。</p>');
INSERT INTO `book` VALUES ('6', '物理科学世界', '搜搜', '林金汉', '6', '商业模式全史.jpg', '理工', '<p> 这本充满创意的物理科普图画书，它让物理世界里看似互相没有联系的事物产生了奇妙的关联。聪明又酷爱冒险的男孩列奥和调皮可爱的帕拉斯猫，带我们穿越到一个奇趣物理世界。它以生动有趣的方式描绘了物理的四大学科板块——材料、机械、结构和建筑、能量和运动，展现了人类物理发明改变世界的历程：从原始的河流运输到当今集装箱输送装置，从罗马人建造第一条公路到现代的高速公路，数百种科学现象背后的原理悉数囊括、一一呈现。</p>');
INSERT INTO `book` VALUES ('7', '文学家的思维奥秘', '灰常', '黄盛辉', '5', '商业模式全史.jpg', '文学', '<p>天文学是我国古代最发达的自然科学之一，在华夏科学、文化史中是一个具有连贯性的组成部分。在《中国天文学史大系》（以下简称《大系》）的全套书结构中，《中国古代历法》、《中国古代天体测量学及天文仪器》、《中国古代星占学》、《中国古代天象记录的研究与应用》、《中国古代天文学思想》、《中国古代天文机构与天文教育》、《中国古代天文学家》各立一卷，以概全面。完成这样的一部《大系》，可谓是从一个重要的侧面来认识华夏文化的源与流。</p>\r\n<p>近世100多年，华夏文化受西方文化的冲撞，激湍跌宕，对传统文化的理解和传承出现前所未有的震动，至今波澜未已。其间在天文学上体现为结束古代传统、“转轨\"西化、进入近现代的航道。《大系》中所设的《中国古代天文学的转轨与近代天文学》一卷，阐述了这一时期的历史。</p>\r\n<p>全套书中用《中国少数民族天文学史》一卷介绍了对同属华夏文化的发掘和整理，是一项开辟性的探索。另一卷《中国古代天文学词典》篇幅达47万字，对天文典籍阅读者是十分有用的工具，也是好伴侣。《大系》共10卷，每卷40万到80万字。</p>');
INSERT INTO `book` VALUES ('8', '朝花夕拾', '哈尔滨', '鲁迅', '2', '商业模式全史.jpg', '文学', '<p>鲁迅（1881—1936），原名周树人，字豫才，浙江绍兴人。文学家、思想家、革命家。鲁迅堪称现代中国的民族魂，他的作品影响了一代又一代的知识分子。其主要代表作有：小说集《呐喊》、《彷徨》《故事新编》；散文集《朝花夕拾》；散文诗集《野草》；杂文集《热风》、《华盖集》、《华盖集续编》、《南腔北调集》、《三闲集》、《二心集》、《而已集》、《坟》等。</p>');
INSERT INTO `book` VALUES ('9', '巴金散文', '北京大学', '巴金', '1', '商业模式全史.jpg', '文学', '<p>这本《巴金散文精选(名家散文经典)》收录了巴 金的散文作品。《巴金散文精选(名家散文经典)》收录了《大黄 狗》；《鸟的天堂》；《机器的诗》；《广州在轰炸 中》；《我的故事》；《桂林的微雨》；《从镰仓带 回的照片》；《我的心》；《我的呼号》；《我的梦 》；《呓语》；《生命》；《沉落》；《木乃伊》； 《海的梦》；《繁星》等作品。</p>');
INSERT INTO `book` VALUES ('10', '儒家学问研究', '复旦大学', '张天旭', '1', '商业模式全史.jpg', '哲学', '<p>在梁启超所著的《梁启超论儒家哲学》里，梁启超先生对儒家哲学做了详细的解读，儒家哲学的代表人物孔子的理论和人生发展也进行了论述。另对两位儒学大家王阳明和戴东原的哲学思想做了重点的剖析。本书是梁启超先生的晚年力作。</p>');

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
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `collection_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  PRIMARY KEY (`collection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('61', '20133100107', '数学思想');
INSERT INTO `collection` VALUES ('63', '20133100107', '经济投资学');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `password` varchar(255) NOT NULL,
  `book_count` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('13', '20133100105', '25d55ad283aa400af464c76d713c07ad', '0');
INSERT INTO `users` VALUES ('14', '20133100104', '25d55ad283aa400af464c76d713c07ad', '0');
INSERT INTO `users` VALUES ('16', '20133100108', '25d55ad283aa400af464c76d713c07ad', '0');
INSERT INTO `users` VALUES ('18', '20133100101', '25d55ad283aa400af464c76d713c07ad', '0');
INSERT INTO `users` VALUES ('21', '20133100005', '25d55ad283aa400af464c76d713c07ad', '0');
INSERT INTO `users` VALUES ('22', '20133100107', '25d55ad283aa400af464c76d713c07ad', '0');
