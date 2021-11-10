-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-11-10 17:21:56
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `apple`
--

-- --------------------------------------------------------

--
-- 表的结构 `scenics`
--

CREATE TABLE `scenics` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` char(40) DEFAULT NULL,
  `imgpath` text,
  `introduce` text,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int(10) DEFAULT NULL COMMENT '库存',
  `pid` int(10) DEFAULT NULL,
  `isshowindex` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `scenics`
--

INSERT INTO `scenics` (`id`, `name`, `imgpath`, `introduce`, `price`, `stock`, `pid`, `isshowindex`) VALUES
(1, 'AirPods', 'https://www.apple.com.cn/v/home/ag/images/promos/airpods/tile_airpods__fuv6vgn42y2q_large.jpg', '全新支持空间音频', '25.50', 10, 11, 11),
(2, 'HomePod mini', 'https://www.apple.com.cn/v/home/ag/images/promos/watch-series-7/tile_lte_avail__eqbz3ui0dz8m_large.jpg', '黄色、橙色和蓝色于12月发售', '45.50', 10, 11, 11),
(3, 'WaATCH', 'https://www.apple.com.cn/v/home/ag/images/promos/homepod-mini/tile_homepod_mini__b73w4z3ljymu_large.jpg', '全屏先手', '250.00', 10, 11, 11),
(4, 'IPad', 'https://www.apple.com.cn/v/home/ag/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_large.jpg', '小写的大', '25.00', 10, 11, 11),
(5, 'iMac', 'https://www.apple.com.cn/v/home/ag/images/promos/imac/promo_imac__crg641tip4q6_large.jpg', '新开篇', '25.00', 10, 11, 11),
(6, 'AirTag', 'https://www.apple.com.cn/v/home/ag/images/promos/airtag/promo_airtag__e6b73a64nno2_large.jpg', '丢三落四这门绝技，要失传了', '251.00', 10, 11, 11),
(7, 'Mac', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-mac-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1632870674000', '', '255.00', 10, 12, 12),
(8, 'iPhone', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202109?wid=200&hei=130&fmt=png-alpha&.v=1630706116000', '', '25.00', 10, 12, 12),
(9, 'iPad', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000', '', '25.00', 10, 12, 12),
(10, 'Apple Watch', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1631823475000', '', '25.00', 10, 12, 12),
(11, 'AirPods', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000', '', '50.00', 10, 12, 12),
(12, 'AirTag', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000', '', '25.00', 10, 12, 12),
(13, 'HomePod mini', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633355783000', '', '25.00', 10, 12, 12),
(14, '配件', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202109?wid=200&hei=130&fmt=png-alpha&.v=1629942986000', '', '80.00', 10, 12, 12),
(15, 'iPad mini', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipadmini-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1629943258000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-space-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1631308881000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-silver-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1631308880000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=450&hei=523&fmt=jpeg&qlt=95&.v=1630973863000', '小写的大+++RMB 3799 起', '3799.00', 10, 13, 13),
(16, 'Apple Watch Swries 7', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-s7-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1632948243000\r\n+++https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML7P3_VW_34FR+watch-41-alum-green-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1629920380000,1631661141000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML7P3_VW_PF+watch-41-alum-green-nc-7s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1629920392000,1631661146000\r\n+++https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML7M3_VW_34FR+watch-41-alum-green-nc-7s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=1629920386000,1631661143000', '全屏先手+++RMB 2999起', '2999.00', 10, 13, 13),
(17, 'iPad', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-202109_GEO_CN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630879997000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840743000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-pink-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840714000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840745000', '事事拿手,轻松入手+++RMB 2499 起', '2499.00', 10, 13, 13),
(18, 'iPhone13 Pro', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-pro-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630355102000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652954000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1631652954000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652957000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1631652954000', '强的很+++RMB 7999起，还可折抵换购', '7999.00', 10, 13, 13),
(19, 'HomePod mini', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-homepodmini-202110?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1633355785000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/homepod-mini-select-spacegray-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086020000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/homepod-mini-select-yellow-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086026000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/homepod-mini-select-orange-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086020000', '给你点颜色听听+++仅需RMB749', '749.00', 10, 13, 13),
(20, 'AirPods(第三代)', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpodsmagsafe-202110?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1633355782000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861333000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861338000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73_AV4_GEO_CN?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1634583884000', '美妙新声+++RMB 1399', '1399.00', 10, 13, 13),
(21, 'Apple music', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-applemusic-202110?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1633644705000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4Y3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1621538208000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4X3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1621876626000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1621538312000', '免费试听7个月+++在各种设备上畅听', '5199.00', 10, 13, 13),
(22, '14英寸和16英寸 MacBook Pro', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-mac-202110_GEO_CN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1634174476000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_CN?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948910000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202110_GEO_CN?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633657329000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-macbook-air-silver-m1-202010?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1634145618000', '强者的强+++RMB 14,999 起', '14999.00', 10, 13, 13),
(24, 'AirPods(第二代)', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV7N2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1551489688005', 'RMB 999', '1999.00', 10, 14, 14),
(104, 'AirPods', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000', 'RMB 1,999', '1999.00', 10, 14, 14),
(23, '配件', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-allaccessories-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630278182000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MM6J3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1630095972000\r\n+++https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJWY3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1625613219000\r\n+++\r\nhttps://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML5L3ref?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1630101031000', '探索所有配件+++给你所想', '299.00', 10, 13, 13),
(105, 'AirPods Max - 银色', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000', 'RMB 4,399', '1999.00', 10, 14, 14),
(106, '适用于 AirPods 的无线充电盒', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MR8U2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1551489679538', 'RMB 661', '1999.00', 10, 14, 14),
(107, '20W USB-C 电源适配器', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU7U2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1542406756506', 'RMB 149', '1999.00', 10, 14, 14),
(108, 'MagSafe', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MHXH3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1603835871000', 'RMB 329', '1999.00', 10, 14, 14),
(109, '抛光布', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MM6F3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632956535000', 'RMB 145', '1999.00', 10, 14, 14),
(110, 'MagSafe 外接电池', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJWY3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1625613219000', 'RMB 749', '1999.00', 10, 14, 14),
(111, 'Beats Studio Buds - 真无线降噪耳机', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1621538312000', 'RMB 1,099', '1999.00', 10, 14, 14),
(112, '采用闪电接头的 EarPods', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMTN2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1473703488187', 'RMB 149', '1999.00', 10, 14, 14),
(113, 'Apple Pencil(第二代)', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMTN2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1473703488187', 'RMB 969', '1999.00', 10, 14, 14),
(114, 'Air Tag', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1617761671000', 'RMB 229', '1999.00', 10, 14, 14);

-- --------------------------------------------------------

--
-- 表的结构 `server`
--

CREATE TABLE `server` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户邮箱',
  `surname` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '姓',
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '名字',
  `data` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '注册时间',
  `pas` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `phnum` varchar(11) COLLATE utf8_unicode_ci NOT NULL COMMENT '电话号码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `server`
--

INSERT INTO `server` (`id`, `email`, `surname`, `username`, `data`, `pas`, `phnum`) VALUES
(1, '2665328537@qq.com', '胖', '大海', '', 'zuobian110', '13879702291'),
(3, '946876722@qq.com', '黄', '火', '2000年12月12', 'huang123', '13702896062'),
(4, '266532837@qq.com', 'afdsg', 'asga', 'afs', '123456a', '13879702231'),
(5, '2198523149@qq.com', '朱', '慧平', '2001年09月21日', 'zhu123456', '17346642083');

--
-- 转储表的索引
--

--
-- 表的索引 `scenics`
--
ALTER TABLE `scenics`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `scenics`
--
ALTER TABLE `scenics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- 使用表AUTO_INCREMENT `server`
--
ALTER TABLE `server`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
