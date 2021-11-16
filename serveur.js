require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP || 3500;
const connexion = require("./database")