import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  let valueArr = props.dataPoints.map((month) => month.value);
  let maxVal = Math.max(...valueArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxVal}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}
