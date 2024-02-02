import React from 'react';

const H3 = ({ title, styles, id }) => {
    return (
             <h2
      className={`${styles}  text-[15px] ml-4 text-textColor dark:text-darkModeTextColor`}
      id={id}
    >
      {title || 'No Title given'}
    </h2>
    );
};

export default H3;