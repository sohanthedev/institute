

const P = ({ title, styles, id }) => {
    return (
        <h1
        className={`${styles}  lg:text-[16px] text-[16px]  lg:leading-[18px] leading-[18px] font-[400] text-[#19191d]`}
        id={id}
      >
        {title || 'No Title given'}
      </h1>
    );
};

export default P;