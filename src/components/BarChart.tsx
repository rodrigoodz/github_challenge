import { IUser } from "../types";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Followers",
    },
  },
};

const BarChart = ({ users }: { users: IUser[] }) => {
  const data = {
    labels: users.map((user) => user.login),
    datasets: [
      {
        label: "# of followers",
        data: users.map((user) => user.followers),
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
