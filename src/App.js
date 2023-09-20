import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Carte from "./Carte"
import katie from "./images/katie-zaferes.png"
import star from "./images/star.png";
import whiskerson from "./images/mr-whiskerson.png";
import fluffykins from "./images/fluffykins.png";
import felix from "./images/felix.png";
import pumpkin from "./images/pumpkin.png";
import '../src/style_prop.css';
import Contact from "./Contact";
import Jokes from "./Contact";
//import jokesData from "./jokesData";
import compData from "./data";


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

// export default function App() {
//     return (
//         <div>
//             <Navbar />
//             <Main />
//             <Carte 
//                 img={katie}
//                 imgStar={star}
//                 rating="5.0"
//                 reviewCount={6}
//                 country="Australia"
//                 title="Life Lessons with Katie Zaferes"
//                 price={136}
//             />
//         </div>
//     )

// }

// export default function App(){
//     return (
//         <div className="contacts">
//             {/* <div className="contact-card">
//                 <img src={whiskerson} />
//                 <h3>Mr. Whiskerson</h3>
//                 <div className="info-group">
//                     <img src={phone} className="phone-icon"/>
//                     <p className="gray">(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={email} />
//                     <p className="gray">mr.whiskaz@catnap.meow</p>
//                 </div>
//             </div> */}
//             <Contact 
//                 img={whiskerson}
//                 name="Mr.Whiskerson"
//                 phone="(212) 555-1234"
//                 email="mr.whiskaz@catnap.meow"
//             />
//             <Contact
//                 img={fluffykins}
//                 name="Fluffykins"
//                 phone="(212) 555-2345"
//                 email="fluff@me.com"
//             />
//             <Contact
//                 img={felix}
//                 name="Felix"
//                 phone="(212) 555-4567"
//                 email="thecat@hotmail.com"
//             />
//             <Contact
//                 img={pumpkin}
//                 name="Pumpkin"
//                 phone="(0000) CAT KING"
//                 email="pumpkin@scrimba.com"
//             />
//             {/* <div className="contact-card">
//                 <img src={fluffykins} />
//                 <h3>Fluffykins</h3>
//                 <div className="info-group">
//                     <img src={phone} className="phone-icon"/>
//                     <p className="gray">(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={email} />
//                     <p className="gray">mr.whiskaz@catnap.meow</p>
//                 </div>

//             </div>
//             <div className="contact-card">
//                 <img src={felix} />
//                 <h3>Felix</h3>
//                 <div className="info-group">
//                     <img src={phone} className="phone-icon"/>
//                     <p className="gray">(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={email} />
//                     <p className="gray">mr.whiskaz@catnap.meow</p>
//                 </div>

//             </div>
//             <div className="contact-card">
//                 <img src={pumpkin} />
//                 <h3>Pumpkin</h3>
//                 <div className="info-group">
//                     <img src={phone} className="phone-icon"/>
//                     <p className="gray">(212) 555-1234</p>
//                 </div>
//                 <div className="info-group">
//                     <img src={email} />
//                     <p className="gray">mr.whiskaz@catnap.meow</p>
//                 </div>

//             </div> */}
            

//         </div>
//     )
// }

// export default function App(){
//     // const upvote = document.querySelector("upv-image");
//     // upvote.addEventListener
//     return(
        
//         <div>
//             <Jokes
//             setup="I got my daughter a fridge for her birthday"
//             punchline="I can't wait to see her face light up when she opens it"
//             isPun={false}
//             upv={1}
//             downv={1}
//             />
//             <Jokes
//             setup="How did the hacker escape the police?"
//             punchline="He just ransomware!"
//             isPun={true}
//             upv={25}
//             downv={6}
//             />
//             <Jokes
//             setup="Why don't pirates travel on mountain roads?"
//             punchline="Scurvy."
//             isPun={true}
//             upv={10}
//             />
//             <Jokes
//             punchline="It’s hard to explain puns to kleptomaniacs because 
//             they always take things literally."
//             isPun={true}
//             upv={12}
//             />
//         </div>
//     )
// }

// export default function App(){
//     const colors=["red", "orange"]
//     return (
//         <h3>{colors[0]}, {colors[1]}</h3>
//     )
// }

// export default function App(){
//     const jokesEl=jokesData.map(joke=>{
//         return <Jokes
//                 setup={joke.setup}
//                 punchline={joke.punchline} />
//     })
    
//     return (
//         <div>
//             <p>{jokesEl}</p>
            
            
//         </div>
        

//     )
// }

export default function App(){
    const compo=compData.map(item=>{
        //console.log(`"./images/${item.coverImg}"`)

        return <Carte
        //img={`"./images/${item.coverImg}"`}
        img={`./images/${item.coverImg}`}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        />
        
    })

    return(

        <div>
            <Navbar/>
            {compo}
            
        </div>
    )
}