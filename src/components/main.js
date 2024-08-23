import React, { useState, useRef, useEffect } from 'react';
import ExpandableOptions from './ExpandingComponent/ExpandableOptions';
import "../App.css";
import ColorStripPattern from "./offerComponent/ColorStripPattern";
import OrderAddedPage from './PopUp/OrderAddedPage';

const ProductOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const optionRefs = useRef({});
    const [finalAmount, setFinalAmount] = useState(0);
    const [orderAdded, setOrderAdded] = useState(false);
    useEffect(() => {
        if (selectedOption) {
            const amount = (selectedOption.price * selectedOption.discount) / 100;
            setFinalAmount(amount);
        }
    }, [selectedOption]);

    // theis fucntion will handle the vales of the product it chose
    const handleOptionChange = async (option) => {
        setSelectedOption((op) => { return option });
        optionRefs.current[option?.id]?.focus();  // This line focuses on the expanded component
    };

    // just to show the confirmation page trigger then the ass to card button is clicked
    const handleAddToCart = () => {
        // Here you would typically handle adding to the cart logic
        if (finalAmount > 0) {
            setOrderAdded(true);
            setTimeout(() => setOrderAdded(false), 3000);
        }
    };
    // this is example set of data, in production case it will be fetched from backend
    const options = [
        { id: 1, label: 'Buy 1 Get 2', price: 18.00, discount: 30, size: "", color: "" },
        { id: 2, label: 'Buy 2 Get 4', price: 24.00, discount: 40, size: "", color: "" },
        { id: 3, label: 'Buy 3 Get 6', price: 30.00, discount: 50, size: "", color: "" },
    ];

    return (
        <>
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="font-inter text-center text-custom-baby-pink font-bold mb-6 text-xl">YAY! It's BOGO</h2>
                <div className=" flex flex-col font-inter ">
                    {options.map((option) => (
                        <div key={option?.id}
                            className={`border rounded-xl  min-w-full flex-1 my-2 overflow-hidden ${selectedOption?.id === option?.id ? 'border-custom-baby-pink' : ''} `}>
                            <div
                                className={`flex flex-row flex-1 transition-max-height duration-300 ease-in-out ${selectedOption?.id === option?.id ? 'h-60' : 'h-24'} `}
                                onClick={() => handleOptionChange(option)}
                            >
                                {selectedOption?.id != option?.id && <ColorStripPattern discount={option?.discount} />}
                                <div className={`flex w-full flex-row item-center ${selectedOption?.id === option?.id ? "bg-custom-light-pink" : ""}`}>
                                    <div className={`custom-radio ml-4 flex flex-row pt-4 cursor-pointer ${selectedOption?.id != option?.id ? "items-center" : "pt-8"}`} >
                                        <label>
                                            <input
                                                type="radio"
                                                name="product"
                                                className="mr-2"
                                                onChange={() => handleOptionChange(option)}
                                                checked={selectedOption?.id === option?.id}
                                            />
                                        </label>
                                    </div>
                                    <div className='flex flex-col py-4 ml-4 justify-center '>
                                        <div className='flex flex-row'>
                                            <span className=" text-center my-auto max-w-max ">{option?.label}</span>
                                            {selectedOption?.id === option?.id && <span className="mx-1 my-auto bg-custom-baby-pink text-white px-1 max-w-max text-sm">
                                                {option?.discount}% Off
                                            </span>
                                            }
                                        </div>
                                        <div className='flex flex-row '>
                                            {selectedOption?.id === option?.id &&
                                                <p id="offer-price" className='p-2 text-xl font-bold'>
                                                    ${(option?.price * option?.discount) / 100}.00 USD
                                                </p>
                                            }
                                            <p id="actual-price" className={`p-2 ${selectedOption?.id == option?.id ? 'text-xs font-bold text-gray-500 line-through' : 'text-sm font-bold'}`}>
                                                ${option?.price}.00 USD
                                            </p>
                                        </div>

                                        {selectedOption?.id === option?.id && <ExpandableOptions isExpanded={selectedOption?.id === option?.id} z ref={(el) => (optionRefs.current[selectedOption?.id] = el)} />}
                                    </div>
                                    {(option?.id === 1) &&
                                        <div className={`font-inter mt-6 items-center`} style={selectedOption?.id != 1 ? { margin: "auto" } : {}}>
                                            <p className="text-custom-baby-pink font-semibold text-sm" style={{ float: "left" }}>Most Popular</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    ))}
                </div>


                <div className="font-inter mt-6 ">
                    <p className="text-custom-baby-pink font-semibold" style={{ float: "left" }}>Free Delivery</p>
                    <p className="font-bold" style={{ float: "right" }}>Total: ${finalAmount} USD</p>
                    <button className="mt-4 bg-custom-baby-pink text-white py-2 px-4 rounded-lg w-full"
                        onClick={() => { handleAddToCart() }}>+ Add to Cart</button>
                    <h4 id="promotion-tag-line" className='space-2 p-1 text-center'>Powered by <span id="promotion-brand-name" className=" text-custom-baby-pink">Pumper</span></h4>
                </div>
            </div>
            {orderAdded && <OrderAddedPage />
            }
        </>
    );
};

export default ProductOptions;
