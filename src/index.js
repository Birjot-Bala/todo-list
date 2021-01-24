import { Controller } from "./controller";
import { Model } from "./model";
import { View } from "./view";
import "./style.css";

const app = new Controller(new Model(), new View(document));
