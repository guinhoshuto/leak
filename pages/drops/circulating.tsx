import { useEffect, useRef, useState } from "react";

export default function Circulating() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [hmm, setHmm] = useState<boolean>(true)
    const [mX, setMX] = useState<number>(0)


    useEffect(() => {

        //START

        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d')
        if(!context) return;

        let a = 0
        if(hmm){
            a = 1
        }

        context.fillStyle = 'black'
        for(let i = 0; i <= 6; i++){
            for(let j = 0; j <= 6; j++){
                let color =  `rgba(${25*(i+j) + a*5}, ${10*(j+i) + a*5}, ${35*(i+j) + a*5}, ${i+j})`
                context.beginPath()
                context.arc(75+j*100, 75+i*100, 75, 0, Math.PI*2)
                context.fillStyle = color
                context.fill()
                context.strokeStyle = color
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