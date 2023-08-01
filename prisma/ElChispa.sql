CREATE TABLE Fabricantes (
    CodigoFabricante INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Direccion VARCHAR(50),
    Poblacion VARCHAR(50),
    Telefono VARCHAR(50),
    FormaPago VARCHAR(50)
);

CREATE TABLE Articulos (
    CodigoArticulo INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Color VARCHAR(50),
    Medidas VARCHAR(50),
    Fabricante INT,
    PrecioVenta DECIMAL(10,2),
    FOREIGN KEY (Fabricante) REFERENCES Fabricantes(CodigoFabricante)
);

CREATE TABLE Clientes (
    RIF INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Direccion VARCHAR(50),
    Poblacion VARCHAR(50),
    Telefono VARCHAR(50)
);

CREATE TABLE Facturas (
  CodigoFactura INT PRIMARY KEY,
  Fecha DATE,
  Cliente INT,
  TotalFactura DECIMAL(10,2),
  FormaPago VARCHAR(50),
  Vencimiento DATE,
  FOREIGN KEY (Cliente) REFERENCES Clientes(RIF)
);

CREATE TABLE Ventas (
    CodigoVenta INT PRIMARY KEY,
    Fecha DATE,
    Cliente INT,
    NumeroArticulos INT,
    Articulo INT,
    PrecioUnidad DECIMAL(10,2),
    PrecioTotal DECIMAL(10,2),
    CodigoFactura INT NULL,
    FOREIGN KEY (Articulo) REFERENCES Articulos(CodigoArticulo),
    FOREIGN KEY (Cliente) REFERENCES Clientes(RIF),
    FOREIGN KEY (CodigoFactura) REFERENCES Facturas(CodigoFactura)
);

CREATE TABLE Envios (
    CodigoEnvio INT PRIMARY KEY,
    Fecha DATE,
    Articulo INT,
    NumeroUnidades INT,
    FOREIGN KEY (Articulo) REFERENCES Articulos(CodigoArticulo)
);
