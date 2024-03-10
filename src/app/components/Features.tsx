import { IoIosPeople } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

function Features() {
    return ( 
        <div className="container my-5">
    <div className="row">
      <div className="col-md-6">
        <div className="card p-4">
          <div className="d-flex align-items-center mb-3">
            <span className="icon-circle bg-purple mr-3"><i className="fas fa-users"></i></span>
            <div style={{fontSize:'25px', color:'purple'}}><IoIosPeople/></div>
            <h3 className="mb-0">People</h3>
          </div>
          <p className="mb-4">Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.</p>
          <button className="btn btn-custom">Connect</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card p-4">
          <div className="d-flex align-items-center mb-3">
            <span className="icon-circle bg-green mr-3"><i className="fas fa-map-marker-alt"></i></span>
            <div style={{fontSize:'25px', color:'pink'}}><MdLocationOn/></div>
            <h3 className="mb-0">Place</h3>
          </div>
          <p className="mb-4">Find a className, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
          <button className="btn btn-custom">Meet up</button>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6">
        <div className="card p-4">
          <div className="d-flex align-items-center mb-3">
            <span className="icon-circle bg-red mr-3"><i className="fas fa-shopping-basket"></i></span>
            <div style={{fontSize:'25px', color:'green'}}><FaShoppingBag/></div>
            <h3 className="mb-0">Product</h3>
          </div>
          <p className="mb-4">Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.</p>
          <button className="btn btn-custom ">Get it</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card p-4">
          <div className="d-flex align-items-center mb-3">
            <span className="icon-circle bg-blue mr-3"><i className="fas fa-calendar-alt"></i></span>
            <div style={{fontSize:'25px', color:'blue'}}><MdOutlineDateRange/></div>
            <h3 className="mb-0">Program</h3>
          </div>
          <p className="mb-4">Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
          <button className="btn btn-custom">Attend</button>
        </div>
      </div>
    </div>
  </div>
     );
}

export default Features;