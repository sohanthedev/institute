


const PrimaryButton = ({ title, styles, href }) => {
    return (
      <a href={href || '#'}>
      <button
        className={`${styles}  bg-gradient-to-r hover:bg-gradient-to-l from-green-300 to-green-500 transition-all duration-1000 ease-in-out text-white font-semibold px-6 py-3 rounded-lg`}
      >
        {title || 'no-title'}
      </button>
    </a>
    );
  };
  

export default PrimaryButton;