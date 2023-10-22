import DayOfCode from "../components/DayOfCode"

export default function daysOfCode(){
    return(
        <div>
            <h1>#100DaysOfCode</h1>
            <div className="daysOfCode">
                <DayOfCode 
                    day={1}
                    title="Bar Charts"
                    pen="https://codepen.io/guinhoshuto/embed/OJdJmRr?default-tab=result" />

            </div>
        </div>    
    )
}