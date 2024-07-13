import { carProps } from "@/types";
  
export async function fetchCars(): Promise<carProps[]> {
    const headers = {
        'x-rapidapi-key': process.env.NEXT_RAPID_API_KEY as string,
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers
    });

    const result: carProps[] = await response.json();
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

export const generateCarImageUrl = (car: carProps, angle?:string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return url.toString();
}