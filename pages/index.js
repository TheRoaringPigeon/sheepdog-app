import { Fragment } from "react";
import Head from "next/head";
import Slideshow from "../components/ui/Slideshow";
import PageFocalPoint from "../components/ui/PageFocalPoint";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageCap from "../components/ui/ImageCap";

const carouselSlides = [
  {
    url: "/HomePage-Images/1.jpg",
    caption: "First Slide",
    label: "First Slide Label",
    content: "The birth of a mustache!",
  },
  {
    url: "/HomePage-Images/2.jpg",
    caption: "Second Slide",
    label: "Second Slide Label",
    content: "Look at these two non-mustache bums...",
  },
  {
    url: "/HomePage-Images/3.jpg",
    caption: "Third Slide",
    label: "Third Slide Label",
    content: "This one can't grow one if he tries. :'(",
  },
];

const imageCapSlides = [
  {
    url: "/imageCap-Images/1.jpg",
    caption: "First Cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },

  {
    url: "/imageCap-Images/2.jpg",
    caption: "Second Cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    url: "/imageCap-Images/3.jpg",
    caption: "Third Cap",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Sheepdog Project LLC</title>
        <meta
          name="description"
          content="Meet Daniel Woodward, learn about proper gun use and practice gun safety!"
        />
      </Head>
      <Container className="container-fluid" style={{ maxWidth: "100%" }}>
        <Row className="my-4 px-4">
          <Col sm={8}>
            <Slideshow fadeImages={carouselSlides} />
          </Col>
          <Col sm={4}>
            <h1 class="font-weight-light">Tagline</h1>
            <p class="mt-4">
              Here is some sample text proclaiming why I'm awesome and calling
              you to action; sign up for a class in firearm use and safety now!
            </p>
          </Col>
        </Row>
        <PageFocalPoint />
        <Row className="my-4 px-4">
          <Col sm={4}>
            <ImageCap top={true} pic={imageCapSlides[0]} />
          </Col>
          <Col sm={4}>
            <ImageCap top={false} pic={imageCapSlides[1]} />
          </Col>
          <Col sm={4}>
            <ImageCap top={true} pic={imageCapSlides[2]} />
          </Col>
        </Row>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure? On the other hand, we denounce with righteous
          indignation and dislike men who are so beguiled and demoralized by the
          charms of pleasure of the moment, so blinded by desire, that they
          cannot foresee the pain and trouble that are bound to ensue; and equal
          blame belongs to those who fail in their duty through weakness of
          will, which is the same as saying through shrinking from toil and
          pain. These cases are perfectly simple and easy to distinguish. In a
          free hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best, every pleasure is to
          be welcomed and every pain avoided. But in certain circumstances and
          owing to the claims of duty or the obligations of business it will
          frequently occur that pleasures have to be repudiated and annoyances
          accepted. The wise man therefore always holds in these matters to this
          principle of selection: he rejects pleasures to secure other greater
          pleasures, or else he endures pains to avoid worse pains.
        </p>
      </Container>
    </Fragment>
  );
}

export default HomePage;
