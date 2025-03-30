import { saveCharacter } from "@drincs/pixi-vn";
import Character from "../models/Character";

export const mc = new Character("mc", {
    name: "Me",
    color: "#b0daec",
});

export const james = new Character("james", {
    name: "James",
    color: "#0084ac",
});

export const steph = new Character("steph", {
    name: "Steph",
    color: "#ac5900",
});

export const sly = new Character("sly", {
    name: "Sly",
    color: "#6d00ac",
});

export const brian = new Character("Brian", {
    name: "Brian",
    color: "#23242e",
});

export const coolBrian = new Character("coolBrian", {
    name: "Cool Brian",
    color: "#c70053",
});
export const teacherBrian = new Character("teacherBrian", {
    name: "Professor Le",
    color: "#00c200",
});

export const baseballBrian = new Character("baseballBrian", {
    name: "Downstair Roomate",
    color: "#fcbe03",
});

export const rainBrian = new Character("rainBrian", {
    name: "Ryan",
    color: "#6800a8",
});

export const girlBrian = new Character("girlBrian", {
    name: "Briana",
    color: "#ffb0ed",
});

saveCharacter([mc, james, steph, sly, brian, baseballBrian, coolBrian, teacherBrian, rainBrian, girlBrian]);
