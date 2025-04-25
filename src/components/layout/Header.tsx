import logoIcon from '../../assets/images/KinoMonsterLogo.svg';
import SearchIcon from '../../assets/images/SearchIcon.svg';

const Header = () => {
  return (
    <header className="w-full h-20 bg-[#080423]">
      <div className="max-w-[1320px] h-full mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={logoIcon} alt="" />
        </div>

        <form className="flex-1 flex justify-center">
          <div className="relative w-[400px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-[400px] h-[40px] rounded-4xl px-5 bg-white"
            />
            <button
              type="submit"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#080423] hover:text-white cursor-pointer"
            >
              <img src={SearchIcon} alt="" />
            </button>
          </div>
        </form>
        <div className="w-[234px]"></div>
      </div>
    </header>
  );
};

export default Header;
