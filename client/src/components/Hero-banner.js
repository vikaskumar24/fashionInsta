import React from 'react'
import {
  isMobile
} from "react-device-detect";
import ButtonLinkGenderPage from './Button-link-gender-page'
import { Jumbotron, Container, UncontrolledCarousel } from 'reactstrap';

const styles = {
  // bannerCoverPc: {
  //   backgroundImage: 'url("/images/4.webp")',
  //   backgroundSize: '100% 100%'
  // },
  // bannerCoverMobile: {
  //   backgroundImage: 'url("/images/4.webp")',
  //   backgroundSize: 'cover'
  // },
  textBanner: {
    textShadow: "3px 3px 3px grey",
    textAlign: 'center',
    color:'cyan',
  },
  centerButtons: {
    textAlign: 'center',
    padding: '30px',
  },
  titleH1Pc: {
    fontSize: '80px'
  },
  titleH1Mobile: {
    fontSize: '60px'
  }
};

const { bannerCoverPc, bannerCoverMobile, textBanner, centerButtons, titleH1Mobile, titleH1Pc } = styles

const HeroBanner = () => (
  <Jumbotron fluid style={isMobile? bannerCoverMobile : bannerCoverPc} className="pt-1 px-0 mx-0">
    <Container fluid style={{height: '80vh'}}>
      {/* <div style={textBanner} className="pt-5">
        <img src="/images/fashion.png" alt="" className='img-fluid mt-5' style={{opacity:"0.8"}} />
        <h1 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>Fashionista</h1>
        <p style={{color:"cyan", fontWeight:"900"}}>Cool shop</p>
      </div>
      <div style={centerButtons}>
        <ButtonLinkGenderPage gender={'men'} content='shop Men' />
        <ButtonLinkGenderPage gender={'women'} content='shop Women' />
      </div> */}
      {/* <div className="text-center" style={{position:"absolute", top:'300px',zIndex:1}}>
      </div> */}
      <img src="/images/fashion.png" alt="" className='text-center img-fluid mx-auto d-block' style={{position:'absolute',transform:"translate(190%,145%)", zIndex:1}}/>
      <UncontrolledCarousel className="w-100 m-0 p-0 h-100"
  items={[
    {
      altText: 'Slide 1',
      // caption: 'Slide 1',
      key: 1,
      src: '/images/f2.jpg',
      interval:2000
    },
    {
      altText: 'Slide 2',
      // caption: 'Slide 2',
      key: 2,
      src: '/images/4.webp'
    },
    {
      altText: 'Slide 3',
      // caption: 'Slide 3',
      key: 3,
      src: '/images/f1.jpg'
    }
  ]}
 />
    </Container>
  </Jumbotron>
);

export default HeroBanner;