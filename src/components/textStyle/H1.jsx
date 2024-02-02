

const H1 = ({ title, styles, id }) => {
    return (
        <h1
      className={`${styles}  lg:text-[32px] text-[28px]  lg:leading-[42px] leading-[32px] font-[700] text-[#19191d]`}
      id={id}
    >
      {title || 'No Title given'}
    </h1>
    );
};

export default H1;