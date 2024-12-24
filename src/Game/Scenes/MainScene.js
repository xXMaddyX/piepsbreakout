import Phaser from "phaser"

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({key: "main-scene"});
    };

    initOnStartup() {
        this.scene.launch("Level1Scene");
    };

    changeScene(sceneToStop, newScene) {
        this.scene.stop(sceneToStop);
        this.scene.launch(newScene);
    };

    create() {
        this.initOnStartup();
    };
};