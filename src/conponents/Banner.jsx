import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[400px] sm:h-[700px] lg:h-[900px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></div>
      <div className="w-full h-full flex  lg:flex-row items-center justify-center lg:space-x-[50px] sm:p-12 p-6 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline lg:w-[50%] w-full mb-6 lg:mb-0">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-1 px-3">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[26px] sm:text[30px] lg:text-[40px] font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center w-[30px] h-[25px] lg:space-x-3 gap-1 ">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating-half" className="w-8 h-8" />
            </div>
            <p className="text-white text-sm line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
              a eos earum tempore natus aspernatur quam magnam autem ab libero
              enim, accusamus ipsa, repellat dolor voluptate quod recusandae
              eveniet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cumque, eveniet quidem minima incidunt, enim, suscipit autem nemo
              ipsum libero quo mollitia nobis ad totam aliquam. Beatae
              perferendis nihil facere quae!
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white bg-black font-bold text-sm">
                Chi tiết
              </button>
              <button className="p-2 text-white bg-red-600 font-bold text-sm">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[100px] h-[180px] lg:w-[300px] lg:h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div
              className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 ease-in-out"
            >
              <img
                src={IconPlay}
                alt="play"
                className="w-16 h-16 relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
