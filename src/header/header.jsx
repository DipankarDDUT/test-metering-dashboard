
import './header.css';
import image from './metering.png';

function Header() {
  return (
    // marginBottom :"70px",
    <div  style={{ right: "0",left: "0"}}>
 
      {/* */}
      {/*  align-items-center justify-content-center justify-content-md-between py-3  mb-1  navbar-fixed */}
    <nav className="shadow-header navbar navbar-expand-md   mb-1 bg-light py-2 px-3 align-items-center justify-content-center justify-content-md-between">
      <a href="/" className="d-flex align-items-center col-md-3 mt-2 mb-md-0 text-dark text-decoration-none">
       <img src={image} style={{ height : "25px", marginTop: "-17px"}}/>
       <p class="text-start text-wrap fw-bolder " style={{ color : "#344c65"}}>Metering Dashboard</p>
        {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="./webMethods.io_Integration_bold.svg"></use></svg> */}
      </a>

      {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-3 link-dark"></a></li>
      </ul> */}

      <div className="col-md-3 text-end">
        {/* <button type="button" className="btn btn-outline-primary me-2 btn-md rmv-rad"></button>
        <button type="button" className="btn btn-primary btn-md rmv-rad"></button> */}
      </div>
    </nav>
  </div>

  );
}

export default Header;
