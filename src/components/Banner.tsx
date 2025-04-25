import bannerRomulus from '../assets/images/BannerAlienRomulus.png';

const Banner = () => {
  return (
    <div className="mt-14 w-[1320px] h-[548px] bg-[#080423] rounded-[10px] mx-auto p-[34px] flex justify-between items-start">
      <div className="max-w-[480px] text-white">
        <p className="text-[30px] mb-[100px] font-bold">УЖЕ В КИНО</p>
        <h1 className="text-[60px] leading-[64px] font-bold">Чужой: Ромул (2024)</h1>
        <p className="mt-[20px] text-[16px] leading-[24px] ">
          Исследуя заброшенную космическую станцию, группа колонизаторов сталкивается с самой
          ужасающей формой <br /> жизни во Вселенной.
        </p>
        <button className="mt-11 rounded-4xl px-12 py-2.5 font-bold bg-[#FF3D81] cursor-pointer">
          Смотреть
        </button>
      </div>
      <div>
        <img
          src={bannerRomulus}
          alt="Чужой: Ромул"
          className="w-[765px] h-[480px] object-cover rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Banner;
