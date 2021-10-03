import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_top section-padding">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="ft_widget ft_about wow fadeInDown">
                <a href="index.html" className="logo">
                  {/* <img src="assets/images/logo.png" alt="logo" className="image-fit"> */}
                </a>
                <ul className="info">
                  <li>
                    <a href="#">256 Elizaberth Ave Str, Brooklyn, CA, 90025</a>
                  </li>
                  <li>
                    <a href="tel:+01234567899">+012 (345) 678 99</a>
                  </li>
                  <li>
                    <a href="mailto:example@example.com">example@example.com</a>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ft_widget ft_menu wow fadeInUp">
                <h6 className="ft-title">Our Coach</h6>
                <ul>
                  <li>
                    <a href="#">Basic Life Coach</a>
                  </li>
                  <li>
                    <a href="#">Advance Helath Coach</a>
                  </li>
                  <li>
                    <a href="#">Advance Business Coach</a>
                  </li>
                  <li>
                    <a href="#">Basic Learn English</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ft_widget ft_menu wow fadeInDown">
                <h6 className="ft-title">About Us</h6>
                <ul>
                  <li>
                    <a href="#">Latest Courses</a>
                  </li>
                  <li>
                    <a href="#">Mission And Vision</a>
                  </li>
                  <li>
                    <a href="#">Our Approach</a>
                  </li>
                  <li>
                    <a href="#">Exclusive Advisors</a>
                  </li>
                  <li>
                    <a href="#">Join a Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ft_widget ft_apps wow fadeInUp">
                <h6 className="ft-title">Apps Download</h6>
                <p className="mb-xl-20">
                  Sed ut perspici unde omnis iste natus error sit voluptatem
                  accus
                </p>
                <a href="#" className="app_img">
                  {/* <img src="assets/images/google_store.jpg" alt="img"> */}
                </a>
                <a href="#" className="app_img">
                  {/* <img src="assets/images/apple_store.jpg" alt="img"> */}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="mb-0">
            © 2021 <a href="#">Wellco</a>. All Rights Reserved, Design By
            Webtend
          </p>
        </div>
      </div>
    </footer>
  );
}
