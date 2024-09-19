"use client";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
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

import "../styles/Chart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            fill: boolean;
            borderColor: string;
            tension: number;
        }[];
    }>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [
                    {
                        label: "Dataset 1",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: "rgba(75,192,192,1)",
                        tension: 0.1,
                    },
                    {
                        label: "Dataset 2",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: "rgba(153,102,255,1)",
                        tension: 0.1,
                    },
                ],
            };
            setChartData(data);
        };

        fetchData();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Line Chart Example",
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default Chart;
