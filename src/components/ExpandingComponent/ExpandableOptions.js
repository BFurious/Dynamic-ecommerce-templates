import React, { forwardRef } from 'react';

// this component will show the extra features when the option is selcted as per the Ids
const ExpandableOptions = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="mt-4 space-y-4 transition-max-height duration-500 ease-in-out flex flex-row items-center">
            <div className="mt-2 space-y-2 flex flex-col items-center flex-1">
                <div className="flex w-full px-5 space-x-2 items-left text-sm">
                    <div style={{ width: "50%", textAlign: "left" }}>
                        <h6>Size</h6>
                    </div>
                    <div style={{ width: "50%", textAlign: "left" }}>
                        <h6>Color</h6>
                    </div>
                </div>
                <div className="flex flex-row space-x-2 flex-1 items-center">
                    <p className='p-px text-sm '>
                        #1
                    </p>
                    <select className="p-2 border rounded-md flex-1 w-1/2">
                        <option value="" disabled selected>Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <select className="p-2 border rounded-md flex-1 w-1/2">
                        <option value="" disabled selected>Select Color</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
                <div className="flex space-x-2 flex-1 items-center">
                    <p className='p-px text-sm'>#2</p>
                    <select className="p-2 border rounded-md flex-1 w-1/2">
                        <option value="" disabled selected>Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <select className="p-2 border rounded-md flex-1 w-1/2">
                        <option value="" disabled selected>Select Color</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>
            </div>
            <div className='bg-custom-light-pink' style={{ width: "30%" }}></div>

        </div>
    );
});

export default ExpandableOptions;
