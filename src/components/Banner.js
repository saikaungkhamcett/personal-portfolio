import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/lotus-pose.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resumePdf from '../assets/pdf/Sai_Cett_Resume.pdf';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  //const [index, setIndex] = useState(1);

  const toRotate = ["Software Engineer", "Web Developer"];
  const period = 500;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      //setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      //setIndex(1);
      setDelta(100);
    } //else {
      //setIndex(prevIndex => prevIndex + 1);
    //}
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const handleDownload = () => {
    window.open(resumePdf, '_blank');
    /*const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'myFile.pdf';
    link.click();
    link.remove();*/
  };


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <span className="tagline">Curtains up! Explore my array of projects.</span>
                <h2>{`Some call me awesome, but you can call me Sai.`} </h2>
                <h3><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h3>
                  <p>I'm a results-drive software developer with expertise web application development. Seeking a challenging role at an industry-leading company.</p>
                  <button onClick={handleDownload}>Embark on my professional journey. Grab my resume! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
