function Card({id, name, info, image, price}){
    const description = `${info.substring(0,200)}....`    //substring is used to cut the string from 0 to 200


   return(
    <div className="card">
        <img src={image} className="image"></img>
        <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">{description}</div>

    </div>
   )
}

export default Card;