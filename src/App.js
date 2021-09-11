
import React from 'react';
import './App.css';
import Table2 from './table/table2';
import Hour from './hour/hour';
import Week from './week/week';


class App extends React.Component {
  



  constructor (props) {
    super(props);
    // this.state = {
    //   lastIntegrationValue:0,
    //   lastApiGatewayValue:0,
    //   lastCloudContainerValue:0,
    //   LastOtherValues:0,
    // };

    this.onTitleChange = this.onTitleChange.bind(this);

}
// handleCallback = (childData) =>{
//   let getData=childData;
//   this.setState({ lastIntegrationValue: getData.lastIntegrationValue})
//   this.setState({lastApiGatewayValue: getData.lastApiGatewayValue})
//   this.setState({lastCloudContainerValue: getData.lastCloudContainerValue})
//   this.setState({LastOtherValues: getData.LastOtherValues})
//   console.log(this.state);
// }

  
onTitleChange (event) {


  console.log(event);
  const comp = event;//getting the event key 
  this.setState({component: comp});
}




  render() {
  return (

  
    <div className="container-fluid " >
  {/* <Header /> */}
  {/* <div className="hero"
   
   style={{ backgroundImage: `url(${banner})` }}
>
  
  </div> */}
   {/* style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }} */}
 <div className=" text-center hero text-white " style={{ border:'none'}}>
    {/* <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
    <h3 className=" fw-bold ">webMethods.io iPaaS Transactions</h3>
    {/* <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
     
    </div> */}
  </div>
<div className="row">

  {/* <div className="col-md-2"></div> */}

  {/* style={{ height:'90%',overflow:'hidden'}} */}
<main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
{/* <div className="row py-2 mt-3 " style={{ marginTop : '80px'}}>
<div className="col-sm-1"></div>
  <div className="col-sm-2">
    <div className="card card-shadow  ">
      
      <div className="card-body text-center">
        <h5 className="card-title">{this.state.totalLastWeek}</h5>
        <p className="text-muted time-shadow">Last Week</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-2 ">
    <div className="card card-shadow  ">
      <div className="card-body text-center">
        <h5 className="card-title">{this.state.totalLastMonth}</h5>
        <p className="text-muted time-shadow">Last Month</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-2 ">
    <div className="card card-shadow  ">
      <div className="card-body text-center">
        <h5 className="card-title">{ this.state.total3Month}</h5>
        <p className="text-muted time-shadow">3 month</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-2 ">
    <div className="card card-shadow  ">
      <div className="card-body text-center">
        <h5 className="card-title">{ this.state.total6Month}</h5>
        <p className="text-muted time-shadow">6 month</p>
       
      </div>
    </div>
  </div>

  <div className="col-sm-2 ">
    <div className="card card-shadow  ">
      <div className="card-body text-center">
        <h5 className="card-title">{ this.state.totalLastYear}</h5>
        <p className="text-muted time-shadow">1 year</p>
       
      </div>
    </div>
  </div>

  <div className="col-sm-1"></div>
</div> */}


<div className=" row align-items-center py-1">
   <div className="container col-lg-12">
   {/* hourlyData = {this.state} */}
    <Table2 /> 

        </div>
        </div>

    {/* <div className="row mt-3 align-items-center">
      <div className="col-md-10 text-end container">
     

      <DropdownButton id="dropdown-basic-button"  variant="outline-info"  size="sm"  title={this.state.component} onSelect={this.onTitleChange}>
  <Dropdown.Item eventKey="Today">Today</Dropdown.Item>
  <Dropdown.Item eventKey="Last Week">Last Week</Dropdown.Item>
  <Dropdown.Item eventKey="Last Month">Last Month</Dropdown.Item>
</DropdownButton>


</div>
</div> */}


    {/* <div className="container col-xl-12 col-xxl-10 px-4 py-5"> */}
    <div className="row align-items-center py-2">


<Hour parentCallback = {this.handleCallback}  />

<Week />
      {/* <div className="container col-lg-6 px-4 py-5">
        </div> */}
      </div>

    {/* </div> */}
    </main>

    {/* <div className="col-md-2"></div> */}
    </div>
    </div>
  );
}

}

export default App;
