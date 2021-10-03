import React from 'react';

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                {/* <img src="assets/images/icons/icon_1.png" alt="img"> */}
              </div>
              <h5>Exclusive Coach</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <a href="services.html">
                <span>Read More</span>
                <i className="fal fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                {/* <img src="assets/images/icons/icon_2.png" alt="img"> */}
              </div>
              <h5>Creative Minds</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <a href="services.html">
                <span>Read More</span>
                <i className="fal fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".5s">
              <div className="icon">
                {/* <img src="assets/images/icons/icon_3.png" alt="img"> */}
              </div>
              <h5>Video Tutorials</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <a href="services.html">
                <span>Read More</span>
                <i className="fal fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="features_box wow fadeInUp" data-wow-delay=".6s">
              <div className="icon">
                {/* <img src="assets/images/icons/icon_4.png" alt="img"> */}
              </div>
              <h5>Worlds Record</h5>
              <p>Quis autem vel eum reprehenderit quin eavoluptate</p>
              <a href="services.html">
                <span>Read More</span>
                <i className="fal fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
