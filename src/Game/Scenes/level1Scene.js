import Phaser from "phaser";
import Map1 from "../worlds/map1/map1.js";
import Player from "../GameObjects/Player/Player.js";
import UserInterface from "../UI/UserInterface.js";
import NormalBallObj from "../GameObjects/Ball/NormalBall/NormalBall.js";

export default class Level1Scene extends Phaser.Scene {
    constructor() {
        super({key: "Level1Scene"});
    };

    preload() {
        Map1.loadSprites(this);
        Player.loadSprites(this);
        NormalBallObj.loadSprites(this);
    };

    create() {
        this.map1 = new Map1(this);
        this.map1.create();

        //ADD PLAYER----------------------------->
        this.player = new Player(this);
        this.player.create(this.map1.xCenter, this.map1.yCenter + 500);
        this.addPlayerWorldCollider();
        
        //ADD START BALL------------------------->
        this.normalBall = new NormalBallObj(this);
        this.normalBall.create();
        this.player.addBallRef(this.normalBall);
        this.addNormalBallCollider();

        this.UI = new UserInterface(this);
        this.UI.create();
        this.UI.setPlayerPaddelRef(this.player);
    };

    addPlayerWorldCollider() {
        this.physics.add.collider(this.player.playerPaddle, this.map1.leftBoder);
        this.physics.add.collider(this.player.playerPaddle, this.map1.rightBorder);
    };

    addNormalBallCollider() {
        this.physics.add.overlap(this.normalBall.normalBall, this.map1.leftBoder, () => {
            this.normalBall.currentMoveDirectionX = this.normalBall.BALL_MOVE_X.RIGHT;
            this.normalBall.playSound("ball-hit-wall");
        });
        this.physics.add.overlap(this.normalBall.normalBall, this.map1.rightBorder, () => {
            this.normalBall.currentMoveDirectionX = this.normalBall.BALL_MOVE_X.LEFT;
            this.normalBall.playSound("ball-hit-wall");
        })

        this.physics.add.overlap(this.player.playerPaddle, this.normalBall.normalBall, () => {
            this.normalBall.currentMoveDirectionY = this.normalBall.BALL_MOVE_Y.UP;
            this.normalBall.playSound("ball-hit-stone");
        });
        this.physics.add.overlap(this.normalBall.normalBall, this.map1.topBorder, () => {
            this.normalBall.currentMoveDirectionY = this.normalBall.BALL_MOVE_Y.DOWN;
            this.normalBall.playSound("ball-hit-wall");
        })
    }

    update() {
        this.map1.update();
        this.player.update();
        this.normalBall.update();
    };
};