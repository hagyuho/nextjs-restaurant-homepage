import { Hill } from "./hill.js";
class App {
    constructor(){
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    
        this.hills = [
            new Hill('#ff6bea', 0.2, 12),
            new Hill('#ff59c2', 0.5, 8),
            new Hill('#ff4674', 1.4, 6)
        ]

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize()

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 1.5;
        this.canvas.height = this.stageHeight * 1.5;
        this.ctx.scale(1.5,1.5);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth,this.stageHeight);            
        }
    }

    animate(t){
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight)

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx);            
        }
    }
}

window.onload = () => {
    new App()
}