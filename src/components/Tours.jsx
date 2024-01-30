import Card from './Card';

function Tours ({tours, removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Us</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour)=>{        //har ek tour ki value ke liye card return kr raha hai
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>   //spread operator. cloning the object
                    })
                }
                
            </div>
            
        </div>
    );

};

export default Tours;