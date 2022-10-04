import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Slideshow.module.css";
const Slideshow = (props) => {
  return (
    <Container className={styles.container}>
      <Carousel>
        {props.fadeImages.map((slideImage, index) => (
          <Carousel.Item>
            <img
              className={`d-block w-100 ${styles.image}`}
              src={slideImage.url}
              alt={slideImage.caption}
              key={index + Math.random()}
            />
            <Carousel.Caption style={{background: "rgba(255, 255, 255, 0.4)"}}>
              <h3 style={{color: "black"}}>{slideImage.label}</h3>
              <p style={{color: "black"}}>{slideImage.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slideshow;
