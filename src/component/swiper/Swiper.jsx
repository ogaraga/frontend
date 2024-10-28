import styles from "./Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Swipers() {
  return (
    <>
      <div className={styles.paginationCards}>
        <Swiper
          className={styles.mySwiper}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={false}
          speed={200}
          pagination={{clickable: true}}
          autoplay={true}
          loop={true}
        >
          <SwiperSlide className={styles.span} style = {{backgroundColor: 'aliceblue'}}>
            
              <em>1/4</em>
              <h2 style={{color:'green'}}>Culture: Embrace Diversity</h2>
              <p>
                <b style={{color:'green'}}>Interactive Forums</b>: Engage in Discussions and share
                ideas. <br />
                <b style={{color:'green'}}>Cultural Events</b>: Participate in virtual festivals,
                exhibitions, and workshops. <br />
                <b style={{color:'green'}}>Exclusive Content</b>: Access articles, videos, and podcasts
                from cultural experts.
              </p>
            </SwiperSlide>
           
            <SwiperSlide className={styles.span} style = {{backgroundColor: 'aliceblue'}}>
           
              <em>2/4</em>
              <h2 style={{color:'green'}}>
                <b>Lifestyle</b>: <br />
                Live Your Best Life.
              </h2>
              <p>
                <b style={{color:'green'}}>Wellness Programs</b>: Find Fitness routines, mental health
                tips, and nutrition advice. <br />
                <b style={{color:'green'}}>Style Guides</b>: Stay updated with trends in fashion, beauty
                and food. <br />
                <b style={{color:'green'}}>Hobbies & Interests</b>: Explore new passions and connect
                with like-minded individuals.
              </p>
            </SwiperSlide>
           
            <SwiperSlide className={styles.span} style = {{backgroundColor: 'aliceblue'}}>
           
              <em>3/4</em>
              <h2 style={{color:'green'}}>
                Social: <br />
                Connect and Grow
              </h2>
              <p>
                <b style={{color:'green'}}>Network</b>: Connect with members, sharing your interests and
                professional goals. <br />
                <b style={{color:'green'}}>Communities</b>: Join groups based on your hobbies,
                professions or personal interests. <br />
                <b style={{color:'green'}}>Events</b>: Attend online meetups, webinars and social
                gatherings.
              </p>
           </SwiperSlide>

            <SwiperSlide className={styles.span} style = {{backgroundColor: 'aliceblue'}}>
          
              <em>4/4</em>
              <h2 style={{color:'green'}}>
                Commerce: <br />
                Shop and Succeed
              </h2>
              <p>
                <b style={{color:'green'}}>Marketplace</b>: Discover unique products from artisans and
                small businesses. <br />
                <b style={{color:'green'}}>Digital Banking</b>: Transform your finances and maximize
                your {"money's"} potential. <br />
                <b style={{color:'green'}}>Exclusive Deals</b>: Attend online meetups, webinars and
                social gatherings.
              </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Swipers;
