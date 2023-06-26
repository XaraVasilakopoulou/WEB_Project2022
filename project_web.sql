-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1:3308
-- Χρόνος δημιουργίας: 26 Ιουν 2023 στις 19:12:12
-- Έκδοση διακομιστή: 5.7.36
-- Έκδοση PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `project_web`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `offers`
--

DROP TABLE IF EXISTS `offers`;
CREATE TABLE IF NOT EXISTS `offers` (
  `id` int(50) NOT NULL,
  `name_product` varchar(60) CHARACTER SET greek NOT NULL,
  `name_supermarket` varchar(50) CHARACTER SET greek NOT NULL,
  `price` double NOT NULL,
  `date` date NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `offers`
--

INSERT INTO `offers` (`id`, `name_product`, `name_supermarket`, `price`, `date`, `email`) VALUES
(1, 'Υφαντής Γαλοπούλα Καπνιστή 160γρ', 'ΑΒ Βασιλόπουλος', 0.71, '2023-06-26', NULL),
(2, 'Υφαντής Γαλοπούλα Καπνιστή 160γρ', 'Σκλαβενίτης', 3.16, '2023-06-21', NULL),
(3, 'Υφαντής Ζαμπόν Μπούτι Βραστό Σε Φέτες 160γρ', 'Σκλαβενίτης', 2.85, '2023-06-21', NULL),
(4, 'Υφαντής Ζαμπόν Μπούτι Βραστό Σε Φέτες 160γρ', 'My Market', 2.85, '2023-06-21', NULL),
(5, 'Υφαντής Ζαμπόν Μπούτι Βραστό Σε Φέτες 160γρ', 'ΑΒ Βασιλόπουλος', 2.86, '2023-06-21', NULL),
(6, 'Νίκας Γαλοπούλα Καπνιστή Φέτες 160γρ', 'ΑΒ Βασιλόπουλος', 2.44, '2023-06-21', NULL),
(7, 'Νίκας Γαλοπούλα Καπνιστή Φέτες 160γρ', 'Σκλαβενίτης', 2.45, '2023-06-21', NULL),
(8, 'Εν Ελλάδι Γαλοπούλα Καπνιστή Φέτες 160γρ', 'Σκλαβενίτης', 2.27, '2023-06-21', NULL),
(9, 'Εν Ελλάδι Γαλοπούλα Καπνιστή Φέτες 160γρ', 'My Market', 2.32, '2023-06-21', NULL),
(10, 'Εν Ελλάδι Γαλοπούλα Καπνιστή Φέτες 160γρ', 'ΑΒ Βασιλόπουλος', 3, '2023-06-25', NULL),
(11, 'Εν Ελλάδι Μπέικον Καπνιστό Σε Φέτες 100γρ', 'Σκλαβενίτης', 1.79, '2023-06-21', NULL),
(12, 'Εν Ελλάδι Μπέικον Καπνιστό Σε Φέτες 100γρ', 'ΑΒ Βασιλόπουλος', 2.8, '2023-06-21', NULL),
(13, 'Νουνού Γάλα Εβαπορέ 170γρ', 'ΑΒ Βασιλόπουλος', 0.51, '2023-06-21', NULL),
(14, 'Νουνού Γάλα Εβαπορέ 170γρ', 'Σκλαβενίτης', 0.52, '2023-06-21', NULL),
(15, 'Νουνού Γάλα Εβαπορέ 170γρ', 'My Market', 0.75, '2023-06-21', NULL),
(16, 'Νουνού Γάλα Εβαπορέ Light 170γρ', 'ΑΒ Βασιλόπουλος', 0.51, '2023-06-21', NULL),
(17, 'Νουνού Γάλα Εβαπορέ Light 170γρ', 'Σκλαβενίτης', 0.52, '2023-06-21', NULL),
(18, 'Νουνού Γάλα Εβαπορέ Light 170γρ', 'My Market', 0.75, '2023-06-21', NULL),
(19, 'Δέλτα Milko Γάλα Παστερ 250ml', 'My Market', 0.96, '2023-06-21', NULL),
(20, 'Axe Αποσμ Σπρέυ Dark Temptation 150ml', 'My Market', 2.73, '2023-06-21', NULL),
(21, 'Axe Αποσμ Σπρέυ Dark Temptation 150ml', 'Lidl', 4.87, '2023-06-21', NULL),
(22, 'Axe Αποσμητικό Σπρέυ Africa 150ml', 'My Market', 2.73, '2023-06-21', NULL),
(23, 'Axe Αποσμητικό Σπρέυ Africa 150ml', 'Lidl', 4.87, '2023-06-21', NULL),
(24, 'Axe Αποσμητικό Σπρέυ Africa 150ml', 'ΑΒ Βασιλόπουλος', 5.48, '2023-06-21', NULL),
(25, 'Noxzema Αποσμ Rollon Classic 50ml', 'Σκλαβενίτης', 2.35, '2023-06-21', NULL),
(26, 'Noxzema Αποσμ Rollon Classic 50ml', 'My Market', 2.48, '2023-06-21', NULL),
(27, 'Noxzema Αποσμ Rollon Classic 50ml', 'ΑΒ Βασιλόπουλος', 4.74, '2023-06-21', NULL),
(28, 'Dove Deodorant Κρέμα Rollon 50ml', 'My Market', 2.46, '2023-06-21', NULL),
(29, 'Dove Deodorant Κρέμα Rollon 50ml', 'ΑΒ Βασιλόπουλος', 3.01, '2023-06-21', NULL),
(30, 'Dove Αποσμ Σπρέυ 150ml', 'Σκλαβενίτης', 2.53, '2023-06-21', NULL),
(31, 'Dove Αποσμ Σπρέυ 150ml', 'My Market', 2.61, '2023-06-21', NULL),
(32, 'Dove Αποσμ Σπρέυ 150ml', 'ΑΒ Βασιλόπουλος', 3.14, '2023-06-21', NULL),
(33, 'Dove Αποσμ Σπρέυ 150ml', 'Lidl', 4.58, '2023-06-21', NULL),
(34, 'Axe Αφροντούς Africa 400ml', 'My Market', 2.47, '2023-06-21', NULL),
(35, 'Noxzema Αφρόλ Talc 750ml', 'My Market', 3.06, '2023-06-21', NULL),
(36, 'Noxzema Αφρόλ Talc 750ml', 'Σκλαβενίτης', 3.13, '2023-06-21', NULL),
(37, 'Noxzema Αφρόλ Talc 750ml', 'ΑΒ Βασιλόπουλος', 6.28, '2023-06-21', NULL),
(38, 'Ultrex Σαμπουάν Γυναικ Κανον 360ml', 'Σκλαβενίτης', 2.16, '2023-06-21', NULL),
(39, 'Ultrex Σαμπουάν Γυναικ Κανον 360ml', 'My Market', 3.54, '2023-06-21', NULL),
(40, 'Ultrex Σαμπουάν Γυναικ Κανον 360ml', 'ΑΒ Βασιλόπουλος', 7.23, '2023-06-21', NULL),
(41, 'Orzene Condit Μπύρας Κανον Μαλλ 250ml', 'My Market', 1.67, '2023-06-21', NULL),
(42, 'Orzene Σαμπουάν Μπύρας Κανον 400ml', 'My Market', 2.3, '2023-06-21', NULL),
(43, 'Orzene Σαμπουάν Μπύρας Κανον 400ml', 'Σκλαβενίτης', 2.63, '2023-06-21', NULL),
(44, 'Nestle Φρουτοπουρές 4 Φρούτα 90γρ', 'Lidl', 1.57, '2023-06-21', NULL),
(45, 'Babylino Πάνες Μωρού Sensitive 11 - 25κιλ No 5 18τεμ', 'Σκλαβενίτης', 6.76, '2023-06-21', NULL),
(46, 'Babylino Πάνες Μωρού Sensitive 3-6κιλ Nο 2 26τεμ', 'ΑΒ Βασιλόπουλος', 3.5, '2023-06-21', NULL),
(47, 'Babylino Πάνες Μωρού Sensitive 9-20 κιλ Nο 4+ 19τεμ', 'Σκλαβενίτης', 6.69, '2023-06-21', NULL),
(48, 'Pampers Active Baby No4+ 10-15κιλ 16τεμ', 'My Market', 3.41, '2023-06-21', NULL),
(49, 'Ava Υγρό Πιάτων Perle Σύμπλεγμα Βιταμινών 430ml', 'ΑΒ Βασιλόπουλος', 1.38, '2023-06-21', NULL),
(50, 'Εύρηκα Σκόνη Antikalk 54γρ', 'Σκλαβενίτης', 0.8, '2023-06-21', NULL),
(51, 'Εύρηκα Σκόνη Antikalk 54γρ', 'ΑΒ Βασιλόπουλος', 0.8, '2023-06-21', NULL),
(52, 'Persil Express Σκόνη Χεριού 420γρ', 'Σκλαβενίτης', 2.2, '2023-06-21', NULL),
(53, 'Svelto Gel Υγρό Πιάτων Λεμόνι 500ml', 'My Market', 1.87, '2023-06-21', NULL),
(54, 'Svelto Gel Υγρό Πιάτων Με Ξύδι 500ml', 'My Market', 1.87, '2023-06-21', NULL),
(55, 'Delica Χαρτομάντηλα Αυτοκινήτου Λευκά Big 150τεμ', 'Σκλαβενίτης', 2.78, '2023-06-21', NULL),
(56, 'Delica Χαρτομάντηλα Αυτοκινήτου Λευκά Big 150τεμ', 'My Market', 2.72, '2023-06-21', NULL),
(57, 'Zewa Χαρ Υγείας Ultra Soft 8τεμ 912γρ', 'My Market', 5.32, '2023-06-21', NULL),
(58, 'Zewa Χαρ Υγείας Ultra Soft 8τεμ 912γρ', 'Σκλαβενίτης', 4.65, '2023-06-21', NULL),
(59, 'Zewa Χαρτί Υγείας Deluxe Χαμομήλι 3 Φύλλα 8τεμ 768γρ', 'Σκλαβενίτης', 3.94, '2023-06-21', NULL),
(60, 'Softex Χαρτοπετσέτες Λευκές 30x30 56τεμ', 'Σκλαβενίτης', 0.67, '2023-06-21', NULL),
(61, 'Zewa Deluxe Χαρτί Υγείας 3 Φύλλα 8τεμ', 'Σκλαβενίτης', 5.38, '2023-06-21', NULL),
(62, 'Babylino Πάνες Μωρού Sensitive 11 - 25κιλ No 5 18τεμ', '3A', 1.85, '2023-06-26', NULL);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `offers_details`
--

DROP TABLE IF EXISTS `offers_details`;
CREATE TABLE IF NOT EXISTS `offers_details` (
  `id` int(50) NOT NULL,
  `likes` int(100) NOT NULL,
  `dislikes` int(100) NOT NULL,
  `stock` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `offers_details`
--

INSERT INTO `offers_details` (`id`, `likes`, `dislikes`, `stock`) VALUES
(1, 0, 0, 1),
(2, 0, 0, 1),
(3, 0, 0, 1),
(4, 0, 0, 1),
(5, 0, 0, 1),
(6, 0, 0, 1),
(7, 0, 0, 1),
(8, 0, 0, 1),
(9, 0, 0, 1),
(10, 0, 0, 1),
(11, 0, 0, 1),
(12, 0, 0, 1),
(13, 0, 0, 1),
(14, 0, 0, 1),
(15, 0, 0, 1),
(16, 0, 0, 1),
(17, 0, 0, 1),
(18, 0, 0, 1),
(19, 0, 0, 1),
(20, 0, 0, 1),
(21, 0, 0, 1),
(22, 0, 0, 1),
(23, 0, 0, 1),
(24, 0, 0, 1),
(25, 0, 0, 1),
(26, 0, 0, 1),
(27, 0, 0, 1),
(28, 0, 0, 1),
(29, 0, 0, 1),
(30, 0, 0, 1),
(31, 0, 0, 1),
(32, 0, 0, 1),
(33, 0, 0, 1),
(34, 0, 0, 1),
(35, 0, 0, 1),
(36, 0, 0, 1),
(37, 0, 0, 1),
(38, 0, 0, 1),
(39, 0, 0, 1),
(40, 0, 0, 1),
(41, 0, 0, 1),
(42, 0, 0, 1),
(43, 0, 0, 1),
(44, 0, 0, 1),
(45, 0, 0, 1),
(46, 0, 0, 1),
(47, 0, 0, 1),
(48, 0, 0, 1),
(49, 0, 0, 1),
(50, 0, 0, 1),
(51, 0, 0, 1),
(52, 0, 0, 1),
(53, 0, 0, 1),
(54, 0, 0, 1),
(55, 0, 0, 1),
(56, 0, 0, 1),
(57, 0, 0, 1),
(58, 0, 0, 1),
(59, 0, 0, 1),
(60, 0, 0, 1),
(61, 0, 0, 1),
(62, 0, 0, 1);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL,
  `name` varchar(100) CHARACTER SET greek NOT NULL,
  `category` varchar(50) CHARACTER SET greek NOT NULL,
  `subcategory` varchar(50) CHARACTER SET greek NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `subcategory`) VALUES
(33, 'Ava Υγρό Πιάτων Perle Σύμπλεγμα Βιταμινών 430ml', 'Καθαριότητα', 'Απορρυπαντικά'),
(14, 'Axe Αποσμ Σπρέυ Dark Temptation 150ml', 'Προσωπική φροντίδα ', 'Αποσμητικά'),
(13, 'Axe Αποσμητικό Σπρέυ Africa 150ml', 'Προσωπική φροντίδα ', 'Αποσμητικά'),
(18, 'Axe Αφροντούς Africa 400ml', 'Προσωπική φροντίδα ', 'Σαμπουάν-Αφρόλουτρα'),
(27, 'Babylino Πάνες Μωρού Sensitive 11 - 25κιλ No 5 18τεμ', 'Βρεφικά Είδη', 'Πάνες'),
(29, 'Babylino Πάνες Μωρού Sensitive 16+ κιλ No 6 15τεμ', 'Βρεφικά Είδη', 'Πάνες'),
(28, 'Babylino Πάνες Μωρού Sensitive 3-6κιλ Nο 2 26τεμ', 'Βρεφικά Είδη', 'Πάνες'),
(26, 'Babylino Πάνες Μωρού Sensitive 9-20 κιλ Nο 4+ 19τεμ', 'Βρεφικά Είδη', 'Πάνες'),
(39, 'Delica Χαρτομάντηλα Αυτοκινήτου Λευκά Big 150τεμ', 'Καθαριότητα', 'Χαρτικά'),
(12, 'Dove Deodorant Κρέμα Rollon 50ml', 'Προσωπική φροντίδα ', 'Αποσμητικά'),
(15, 'Dove Αποσμ Σπρέυ 150ml', 'Προσωπική φροντίδα ', 'Αποσμητικά'),
(23, 'Nestle Φαρίν Λακτέ 350γρ', 'Βρεφικά Είδη', 'Βρεφικές Τροφές'),
(21, 'Nestle Φρουτοπουρές 4 Φρούτα 90γρ', 'Βρεφικά Είδη', 'Βρεφικές Τροφές'),
(11, 'Noxzema Αποσμ Rollon Classic 50ml', 'Προσωπική φροντίδα ', 'Αποσμητικά'),
(20, 'Noxzema Αφρόλ Talc 750ml', 'Προσωπική φροντίδα ', 'Σαμπουάν-Αφρόλουτρα'),
(16, 'Orzene Condit Μπύρας Κανον Μαλλ 250ml', 'Προσωπική φροντίδα ', 'Σαμπουάν-Αφρόλουτρα'),
(17, 'Orzene Σαμπουάν Μπύρας Κανον 400ml', 'Προσωπική φροντίδα ', 'Σαμπουάν-Αφρόλουτρα'),
(30, 'Pampers Active Baby No4+ 10-15κιλ 16τεμ', 'Βρεφικά Είδη', 'Πάνες'),
(35, 'Persil Express Σκόνη Χεριού 420γρ', 'Καθαριότητα', 'Απορρυπαντικά'),
(40, 'Softex Χαρτοπετσέτες Λευκές 30x30 56τεμ', 'Καθαριότητα', 'Χαρτικά'),
(32, 'Svelto Gel Υγρό Πιάτων Λεμόνι 500ml', 'Καθαριότητα', 'Απορρυπαντικά'),
(34, 'Svelto Gel Υγρό Πιάτων Με Ξύδι 500ml', 'Καθαριότητα', 'Απορρυπαντικά'),
(19, 'Ultrex Σαμπουάν Γυναικ Κανον 360ml', 'Προσωπική φροντίδα ', 'Σαμπουάν-Αφρόλουτρα'),
(36, 'Zewa Deluxe Χαρτί Υγείας 3 Φύλλα 8τεμ', 'Καθαριότητα', 'Χαρτικά'),
(37, 'Zewa Χαρ Υγείας Ultra Soft 8τεμ 912γρ', 'Καθαριότητα', 'Χαρτικά'),
(38, 'Zewa Χαρτί Υγείας Deluxe Χαμομήλι 3 Φύλλα 8τεμ 768γρ', 'Καθαριότητα', 'Χαρτικά'),
(22, 'Γιώτης Κρέμα Παιδική Φαρίν Λακτέ 300γρ', 'Βρεφικά Είδη', 'Βρεφικές Τροφές'),
(24, 'Γιώτης Κρέμα Παιδικη Φαρίν Λακτέ Μπισκότο 300γρ', 'Βρεφικά Είδη', 'Βρεφικές Τροφές'),
(25, 'Γιώτης Μπισκοτόκρεμα 300γρ', 'Βρεφικά Είδη', 'Βρεφικές Τροφές'),
(10, 'Δέλτα Milko Γάλα Παστερ 250ml', 'Τρόφιμα', 'Γάλα'),
(5, 'Εν Ελλάδι Γαλοπούλα Καπνιστή Φέτες 160γρ', 'Τρόφιμα', 'Αλλαντικά'),
(1, 'Εν Ελλάδι Μπέικον Καπνιστό Σε Φέτες 100γρ', 'Τρόφιμα', 'Αλλαντικά'),
(31, 'Εύρηκα Σκόνη Antikalk 54γρ', 'Καθαριότητα', 'Απορρυπαντικά'),
(9, 'Μεβγάλ Γάλα Αγελ Λευκό Light 1,5% 500ml', 'Τρόφιμα', 'Γάλα'),
(8, 'Μεβγάλ Γάλα Αγελ Λευκό Πλήρες 3,5% 500ml', 'Τρόφιμα', 'Γάλα'),
(4, 'Νίκας Γαλοπούλα Καπνιστή Φέτες 160γρ', 'Τρόφιμα', 'Αλλαντικά'),
(6, 'Νουνού Γάλα Εβαπορέ 170γρ', 'Τρόφιμα', 'Γάλα'),
(7, 'Νουνού Γάλα Εβαπορέ Light 170γρ', 'Τρόφιμα', 'Γάλα'),
(2, 'Υφαντής Γαλοπούλα Καπνιστή 160γρ', 'Τρόφιμα', 'Αλλαντικά'),
(3, 'Υφαντής Ζαμπόν Μπούτι Βραστό Σε Φέτες 160γρ', 'Τρόφιμα', 'Αλλαντικά');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `supermarkets`
--

DROP TABLE IF EXISTS `supermarkets`;
CREATE TABLE IF NOT EXISTS `supermarkets` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) CHARACTER SET greek DEFAULT NULL,
  `coordinates` point NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `supermarkets`
--

INSERT INTO `supermarkets` (`id`, `name`, `coordinates`) VALUES
('node/7673935764', '3A', 0x000000000101000000f55f8ced5abd3540641e9eca0e204340),
('node/5620208927', 'Mini Market', 0x00000000010100000004bc163e6cbb354063cb97bca61b4340),
('node/5620198221', 'ΑΒ Βασιλόπουλος', 0x000000000101000000429b77f75bbc35404b5645b8c91b4340),
('node/5396345464', 'Mini Market', 0x000000000101000000067d8e345de03540add05158f3294340),
('node/5164741179', 'Σκλαβενίτης', 0x000000000101000000f2c3526eecbf3540c0fc5fbf71224340),
('node/5164678230', 'Ανδρικόπουλος - Supermarket', 0x000000000101000000c7ffd3c386bf354006e56cf074224340),
('node/5005476711', 'Kiosk', 0x000000000101000000ac5e341aafbd35400a0b934ec9204340),
('node/5005476710', 'Kiosk', 0x000000000101000000184ff344c6bd35408bfd65f7e4204340),
('node/5005409495', 'Kiosk', 0x0000000001010000003349d16f04bc35400c51cfccdd1f4340),
('node/5005409494', 'Kiosk', 0x0000000001010000004df4f92823bc354088ebbd9de91f4340),
('node/5005409493', 'Kiosk', 0x000000000101000000b75f3e5931bc354075f51906e21f4340),
('node/5005384516', 'No supermarket', 0x0000000001010000004767aa7180bc354003eacda8f91f4340),
('node/4953268497', 'Φίλιππας', 0x000000000101000000f6306aad1ec035408e36339f18214340),
('node/4931300543', 'Kronos', 0x0000000001010000002e3d9aeac9ba354076d77ed70c1f4340),
('node/4752810729', 'Mini Market', 0x000000000101000000be74498be9c635406873412212274340),
('node/4484528391', 'Carna', 0x000000000101000000ff65ad5747c43540e1bf2fe4c7234340),
('node/4372108797', 'Mini Market', 0x0000000001010000007ca070d124d63540ebc31feae3224340),
('node/4357589496', 'Ανδρικόπουλος', 0x0000000001010000000736f80cf2ba35407f0bfcf2131f4340),
('node/4356183595', 'Σκλαβενίτης', 0x000000000101000000b9a5d590b8bb3540c1c4c48b2a1f4340),
('node/4101518891', 'ΑΒ ΒΑΣΙΛΟΠΟΥΛΟΣ', 0x0000000001010000009a84c1ebe9bd3540b67f0aecd6204340),
('node/3354481184', 'Ανδρικόπουλος', 0x0000000001010000000f67d9ee79bb354055247035fc184340),
('node/3144355008', 'My market', 0x00000000010100000060cec7105bbd3540bd4bf3d8e0204340),
('node/1971249846', 'My Market', 0x000000000101000000118a52e7f6bb3540da48c8f6101f4340),
('node/1971247760', 'Σκλαβενίτης', 0x000000000101000000d2808b5fc2bc35408997a773451e4340),
('node/1971240515', 'Ανδρικόπουλος', 0x0000000001010000000ab952cf82bc354078fefedeb71e4340),
('node/1815896581', 'Lidl', 0x00000000010100000080ec9a351dce3540c62b5aca43274340),
('node/1770994538', 'Markoulas', 0x0000000001010000007b979c24a7c23540aeb02a0cdb214340),
('node/1763830474', 'ΑΒ Βασιλόπουλος', 0x000000000101000000e6bee666c9b93540657330f6b91d4340),
('node/1763830009', 'My market', 0x00000000010100000024ef1cca50bf3540c8f8e6edbe1d4340),
('node/1657132008', 'Σκλαβενίτης', 0x000000000101000000624d6551d8bd3540419f234d17214340),
('node/1657132006', 'Ρουμελιώτης SUPER Market', 0x000000000101000000e863e3665dbe3540896764eb74214340),
('node/1643818281', 'Σκλαβενίτης', 0x00000000010100000035cfb63fbcbf3540113eef213c214340),
('node/1643373636', 'Κρόνος', 0x000000000101000000f276291a10c835400940924891264340),
('node/980515550', 'Lidl', 0x000000000101000000b85b920376bd35404667f4fe9a1d4340),
('node/598279836', 'Papakos', 0x00000000010100000082774da324c335400a9dd7d8251e4340),
('node/364463568', 'Σκλαβενίτης', 0x000000000101000000a1db4b1aa3c335403eb14e95ef1a4340),
('node/364381224', 'Σουπερμάρκετ Ανδρικόπουλος', 0x000000000101000000d295630d72ca3540bd3f3965c9254340),
('node/360226900', 'Lidl', 0x000000000101000000d17af83251be3540cdee247db5214340),
('node/360217468', 'The Mart', 0x0000000001010000003ee7131ed9c73540f0332e1c08254340),
('node/354449389', 'Lidl', 0x000000000101000000145d177e70b635402b830fcaa01a4340),
('node/7673976786', 'Spar', 0x00000000010100000030fe6c9a2dbd354047600729d31f4340),
('node/7673986831', 'ΑΝΔΡΙΚΟΠΟΥΛΟΣ', 0x0000000001010000007ce761b202bd354078edd286c31f4340),
('node/7674120315', 'ΑΝΔΡΙΚΟΠΟΥΛΟΣ', 0x000000000101000000ddc545ff15bb354053d6cadf181f4340),
('node/7677225097', 'MyMarket', 0x000000000101000000541e38c2fdb935400d3c52d8a01e4340),
('node/8214753473', 'Ena Cash And Carry', 0x000000000101000000c43ea65ab0b93540c04d3569091e4340),
('node/8214854586', 'ΚΡΟΝΟΣ - (Σκαγιοπουλείου)', 0x000000000101000000c23577f4bfba3540f4b171b32e1e4340),
('node/8214887295', 'Ανδρικόπουλος Super Market', 0x0000000001010000003c212a430bbb354048927b15741e4340),
('node/8214887306', '3Α Αράπης', 0x0000000001010000006d4ac33a9fbb3540ef49719f661e4340),
('node/8214910532', 'Γαλαξίας', 0x000000000101000000de3aff76d9bb3540cb55e2f0381e4340),
('node/8215010716', 'Super Market Θεοδωρόπουλος', 0x00000000010100000048c6c5ac72ba35409177b3ab351e4340),
('node/8215157448', 'Super Market ΚΡΟΝΟΣ', 0x00000000010100000046668929ecbb354035a61600991e4340),
('node/8777081651', 'Σκλαβενίτης', 0x00000000010100000072ab7bbf2cbe3540f648de944d214340),
('node/8777171555', '3A ARAPIS', 0x000000000101000000988fff5dfabe3540f2adb4311b214340),
('node/8805335004', 'Μασούτης', 0x000000000101000000b004ad1b4abc354010e099756b1f4340),
('node/8805467220', 'ΑΒ Shop & Go', 0x00000000010100000091819774efbc35400708e6e8f11f4340),
('node/8806495733', '3Α ΑΡΑΠΗΣ', 0x000000000101000000d757b2bedcbe35400f400f5ab41e4340),
('node/9651304117', 'Περίπτερο', 0x000000000101000000bbf083f3a9bd35408d391966b2204340);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `tokens`
--

DROP TABLE IF EXISTS `tokens`;
CREATE TABLE IF NOT EXISTS `tokens` (
  `email` varchar(70) NOT NULL,
  `score_total` int(255) NOT NULL,
  `token_month` int(100) NOT NULL,
  `score_month` int(100) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `tokens`
--

INSERT INTO `tokens` (`email`, `score_total`, `token_month`, `score_month`) VALUES
('chara@admin.com', 100, 100, 0),
('charoula@user.com', 0, 100, 0),
('marinos@user.gr', 0, 100, 0);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `property` set('user','admin') NOT NULL DEFAULT 'user',
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `users`
--

INSERT INTO `users` (`username`, `email`, `password`, `property`) VALUES
('chara', 'chara@admin.com', '123@', 'admin'),
('charoula', 'charoula@user.com', 'asdFG12@', 'user'),
('marinos', 'marinos@user.gr', '123werWER@', 'user');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users_actions`
--

DROP TABLE IF EXISTS `users_actions`;
CREATE TABLE IF NOT EXISTS `users_actions` (
  `email` varchar(50) NOT NULL,
  `action` enum('Like','Dislike') NOT NULL,
  `product_name` varchar(50) CHARACTER SET greek NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Άδειασμα δεδομένων του πίνακα `users_actions`
--

INSERT INTO `users_actions` (`email`, `action`, `product_name`, `id`) VALUES
('charoula@user.com', 'Like', 'Υφαντής Γαλοπούλα Καπνιστή 160γρ', 1),
('charoula@user.com', 'Dislike', 'Axe Αφροντούς Africa 400ml', 2);

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `offers_details`
--
ALTER TABLE `offers_details`
  ADD CONSTRAINT `offers_details_ibfk_1` FOREIGN KEY (`id`) REFERENCES `offers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
