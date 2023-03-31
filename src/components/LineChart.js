import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const OPTIONS = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		y: {
			ticks: {
				callback: function (value, index, values) {
					return "₹ " + value.toLocaleString();
				},
				color: "rgb(255,255,255)",
				font: {
					size: 14,
				},
			},
			grid: {
				display: false,
			},
		},
		x: {
			ticks: {
				color: "rgb(255,255,255)",
				font: {
					size: 14,
				},
			},
			grid: {
				display: false,
			},
		},
	},
};

function LineChart({
	data,
	labels,
	selectedCurrency,
}) {
	if (!selectedCurrency) {
		return null;
	}
	const chartData = {
		labels: labels,
		datasets: [
			{
				label: selectedCurrency.name,
				data: data,
				borderColor: "rgb(161,63,128)",
			},
		],
	};

	return (
		<div className="lineChart">
			<div className="title">
				<h3>{selectedCurrency.name}</h3>
				{selectedCurrency && selectedCurrency.price && (
					<h3>₹{selectedCurrency.price.toFixed(2)}</h3>
				)}

			</div>
			<Line
				options={OPTIONS}
				data={chartData}
			/>
		</div>
	);
}

export default LineChart;
