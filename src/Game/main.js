import Phaser from "phaser";
import MainScene from "./Scenes/MainScene.js";

export default new Phaser.Game({
    type: Phaser.WEBGL,
    pixelArt: true,
    scale: {
        mode: Phaser.DOM.RESIZE,
        width: 1920,
        height: 1080,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0,
            //debug: true,
        }
    },
    scene: [
        MainScene,
    ],
});