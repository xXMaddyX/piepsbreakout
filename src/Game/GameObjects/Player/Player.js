import Phaser from "phaser";
import { PlayerSkin1 } from "../../assetLoader/AssetLoader";

const KEYS = {
    PLAYER: "player-paddle"
}

export default class Player  {
    constructor(scene) {
        /**@type {Phaser.Scene} */
        this.scene = scene;
        this.maxLeft = 0;
        this.maxRight = 0;
        this.SPEED = 1300;

        this.MOVE_STATES = {
            HOLD: 0,
            LEFT: -1,
            RIGHT: 1,
        };
        this.currentMoveState = 0;
    };

    static loadSprites(scene) {
        if (!scene.textures.exists(KEYS.PLAYER)) scene.load.image(KEYS.PLAYER, PlayerSkin1);
    };

    setPlayerBorderMax(maxLeft, maxRight) {
        this.maxLeft = maxLeft;
        this.maxRight = maxRight;
    }

    animations() {

    };

    create(x, y) {
        this.playerPaddle = this.scene.physics.add.sprite(x, y, KEYS.PLAYER);
        this.playerPaddle.scale = this.playerPaddle.scale / 3

        this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.SpaceKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    };

    checkCurrentMoveKey() {
        if (this.leftKey.isDown) {
            this.currentMoveState = this.MOVE_STATES.LEFT
        } else if (this.rightKey.isDown) {
            this.currentMoveState = this.MOVE_STATES.RIGHT
        } else {
            this.currentMoveState = this.MOVE_STATES.HOLD
        };
    };

    movementMachine() {
        switch (this.currentMoveState) {
            case this.MOVE_STATES.HOLD:
                this.playerPaddle.setVelocityX(this.MOVE_STATES.HOLD);
                break;

            case this.MOVE_STATES.LEFT:
                this.playerPaddle.setVelocityX(this.MOVE_STATES.LEFT * this.SPEED);
                break;

            case this.MOVE_STATES.RIGHT:
                this.playerPaddle.setVelocityX(this.MOVE_STATES.RIGHT * this.SPEED);
        };
    };

    update(delta, time) {
        this.checkCurrentMoveKey();
        this.movementMachine();
    };
};