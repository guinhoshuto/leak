import { useEffect, useRef, useState } from "react";

export default function Stacks() {
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
        for(let i = 0; i <= 3; i++){
            for(let j = 0; j <= 3; j++){
                // let color =  `rgba(${25*(i+j) + a*5}, ${10*(j+i) + a*5}, ${35*(i+j) + a*5}, ${i+j})`
                for(let k = 0; k <= 7; k++){
                    context.beginPath()
                    context.arc(275-k*25+j*100, 275-k*25+i*100, 70, 0, Math.PI*2)
                    context.fillStyle = `rgb(${135+k*20}, 0, 0)`
                    context.fill()
                    context.strokeStyle = 'white'
                    context.stroke()
                }
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
                <canvas ref={canvasRef} width="1000" height="1000" />
            </div>
        </div>
    )
}

//START_README
// oi
// tchau
//END_README