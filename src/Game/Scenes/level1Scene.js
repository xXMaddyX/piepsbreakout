import Phaser from "phaser";
import Map1 from "../worlds/map1/map1.js";

export default class Level1Scene extends Phaser.Scene {
    constructor() {
        super({key: "Level1Scene"});
    };

    preload() {
        Map1.loadSprites(this);
    };

    create() {
        const map1 = new Map1(this);
        map1.create();
    };

    update() {

    };
};