interface Car {
    city_mpg:number;
    class:string;
    combination_mpg: number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}
  
export async function fetchCars(): Promise<Car[]> {
    const headers = {
        'x-rapidapi-key': process.env.NEXT_RAPID_API_KEY as string,
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers
    });

    const result: Car[] = await response.json();
    return result
}

export const calculateCarRent = (city_mpg: number, year:number) => {
    const basePricePerDay =50; //base rental price per day in dollars
    const mileagePrice = 0.15; //price per mile driven in dollars
    const ageFactor = 0.05 // additional rate per year of the car

    //calculate additional rate based on mileage and ageFactor
    const mileageRate = city_mpg * mileagePrice;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    //calculate total rental rate per day
    const rentalPerDay = basePricePerDay + mileageRate + ageRate;

    return rentalPerDay.toFixed(0);
}