import Carousel from 'react-bootstrap/Carousel';
import L1 from '../images/GREEN TM.png';


function Home(){
    return(
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={L1}
          alt="First slide"
          style={{height: 300}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={L1}
          alt="Second slide"
          style={{height: 300}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={L1}
          alt="Third slide"
          style={{height: 300}}
        />
      </Carousel.Item>
    </Carousel>
    );
}
export default Home;