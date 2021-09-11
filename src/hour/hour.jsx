

import React from 'react';
import {Line} from 'react-chartjs-2';
import './hour.css';
import moment from 'moment';




 class Hour extends React.Component {


  constructor () {
    super();

  
    this.state = {
      last_invoke:"",
	  local:"",
      // lastIntegrationValue:0,
      // lastApiGatewayValue:0,
      // lastCloudContainerValue:0,
      // LastOtherValues:0,
      loading:true,
      labels: [],
      datasets: [
        {
          label: 'webMethods.io Integration',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#8e3cf7',
          borderColor: '#8e3cf7',
          borderWidth: 2,
          data: []
        },
        {
            label: 'webMethods.io API Gateway',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#5bc0de',
            borderColor: '#5bc0de',
            borderWidth: 2,
            data: []
          },
          {
            label: 'Cloud Container',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#0275d8',
            borderColor: '#0275d8',
            borderWidth: 2,
            data: []
          },
            {
            label: 'Others',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#00264D',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
          },
		    {
            label: 'Integration Cloud',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#9eeae9',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
          }
      ]
    }
    

}


// to pass hourly data to parent App.js
onTrigger = (event) => {
  // setTimeout(()=>{},3000);
  this.props.parentCallback(this.state);
  // console.log("triggered")
  // event.preventDefault();
}



  async componentDidMount() {
    const url = "https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/1QPm7dq5Nm";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(typeof(data));
    var dataset = {...this.state.datasets};



    let label=[];
    let data1=[];
let data2=[];
let data3=[];
let data4=[];
let data5=[];
let dataArray=data.done;
/*
let s = new Date().getHours();
s=s.toString()+":00";
let dateObj=new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
if((month.toString()).length<2){
  month='0'+month;
}
if((day.toString()).length<2){
  day='0'+day;
}
let newdate = month+"/"+day+"/"+year;
*/
//to get today date not time local
// console.log(tempDate);

// tempDate=tempDate[0];

// console.log(tempDate);
/*
 let theDate = new Date(Date.parse(
            `${newdate} ${s} UTC`));
           let timeLocal=theDate.toLocaleString();
             console.log(timeLocal);
             timeLocal=theDate.getHours()+':'+theDate.getMinutes();
s=s+" "+timeLocal+Intl.DateTimeFormat().resolvedOptions().timeZone;
*/

    dataArray.filter((dat)=>{


      // this.state.lastIntegrationValue=dat.wmio;
      // this.state.lastApiGatewayValue=dat.yai;
      // this.state.lastCloudContainerValue=dat.cldp_pie;
      // this.state.LastOtherValues=dat.pie;

this.state.last_invoke=dat.time_invoke;
label.push(dat.time_invoke);
data1.push(dat.wmio);
data2.push(dat.yai);
data3.push(dat.cldp_pie);
data4.push(dat.pie);
data5.push(dat.wmic);

      this.setState({ labels: label});
      // console.log(dataset);
      dataset[0].data=data1; //wmio
      dataset[1].data=data2; //api gateway
      dataset[2].data=data3; //cloud container
      dataset[3].data=data4; //pie
	     dataset[4].data=data5; //wmic
		 console.log("wmic"+data5);
      
      this.setState({ dataset });



    })
	
	let date = moment.utc().format(`YYYY-MM-DD ${this.state.last_invoke}:ss`);
	////date=date+'T'+this.state.last_invoke+':00Z';
	//string to date
	
	//date=Date.parse(date);
//console.log(date, "- now in UTC"); 

let local = moment.utc(date).local().format();
console.log(local, "- UTC now to local"); 
local=local.toString();
console.log(local);
let localtemp=local.split('T');

localtemp=localtemp[1].split(':');
console.log(localtemp);
this.state.local="UTC ("+localtemp[0]+':'+localtemp[1]+' '+Intl.DateTimeFormat().resolvedOptions().timeZone+")";
console.log(this.state.local);

    this.setState({ loading: false});
console.log(this.state.LastOtherValues)



// this.onTrigger();//calling after all loaded to pass data to App(parent) to pass hourly data

  }

  render() {
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }

    return (
      <div className="container-fluid col-lg-6 col-sm-12 col-xl-6 col-xxl-6">
  
      {/* {this.state.component === "Today" ? <Hour />:this.state.component === "Last Week" ? <Week />:<Month />} */}
      <div className="hour-shadow">
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              responsive: true,
          maintainAspectRatio: true,
              text:'Transaction per hour',
              fontSize:15
            },
            legend:{
              display:true,
              position:'right'
            },
            gridLines: {
              drawOnArea: false,
            }
          }}
        />
      </div>
      <div className="row mt-2">
        <div className="col-3 text-muted fst-italic text-start " style={{ fontSize:"12px"}}>
        
       {/* **Time zone is IST 24 hours format  */}
       </div>
       <div className="col-3 text-end text-muted fst-italic text-center" style={{ fontSize:"12px"}}>
       <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight:'5px'}} width="10" height="10" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
      </svg>
         Today(UTC)
         </div>
      {/* <p className="text-muted fst-italic text-end" style={{ fontSize:"12px"}}> */}
      <div className="col-6 text-end text-muted fst-italic" style={{ fontSize:"12px"}}>
      <svg style={{ marginRight:'3px'}} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
        <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
        <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
        <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
      </svg>
      Last Updated  <span className="fw-bold">{ this.state.last_invoke } {this.state.local}</span>
      {/* UTC +5:30 */}
      </div>
      </div>
      
      
      
      
      
            </div>
 
    );
  }
}

export default  Hour ;