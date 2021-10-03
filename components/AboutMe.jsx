import React from 'react';

export default function AboutMe() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title left-align wow fadeInDown">
              <p className="subtitle">
                <i className="fal fa-book"></i>
                About Me
              </p>
              <h3 className="title">
                Top Lessons For Getting You Back On Track.
              </h3>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantiue
                doloremque laudantium totam aperiam eaque quae abillo inventore
                veritatis et quasi architecto beatae vitae dicta
              </p>
            </div>
            <ul className="about_list style_2 mb-xl-30 wow fadeInUp">
              <li>Coach Mentoring</li>
              <li>Career Development</li>
              <li>Ask Consulatncy</li>
              <li>Online Learning</li>
            </ul>
            <a
              href="contact.html"
              className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rectangle mt-3 wow fadeInDown"
            >
              Contact Me
              <i className="fal fa-chevron-right ml-2"></i>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="image_box relative z-1 text-center about_me">
              {/* <img src="assets/images/about/about_me.png" alt="img" className="wow fadeInRight"> */}
              <span className="bg-thm-color-three circle_element"></span>
              {/* <img src="assets/images/elements/element_28.png" alt="element" className="element_1"> */}
              {/* <img src="assets/images/elements/element_29.png" alt="element" className="element_2 rotate_elem"> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
