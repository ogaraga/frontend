import styles from "./LandingPage.module.css";
import Avater from "../assets/socialnetworking.png";
import Avater2 from "../assets/woman.png";
import Avater4 from "../assets/chef.png";
import Avater5 from "../assets/shopping.png";
import Avater6 from "../assets/finance.png";
import Avater7 from "../assets/tickets.png";
import Avater8 from "../assets/popcornMovie.png";
import ArrowRightUp from "../assets/arrow-up-right-thin.svg";
import image4 from "../assets/one.png";
import image3 from "../assets/two.png";
import image2 from "../assets/three.png";
import image1 from "../assets/four.png";
import image5 from "../assets/five.png";
import image6 from "../assets/six.png";
import image7 from "../assets/seven.png";
import image8 from "../assets/eight.png";
import image9 from "../assets/nine.png";
import image10 from "../assets/ten.png";
import imageOf3 from "../assets/afrocentric_bg.png";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Header from "../header/Header";
import avatabtn from "../assets/members (1).png";
import Swiper from "../swiper/Swiper";
import LandingFooter from "../landingfooter/LandingFooter";
import {useState } from "react";
// import Loader from "../loader/Loader";

function LandingPage() {
  // const [loader,setLoader] = useState(true)
  const navigate = useNavigate();

  //sign in to social networking room onclick
  const handleSocialSignin = () => {
    navigate("/signin");
  };

  //join any community onclick
  const handleExplore = () => {
    navigate("/joinnow");
  };

  // useEffect(()=>{
  //   setTimeout(() => {
  //     // setLoader(!loader)
  //   }, 4000);
  // },[])

  return (
    <>    
    
      <Header />
      <main className={styles.mains}>
        <div className={styles.celebrating}>
          <h4>
            Celebrating Diversity,{" "}
            <b style={{ color: "green" }}>Connecting Communities, </b>Enriching
            lives
          </h4>
          <p className={styles.celep}>
            Join us in building dynamic social networks that honor your heritage
            and foster meaningful connections. Discover a space where you can
            truly be yourself and embrace your community.
          </p>
          <Link to="/joinnow" className={styles.btnjoin}>
            <button type="button" className={styles.Mbtn}>
              Join Community Now
            </button>
          </Link>
          <span className={styles.images}>
            <img src={image1} alt=" image" />
            <img src={image2} alt="image" />
            <img src={image3} alt="image" />
            <img src={image4} alt="" />
            <img src={image5} alt="image" />
            <img src={image6} alt="image" />
            <img src={image7} alt="image" />
            <img src={image8} alt="image" />
            <img src={image9} alt="image" />
            <img src={image10} alt="image" />
          </span>
        </div>
        <div className={styles.communities}>
          <h1>Communities</h1>
          <p>Join communities and conversations that fits your interests.</p>
        </div>
        <h1 className={styles.h1popular}>Popular Communities you can join.</h1>
        <div className={styles.popular}>
          <div className={styles.card1}>
            <FaStar className={styles.star} />
            <h2>African American Community</h2>
            <p>
              A community of people of African descent from all around the
              world.
            </p>
            <span className={styles.avaterbtn}>
              <img src={avatabtn} alt="Image" />
              <button className={styles.cardbtn}>+8M</button>
            </span>
          </div>
          <div className={styles.card2}>
            <FaStar className={styles.star} />
            <h2>Filipino Diaspora Community</h2>
            <p>
              A group of people of Filipino descent from all arround the world
            </p>
            <span className={styles.avaterbtn}>
              <img src={avatabtn} alt="image" />
              <button className={styles.cardbtn}>+6M</button>
            </span>
          </div>
          <div className={styles.card3}>
            <FaStar className={styles.star} />
            <h2>Jamaican Diaspora Community</h2>
            <p>We talk only football here, and it’s mostly banter.</p>
            <span className={styles.avaterbtns}>
              <img src={avatabtn} alt="image" />
              <button className={styles.cardbtn}>+700.2k</button>
            </span>
          </div>
          <div/>
          <div className={styles.explore}>
            <h2 onClick={handleExplore}>Explore other communities</h2>
          </div>
          <div className={styles.deeply}>
            <span className={styles.deepSpan}>deeply rooted</span>
            <h1>Embrace a true cultural experience</h1>
            <p>
              Explore our wide range of products, and get solutions to every of
              your needs
            </p>
          </div>
          <div className={styles.socialContainer}>
            <div className={styles.social} onClick={handleSocialSignin}>
              <div className={styles.imag}>
                <img
                  src={Avater}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Social Networking</h4>
                <p className={styles.psocial}>
                  Stay connected with family and friends. Start a group and join
                  a conversation.
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>

            <div className={styles.social2}>
              <div className={styles.imag}>
                <img
                  src={Avater2}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Travel and Tourism</h4>
                <p className={styles.psocial}>
                  Immerse yourself in Afrocentric destinations.
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>
            <div className={styles.social4}>
              <div className={styles.imag}>
                <img
                  src={Avater4}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Food and Restaurant</h4>
                <p className={styles.psocial}>
                  Indulge in a culinary journey that celebrates the Afrocentric
                  cuisine.
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>
            <div className={styles.social5}>
              <div className={styles.imag}>
                <img
                  src={Avater5}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Shopping</h4>
                <p className={styles.psocial}>
                  Explore Afrocentric craftsmanship through our shopping
                  experiences.
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>
            <div className={styles.social6}>
              <div className={styles.imag}>
                <img
                  src={Avater6}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Money</h4>
                <p className={styles.psocial}>
                  Perform monetary transactions with ease and utmost security.
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>
            <div className={styles.social7}>
              <div className={styles.imag}>
                <img
                  src={Avater7}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Tickets and Events</h4>
                <p className={styles.psocial}>
                  Stay connected and engaged with our vibrant lineup of events
                  and concerts
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>
            <div className={styles.social8}>
              <div className={styles.imag}>
                <img
                  src={Avater8}
                  alt="chat-Image/Avater"
                  className={styles.prod_image}
                />
                <h4 className={styles.h4social}>Videos</h4>
                <p className={styles.psocial}>
                  Indulge in a culinary journey that celebrates the Afrocentric
                  cuisine.
                </p>
                <span className={styles.span}>View More </span>
                <img
                  src={ArrowRightUp}
                  alt="AroowupRight"
                  className={styles.arrowUp}
                />
              </div>
            </div>
        </div>
          <div className={styles.oneStopPlusImage}>
            <div className={styles.oneStop}>
              <h1>
                A one-stop community for your{" "}
                <b style={{ color: "green" }}>authentic cultural</b> <br />
                lifestyle
              </h1>
              <p>
                Building Communities.{" "}
                <b style={{ color: "green" }}>Connecting People.</b>{" "}
              </p>
              <button className={styles.oneStopBtn}>
                <Link to="/joinnow">Become a member</Link>
              </button>
            </div>
            </div>
            <div className={styles.image3}>
              <img src={imageOf3} alt="Three persons" />
            </div>
          </div>        
        <div className={styles.paginationHeading}>
          <h1>
            Why members love <br />
            <b>Fatherland</b>
          </h1>
        </div>
        <Swiper />
      </main>

      <div className={styles.landFoot}>
        <LandingFooter />
      </div>
      
    </>
  );
}

export default LandingPage;
