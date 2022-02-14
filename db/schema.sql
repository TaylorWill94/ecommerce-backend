DROP DATABASE IF EXISTS retail_dev;

CREATE DATABASE retail_dev;

\c retail_dev;

CREATE TABLE items (id SERIAL PRIMARY KEY, name TEXT, description TEXT, price INT);