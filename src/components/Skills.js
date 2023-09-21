//import meter1 from "../assets/img/meter1.svg";
//import meter2 from "../assets/img/meter2.svg";
//import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import html5 from "../assets/img/html5.png";
import javascript from "../assets/img/javascript.png";
import css_logo from "../assets/img/css.png";
import c from "../assets/img/c.png";
import react from "../assets/img/react.png";
import react_native from "../assets/img/react_native.png";
import asp_net from "../assets/img/asp.png";
import php from "../assets/img/php.png";
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h5>Programming languages</h5>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={java} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Php" />
                                <h5>PHP</h5>
                            </div>                          
                            <div className="item">
                                <img src={python} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="C#" />
                                <h5>C#</h5>
                            </div>
                        </Carousel>
                        <h5>Web Development</h5>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html5} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css_logo} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={asp_net} alt="ASP.NET" />
                                <h5>ASP.NET</h5>
                            </div>
                            <div className="item">
                                <img src={react_native} alt="React Native" />
                                <h5>React Native</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
