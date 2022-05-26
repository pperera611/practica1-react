import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dp) => (
                <ChartBar
                value= {dp.value}
                key = {dp.label}
                maxValue = {totalMaximum}
                label= {dp.label}
                />
            
               ))}
                              
        </div>
    );

};

export default Chart;
