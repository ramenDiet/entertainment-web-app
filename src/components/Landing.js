import { Carousel } from "./Carousel"

export const Landing = ( {trending, getInfo, action, western, comedy, animation, romance, drama, fantasy, favorite, isFavorite } ) => {
    return(
        <> 
        <Carousel getInfo={getInfo} genre={"Trending"} genreMovies={trending} favorite={favorite} isFavorite={isFavorite} />
        <Carousel getInfo={getInfo} genre={"Action"} genreMovies={action}  favorite={favorite} isFavorite={isFavorite}  />
        <Carousel getInfo={getInfo} genre={"Western"} genreMovies={western} favorite={favorite} isFavorite={isFavorite}   />
        <Carousel getInfo={getInfo} genre={"Comedy"} genreMovies={comedy} favorite={favorite} isFavorite={isFavorite}   />
        <Carousel getInfo={getInfo} genre={"Animation"} genreMovies={animation} favorite={favorite} isFavorite={isFavorite}   />
        <Carousel getInfo={getInfo} genre={"Romance"} genreMovies={romance} favorite={favorite} isFavorite={isFavorite}   />
        <Carousel getInfo={getInfo} genre={"Drama"} genreMovies={drama} favorite={favorite} isFavorite={isFavorite}  />
        <Carousel getInfo={getInfo} genre={"Fantasy"} genreMovies={fantasy} favorite={favorite} isFavorite={isFavorite}   />
        </>
    )
}