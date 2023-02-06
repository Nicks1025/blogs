CREATE TABLE users(id SERIAL PRIMARY KEY, username varchar(20), email varchar(50), password varchar(50))

CREATE TABLE blogs(id SERIAL PRIMARY KEY, title varchar(50), email varchar(50), author varchar(50), date varchar(30), description varchar(255))
