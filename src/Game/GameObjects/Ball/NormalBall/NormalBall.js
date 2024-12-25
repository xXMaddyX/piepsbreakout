import Phaser from "phaser";
import { NormalBall } from "../../../assetLoader/AssetLoader.js";

const KEYS = {
    NORMAL_BALL: "normal-ball",
}

export default class NormalBallObj {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        this.DEFAULT_SPEED = 500;
        this.SPEED = this.DEFAULT_SPEED;

        this.BALL_MOVE_X = {
            LEFT: -1,
            RIGHT: 1
        };
        this.currentMoveDirectionX = this.BALL_MOVE_X.RIGHT;

        this.BALL_MOVE_Y = {
            UP: -1,
            DOWN: 1
        }
        this.currentMoveDirectionY = this.BALL_MOVE_Y.DOWN;
    }

    static loadSprites(scene) {
        if (!scene.textures.exists(KEYS.NORMAL_BALL)) scene.load.image(KEYS.NORMAL_BALL, NormalBall);
    }

    create() {
        this.normalBall = this.scene.physics.add.sprite(100, 100, KEYS.NORMAL_BALL);
        this.normalBall.scale = this.normalBall.scale / 6
        this.startBall();
    }

    startBall() {
        
    }

    checkBallMove() {
        switch (this.currentMoveDirectionX) {
            case this.BALL_MOVE_X.LEFT:
                this.normalBall.setVelocityX(this.BALL_MOVE_X.LEFT * this.SPEED);
                break;
            
            case this.BALL_MOVE_X.RIGHT:
                this.normalBall.setVelocityX(this.BALL_MOVE_X.RIGHT * this.SPEED);
                break;
        };

        switch (this.currentMoveDirectionY) {
            case this.BALL_MOVE_Y.DOWN:
                this.normalBall.setVelocityY(this.BALL_MOVE_Y.DOWN * this.SPEED);
                break;

            case this.BALL_MOVE_Y.UP:
                this.normalBall.setVelocityY(this.BALL_MOVE_Y.UP * this.SPEED);
                break;
        }
    }

    update() {
        this.checkBallMove();
    }
}