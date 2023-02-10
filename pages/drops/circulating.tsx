import { useEffect, useRef, useState } from "react";

export default function Mermaid() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [hmm, setHmm] = useState<boolean>(true)
    const [mX, setMX] = useState<number>(0)


    useEffect(() => {

        //START

        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d')
        if(!context) return;

        context.fillStyle = 'black'
        const gap = canvas.width/18

        for(let i = 0; i <= 3; i++){
            for(let j = 0; j <= 3; j++){
                let y = 3*gap + i*6*gap
                let x = 3*gap + j*6*gap
                // let color =  `rgba(${25*(i+j) + a*5}, ${10*(j+i) + a*5}, ${35*(i+j) + a*5}, ${i+j})`
                context.beginPath()
                context.arc(x, y, 2*gap, 0, Math.PI*Math.random()*2)
                context.fillStyle = '#ffffff'
                context.fill()
                context.strokeStyle = "#ffffff"
                context.stroke()
                
            }
        }

        //END

    }, [hmm])

    setInterval(() => {
        setHmm(!hmm)
    }, 5000)

    return(
        <div>
            <div>
                <canvas ref={canvasRef} width="800" height="800" />
            </div>
            <p>ref: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc</p>
        </div>
    )
}

//START_README
// oi
// tchau
//END_README