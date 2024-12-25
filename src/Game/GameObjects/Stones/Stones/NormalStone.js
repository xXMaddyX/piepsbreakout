import Phaser from "phaser";
import { NormalStoneSprite } from "../../../assetLoader/AssetLoader";

const KEYS = {
    NORMAL_STONE_SPRITE: "normal-stone"
}

export default class NormalStone {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        this.HP = 1;
        this.isDestroyed = false;

        this.colliderPool = [];
    };

    static loadSprites(sceneIn) {
        /**@type {Phaser.Scene} */
        let scene = sceneIn;
        scene.load.image(KEYS.NORMAL_STONE_SPRITE, NormalStoneSprite);
    };

    takeDamage() {
        this.HP -= 1;
    };

    checkDead() {
        if (this.HP <= 0) {
            this.colliderPool.forEach(element => {
                element.destroy();
            });
            this.normalStone.destroy();
            this.isDestroyed = true;
        } else {
            return;
        }
    }

    addOverlap(firstObj, secondObj) {
        let collider = this.scene.physics.add.overlap(firstObj, secondObj, () => {
            //@COLLITION SIMPEL INVERT THE BALL VELOCITYS IN BALL
            this.takeDamage();
            this.checkDead();
        });
        this.colliderPool.push(collider);
    }

    create(x, y) {
        this.normalStone = this.scene.physics.add.sprite(x, y, KEYS.NORMAL_STONE_SPRITE);
    };

    update() {

    };
};