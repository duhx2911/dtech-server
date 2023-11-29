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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7,'IPH14PR128',1,'iPhone 14 Pro 128GB',128,'Black','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fiphone-14-pro-128gb.png?alt=media&token=b940de3a-691e-4bc5-84d1-e7013a8d0c6f',30990000,24990000,14,'iphone-14-pro-128','2023-11-06 22:26:59','2023-11-06 22:26:59'),(8,'IPH14PRM128',1,'iPhone 14 Pro Max 128GB',128,'Gold','https://firebasestorage.googleapis.com/v0/b/dtech-c8e9e.appspot.com/o/images%2Fiphone-14-pro-max-128gb.png?alt=media&token=142cfd53-f5cf-425b-b0d4-2c85ae4a4b2d',34990000,26790000,14,'iphone-14-pro-max-128','2023-11-06 22:27:48','2023-11-06 22:27:48');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 15:10:32
