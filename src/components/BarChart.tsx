import { IUser } from "../types";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const ChartWrapper = styled.div`
  background-color: #2c3e50;
  border-radius: 1rem;
  width: 80%;
  margin: 2rem auto;
`;

const options = {
  indexAxis: "y",
  legend: {
    fontColor: "red",
  },
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
      color: "white",
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
        backgroundColor: "rgb(255, 255, 255)",
      },
    ],
  };

  return (
    <ChartWrapper>
      <Bar data={data} options={options} />
    </ChartWrapper>
  );
};

export default BarChart;
