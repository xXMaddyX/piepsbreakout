import Phaser from "phaser";
import Player from "../../Player/Player.js";
import NormalStone from "../Stones/NormalStone.js";


export default class StoneGenerator {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;

        this.StoneTypes = {
            NORMAL: "normal-stone",
            NORMAL_RED: "red-stone"
        };
    };

    setPlayerRef(playerRefIn) {
        /**@type {Player} */
        this.player = playerRefIn;
    };

    generateStoneMap(stoneMap, stoneType) {
        /**@type {Array} */
        let map = stoneMap;
        let stoneArr = [];
        switch (stoneType) {
            case this.StoneTypes.NORMAL:
                map.forEach(({/* VORERST NUR PLATZHALTER*/}) => {
                    /**@type {NormalStone} */
                    let newStone = new this.StoneTypes.NORMAL(this.scene);
                    newStone.collider = this.scene.physics.overlap();
                    newStone.create();

                });
                break;
        }
    }
}