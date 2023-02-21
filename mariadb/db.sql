drop schema if exists db;
create schema db;
use db;
create table user(
	id integer AUTO_INCREMENT, 
    email varchar(100),
    userName varchar(100),
    userPassword varchar(100),
    PRIMARY KEY (id)
) ENGINE = InnoDB;

INSERT INTO user (email, userName, userPassword) VALUES('m@mail.com', 'M', "ABC123"), ('g@mail.com', 'G', "ABC123"), ('r@mail.com', 'R', "ABC123");