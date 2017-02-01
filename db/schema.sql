CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INTEGER(11) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(250) NOT NULL,
devoured boolean DEFAULT false NOT NULL,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheese Burger", TRUE), ("Veggie Burger", FALSE), ("Black Bean Burger", TRUE);

select * from burgers;