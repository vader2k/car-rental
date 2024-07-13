import { CustomFilter, Hero, SearchBar, CarCard } from "@/components"
import { fetchCars } from '../utils/index'

export default async function Home () {

  const allCars = await fetchCars()
  console.log(allCars)

  const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            {/*  */}
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, i) => (
                <CarCard key={i} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}

