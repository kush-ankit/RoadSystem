import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>RoadMap Portal</title>
        <meta property="og:title" content="Feedbox Mobile App1" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/images-200h.jpg"
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <main className="home-main">
        <div className="section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span className="heading1">
                  The only
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text02">platform you need to track</span>
                <span className="heading1">
                  {' '}
                  your daily routes and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text04 heading1">
                  to avoid Road accidents.
                </span>
              </h1>
              <div className="home-container01">
                <div className="home-container02">
                  <button className="home-button button">Register</button>
                </div>
                <button className="home-button1 button">Log-in</button>
              </div>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    Easiest way to find the best roads.
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon2"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text06">
                    It help us to avoid huge traffic and road accidents.
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon4"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text07">
                    Over 1000+ highly recommended customer reviews.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/main%20image-700w.jpg"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text08">
              <span className="heading2">
                Get all Your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text10">Route Maps </span>
              <span className="home-text11">and</span>
              <br className="home-text12"></br>
              <span className="home-text13">check safety measures</span>
              <span className="heading2">
                {' '}
                within few seconds and fed up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="heading2">with important news of the city.</span>
            </h2>
            <div className="home-cards-container">
              <FeatureCard image_src="/playground_assets/stars-200h.png"></FeatureCard>
              <FeatureCard
                text1="See how &gt;"
                heading="Follow favorite topics"
                image_src="/playground_assets/hearth-200h.png"
              ></FeatureCard>
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon6">
                <path d="M731.429 402.286c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM804.571 402.286c0 48-30.286 88-73.143 103.429v225.714c0 121.143-114.857 219.429-256 219.429s-256-98.286-256-219.429v-75.429c-124-15.429-219.429-106.857-219.429-217.143v-292.571c0-20 16.571-36.571 36.571-36.571 3.429 0 6.286 0.571 9.143 1.143 12.571-22.286 36.571-37.714 64-37.714 40.571 0 73.143 32.571 73.143 73.143s-32.571 73.143-73.143 73.143c-13.143 0-25.714-4-36.571-10.286v229.714c0 80.571 82.286 146.286 182.857 146.286s182.857-65.714 182.857-146.286v-229.714c-10.857 6.286-23.429 10.286-36.571 10.286-40.571 0-73.143-32.571-73.143-73.143s32.571-73.143 73.143-73.143c27.429 0 51.429 15.429 64 37.714 2.857-0.571 5.714-1.143 9.143-1.143 20 0 36.571 16.571 36.571 36.571v292.571c0 110.286-95.429 201.714-219.429 217.143v75.429c0 80.571 82.286 146.286 182.857 146.286s182.857-65.714 182.857-146.286v-225.714c-42.857-15.429-73.143-55.429-73.143-103.429 0-60.571 49.143-109.714 109.714-109.714s109.714 49.143 109.714 109.714z"></path>
              </svg>
              <FeatureCard
                text1="Learn more &gt;"
                heading="Read your emails"
                image_src="/playground_assets/mail-200h.png"
              ></FeatureCard>
              <FeatureCard
                text1="Learn more &gt;"
                heading="Read newspapers"
                image_src="/playground_assets/paper-200h.png"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div className="home-container03">
          <div className="home-container04">
            <span className="home-text16">
              <span>   </span>
              <span>
                List of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text19">M</span>
              <span className="home-text20">ost</span>
              <span className="home-text21"> Damaged Roads</span>
              <span> in Your Local</span>
            </span>
            <div
              data-thq="thq-dropdown"
              className="home-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="home-dropdown-toggle"
              ></div>
              <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                <li data-thq="thq-dropdown" className="home-dropdown list-item">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle1"
                  >
                    <span className="home-text23">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle2"
                  >
                    <span className="home-text24">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="home-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle3"
                  >
                    <span className="home-text25">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="list">
              <li className="home-li list-item"></li>
              <li className="list-item"></li>
            </ul>
            <div className="home-container05">
              <div className="home-container06">
                <img
                  src="/playground_assets/placeholder-200h.png"
                  alt="image"
                  className="home-image01"
                />
                <span className="home-text26">
                  <span>
                    21.748732,83.823
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text28">(</span>
                  <span className="home-text29">Polytechnic Road</span>
                  <span className="home-text30">)</span>
                </span>
              </div>
            </div>
            <div className="home-container07">
              <div className="home-container08">
                <img
                  src="/playground_assets/placeholder-200h.png"
                  alt="image"
                  className="home-image02"
                />
                <span className="home-text31">
                  <span>26.893073, 81.072970 (</span>
                  <span className="home-text33">NH10</span>
                  <span>)</span>
                </span>
              </div>
            </div>
            <div className="home-container09">
              <div className="home-container10">
                <img
                  src="/playground_assets/placeholder-200h.png"
                  alt="image"
                  className="home-image03"
                />
                <span className="home-text35">
                  <span>23.762182,33.71736(</span>
                  <span className="home-text37">HazratGanj</span>
                  <span>)</span>
                </span>
              </div>
            </div>
            <div className="home-container11">
              <img
                src="/playground_assets/placeholder-200h.png"
                alt="image"
                className="home-image04"
              />
              <span className="home-text39">
                <span>11.72623,41.738163(</span>
                <span className="home-text41">Alambagh</span>
                <span>)</span>
              </span>
            </div>
            <div className="home-container12">
              <div className="home-container13">
                <img
                  src="/playground_assets/placeholder-200h.png"
                  alt="image"
                  className="home-image05"
                />
                <span className="home-text43">
                  <span>29.737183,88.782223(</span>
                  <span className="home-text45">Gomti Nagar ext.</span>
                  <span>)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/map-1200w.jpg"
                className="home-image06"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text47 heading2">
                <span>
                  Your favorite places and routes at your fingertips.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text49">Always.</span>
              </h1>
              <span className="home-text50 content-Light">
                <span>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Velit officia consequat duis enim velit mollit.
                </span>
                <br></br>
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text53">
                <span className="home-text54 heading2">
                  Helps you In delivering the instant service
                </span>
                <span className="heading2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text56">in case of any emergency.</span>
              </h1>
              <span className="home-text57 content-Light">
                <span>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Velit officia consequat duis enim velit mollit.
                </span>
                <br></br>
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
            <div className="home-image-container2">
              <img
                alt="image"
                src="/playground_assets/hospital-1200w.jpg"
                className="home-image07"
              />
            </div>
          </div>
        </div>
        <div className="home-section-four section-container">
          <div className="home-max-width4 max-content-container">
            <h2 className="home-text60">
              <span className="heading2">Public Reviews </span>
              <span className="home-text62">You must see</span>
              <span className="home-text63">.</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              image_src="/playground_assets/vector%202-700w.png"
              Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              Testimonial2="Super highly recommended!”"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              image_src="/playground_assets/vector%202%20%5B2%5D-700w.png"
              Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              rootClassName="slide-root-class-name1"
            ></Slide>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width5 max-content-container">
            <div className="home-heading-container">
              <h2 className="home-text64">
                <span className="heading2">
                  If you love youself and your family, you’ll
                </span>
                <span className="heading2">
                  simply love
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text67">Road Map.</span>
              </h2>
              <span className="content-Light">
                <span>
                  Go to App Store, install Feedbox and start changing your
                  reading habits to
                </span>
                <span className="home-text70"></span>
                <span>day!</span>
              </span>
            </div>
            <div className="home-get-the-app">
              <img
                alt="image"
                src="/playground_assets/frame-1200w.png"
                className="home-image08"
              />
              <img
                alt="image"
                src="/playground_assets/frame%2034-200h.png"
                className="home-image09"
              />
            </div>
            <div className="home-cards-container1">
              <GridCard image_src="/playground_assets/vector%203-200h.png"></GridCard>
              <GridCard
                text="Follow your friends"
                image_src="/playground_assets/vector%203%20%5B1%5D-200h.png"
              ></GridCard>
              <GridCard
                text="Declutter your life inbox"
                image_src="/playground_assets/vector%203%20%5B2%5D-200h.png"
              ></GridCard>
              <GridCard
                text="Less apps, more space"
                image_src="/playground_assets/vector%203%20%5B3%5D-200h.png"
              ></GridCard>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
