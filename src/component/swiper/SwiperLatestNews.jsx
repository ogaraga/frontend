import styles from "./SwiperLatestNews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaDotCircle } from "react-icons/fa";

function SwiperLatestNews() {
  return (
    <>
      <div className={styles.paginationCards}>
        <Swiper
          className={styles.mySwiper}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={false}
          speed={1000}
          pagination={{ clickable: true }}
          autoplay={true}
          loop={true}
        >
          <div className={styles.latNews}>
            <h2>Latest news</h2>
            
            <ul>
              <SwiperSlide
                className={styles.span}
                style={{ backgroundColor: "lightblue" }}
              >
                
                <li>
                  <FaDotCircle className={styles.dot}  style={{color:"green"}}/>
                  OPC: <b style={{color: "green"}}>The hit man of OPC was shot dead yesterday.</b>
                </li>
              </SwiperSlide>
              <SwiperSlide
                className={styles.span}
                style={{ backgroundColor: "lightblue" }}
              >
                <li>
                  <FaDotCircle className={styles.dot} />
                  Fatherland:{" "}
                  <b style={{color: "green"}}>
                    The chairman of Fatherland has today arrested the miscreants
                    who buglarised the office and made away with 5 laptops.
                  </b>
                </li>
              </SwiperSlide>

              <SwiperSlide
                className={styles.span}
                style={{ backgroundColor: "lightblue" }}
              >
                <li>
                  <FaDotCircle className={styles.dot} />
                  CBN:{" "}
                  <b style={{color: "green"}}>
                    The Central Bank of Nigeria is considering devaluating the
                    naira
                  </b>
                </li>
              </SwiperSlide>

              <SwiperSlide
                className={styles.span}
                style={{ backgroundColor: "lightblue" }}
              >
                <li>
                  <FaDotCircle className={styles.dot} />
                  ASUU:{" "}
                  <b style={{color: "green"}}>
                    The Academic Staff Union of Universities has approved the
                    graduation of failed students who are partially blind
                  </b>
                </li>
              </SwiperSlide>

              <SwiperSlide
                className={styles.span}
                style={{ backgroundColor: "lightblue" }}
              >
                <li>
                  <FaDotCircle className={styles.dot} />
                  USA:{" "}
                  <b style={{color: "green"}}>
                    The United State of America has threatened to sanction
                    Nigeria over gay bill rejection.
                  </b>
                </li>
              </SwiperSlide>
            </ul>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperLatestNews;
