import { useEffect, useRef, useState } from "react";

export default function ObsEffect() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [hmm, setHmm] = useState<boolean>(true)
    const [mX, setMX] = useState<number>(0)
    const [mY, setMY] = useState<number>(0)


    useEffect(() => {

        console.log(mX,mY)
        //START
        document.addEventListener('mousemove', event => {
            setMX(event.screenX/100)
            setMY(event.screenY/500)
        })

        const canvas = canvasRef.current;
        if(!canvas) return;

        const context = canvas.getContext('2d')
        if(!context) return;

        context.fillStyle = 'black'
        context.fillRect(0, 0, 1080, 1080)

        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                let w = 50;
                let h = 50;
                // let gap = mX;
                let gap = mX 
                let x = 100 + (gap + w)*i;
                let y = 100 + (gap + h)*j;

                let c = Math.abs(mY*255);
                // let c = Math.round(Math.random())
                // console.log(gap, c*255)

                context.fillStyle = `rgb(${c}, ${c}, ${c})`;
                context.fillRect(x, y, w, h)
                context.stroke()
            }
        }
        //END

    }, [mX, mY])

    setInterval(() => {
        setHmm(!hmm)
    }, 5000)

    return(
        <div>
            <div>
                <canvas ref={canvasRef} width="800" height="800" />

            </div>
            x: {mX}<br/>
            y: {mY}
        </div>
    )
}

//START_README
// oi
// tchau
//END_README