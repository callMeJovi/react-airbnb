import React from "react";



export default function Carte(prop) {
    return (
        <section className="card">
            {/* <img src={`../images/${prop.img}`} className="katie-photo" /> */}
            <img src={prop.img} className="katie-photo" />
            <div className="card--stats">
                <img src={prop.imgStar} />
                <span className="rating">{prop.rating}</span>
                <span className="review">({prop.reviewCount}) • </span>
                <span className="location"> {prop.country} </span>
            </div>

            <p className="title">{prop.title}</p>
            <p> <span className="prices">From ${prop.price}</span> / person</p>

        </section>




    )
}