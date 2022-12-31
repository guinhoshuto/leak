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

        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                let w = 50;
                let h = 50;
                let gap = 5;
                let x = 100 + (gap + w)*i;
                let y = 100 + (gap + h)*j;

                let c = Math.round(Math.random())

                context.fillStyle = `rgb(${255*c}, ${255*c}, ${255*c})`;
                context.fillRect(x, y, w, h)
                context.stroke()
            }
        }
        //END

    }, [hmm])

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