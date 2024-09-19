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

import "./Chart.scss";

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
                        label: "Cat² vs Bitcoin",
                        data: [
                            0.005, 0.0045, 0.0048, 0.0052, 0.005, 0.0051,
                            0.0049,
                        ],
                        fill: false,
                        borderColor: "rgba(255,99,132,1)",
                        tension: 0.1,
                    },
                    {
                        label: "Cat² vs Dollar",
                        data: [150, 160, 155, 170, 165, 180, 175],
                        fill: false,
                        borderColor: "rgba(54,162,235,1)",
                        tension: 0.1,
                    },
                    {
                        label: "Cat² vs Euro",
                        data: [140, 150, 145, 160, 155, 170, 165],
                        fill: false,
                        borderColor: "rgba(75,192,192,1)",
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
                text: "Évolution de Cat² par rapport à d'autres devises",
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default Chart;
