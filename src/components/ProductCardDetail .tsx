import React from 'react'

const ProductCardDetail = ({id,title,description,thumbnail,price,stock,category}: productType) => {
  return (
    <>
        <section className="bg-gray-50 py-8 mt-5 mb-5 rounded-lg" key={id}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                            <img className="w-full h-full object-cover" src={thumbnail} alt={title}/>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-full px-2">
                                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">Buy Now</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Name</h2>
                    
                        <p className="text-blue-600 text-lg mb-4">
                            {title}
                        </p>
                        
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700">Price:</span>
                                <span className="text-blue-600"> ${price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Availability:</span>
                                <span className="text-blue-600"> {stock} Items</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700">Product Description:</span>
                            <p className="text-gray-600 text-sm mt-2">
                                {description}
                            </p>
                        </div>
                        <div className='mt-5'>
                            <span className="font-bold text-gray-700">Product Category:</span>
                            <p className="text-blue-600 text-sm mt-2">
                                {category}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default ProductCardDetail