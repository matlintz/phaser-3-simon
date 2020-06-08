
class MenuScene extends Phaser.Scene {
    private headerText: Phaser.GameObjects.Text;
    constructor() {
        super({
            key: 'MenuScene'
        });
    }

    create(): void {
        console.log('menu scene create');
        
        this.headerText = this.add.text(5, 5, "Simon Hex Memory", { fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize: 64, color: '#ffffff' })
        .setTintFill(0xff0000, 0x00ff00, 0xffffff, 0xffffff);
        this.headerText.setFlipX(false);
        let headerMove = (this.scale.width-(this.headerText.width))
        this.tweens.add({
            targets: this.headerText,
            x: headerMove,
            flipX:true,
            duration: 3000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo:true,
            delay: 500
        });
       
    }

  
}

export default MenuScene