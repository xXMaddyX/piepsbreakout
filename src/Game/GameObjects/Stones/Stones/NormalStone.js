import Phaser from "phaser";
import NormalBallObj from "../../Ball/NormalBall/NormalBall.js";
import { NormalStoneSprite } from "../../../assetLoader/AssetLoader.js";


export default class NormalStone {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        this.HP = 1;
        this.isDestroyed = false;
        this.iscollidet = false;

        this.colliderPool = [];

    };

    static loadSprites(sceneIn) {
        /**@type {Phaser.Scene} */
        let scene = sceneIn;
        this.spriteRef = scene.load.image("normal-stone", NormalStoneSprite);
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

    addOverlapBall(firstObjRef) {
        /**@type {NormalBallObj} */
        this.ballRef = firstObjRef;
        let collider = this.scene.physics.add.overlap(this.ballRef.normalBall, this.normalStone, () => {
            if (!this.iscollidet) {
                this.iscollidet = true;
                this.ballRef.invertBallVelocityDirection();
                this.ballRef.changeSpeedRandom();
                this.takeDamage();
                this.checkDead();
                this.scene.time.delayedCall(100, () => {
                    this.iscollidet = false;
                });
            };
        });
        this.colliderPool.push(collider);
    }

    create(x, y, scale, depth) {
        console.log(this.scene.textures.exists("normal-stone"))
        this.normalStone = this.scene.physics.add.sprite(x, y, "normal-stone");
        this.normalStone.setScale(scale);
        this.normalStone.setDepth(depth);
    };

    update() {

    };
};