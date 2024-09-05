"use client";
import { Container, Row, Col } from "react-bootstrap";
import MainTitle from "../../common/main-title";
import CustomImage from "../../common/custom-image";

const Banner = (props) => {
  const { heading, subHeading, content, bannerImage } = props;

  return (
    <section className="banner-section">
      <Container fluid className="px-0">
        <Row>
          {/* <Col lg={6} md={12} sm={12} xs={12}>
            <MainTitle className="main_header" level={1}>{heading}</MainTitle>
            <MainTitle level={4}>{subHeading}</MainTitle>
            <p>{content}</p>
          </Col> */}
          <Col lg={12} md={12} sm={12} xs={12}>
          <MainTitle className="main_header" level={1}>Banner</MainTitle>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
