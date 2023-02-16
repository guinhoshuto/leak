import { useEffect, useRef, useState } from "react";
import { isParenthesizedTypeNode } from "typescript";

export default function BeepBeep() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [hmm, setHmm] = useState<boolean>(true)

    useEffect(() => {
        //START
        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d')
        if(!context) return;

        context.fillStyle = 'white'

        const r = 75

        const colors = [
            '#FFFFFF',
            '#FED132',
            '#236DF6',
            '#FF6641',
        ]

        const possibleCircles = [
            {x: 0, y: r, raio: r, ini: 0, fim: Math.PI/2},
            {x: r, y: 0, raio: r, ini: Math.PI, fim: 3*Math.PI/2},
            {x: r, y: r, raio: r, ini: Math.PI/2, fim: Math.PI},
            {x: 0, y: 0, raio: r, ini: 3*Math.PI/2, fim: 2*Math.PI},
            {x: r/2, y: r/2, raio: r/2, ini: 0, fim: 2*Math.PI},
        ]

        function drawCircle(ctx: any, possibleCircle: any, x: number, y: number){
            ctx.arc(x + possibleCircle.x, y + possibleCircle.y, possibleCircle.raio, possibleCircle.ini, possibleCircle.fim)
        }

        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 7; j++){
                let color = Math.floor(Math.random()*4)
                let circle = Math.floor(Math.random()*5)
                let gap = 5;
                let x = 100 + (gap + r)*i;
                let y = 100 + (gap + r)*j;

                let c = Math.round(Math.random())
                context.beginPath()
                context.fillStyle = colors[color]
                // context.arc(x, y, 25, 0, 2*Math.PI)
                drawCircle(context, possibleCircles[circle], x, y)
                context.fill()
                context.closePath()
                // context.fillRect(x, y, w, h)
            }
        }
        //END

    }, [])

    setInterval(() => {
        setHmm(!hmm)
    }, 1000)

    return(
        <div>
            <canvas ref={canvasRef} width="800" height="800" />
        </div>
    )
}

//START_README
// oi
// tchau
//END_README