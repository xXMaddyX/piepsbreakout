import Phaser from "phaser";
import Map1 from "../worlds/map1/map1.js";
import Player from "../GameObjects/Player/Player.js";

export default class Level1Scene extends Phaser.Scene {
    constructor() {
        super({key: "Level1Scene"});
    };

    preload() {
        Map1.loadSprites(this);
        Player.loadSprites(this);
    };

    create() {
        const map1 = new Map1(this);
        map1.create();

        this.player = new Player(this);
        this.player.create(map1.xCenter, map1.yCenter + 500);

        this.physics.add.collider(this.player.playerPaddle, map1.leftBoder);
        this.physics.add.collider(this.player.playerPaddle, map1.rightBorder);
    };

    update() {
        this.player.update();
    };
};