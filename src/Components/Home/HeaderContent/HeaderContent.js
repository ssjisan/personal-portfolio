import React, { useEffect } from 'react';
import image from '../../../images/jisan.png'
import './HeaderContent.css'
import { useDencrypt } from "use-dencrypt-effect";
import AOS from 'aos';
const values = ["Web Developer", "Web Designer", "React Developer", "Network Engineer"];
const HeaderContent = () => {
    const { result, dencrypt } = useDencrypt();  
    useEffect(()=>{
      let i = 0;
        const action = setInterval(() => {
          dencrypt(values[i]);
          if(i === values.length - 1){
            i = 0;
            } 
            else{
              i = i+1;
            }
        }, 3000);
        return () => clearInterval(action);
    }, [dencrypt])

    useEffect(()=>{ 
      AOS.init({duration:2000})
  }, [])
    return (
        <div className="container">
            <div class="row align-items-center container">
                <div class="col-md-6">
                        <h5>Hello, My name is </h5>
                        <h1 data-aos="fade-down-right">Md. Sadman Sakib Jisan</h1>
                        <h5>I am a <span style={{color:"red"}}>{result}</span></h5> 
                </div> 
                <div class="col-md-6 " data-aos="fade-down-left">
                    <img src={image} class="d-block w-100"  alt=""/>
                </div>
            
            </div>
        </div>
    );
};

export default HeaderContent;