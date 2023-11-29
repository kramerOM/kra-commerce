const express = require(`express`);
const ejs = require(`ejs`);
const path = require(`path`)


const server = express();



server.set(`view engine`, `ejs`)
server.set(`views`, path.join(__dirname, 'views'));

module.export = server;