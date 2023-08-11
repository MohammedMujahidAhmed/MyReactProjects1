import Card from "./Card";


function Tour({tours,removeTour}){

    return(
        <div className="Tour-wrapper">
            <h1 className="Tour-heading">
                Plan Your Tour
            </h1>
            <div className="Tour-cards">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );

}

export default Tour;