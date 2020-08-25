import React from 'react'
import styles from '../../styles/Components.module.css'


class Square
{
    constructor(ctx, x, y, w, h, o = 1, i = 0.01)
    {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.o = o;
        this.i = i;
    }

    draw()
    {
        this.ctx.fillStyle = "rgba(0, 0, 0, " + this.o + ")";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

class Background extends React.Component
{
    constructor(props)
    {
        super(props);
        this.canvasRef = React.createRef();
        this.canvas = null;
        this.ctx = null;
        this.af = null;
        this.updateCanvas = this.updateCanvas.bind(this);
        this.updateCanvasSize = this.updateCanvasSize.bind(this);

        this.squares = [];

        this.squareSize = 300;
        this.maxOp = 0.2;
        this.minOp = 0;
        this.incVal = 0.001;
        this.bgColor = "#F1F6F8";

    }

    componentDidMount()
    {
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvasRef.current.getContext('2d');
        window.addEventListener("resize", this.updateCanvasSize);
        this.af = requestAnimationFrame(this.updateCanvas);
        this.updateCanvasSize();
        this.setupCanvas();
    }

    componentWillUnmount()
    {
        window.removeEventListener("resize", this.updateCanvasSize);
        cancelAnimationFrame(this.af);
    }

    clear()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateCanvasSize()
    {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupCanvas()
    {
        for (let i = 0; i < this.canvas.width + this.squareSize; i += this.squareSize)
        {
            for (let r = 0; r < this.canvas.height + this.squareSize; r += this.squareSize)
            {
                let op = Math.random() * (this.maxOp - this.minOp) + this.minOp;
                let inc = Math.random() >= 0.5 ? this.incVal : -this.incVal;
                let s = new Square(this.ctx, i, r, this.squareSize, this.squareSize, op, inc);
                this.squares.push(s);
            }
        }
    }

    updateCanvas()
    {
        this.clear();

        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.squares.length; i++)
        {
            const s = this.squares[i];
            s.o += s.i;

            if (s.o > this.maxOp || s.o < this.minOp)
            {
                s.i *= -1;
            }

            s.draw();

        }

        // Call this function every frame
        this.af = requestAnimationFrame(this.updateCanvas);
    }


    render()
    {
        return( <canvas ref={this.canvasRef} className={styles.canvas} /> )
    }
}

export default Background;