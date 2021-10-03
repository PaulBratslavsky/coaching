import React from 'react';

export default function Header() {
  return (
    <header className="header header-absolute sticky">
      <div className="container">
        <div className="nav_warp">
          <nav>
            <div className="logo">
              <a href="index.html">
                {/* <Image
                src="assets/images/logo.png"
                alt="logo"
                className="image-fit"
              /> */}
                logo
              </a>
            </div>
            <ul className="main-menu">
              <li className="menu-item menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="index.html">Home v1</a>
                  </li>
                  <li className="menu-item">
                    <a href="index-2.html">Home v2</a>
                  </li>
                  <li className="menu-item">
                    <a href="index-3.html">Home v3</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="menu-item">
                    <a href="about-2.html">About Me</a>
                  </li>
                  <li className="menu-item">
                    <a href="events.html">Events</a>
                  </li>
                  <li className="menu-item">
                    <a href="videos.html">Videos</a>
                  </li>
                  <li className="menu-item">
                    <a href="services.html">Services</a>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Team</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="team.html">Team</a>
                      </li>
                      <li className="menu-item">
                        <a href="team-details.html">Team Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li className="menu-item">
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li className="menu-item">
                    <a href="faqs.html">FAQ's</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Courses</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="courses.html">Courses</a>
                  </li>
                  <li className="menu-item">
                    <a href="course-details.html">Course Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog-list.html">Blog List</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog-masonry.html">Blog Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Portfolio</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="portfolio-grid.html">Portfolio Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio-gallery.html">Portfolio Gallery</a>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio-masonry.html">Portfolio Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="contact.html">Contacts</a>
              </li>
            </ul>
          </nav>
          <div className="head_actions">
            <div className="search_bar relative">
              <input
                type="text"
                name="#"
                placeholder="Search"
                autoComplete="off"
              />
              <i className="fal fa-search"></i>
            </div>
            <button type="button" className="head_trigger desktop_trigger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button type="button" className="head_trigger mobile_trigger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
