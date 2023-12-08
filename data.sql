-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: dtech
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authorization`
--

DROP TABLE IF EXISTS `authorization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authorization` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) DEFAULT NULL,
  `indentifynumber` varchar(45) DEFAULT NULL,
  `dateOfBirth` varchar(45) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `placeofresidence` varchar(255) DEFAULT NULL,
  `dateSignup` varchar(45) DEFAULT NULL,
  `frontImage` varchar(255) DEFAULT NULL,
  `backImage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `indentifynumber_UNIQUE` (`indentifynumber`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authorization`
--

LOCK TABLES `authorization` WRITE;
/*!40000 ALTER TABLE `authorization` DISABLE KEYS */;
INSERT INTO `authorization` VALUES (17,'NGUYỄN XUÂN ĐỨC','038201003584','29/11/2001','Nam','Thiệu Trung, Thiệu Hóa, Thanh Hóa','13/06/2021','images\\1701157374985_cccd.jpg','images\\1701157374562_matsau.jpg');
/*!40000 ALTER TABLE `authorization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(45) DEFAULT NULL,
  `slug` varchar(45) DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'iPhone','iphone','2023-10-29 18:53:26','2023-10-29 18:53:26'),(2,'iPad','ipad','2023-10-30 01:07:50','2023-10-30 01:07:50'),(3,'Mac','mac','2023-10-30 01:08:09','2023-10-30 01:08:09'),(4,'Watch','watch','2023-10-30 01:08:28','2023-10-30 01:08:28'),(5,'Âm thanh','am-thanh','2023-10-30 01:08:45','2023-10-30 01:08:45'),(6,'Phụ kiện','phu-kien','2023-10-30 01:08:56','2023-10-30 01:08:56');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageproduct`
--

DROP TABLE IF EXISTS `imageproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imageproduct` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproduct`
--

LOCK TABLES `imageproduct` WRITE;
/*!40000 ALTER TABLE `imageproduct` DISABLE KEYS */;
INSERT INTO `imageproduct` VALUES (5,7,'1701336384401_0008735_iphone-14-pro-128gb_550.png','Purple'),(6,7,'1701336785904_0008736_iphone-14-pro-128gb_550.webp','Purple'),(7,7,'1701336785938_0008740_iphone-14-pro-128gb_550.webp','Purple'),(8,7,'1701336785919_0008741_iphone-14-pro-128gb_550.webp','Purple'),(9,7,'1701336785908_0008737_iphone-14-pro-128gb_550.webp','Purple'),(10,7,'1701336785923_0008742_iphone-14-pro-128gb_550.webp','Purple'),(11,7,'1701336785912_0008738_iphone-14-pro-128gb_550.webp','Purple'),(12,7,'1701336785946_0008743_iphone-14-pro-128gb_550.webp','Purple'),(13,7,'1701336785950_0018664_deep-purple_550.jpeg','Purple'),(14,7,'1701336785926_0008739_iphone-14-pro-128gb_550.webp','Purple'),(15,7,'1701336785954_0018665_deep-purple_550.jpeg','Purple'),(16,7,'1701336785959_0018666_deep-purple_550.jpeg','Purple'),(17,7,'1701336785963_0018667_deep-purple_550.jpeg','Purple'),(18,7,'1701336785993_0018668_deep-purple_550.jpeg','Purple'),(19,7,'1701336785975_0018669_deep-purple_550.jpeg','Purple'),(20,7,'1701336785998_0018670_deep-purple_550.jpeg','Purple'),(21,7,'1701336786011_0018671_deep-purple_550.jpeg','Purple'),(22,7,'1701336786014_0018672_deep-purple_550.jpeg','Purple'),(23,12,'1701336924771_0006300_silver_550.webp','Silver'),(24,12,'1701336924768_0006301_silver_550.webp','Silver'),(25,12,'1701336924808_0006308_silver_550.webp','Silver'),(26,12,'1701336924781_0006302_silver_550.webp','Silver'),(27,12,'1701336924778_0006303_silver_550.webp','Silver'),(28,12,'1701336924775_0006304_silver_550.webp','Silver'),(29,12,'1701336924801_0006305_silver_550.webp','Silver'),(30,12,'1701336924785_0006306_silver_550.webp','Silver'),(31,12,'1701336924804_0006307_silver_550.webp','Silver');
/*!40000 ALTER TABLE `imageproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderCode` varchar(45) NOT NULL,
  `id_staff` int DEFAULT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `email` varchar(255) NOT NULL,
  `paymentMethod` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `voucher` varchar(45) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `shippingFee` int DEFAULT NULL,
  `totalPrice` int DEFAULT NULL,
  `totalPay` int DEFAULT NULL,
  `status` enum('pending','waitforpay','prepare','shipping','success','cancel','refuse') DEFAULT 'pending',
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orderCode_UNIQUE` (`orderCode`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (3,'DTOD1701894594182',NULL,'Nguyễn Xuân Đức','211/154 Khuong Trung','nxd2911@gmail.com','payOnDelivery','0365287132','BANMOI30',30000,0,39970000,39940000,'pending',NULL,NULL),(4,'DTOD1701926834437',NULL,'Nguyễn Xuân Đức','211/154 Khuong Trung','nxd2911@gmail.com','payOnDelivery','0365287132','BANMOI30',30000,0,57470000,57440000,'pending',NULL,NULL);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderCode` varchar(45) NOT NULL,
  `idOrder` int NOT NULL,
  `idProduct` int NOT NULL,
  `sl` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (2,'DTOD1701894594182',3,7,1),(3,'DTOD1701894594182',3,12,2),(4,'DTOD1701926834437',4,7,2),(5,'DTOD1701926834437',4,12,1);
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_code` varchar(45) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `artwork` varchar(1000) DEFAULT NULL,
  `listed_price` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `slug` varchar(45) DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7,'IPH14PR',1,'iPhone 14 Pro 128GB',128,'Black','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fip-14-promax-preview.jpeg?alt=media&token=b827e24d-50bf-4c53-acd4-6e275d319808',30990000,24990000,14,'iphone-14-pro-128','2023-11-06 22:26:59','2023-11-06 22:26:59'),(8,'IPH14PRM',1,'iPhone 14 Pro Max 128GB',128,'Gold','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fiphone-14-pro-max-128gb.png?alt=media&token=7fac082c-cee7-40e9-9439-e8e8f260ce59',34990000,26790000,14,'iphone-14-pro-max-128','2023-11-06 22:27:48','2023-11-06 22:27:48'),(10,'IPH14',1,'iPhone 14 128GB',128,'Silver','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fiphone-14-128gb.png?alt=media&token=f9bc43b4-5454-45b9-87b0-be2aaf5e49df',24990000,18390000,15,'iphone-14','2023-11-29 21:41:50','2023-11-29 21:41:50'),(11,'IPH14PL',1,'iPhone 14 Plus 128GB',128,'Silver','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fiphone-14-plus-128gb.png?alt=media&token=3d09044d-4f9a-44f1-8fd0-f8827fbda9bb',27990000,20990000,15,'iphone-14-plus','2023-11-29 21:45:55','2023-11-29 21:45:55'),(12,'IPA9',2,'iPad Gen 9 10.2 inch WiFi 128GB',128,'Silver','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2F0006205_ipad-gen-9-102-inch-wifi-128gb_240.png?alt=media&token=ddde0655-df07-476f-9455-d93cf9e5b1e5',9990000,7490000,15,'ipad-gen-9-102-wifi-128','2023-11-29 21:50:50','2023-11-29 21:50:50'),(13,'IPAPRM2',2,'iPad Pro M2 11 inch Wifi 128GB',128,'Silver','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2F0007071_ipad-pro-m2-11-inch-wifi-128gb_240.png?alt=media&token=19dc52aa-891a-447c-94cb-ec0b39b57774',23990000,19950000,15,'ipad-pro-m2-11-inch-wifi-128gb','2023-11-29 21:57:41','2023-11-29 21:57:41'),(14,'MAIRM12020',3,'MacBook Air M1 2020 (8GB RAM | 256GB SSD)',256,'Blue','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2F0000723_macbook-air-m1-2020-8gb-ram-256gb-ssd_240.png?alt=media&token=d133384b-a732-4aed-829f-2f0ebf0a29db',28990000,18790000,5,'macbook-air-m1-2020','2023-11-29 22:04:42','2023-11-29 22:04:42'),(15,'APPRO2',5,'AirPods Pro 2',NULL,NULL,'https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2F0000211_airpods-pro-2_240.png?alt=media&token=1293be0e-60b7-45e1-81e9-f7ae325dd6b7',6790000,5390000,25,'airpods-pro-2','2023-11-29 22:11:28','2023-11-29 22:11:28'),(16,'WASE2022',4,'Apple Watch SE Nhôm 2022 GPS',NULL,'Silver','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2F0000896_apple-watch-se-2022-nhom-gps_240.png?alt=media&token=ffa363c0-677e-4b0a-896f-a63f350b9ac0',8990000,5950000,30,'apple-watch-se-2022-nhom-gps','2023-11-29 22:17:35','2023-11-29 22:17:35'),(17,'ACESAC',6,'Sạc 20W USB-C Power Adapter',NULL,NULL,'https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fsac-20w-usb-c-power-adapter.png?alt=media&token=8a9cfc90-a7a3-4747-bee8-47490173343e',690000,490000,50,'20w-usb-c-power-adapter','2023-11-29 22:20:34','2023-11-29 22:20:34'),(18,'Test',2,'Test',NULL,NULL,'https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2F0009725_ipad-gen-10th-109-inch-wifi-64gb_240.png?alt=media&token=004fc99d-4c32-4a01-91b2-c07d46746b9a',12000000,9990000,100,'test-ipad','2023-12-07 15:24:59','2023-12-07 15:24:59');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_sale`
--

DROP TABLE IF EXISTS `products_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_sale` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_product` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `value` int DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_sale`
--

LOCK TABLES `products_sale` WRITE;
/*!40000 ALTER TABLE `products_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_product` int DEFAULT NULL,
  `id_customer` int DEFAULT NULL,
  `content` longtext,
  `rate` varchar(45) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` varchar(1000) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `avatar` varchar(1000) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `password_UNIQUE` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (2,'Nguyễn Xuân Đức','nxd2911@gmail.com','duhx2911','$2b$10$uy9C5aieta8OYtng8htLROu9LU7NdoJZHpY1judHwl0rXy4NRB8jO','UDnYp1X81g2l560tHS3arAoA8Z9XXCcj0bc0JAUDFpJvWda8icSOrV1D0ocYEe9RJjJCeLMo8w6luGlmNxGhJ4O7lfQVZGHE8gSD',NULL,'https://firebasestorage.googleapis.com/v0/b/duhx291101.appspot.com/o/images%2FIMG_20230915_150246.jpg?alt=media&token=bcf29d7f-e641-42e1-9604-01e0e2fa2fd0',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voucher`
--

DROP TABLE IF EXISTS `voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voucher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `discount` int DEFAULT '0',
  `quantity` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `code_UNIQUE` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voucher`
--

LOCK TABLES `voucher` WRITE;
/*!40000 ALTER TABLE `voucher` DISABLE KEYS */;
INSERT INTO `voucher` VALUES (1,'BANMOI30',30000,100);
/*!40000 ALTER TABLE `voucher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-08 14:27:16
