-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2022 a las 15:35:40
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `svc`
--
CREATE DATABASE IF NOT EXISTS `svc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `svc`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `garantiaadmin`
--

CREATE TABLE `garantiaadmin` (
  `id` int(11) NOT NULL,
  `codigoProducto` varchar(255) NOT NULL,
  `motivo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `garantiaadmin`
--

INSERT INTO `garantiaadmin` (`id`, `codigoProducto`, `motivo`) VALUES
(1, 'QUADRORTX6000', 'Ventilador con aspas rotas'),
(2, 'QUADRORTX6000', 'aweasdasdsadas'),
(3, '1232132132111', 'dfgh'),
(4, 'BOX37GHZDEPOTENCIA', 'no sirve'),
(5, 'TOSHIBA6050TIO', 'no sirve');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `garantias`
--

CREATE TABLE `garantias` (
  `id` int(11) NOT NULL,
  `codigoProducto` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `garantias`
--

INSERT INTO `garantias` (`id`, `codigoProducto`, `imagen`) VALUES
(1, 'QUADRORTX6000', 'https://lenguajehtml.com/html/formularios/validaciones-html5/'),
(2, '1111112213231', 'https://i.imgur.com/4OT16Av.jpg'),
(3, '1111112213231', 'https://i.imgur.com/4OT16Av.jpg'),
(4, '1232132132111', 'https://i.imgur.com/4OT16Av.jpg'),
(5, '1232132132111', 'https://i.imgur.com/4OT16Av.jpg'),
(6, '1111112213231', 'https://i.imgur.com/4OT16Av.jpg'),
(7, '1111112213231', 'https://i.imgur.com/4OT16Av.jpg'),
(8, 'TOSHIBA6050TIO', 'https://i.imgur.com/4OT16Av.jpg'),
(9, 'QUADRORTX6000', 'https://i.imgur.com/4OT16Av.jpg'),
(10, 'QUADRORTX6000', 'https://i.imgur.com/4OT16Av.jpg'),
(11, 'QUADRORTX6000', 'https://i.imgur.com/4OT16Av.jpg'),
(12, 'QUADRORTX6000', 'https://i.imgur.com/4OT16Av.jpg'),
(13, 'QUADRORTX6000', 'https://i.imgur.com/4OT16Av.jpg'),
(14, 'QUADRORTX6000', 'https://i.imgur.com/4OT16Av.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `existencia` int(11) NOT NULL,
  `proovedor` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `codigo`, `precio`, `descripcion`, `categoria`, `imagen`, `existencia`, `proovedor`, `fecha`) VALUES
(1, 'HP Tarjeta Gráfica Nvidia RTX ', 'QUADRORTX6000', 194592, 'Especificaciones:\n\nProcesador:\nEspecificaciones:\n\nProcesador:\nCUDA: Sí\nNúcleos CUDA4608\nFamilia de procesadores gráficos: NVIDIA\nProcesador gráfico: Quadro RTX 6000\nCorriente de fuego: No\n\nMemoria:\nMemoria de tarjeta gráfica discreta: 24 GB', 'graficas', 'https://i.imgur.com/4OT16Av.jpg', 1, 'Juan Hernandez', '2022-10-31 05:49:51'),
(3, ' Toshiba Auriculares Inalámbricos NAC', 'TOSHIBA6050TIO', 1287, 'Rango de trabajo de 32,8 pies:\n\nNuestros auriculares inalámbricos Toshiba tienen un sólido rango de trabajo de 32,8 pies con tecnología de audio transparente.\n\n20 horas de tiempo de reproducción de música con cancelación de ruido:\n\nNuestros auriculares Bl', 'Audifonos', 'https://i.imgur.com/XybY0tj.jpg', 1, 'Juan Hernandez', '2022-10-22 23:49:51'),
(4, 'HP Ratón 128 Ideal para trabajar', '1111112213231', 201, 'Piense cuánto usa su mouse. Es por eso que nos hemos tomado el tiempo para diseñar un mouse con cable láser que sea cómodo de usar para que pueda trabajar de manera productiva todos los días y todo el día si es necesario.\n\n\nCaracterísticas:\n\nDiseñado para', 'Mouses', 'https://i.imgur.com/C7RVDxW.jpg', 44, 'Ricardo Fernandez', '2022-10-22 08:49:51'),
(5, 'Nox Ventilador Hummer X-Fan ', '1232132132111', 150, 'Equipado con iluminación ARGB de 120 mm, el Hummer X FAN es un ventilador diseñado para completar su configuración Nox (Infinity Omega, Infinity Alpha, Hummer TGM, Hummer Fusion S, Quantum y Nova).\n\nDecora el interior de tu PC personalizando el color fáci', 'Refrigeracion', 'https://i.imgur.com/qrFIPjU.jpg', 12345679, 'Pedrito Sola', '2022-10-22 03:49:51'),
(6, 'MSI Gráfica RX 6700XT 12GB ', '0191723983481', 10000, 'Características:\n\n16 Gb/s\n12GB GDDR6\nDisplayPort x 3 (v1.4)\nHDMI x 1 (Admite 4K@120Hz/8K@60Hz y VRR como se especifica en HDMI 2.1)\nTORX Fan 3.0: el galardonado diseño MSI TORX Fan 3.0 crea una alta presión estática y supera los límites del rendimiento té', 'graficas', 'https://i.imgur.com/kMU5f5t.jpg', 122, 'Ricardo Fernandez', '2022-10-22 08:49:51'),
(7, 'Kingston Memoria RAM ', 'RAMRTX6050TIO', 1492, 'Kingston FURY KF560C40BBA-8 es un módulo de memoria DDR5-6000 CL40 SDRAM (Synchronous DRAM) 1Rx16 de 1 G x 64 bits (8 GB), basado en cuatro componentes FBGA de 1 G x 16 bits por módulo. El módulo es compatible con Intel® Extreme Memory Profiles (Intel® XM', 'Ram', 'https://i.imgur.com/bDkwxsV.jpg', 0, 'Juan Hernandez', '2022-10-22 03:49:51'),
(8, 'Amd Procesador Ryzen 5 4600G', 'BOX37GHZDEPOTENCIA', 2999, 'Especificaciones:\n\nGeneral:\nPlataforma: Escritorio\nFamilia de productos: Procesadores AMD Ryzen™\nLínea de productos: procesadores de escritorio AMD Ryzen™ 5 serie 4000 G con gráficos Radeon™\nNombre en clave anterior: ´´Renoir´´\nArquitectura: ´´Zen 2´´\n# d', 'Procesadores', 'https://i.imgur.com/ONf3jVw.jpg', 299994, 'Ricardo Fernandez', '2022-10-22 03:49:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reabastecimiento`
--

CREATE TABLE `reabastecimiento` (
  `id` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `producto` varchar(255) NOT NULL,
  `proovedor` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reabastecimiento`
--

INSERT INTO `reabastecimiento` (`id`, `folio`, `producto`, `proovedor`, `cantidad`, `fecha`) VALUES
(1, 0, 'HP Tarjeta Gráfica Nvidia Quadro RTX 600', 'Juan Hernandez', 20, '2022-10-22 02:40:15'),
(2, 0, 'Kingston Memoria RAM ', 'Juan Hernandez', 27, '2022-10-22 02:40:15'),
(3, 0, ' Toshiba Auriculares Inalámbricos NAC', 'Juan Hernandez', 29, '2022-10-22 02:40:15'),
(4, 0, ' Toshiba Auriculares Inalámbricos NAC', 'Juan Hernandez', 28, '2022-10-22 03:46:44'),
(5, 0, 'Toshiba Auriculares Inalámbricos NAC', 'juean', 30, '2022-10-23 16:55:56'),
(6, 0, 'Toshiba Auriculares Inalámbricos NAC', 'juean', 31, '2022-10-23 16:59:35'),
(7, 0, 'Toshiba Auriculares Inalámbricos NAC', 'juean', 25, '2022-10-23 17:20:40'),
(8, 0, 'Toshiba Auriculares Inalámbricos NAC', 'juean', 40, '2022-10-23 17:45:13'),
(9, 0, 'Toshiba Auriculares Inalámbricos NAC', 'juean', 41, '2022-10-23 17:57:18'),
(10, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 40, '2022-10-23 17:58:37'),
(11, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 33, '2022-10-23 18:04:22'),
(12, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 24, '2022-10-23 18:04:41'),
(13, 0, ' Toshiba Auriculares Inalámbricos NAC', 'Juan Hernandez', 33, '2022-10-23 18:25:12'),
(14, 0, ' Toshiba Auriculares Inalámbricos NAC', 'Juan Hernandez', 30, '2022-10-23 18:25:26'),
(15, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 29, '2022-10-23 18:27:35'),
(16, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 37, '2022-10-23 18:27:37'),
(17, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 31, '2022-10-23 18:29:09'),
(18, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 49, '2022-10-23 18:29:17'),
(19, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 32, '2022-10-23 18:30:48'),
(20, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 32, '2022-10-23 18:30:53'),
(21, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 22, '2022-10-23 18:36:48'),
(22, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 26, '2022-10-23 18:37:00'),
(23, 0, ' Toshiba Auriculares Inalámbricos NAC', 'Juan Hernandez', 25, '2022-10-23 18:51:02'),
(24, 0, ' Toshiba Auriculares Inalámbricos NAC', 'Juan Hernandez', 25, '2022-10-23 18:51:09'),
(25, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 37, '2022-10-23 19:26:35'),
(26, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 32, '2022-10-23 19:26:46'),
(27, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 40, '2022-10-23 20:06:47'),
(28, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 23, '2022-10-23 20:06:52'),
(29, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 26, '2022-10-23 20:09:54'),
(30, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 28, '2022-10-23 20:10:02'),
(31, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 34, '2022-10-23 20:11:08'),
(32, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 21, '2022-10-23 20:11:19'),
(33, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 22, '2022-10-23 20:12:52'),
(34, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 37, '2022-10-23 20:13:05'),
(35, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 21, '2022-10-23 20:20:16'),
(36, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 20, '2022-10-23 20:20:26'),
(37, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 23, '2022-10-23 20:22:07'),
(38, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 34, '2022-10-23 20:22:15'),
(39, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 29, '2022-10-23 20:23:15'),
(40, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 42, '2022-10-23 20:23:20'),
(41, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 21, '2022-10-23 20:24:51'),
(42, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 27, '2022-10-23 20:31:06'),
(43, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 36, '2022-10-23 20:31:09'),
(44, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 22, '2022-10-23 20:39:17'),
(45, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 34, '2022-10-23 20:39:19'),
(46, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 50, '2022-10-23 20:42:59'),
(47, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 42, '2022-10-23 20:43:01'),
(48, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 25, '2022-10-23 21:25:35'),
(49, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 45, '2022-10-23 21:25:43'),
(50, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 47, '2022-10-23 21:27:10'),
(51, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 47, '2022-10-23 21:27:17'),
(52, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 33, '2022-10-23 21:40:17'),
(53, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 40, '2022-10-23 21:40:55'),
(54, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 20, '2022-10-23 21:43:55'),
(55, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 47, '2022-10-23 21:44:00'),
(56, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 37, '2022-10-23 21:46:52'),
(57, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 40, '2022-10-23 21:46:54'),
(58, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 29, '2022-10-23 21:47:45'),
(59, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 31, '2022-10-23 21:47:53'),
(60, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 33, '2022-10-23 21:49:05'),
(61, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 35, '2022-10-23 21:49:12'),
(62, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 30, '2022-10-23 21:53:47'),
(63, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 25, '2022-10-23 21:54:59'),
(64, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 44, '2022-10-23 21:55:35'),
(65, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 35, '2022-10-23 21:58:09'),
(66, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 26, '2022-10-23 22:06:50'),
(67, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 22, '2022-10-23 22:06:59'),
(68, 0, 'HP Tarjeta Gráfica Nvidia RTX 600', 'Juan Hernandez', 23, '2022-10-23 22:13:42'),
(69, 0, 'HP Tarjeta Gráfica Nvidia RTX (RTX 6000)', 'Juan Hernandez', 33, '2022-11-04 16:27:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_compras`
--

CREATE TABLE `reporte_compras` (
  `id` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `producto` varchar(255) NOT NULL,
  `proovedor` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reporte_compras`
--

INSERT INTO `reporte_compras` (`id`, `folio`, `producto`, `proovedor`, `fecha`) VALUES
(1, 12321321, '123', 'Juan Hernandez', '2022-08-25 16:28:39'),
(2, 12312321, '12321321', '12321312', '2022-08-25 16:28:46'),
(3, 2147483647, 'prueba', 'pruebaviernes', '2022-08-25 16:29:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `tipo_usuario` int(11) NOT NULL,
  `apellidop` varchar(255) NOT NULL,
  `apellidom` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` int(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `contraseña`, `tipo_usuario`, `apellidop`, `apellidom`, `direccion`, `telefono`, `email`) VALUES
(1, 'Ricardo', '$2a$10$y.M4MMaT65VthPRxtL06TeZ37awjplTSLi1/aFqX/i2/p21d4nJWO', 1, 'Hernandez', 'Limon', 'Calle 2 de abril numero 3', 2147483647, 'richi8297@gmail.com'),
(2, 'Pedro', '$2a$10$/WxHSJdFvfqONc/oDSMhQ.d1BGeuFVFxBtO3d3XmNvDkhdV5US11C', 3, 'Hernandez', 'sola', 'cale 24 de abril #3', 2147483647, 'ricardo@hola.com.mc'),
(4, 'Rich', '$2a$10$YnqRIc2GAHSufSKnuq7Bu.u50jvdS4yIJ2gtT5fahoAKk5WVyQHty', 2, 'Hernandez', 'Limon', 'calle nueva alizanza 2', 2147483647, 'yo@gmail.com'),
(5, 'Richs', '$2a$10$IQpvYH/64M5Fk4BbDfc99O16KC2p/nqUPYYXgt42puvkdZMbja3Um', 3, 'Hernandez', 'Limon', 'calla', 0, 'yo@gmail.com'),
(7, 'juanito', '$2a$10$2WQma11Gv.VWgroKEEfgxeHUY4VEGdbpavj.gXoIjk.7grpGWkcWO', 4, 'perez', 'perez', 'jdsfijdofjsajfiosajofisa', 1231213123, 'abc123@123.324'),
(8, 'juanitoperez', '$2a$10$Spb6wH1YF6PZumw9wGq87ujoNQ3gB7dIrQZykWarVXDS2TWF6gxY2', 3, 'perez', 'perez', 'fiodajfosad', 1231231231, 'ijfdsao@12321.1232');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `producto` varchar(255) NOT NULL,
  `comprador` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `total`, `producto`, `comprador`, `cantidad`, `fecha`) VALUES
(1, 194592, 'HP Tarjeta Gráfica Nvidia Quadro RTX 600\n', 'Ricardo', 1, '2022-06-12 23:56:26'),
(2, 972960, 'HP Tarjeta Gráfica Nvidia Quadro RTX 600\n', 'Ricardo', 5, '2022-08-06 15:16:03'),
(3, 194592, 'HP Tarjeta Gráfica Nvidia Quadro RTX 600\n', 'Ricardo', 1, '2022-08-06 15:44:12'),
(4, 389196, 'Amd Ryzen 5 3600\nHP Tarjeta Gráfica Nvidia Quadro RTX 600\n', 'Ricardo', 3, '2022-08-06 15:46:46'),
(5, 24, 'Amd Ryzen 5 3600\n', 'Anonimo', 2, '2022-08-18 19:33:35'),
(6, 2984, 'Kingston Memoria RAM \n', 'Ricardo', 2, '2022-10-10 01:33:23'),
(7, 25740, ' Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 20, '2022-10-10 01:35:52'),
(8, 1287, ' Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-22 03:44:41'),
(9, 1287, ' Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-22 03:46:44'),
(10, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-23 16:55:56'),
(11, 0, '', 'Ricardo', 0, '2022-10-23 16:56:03'),
(12, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 1, '2022-10-23 16:59:35'),
(13, 0, '', 'Anonimo', 0, '2022-10-23 16:59:43'),
(14, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 1, '2022-10-23 17:02:01'),
(15, 17995, 'Amd Procesador Ryzen 5 4600G\nToshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 7, '2022-10-23 17:15:42'),
(16, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-23 17:20:40'),
(17, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 1, '2022-10-23 17:23:21'),
(18, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 1, '2022-10-23 17:23:49'),
(19, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-23 17:45:13'),
(20, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 17:54:53'),
(21, 1, 'Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-23 17:57:18'),
(22, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 17:58:37'),
(23, 1, 'la prueba\n', 'Anonimo', 1, '2022-10-23 18:01:45'),
(24, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 18:04:22'),
(25, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 18:04:41'),
(26, 1287, ' Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-23 18:25:12'),
(27, 1287, ' Toshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 1, '2022-10-23 18:25:26'),
(28, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 18:27:35'),
(29, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 18:27:37'),
(30, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 18:29:09'),
(31, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 18:29:17'),
(32, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 18:30:48'),
(33, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 18:30:53'),
(34, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 18:36:48'),
(35, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 18:37:00'),
(36, 1287, ' Toshiba Auriculares Inalámbricos NAC\n', 'Anonimo', 1, '2022-10-23 18:51:02'),
(37, 1287, ' Toshiba Auriculares Inalámbricos NAC\n', 'Ricardo', 1, '2022-10-23 18:51:09'),
(38, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 19:26:35'),
(39, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 19:26:46'),
(40, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:06:47'),
(41, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:06:52'),
(42, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:09:54'),
(43, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:10:02'),
(44, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:11:08'),
(45, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:11:19'),
(46, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:12:52'),
(47, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:13:05'),
(48, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:20:16'),
(49, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:20:26'),
(50, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:22:07'),
(51, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:22:15'),
(52, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:23:15'),
(53, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:23:20'),
(54, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:24:51'),
(55, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:31:06'),
(56, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:31:09'),
(57, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:39:17'),
(58, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:39:19'),
(59, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 20:42:59'),
(60, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 20:43:01'),
(61, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:25:35'),
(62, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 21:25:43'),
(63, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 21:27:10'),
(64, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:27:17'),
(65, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 21:40:17'),
(66, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:40:55'),
(67, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:43:55'),
(68, 194793, 'HP Ratón 128 Ideal para trabajar\nHP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 2, '2022-10-23 21:44:00'),
(69, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:46:52'),
(70, 194793, 'HP Ratón 128 Ideal para trabajar\nHP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 2, '2022-10-23 21:46:54'),
(71, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:47:45'),
(72, 194793, 'HP Ratón 128 Ideal para trabajar\nHP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 2, '2022-10-23 21:47:53'),
(73, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:49:05'),
(74, 194793, 'HP Ratón 128 Ideal para trabajar\nHP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 2, '2022-10-23 21:49:12'),
(75, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:53:47'),
(76, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:54:59'),
(77, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:55:35'),
(78, 10201, 'MSI Gráfica RX 6700XT 12GB \nHP Ratón 128 Ideal para trabajar\n', 'Anonimo', 2, '2022-10-23 21:56:24'),
(79, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 21:58:09'),
(80, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 22:06:50'),
(81, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Anonimo', 1, '2022-10-23 22:06:59'),
(82, 194592, 'HP Tarjeta Gráfica Nvidia RTX 600\n', 'Ricardo', 1, '2022-10-23 22:13:42'),
(83, 201, 'HP Ratón 128 Ideal para trabajar\n', 'Ricardo', 1, '2022-10-27 13:30:28'),
(84, 194592, 'HP Tarjeta Gráfica Nvidia RTX (RTX 6000)\n', 'Ricardo', 1, '2022-11-04 16:27:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `garantiaadmin`
--
ALTER TABLE `garantiaadmin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `garantias`
--
ALTER TABLE `garantias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reabastecimiento`
--
ALTER TABLE `reabastecimiento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reporte_compras`
--
ALTER TABLE `reporte_compras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `garantiaadmin`
--
ALTER TABLE `garantiaadmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `garantias`
--
ALTER TABLE `garantias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `reabastecimiento`
--
ALTER TABLE `reabastecimiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `reporte_compras`
--
ALTER TABLE `reporte_compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
