

  import React from 'react';
import './table.css';
import moment from 'moment';



class Table extends React.Component  {



  
  constructor () {
    super();

    this.state = {
      loading: true,
      datasets: [
        {
          label: "24hour",
          wmio: "",
          yai: "",
          cldp_pie: "",
          yap: "",
          otn: "",
          pie:"",
          total:""
        },
        {
          label: "Last Week",
          wmio: "",
          yai: "",
          cldp_pie: "",
          yap: "",
          otn: "",
          pie:"",
          total:""
        },
        {
          label: "Last Month",
          wmio: "",
          yai: "",
          cldp_pie: "",
          yap: "",
          otn: "",
          pie:"",
          total:""
        },
        {
          label: "3 Month",
          wmio: "",
          yai: "",
          cldp_pie: "",
          yap: "",
          otn: "",
          pie:"",
          total:""
        },
        {
          label: "6 Month",
          wmio: "",
          yai: "",
          cldp_pie: "",
          yap: "",
          otn: "",
          pie:"",
          total:""
        },
        {
          label: "1 Year",
          wmio: "",
          yai: "",
          cldp_pie: "",
          yap: "",
          otn: "",
          pie:"",
          total:""
        }
      ]
    }
    



  }
  onTrigger = (event) => {
    setTimeout(()=>{},3000);
    let lastWeek=this.state.datasets[1].total;
    let lastMonth=this.state.datasets[2].total;
    let last3Month=this.state.datasets[3].total;
    let last6Month=this.state.datasets[4].total;
    let lastYear=this.state.datasets[5].total;
    this.props.parentCallback(lastWeek+":"+lastMonth+":"+last3Month+":"+last6Month+":"+lastYear);
    console.log("triggered")
    // event.preventDefault();
}



  
// async checkLength(input){

// let output;
// // console.log(typeof(input))
// input=input.toString();
//   if(input.length>3 && input.length<6){

//     output=((parseInt(input)/1000).toFixed(2)).toString();
//     output+='K';

//   }
//   else if(input.length>5 && input.length<9){
    
//     output=((parseInt(input)/1000000).toFixed(2)).toString();
//     output+='M';

//   }
//   else if(input.length>9){

//     output=((parseInt(input)/1000000000).toFixed(2)).toString();
//     output+='B';

//   }
// // console.log(output)
// // return output;
// return Promise.resolve(output);
// }
  async componentDidMount() {
    //get the date

    //store 24 hour data
   let  url1="https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/2g3YKc6xHi";
    let url2="https://srikanthsag.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK";
    let lastDayStartDate = moment().subtract(1, "days").format("YYYY-MM-DD");
    let lastDayEndDate=moment().format("YYYY-MM-DD");
    // console.log(lastWeekStartDate);
    // console.log(lastWeekEndDate);

    const requestOptionsDay = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,
    'Access-Control-Allow-Origin':'http://127.0.0.1:3000'},
      body: JSON.stringify({
        "startDate": `${lastDayStartDate}`,
        "endDate": `${lastDayEndDate}`
        })
  };
  fetch('https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK', requestOptionsDay)
      .then(response => response.json())
      .then(data =>{ 
        // this.setState({ postId: data.id })
        let dataset = {...this.state.datasets};

      data.usage.filter((dat)=>{

          if(dat.product==="WMIO"){

            dataset[0].wmio=dat.value;
          }
          if(dat.product==="CLDP_PIE"){
            dataset[0].cldp_pie=dat.value;
          }
          if(dat.product==="YAP"){
            dataset[0].yap=dat.value;
          }
          if(dat.product==="YAI"){
            dataset[0].yai=dat.value;
          }
          if(dat.product==="OTN"){
            dataset[0].otn=dat.value;
          }
          if(dat.product==="PIE"){
            dataset[0].pie=dat.value;
          }


      })
        

      this.setState({ dataset });
    });
     




    //store last week
    let lastWeekStartDate = moment().subtract(7, "days").format("YYYY-MM-DD");
    let lastWeekEndDate=moment().format("YYYY-MM-DD");
    // console.log(lastWeekStartDate);
    // console.log(lastWeekEndDate);

    const requestOptionsWeek = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "startDate": `${lastWeekStartDate}`,
        "endDate": `${lastWeekEndDate}`
        })
  };
  fetch('https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK', requestOptionsWeek)
      .then(response => response.json())
      .then(data =>{ 
        // this.setState({ postId: data.id })
        let dataset = {...this.state.datasets};
        let sum=0;

      data.usage.filter((dat)=>{

          if(dat.product==="WMIO"){

            dataset[1].wmio=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="CLDP_PIE"){
            dataset[1].cldp_pie=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAP"){
            dataset[1].yap=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAI"){
            dataset[1].yai=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="OTN"){
            dataset[1].otn=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="PIE"){
            dataset[1].pie=dat.value;
            // sum=dat.value+sum;
          }


      })
        // setInterval(() => {
          
        // }, 3000);
        // var lastWeekTotal =  this.checkLength(sum);
 
        // this.checkLength(sum).then(function(val) {
        //   dataset[1].total=val;
        //     // console.log(val);
        // });
    // dataset[1].total= this.checkLength(sum);
    // console.log( dataset[1].total);

    // console.log(dataset[1].total);
      this.setState({ dataset });
    });
     
    //last month
    let  lastMonthStartDate = moment().subtract(1, "month").format("YYYY-MM-DD");
    let   lastMonthEndDate=moment().format("YYYY-MM-DD");

    const requestOptionsMonth = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "startDate": `${lastMonthStartDate}`,
        "endDate": `${lastMonthEndDate}`
        })
  };

  // setTimeout(() => {
    
  // }, 30000);
  fetch('https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK', requestOptionsMonth)
      .then(response => response.json())
      .then(data =>{ 
        // this.setState({ postId: data.id })
        let dataset = {...this.state.datasets};
        // let sum=0;
        data.usage.filter((dat)=>{

          if(dat.product==="WMIO"){

            dataset[2].wmio=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="CLDP_PIE"){
            dataset[2].cldp_pie=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAP"){
            dataset[2].yap=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAI"){
            dataset[2].yai=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="OTN"){
            dataset[2].otn=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="PIE"){
            dataset[2].pie=dat.value;
            // sum=dat.value+sum;
          }
          // setInterval(() => {
          
          // }, 10000);
          // var lastMonthTotal = this.checkLength(sum);
 
          // lastMonthTotal.then(function(val) {
          //   dataset[2].total=val;
          //     // console.log(val);
          // });
            // dataset[2].total=this.checkLength(sum);
            // console.log( dataset[2].total);
      this.setState({ dataset });
    });

  });





    //3month month
    let  last3MonthStartDate = moment().subtract(3, "month").format("YYYY-MM-DD");
    let   last3MonthEndDate=moment().format("YYYY-MM-DD");

    const requestOptions3Month = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "startDate": `${last3MonthStartDate}`,
        "endDate": `${last3MonthEndDate}`
        })
  };

  // setTimeout(() => {
    
  // }, 30000);
  fetch('https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK', requestOptions3Month)
      .then(response => response.json())
      .then(data =>{ 
        // this.setState({ postId: data.id })
        let dataset = {...this.state.datasets};
        // let sum=0;
        data.forEach(function (dat, index) {
          // data.usage.filter((dat)=>{

          if(dat.product==="WMIO"){

            dataset[3].wmio=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="CLDP_PIE"){
            dataset[3].cldp_pie=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAP"){
            dataset[3].yap=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAI"){
            dataset[3].yai=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="OTN"){
            dataset[3].otn=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="PIE"){
            dataset[3].pie=dat.value;
            // sum=dat.value+sum;
          }
          // setInterval(() => {
          
          // }, 3000);
          // dataset[3].total=this.checkLength(sum);
          // console.log( dataset[3].total);
      this.setState({ dataset });
    });

  });



  
    //6month month
    let  last6MonthStartDate = moment().subtract(6, "month").format("YYYY-MM-DD");
    let   last6MonthEndDate=moment().format("YYYY-MM-DD");

    const requestOptions6Month = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "startDate": `${last6MonthStartDate}`,
        "endDate": `${last6MonthEndDate}`
        })
  };

  // setTimeout(() => {
    
  // }, 30000);
  fetch('https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK', requestOptions6Month)
      .then(response => response.json())
      .then(data =>{ 
        // this.setState({ postId: data.id })
        let dataset = {...this.state.datasets};
        // let sum=0;

        data.usage.filter((dat)=>{

          if(dat.product==="WMIO"){

            dataset[4].wmio=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="CLDP_PIE"){
            dataset[4].cldp_pie=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAP"){
            dataset[4].yap=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAI"){
            dataset[4].yai=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="OTN"){
            dataset[4].otn=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="PIE"){
            dataset[4].pie=dat.value;
            // sum=dat.value+sum;
          }
          // setInterval(() => {
          
          // }, 3000);
          // dataset[4].total=this.checkLength(sum);
          // console.log( dataset[4].total);
      this.setState({ dataset });
    });

  });


   
    //1 year
    let  lastYearStartDate = moment().subtract(1, "year").format("YYYY-MM-DD");
    let   lastYearEndDate=moment().format("YYYY-MM-DD");

    const requestOptionsYear = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "startDate": `${lastYearStartDate}`,
        "endDate": `${lastYearEndDate}`
        })
  };

  // setTimeout(() => {
    
  // }, 30000);
  fetch('https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK', requestOptionsYear)
      .then(response => response.json())
      .then(data =>{ 
        // this.setState({ postId: data.id })
        // let sum=0;
        let dataset = {...this.state.datasets};

        data.usage.filter((dat)=>{

          if(dat.product==="WMIO"){

            dataset[5].wmio=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="CLDP_PIE"){
            dataset[5].cldp_pie=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAP"){
            dataset[5].yap=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="YAI"){
            dataset[5].yai=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="OTN"){
            dataset[5].otn=dat.value;
            // sum=dat.value+sum;
          }
          if(dat.product==="PIE"){
            dataset[5].pie=dat.value;
            // sum=dat.value+sum;
          }
          // setInterval(() => {
          
          // }, 3000);
          // dataset[5].total=this.checkLength(sum);
          // console.log( dataset[5].total);
      this.setState({ dataset });
    });
    this.onTrigger();//calling after all loaded to pass data to App(parent) to get total count
  });









  }



  render() {
  return (
    // table-dark
//     onLoadedData
// // = {this.onTrigger}
<React.Fragment>
<table className="table table-striped table-info-outline table-shadow table-hover" style={{ marginBottom:'5px'}} >
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Yesterday</th>
      <th scope="col">Last Week</th>
      <th scope="col">Last Month</th>
      <th scope="col">3 Months</th>
      <th scope="col">6 Months</th>
      <th scope="col">1 Year</th>

    </tr>
  </thead>
  <tbody >
    <tr>
      <th scope="row">webMethods.io Integration</th>
      <td>{ this.state.datasets[0].wmio}</td>
      <td>{ this.state.datasets[1].wmio}</td>
      <td>{ this.state.datasets[2].wmio}</td>
      <td>{ this.state.datasets[3].wmio}</td>
      <td>{ this.state.datasets[4].wmio}</td>
      <td>{ this.state.datasets[5].wmio}</td>
    </tr>
    <tr>
      <th scope="row">webMethods.io API Gateway</th>
      <td>{ this.state.datasets[0].yai}</td>
      <td>{ this.state.datasets[1].yai}</td>
      <td>{ this.state.datasets[2].yai}</td>
      <td>{ this.state.datasets[3].yai}</td>
      <td>{ this.state.datasets[4].yai}</td>
      <td>{ this.state.datasets[5].yai}</td>
    </tr>
    <tr>
      <th scope="row">Cloud Container</th>
      <td>{ this.state.datasets[0].cldp_pie}</td>
      <td>{ this.state.datasets[1].cldp_pie}</td>
      <td>{ this.state.datasets[2].cldp_pie}</td>
      <td>{ this.state.datasets[3].cldp_pie}</td>
      <td>{ this.state.datasets[4].cldp_pie}</td>
      <td>{ this.state.datasets[5].cldp_pie}</td>
    </tr>
    <tr>
      <th scope="row">Other Integration Transactions</th>
      <td>{ this.state.datasets[0].pie}</td>
      <td>{ this.state.datasets[1].pie}</td>
      <td>{ this.state.datasets[2].pie}</td>
      <td>{ this.state.datasets[3].pie}</td>
      <td>{ this.state.datasets[4].pie}</td>
      <td>{ this.state.datasets[5].pie}</td>
    </tr>
      {/* { new Date('dd-mm-yyyy')} */}
  </tbody>
</table>
    <div className="row">
    <div className="col-6">
  {/*   
   **Time zone is IST 24 hours format  */}
   </div>
  
  {/* <p className="text-muted fst-italic text-end" style={{ fontSize:"12px"}}> */}
  <div className="col-6 text-end text-muted fst-italic" style={{ fontSize:"12px"}}>
  <svg style={{ marginRight:'3px'}} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
  </svg>
  Last Updated <span className="fw-bold">24:23:34 ...</span>
  </div>
  </div>
  </React.Fragment>
  );
}




}

export default Table;