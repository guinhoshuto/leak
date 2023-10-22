interface DayOfCodeProps{
    day: number
    title: string
    pen: string
}

export default function DayOfCode({day, title, pen}: DayOfCodeProps){
    return(
        <div className="dayOfCode">
            <div className="title">
                <h2>Day #{day}</h2> - {title}
            </div>
            <iframe 
                src={pen}
                ></iframe> 
        </div>
    )
}