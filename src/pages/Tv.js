import { Carousel } from "../components/Carousel"

export const Tv  = ( {trendingTV, getInfo, actionTV, westernTV, comedyTV, animationTV, romanceTV, dramaTV, favorite, isFavorite } ) => {
    return(
        <>
        <Carousel getInfo={getInfo} genre={"Trending"} genreMovies={trendingTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        <Carousel getInfo={getInfo} genre={"Action"} genreMovies={actionTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        <Carousel getInfo={getInfo} genre={"Western"} genreMovies={westernTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        <Carousel getInfo={getInfo} genre={"Comedy"} genreMovies={comedyTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        <Carousel getInfo={getInfo} genre={"Animation"} genreMovies={animationTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        <Carousel getInfo={getInfo} genre={"Romance"} genreMovies={romanceTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        <Carousel getInfo={getInfo} genre={"Drama"} genreMovies={dramaTV}  favorite={favorite} isFavorite={isFavorite} mediaType={"tv"} />
        </>
    )
}