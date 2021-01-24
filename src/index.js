import { Controller } from "./controller";
import { Model } from "./model";
import "./style.css";
import { View } from "./view";

const app = Controller(new Model(), new View(document));
