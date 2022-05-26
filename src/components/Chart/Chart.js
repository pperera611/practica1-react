import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {

    return (
        <div className="chart">
            {props.dataPoints.map(dp => {
                <ChartBar
                value= {dp.value}
                key = {dp.label}
                maxValue = {null}
                label= {dp.label}
                />
            
                }
            )
            }       
        </div>
    )

}

export default Chart;
