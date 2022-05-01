import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {




  return (
    <div>
      <Bar
        data={{
          //The data to be placed on the horizontal axis
          labels: ['SC', 'CZ', 'KA', 'LT', 'MP', 'PK'],
          datasets: [
            {
              label: 'Percentage of Malic Acid In Alcohol',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
              
            },
           
          ],
        }}
        height={"700"}
        width={"1500"}
        options={{
          //For responsiveness between different devices,this property is turned on here
          responsive:true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
