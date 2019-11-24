-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS sushi_db;
-- Creates the "animals_db" database --
CREATE DATABASE sushi_db;

-- Makes it so all of the following code will affect animals_db --
USE sushi_db;

-- Creates the table "people" within animals_db --
CREATE TABLE sushi (

  
   id INTEGER(11) AUTO_INCREMENT NOT NULL,
  sushi_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)

);