

  import React from 'react';
  import './table.css';
  // import moment from 'moment';
  
  class Table2 extends React.Component  {
  
  
    
    constructor () {
      super();
      // this.props.hourlyData.lastIntegrationValue
      // setTimeout(()=>{},10000);
    //   this.state2 = {
    //     wmio: this.props.hourlyData.lastIntegrationValue
    // }
  // this.props.hourlyData.lastIntegrationValue;
      this.state = {
        loading: true,
        time_update:"",
        date_update:"",
        datasets: [
          {
            label: "Today",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          },
          {
            label: "24hour",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          },
          {
            label: "Last Week",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          },
          {
            label: "Last Month",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          },
          {
            label: "3 Month",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          },
          {
            label: "6 Month",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          },
          {
            label: "1 Year",
            wmio: "0",
            yai: "0",
            cldp_pie: "0",
            yap: "0",
            otn: "0",
            pie:"0",
			wmic:"0",
            total:""
          }
        ]
      }
      
  
  
  
    }
  //   onTrigger = (event) => {
  //     setTimeout(()=>{},3000);
  //     let lastWeek=this.state.datasets[1].total;
  //     let lastMonth=this.state.datasets[2].total;
  //     let last3Month=this.state.datasets[3].total;
  //     let last6Month=this.state.datasets[4].total;
  //     let lastYear=this.state.datasets[5].total;
  //     this.props.parentCallback(lastWeek+":"+lastMonth+":"+last3Month+":"+last6Month+":"+lastYear);
  //     console.log("triggered")
  //     // event.preventDefault();
  // }
  
  
  
    
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
      // let dayInMilliseconds = 1000 * 60 * 60 * 24;
      // setInterval(function() { alert("foo"); },dayInMilliseconds );
      
      //get the date
  
      //store 24 hour data
    //  let  url1="https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/2g3YKc6xHi";
    //   let url2="https://srikanthsag.int-aws-us.webmethods.io/runflow/run/sync/ngYVLi2tK";
    //   let lastDayStartDate = moment().subtract(1, "days").format("YYYY-MM-DD");
    //   let lastDayEndDate=moment().format("YYYY-MM-DD");
      // console.log(lastWeekStartDate);
      // console.log(lastWeekEndDate);
  
// console.log(this.state.datasets[0]);

        let url = "https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/11ZoohLrHi";
        const response = await fetch(url);
        const data = await response.json();


        let url2 = "https://meteringdashboard.int-aws-us.webmethods.io/runflow/run/sync/2khdSCcuTm";
        const response2 = await fetch(url2);
        const data2 = await response2.json()
    

        console.log(data[0].date_put);

        this.state.time_update=data2.date_put;
        this.state.date_update=data[0].date_put;

        // console.log(this.state.time_update);
        // console.log("dasd");
    //    let  data=response;

        // var dataset = {...this.state.datasets};

    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' ,
    //   'Access-Control-Allow-Origin':'http://127.0.0.1:3000'},
    //     body: JSON.stringify({
    //       "startDate": `${lastDayStartDate}`,
    //       "endDate": `${lastDayEndDate}`
    //       })
    // };
    // fetch('/2wDUSE52Ss', requestOptionsDay)
    //     .then(response => response.json())
    //     .then(data =>{ 
          // this.setState({ postId: data.id })
          let dataset = {...this.state.datasets};
// this.state.time_update=dat.date_put;
  
// setTimeout(()=>{},10000);
dataset[0].wmio=data2.wmio;
dataset[0].cldp_pie=data2.cldp;
dataset[0].yai=data2.yai;
dataset[0].otn=data2.otn;
dataset[0].pie=data2.pie;
dataset[0].yap=data2.yap;
dataset[0].wmic=0;

           data.filter((dat, index)=>{
         /*  
		   if(index===0){

              // console.log("he");
                      if(dat.wmio){
                          // this.state.time_update=dat.date_put;
                          // console.log("he");/
            
                        dataset[0].wmio=data2.wmio;
                      }
                      if(dat.cldp){
                        dataset[0].cldp_pie=data2.cldp;
                      }
                      if(dat.yap){
                        dataset[0].yap=data2.yap;
                      }
                      if(dat.yai){
                          // console.log(dat.yai);
                        dataset[0].yai=data2.yai;
                      }
                      if(dat.otn){
                        dataset[0].otn=data2.otn;
                      }
                      if(dat.pie){
                        dataset[0].pie=data2.pie;
                      }
                  }
				  */
            
          
                console.log(dat)
  if(index===0){

    // console.log("he");
            if(dat.wmio){
                // this.state.time_update=dat.date_put;
                // console.log("he");/
  
              dataset[1].wmio=dat.wmio;
            }
            if(dat.cldp_pie){
              dataset[1].cldp_pie=dat.cldp_pie;
            }
            if(dat.yap){
              dataset[1].yap=dat.yap;
            }
			if(dat.wmic){
              dataset[1].wmic=dat.wmic;
            }
            if(dat.yai){
                //console.log(dat.yai);
              dataset[1].yai=dat.yai;
            }
            if(dat.otn){
              dataset[1].otn=dat.otn;
            }
            if(dat.pie){
              dataset[1].pie=dat.pie;
            }
        }
  

        if(index===1){
            if(dat.wmio){
  
              dataset[2].wmio=dat.wmio;
            }
            if(dat.cldp_pie){
              dataset[2].cldp_pie=dat.cldp_pie;
            }
			if(dat.wmic){
              dataset[2].wmic=dat.wmic;
            }
            if(dat.yap){
              dataset[2].yap=dat.yap;
            }
            if(dat.yai){
              dataset[2].yai=dat.yai;
            }
            if(dat.otn){
              dataset[2].otn=dat.otn;
            }
            if(dat.pie){
              dataset[2].pie=dat.pie;
            }
        }

        if(index===2){
            if(dat.wmio){
  
              dataset[3].wmio=dat.wmio;
            }
            if(dat.cldp_pie){
              dataset[3].cldp_pie=dat.cldp_pie;
            }
			if(dat.wmic){
              dataset[3].wmic=dat.wmic;
            }
            if(dat.yap){
              dataset[3].yap=dat.yap;
            }
            if(dat.yai){
              dataset[3].yai=dat.yai;
            }
            if(dat.otn){
              dataset[3].otn=dat.otn;
            }
            if(dat.pie){
              dataset[3].pie=dat.pie;
            }
        }

        if(index===3){
            if(dat.wmio){
  
              dataset[4].wmio=dat.wmio;
            }
            if(dat.cldp_pie){
              dataset[4].cldp_pie=dat.cldp_pie;
            }
			if(dat.wmic){
              dataset[4].wmic=dat.wmic;
            }
            if(dat.yap){
              dataset[4].yap=dat.yap;
            }
            if(dat.yai){
              dataset[4].yai=dat.yai;
            }
            if(dat.otn){
              dataset[4].otn=dat.otn;
            }
            if(dat.pie){
              dataset[4].pie=dat.pie;
            }
        }

        if(index===4){
            if(dat.wmio){
  
              dataset[5].wmio=dat.wmio;
            }
            if(dat.cldp_pie){
              dataset[5].cldp_pie=dat.cldp_pie;
            }
			if(dat.wmic){
              dataset[5].wmic=dat.wmic;
            }
            if(dat.yap){
              dataset[5].yap=dat.yap;
            }
            if(dat.yai){
              dataset[5].yai=dat.yai;
            //   console.log(dat.yai);
            }
            if(dat.otn){
              dataset[5].otn=dat.otn;
            }
            if(dat.pie){
              dataset[5].pie=dat.pie;
            }
        }

        if(index===5){
            if(dat.wmio){
  
              dataset[6].wmio=dat.wmio;
            }
            if(dat.cldp_pie){
              dataset[6].cldp_pie=dat.cldp_pie;
            }
            if(dat.yap){
              dataset[6].yap=dat.yap;
            }
			if(dat.wmic){
              dataset[6].wmic=dat.wmic;
            }
            if(dat.yai){
              dataset[6].yai=dat.yai;
            //   console.log(dat.yai);
            }
            if(dat.otn){
              dataset[6].otn=dat.otn;
            }
            if(dat.pie){
              dataset[6].pie=dat.pie;
            }
        }
  
// console.log(this.props.hourlyData);
// dataset[0].yap=this.props.hourlyData.lastApiGatewayValue;
        // return 0;
        })



  // console.log(dataset)
        this.setState({ dataset });
        // console.log(this.state.datasets);
    //   });
       
  
  
  
  
    
      // this.onTrigger();//calling after all loaded to pass data to App(parent) to get total count
    }
  
  
  
  
  
  
  
  
  
    
  
  
  
    render() {
    return (
      // table-dark
  //     onLoadedData
  // // = {this.onTrigger}
  <React.Fragment>
  <table className="table table-sm table-striped table-info-outline table-shadow table-hover " style={{ marginBottom:'5px'}} >
    <thead>
      <tr>
        <th scope="col">Product</th>
        <th scope="col">Today</th>
        <th scope="col">Yesterday</th>
        <th scope="col">7 Days</th>
        <th scope="col">30 Days</th>
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
        <td>{ this.state.datasets[6].wmio}</td>
      </tr>
      <tr>
        <th scope="row">webMethods.io API Gateway</th>
        <td>{ this.state.datasets[0].yai}</td>
        <td>{ this.state.datasets[1].yai}</td>
        <td>{ this.state.datasets[2].yai}</td>
        <td>{ this.state.datasets[3].yai}</td>
        <td>{ this.state.datasets[4].yai}</td>
        <td>{ this.state.datasets[5].yai}</td>
        <td>{ this.state.datasets[6].yai}</td>
      </tr>
      <tr>
        <th scope="row">Cloud Container</th>
        <td>{ this.state.datasets[0].cldp_pie}</td>
        <td>{ this.state.datasets[1].cldp_pie}</td>
        <td>{ this.state.datasets[2].cldp_pie}</td>
        <td>{ this.state.datasets[3].cldp_pie}</td>
        <td>{ this.state.datasets[4].cldp_pie}</td>
        <td>{ this.state.datasets[5].cldp_pie}</td>
        <td>{ this.state.datasets[6].cldp_pie}</td>
      </tr>
      <tr>
	     
        <th scope="row">Integration Cloud</th>
        <td>{ this.state.datasets[0].wmic}</td>
        <td>{ this.state.datasets[1].wmic}</td>
        <td>{ this.state.datasets[2].wmic}</td>
        <td>{ this.state.datasets[3].wmic}</td>
        <td>{ this.state.datasets[4].wmic}</td>
        <td>{ this.state.datasets[5].wmic}</td>
        <td>{ this.state.datasets[6].wmic}</td>
      </tr>
      <tr>
        <th scope="row">Others</th>
        <td>{ this.state.datasets[0].pie}</td>
        <td>{ this.state.datasets[1].pie}</td>
        <td>{ this.state.datasets[2].pie}</td>
        <td>{ this.state.datasets[3].pie}</td>
        <td>{ this.state.datasets[4].pie}</td>
        <td>{ this.state.datasets[5].pie}</td>
        <td>{ this.state.datasets[6].pie}</td>
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
    Last Updated <span className="fw-bold"> { this.state.date_update} at { this.state.time_update } UTC</span>
    {/* UTC +5:30 */}
    </div>
    </div>
    </React.Fragment>
    );
  }
  
  
  
  
  }
  
  export default Table2;