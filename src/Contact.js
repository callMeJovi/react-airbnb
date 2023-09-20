import React from "react";
import '../src/style_prop.css';
import upv from "./images/upvote.JPG";
import downv from "./images/dwonv.JPG";
import phoneIcon from "./images/phone-icon.png";
import emailIcon from "./images/mail-icon.png";

// export default function Contact({img,name, phone,email}){
// //  if you don't limit your arguments with {}, it doesn't work   
//     return(
//         <div className="contact-card">
//                 <img src={img} />
//                 <h3>{name}</h3>
//                 <div className="info-group">
//                     <img src={phoneIcon} className="phone-icon"/>
//                     <p className="gray">{phone}</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={emailIcon} />
//                     <p className="gray">{email}</p>
//                 </div>
//         </div>
//     )
// }

// // const person={
// //     img: "./images/mr-whiskerson.png",
// //     name: "Mr. Whiskerson",
// //     phone: "(800) 555-1234",
// //     email: "mr.whiskaz@catnap.meow"
// // }

// // const {img,name}=person
// // console.log(img)
// // console.log(name)

export default function Jokes(props){
    
    return(
        
        <div>
            
            {props.setup && <h3>Setup:{props.setup}</h3>} 
            <p>Punchline:{props.punchline}</p>
            <div className="votes">
                <img src={upv} className="upv-image"/>
                <span className="upv-num">{props.upv}</span>
                <img src={downv} className="downv-image"/>
                <span className="downv-num">{props.downv}</span>
            </div>
            

        </div>

    )
         
}