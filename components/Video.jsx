import React from 'react'

export default function Video() {
  return (
    <div className="section pt-0 video_box_elements">
    <div className="container relative z-1">
        <div className="row">
            <div className="col-12">
                <div className="video_warp style_2 relative z-1 wow fadeInUp">
                    {/* <img src="assets/images/video_img_2.jpg" alt="img" className="image-fit"> */}
                    <a href="https://www.youtube.com/watch?v=TKnufs85hXk" className="popup-youtube video_btn transform-center justify-content-center d-flex style_2 big">
                        <i className="fas fa-play video_icon bg-thm-color-three pulse-animated"></i>
                    </a>
                </div>
            </div>
        </div>
        {/* <img src="assets/images/elements/element_25.png" alt="element" className="element_1 rotate_elem"> */}
        {/* <img src="assets/images/elements/element_26.png" alt="element" className="element_2 rotate_elem"> */}
        {/* <img src="assets/images/elements/element_27.png" alt="element" className="element_3 rotate_elem"> */}
        <div className="arrows to_up one slideTop">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
        </div>
        <div className="arrows to_up two slideTop">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
        </div>
    </div>
</div>
  )
}
