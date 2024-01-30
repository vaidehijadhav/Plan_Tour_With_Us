import Card from './Card';

function Tours ({tours, removeTour}){
    return(
        <div>
            <div>
                <h2>Plan With Us</h2>
            </div>
            <div>
                {
                    tours.map((tour)=>{        //har ek tour ki value ke liye card return kr raha hai
                        return <Card {...tour} removeTour={removeTour}></Card>   //spread operator. cloning the object
                    })
                }
                
            </div>
            
        </div>
    );

};

export default Tours;