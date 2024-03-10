function Audio() {
    return ( 
        <><div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="testimonial-card">
              <h2 className="text-center mb-4">Testimonials</h2>
              <p className="testimonial-text">
                In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
              </p>
              <div className="d-flex align-items-center mt-4">
                <div className="audio-player">
                  <button title="g" type="button" className="btn btn-primary btn-sm"><i className="fas fa-play"></i></button>
                  <div className="progress">
                    <div title="h" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>
                <div className="profile-info ms-4">
                  <img src="avatar.jpg" alt="Avatar" className="rounded-circle"/>
                  <div className="profile-details">
                    <h6 className="mb-0">Shubha Nagarajan</h6>
                    <small>Classical Dancer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
     );
}

export default Audio;