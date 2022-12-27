import React from 'react';
import pic1 from '../../../../assests/01.jpg';
import pic2 from '../../../../assests/02.jpg';
import pic3 from '../../../../assests/03.jpg';
import pic4 from '../../../../assests/04.jpg';

const FirstColumn = () => {
    return (
        <div className="grid grid-cols-3">
          <div>
          <div className="avatar">
            <div className="rounded">
                <img src={pic1} alt=""/>
            </div>
            </div>
          </div>
          <div className="...">
          <div className="avatar">
            <div className="rounded">
                <img src={pic2} alt=""/>
            </div>
            </div>
          </div>
          <div className="...">
          <div className="avatar">
            <div className="rounded">
                <img src={pic3} alt=""/>
            </div>
            </div>
          </div>
          <div className="col-span-3 mx-auto">
          <div className="avatar">
            <div className=" w-96 lg:h-40 rounded mx-auto">
                <img src={pic4} alt=""/>
            </div>
            </div>
          </div>
        </div>
    );
};

export default FirstColumn;