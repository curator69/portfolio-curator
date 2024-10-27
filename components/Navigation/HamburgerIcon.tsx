import './Hambuger.css';

const HamburgerIcon = ({
  mainSlider,
  setMainSlider,
}: {
  mainSlider: boolean;
  setMainSlider: (value: boolean) => void;
}) => {
  return (
    <div className='navbar'>
      <div className='container nav-container'>
        <input
          className='checkbox'
          type='checkbox'
          name=''
          id=''
          onClick={() => setMainSlider(!mainSlider)}
        />
        <div className='hamburger-lines'>
          <span
            className={`line line1 ${mainSlider ? '!bg-black' : '!bg-white'}`}
          ></span>
          <span
            className={`line line2 ${mainSlider ? '!bg-black' : '!bg-white'}`}
          ></span>
          <span
            className={`line line3 ${mainSlider ? '!bg-black' : '!bg-white'}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
