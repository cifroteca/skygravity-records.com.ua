import React, { Component} from "react";
import skygravityImg from '../images/skygravity.jpg';
import solarsystemImg from '../images/solarsystem.jpg';
import monoatomicImg from '../images/mfkzt.jpg';
import urbanforestImg from '../images/urbanforest.jpg';
import mystagogueImg from '../images/mystagogue.jpg';
import psychotronicImg from '../images/psychotronic.jpg';
import semiImg from '../images/semiconductorcity.jpg';
import dezzertImg from '../images/dezzert.jpg';
import encodedImg from '../images/encodedtraces.jpg';
import nyonsImg from '../images/nyonshavingfun.jpg';
import cifrotecaImg from '../images/cifroteca.jpg';
import plurImg from '../images/plur.jpg';
import * as styles from "../components/index.module.css";
import { Link  } from "gatsby";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default class MultyCarouselBox extends Component {     
    
render() {
       
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div >

            <Carousel 

           /*  customRightArrow={<CustomRightArrow />}  */
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            itemClass="carousel-item-padding-40-px">
                
            <div className={styles.MultyCarouselsize}>
               <Link to='/peace_love_ukraine_respect/'>
               <img    
                    className="product--image"            
                    src={plurImg}                    
                    alt="Peace Loeve Ukraine Respect"  
                 /> </Link>   
                    <p >«Peace Loeve Ukraine Respect» VA</p>                                     
               </div>

                <div className={styles.MultyCarouselsize}>
               <Link to='/cifroteca/'>
               <img    
                    className="product--image"            
                    src={cifrotecaImg}                    
                    alt="Cifroteca"  
                 /> </Link>   
                    <p >«Cifroteca» Album</p>                                     
               </div>

                <div className={styles.MultyCarouselsize}>
               <Link to='/igor_lse_nyons_having_fun/'>
               <img    
                    className="product--image"            
                    src={nyonsImg}                    
                    alt="Encoded Traces"  
                 /> </Link>   
                    <p >Igor LSE «Nyons Having Fun» EP</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
               <Link to='/encoded_traces/'>
               <img    
                    className="product--image"            
                    src={encodedImg}                    
                    alt="Encoded Traces"  
                 /> </Link>   
                    <p >«Encoded Traces» VA</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
               <Link to='/dezzert_immaterial_wishes/'>
               <img    
                    className="product--image"            
                    src={dezzertImg}                    
                    alt="Semiconductor city"  
                 /> </Link>   
                    <p >Dezzert «Immateria Wishies» Single</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
               <Link to='/semiconductorcity/'>
               <img    
                    className="product--image"            
                    src={semiImg}                    
                    alt="Semiconductor city"  
                 /> </Link>   
                    <p >«Semiconductor City» VA</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
               <Link to='/psychotronic/'>
               <img    
                    className="product--image"            
                    src={psychotronicImg}                    
                    alt="Psychotronic"  
                 /> </Link>   
                    <p >«Psychotronic» VA</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
               <Link to='/mystagogue/'>
               <img    
                    className="product--image"            
                    src={mystagogueImg}                    
                    alt="Mystagogue"  
                 /> </Link>   
                    <p >«Mystagogue» VA</p>                                     
               </div>

              <div className={styles.MultyCarouselsize}>
               <Link to='/urbanforest/'>
               <img    
                    className="product--image"            
                    src={urbanforestImg}                    
                    alt="Urban Forest"  
                 /> </Link>   
                    <p >«Urban Forest» VA</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
            <Link to='/mfkzt/'>
            <img    
                    className="product--image"            
                    src={monoatomicImg}
                    alt="Monoatomi Substance"  
              />    </Link>          
                    <p >Skygravity vol.3 - «Monoatomic Substance»  VA</p>                                     
               </div>

            <div className={styles.MultyCarouselsize}>
            <Link to='/solarsystem/'>
            <img    
                    className="product--image"            
                    src={solarsystemImg}
                    alt="Solar System"  
              /> </Link>              
                    <p >Skygravity vol.2 - «Solar System» VA</p>                                     
               </div>

              <div className={styles.MultyCarouselsize}>
              <Link to='/1skygravity/'>
            <img    
                    className="product--image"            
                    src={skygravityImg}
                    alt="Skygravity"  
              /> </Link>    
                    <p >«Skygravity» VA</p>                                     
               </div>
            
            </Carousel>

        </div>
    )
}

}
