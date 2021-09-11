import {Bar} from 'react-chartjs-2';
import React from 'react';
import './month.css';


 class Month extends React.Component {


  
  constructor () {
    super();

    this.state = {
      labels: [],
      datasets: [
        {
          label: 'webMethods.io Integration',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#8e3cf7',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        },
        {
            label: 'webMethods.io API Gateway',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#5bc0de',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
          },
          {
            label: 'Cloud Container',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#0275d8',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
          }
      ]
    }
    



  }

  async componentDidMount() {
    const url = "https://srikanthsag.int-aws-us.webmethods.io/runflow/run/sync/2rEoNwwfWQ";
    const response = await fetch(url);
    const data = await response.json();
    var dataset = {...this.state.datasets};

    let label=[];
    let data1=[];
let data2=[];
let data3=[];
//if one entry then its a json not array so below filter code will give error better to use if else

    data.filter((dat)=>{

label.push(dat.start_date);
data1.push(dat.wmio);
data2.push(dat.yai);
data3.push(dat.cldp_pie);
      this.setState({ labels: label});
      // console.log(dataset);
      dataset[0].data=data1; //wmio
      dataset[1].data=data2; //api gateway
      dataset[2].data=data3; //cloud container
      this.setState({ dataset });



    })
    this.setState({ loading: false});

  }


  render() {
    return (
      <div class="month-shadow">
        <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              responsive: true,
          maintainAspectRatio: true,
              text:'Transaction Last Month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

export default Month;