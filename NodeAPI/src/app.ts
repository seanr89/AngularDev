import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import express from "express";

import middleware from "./middleware";
import { applyMiddleware } from "./utils";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        applyMiddleware(middleware, this.app);
        this.setupRoutes();
    }

    private setupRoutes() {
        //this.urlRoutes.getRoutes(this.app);
    }
}

export default new App().app;
