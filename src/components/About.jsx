import React from "react";
import { SocialIcon } from 'react-social-icons/component'

import 'react-social-icons/github'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
const About = () => {
  
    return (
        <div className="max-w[800px] mt-[-90px]  w-full h-screen mx-auto text-center items-center flex flex-col justify-center">
            <div className="border-b-2 border-b-[#00df9a] w-9/12">
                <h1 className="text-4xl font-bold mb-4 text-center text-[#00df9a]">About</h1>
            </div>
            <div className="w-9/12 flex flex-row space-x-2 border-b-2 border-b-[#00df9a] h-fit mt-4 ">
                <div className="w-1/3 mx-auto ">
                    <img src="imageProfile.png" alt="" className="w-[340px]" />                    
                </div>

                <div className="w-2/3 mx-auto h-12 mt-4 ">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-white text-left text-2xl"><span className="text-[#00df9a]">Name :</span>  Haitham Dihaji</h1>
                        <h1 className="text-white text-left text-2xl"><span className="text-[#00df9a]">Age :</span>  23years old</h1>
                        <h1 className="text-white text-left text-2xl"><span className="text-[#00df9a]">City :</span>  Casablanca, Morocco</h1>    
                    </div>
                    <div>
                        <p className="text-white text-xl text-left mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fuga sed facilis quaerat atque labore illo tenetur libero consectetur pariatur nobis officiis, earum a fugit ab, sequi nesciunt recusandae minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis nulla provident iure?
                        </p>
                        
                    </div>
                    <div className="flex flex-col text-2xl text-left mt-2 ">
                            <h2 className="text-[#00df9a]">Social Media</h2>
                            <div className="flex justify-evenly  w-3/4 mt-5">        
                                <SocialIcon url="https://github.com/SnoWed-29" network="github" style={{ height: 70, width: 70 }} />
                                <SocialIcon url="https://www.instagram.com/snowed_29/" style={{ height: 70, width: 70 }} network="instagram" className=""/>
                                <SocialIcon url="https://www.linkedin.com/in/haitham-dihaji-7515b1225/" network="linkedin" style={{ height: 70, width: 70 }} className=""/>
                            </div>
                    </div>
                    <div className="text-right mt-4">
                    <a href="#" target="blank" className="text-[#00df9a] text-xl hover:border-b-2 hover:border-b-[#00df9a] text-right m-4 hover:text-white"> Download Resume </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About