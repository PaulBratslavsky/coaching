import React from 'react';

export default function Banner() {
  return (
    <div className="banner relative z-1">
      {/* <img src="assets/images/banner/element_1.png" class="element_1" alt="Element">
    <img src="assets/images/banner/element_line.png" class="element_line" alt="Element Line">
   */}{' '}
      <div className="transform-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text_box">
                <h1 className="title wow fadeInUp" data-wow-delay=".30ms">
                  <span>Modern Life</span> Coach School Podcast
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".40ms">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accan tium doloremque laudantium totam rem aperiam
                </p>
                <a
                  href="about-2.html"
                  className="thm-btn bg-thm-color-two thm-color-two-shadow btn-rounded mr-4 mb-4 wow fadeInRight"
                  data-wow-delay=".50ms"
                >
                  Get Coach <i className="fal fa-chevron-right ml-2"></i>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  className="video_btn video_text popup-youtube mb-4  wow fadeInRight"
                  data-wow-delay=".70ms"
                >
                  <i className="fas fa-play video_icon bg-thm-color-three"></i>
                  <span>Watch Videos</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="image_box relative wow fadeInRight"
                data-wow-delay=".80ms"
              >
                {/* <img src="assets/images/banner/banner_img.png" alt="img" class="image-fit"> */}
                <span className="bg-thm-color-three circle_element"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line container"></div>
    </div>
  );
}
