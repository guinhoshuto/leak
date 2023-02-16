import { useEffect, useRef, useState } from "react";
import { isParenthesizedTypeNode } from "typescript";

export default function Halftone() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [hmm, setHmm] = useState<boolean>(true)

    useEffect(() => {
        //START
        const color1 = "#92ced6"
        const color2 = "#ce96be"

        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d')
        if(!context) return;

        context.fillStyle = color2
        context.fillRect(0, 0, canvas.width, canvas.height);
        const t = 5

        for(let i = 0; i < canvas.width/t; i++){
            for(let j = 0; j < canvas.height/t; j++){
                context.beginPath()
                context.fillStyle = color1
                context.arc(i*t, j*t, i*0.02, 0, 2*Math.PI)
                context.fill()
            }
        }
        //END
        // context.font = "100px Arial";
        // context.fillText("コンビニ", canvas.width/2, canvas.height/2);

    }, [])

    // setInterval(() => {
    //     setHmm(!hmm)
    // }, 1000)

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