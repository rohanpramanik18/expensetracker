import "./ChartBar.css";

export default function ChartBar(props) {
  let barFillQuantity = "0%";
  if (props.maxValue > 0) {
    barFillQuantity = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillQuantity }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
