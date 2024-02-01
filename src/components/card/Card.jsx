import React from 'react';

const Card = () => {
    const data = [5,7,7,54,456,45]
    return (
       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 ">
  {
    data.map((i)=> <div key={i} className="card w-full bg-cardColor  dark:bg-darkModeBackgroundColor dark:text-darkModeTextColor text-textColor shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Present Students</h2>
    <p>0</p>
    <button className="btn btn-sm bg-cardColor  dark:bg-darkModeBackgroundColor dark:text-darkModeTextColor text-textColor shadow-xl">Small</button>
  </div>
</div>)
  }


</div>
    );
};

export default Card;