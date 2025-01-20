import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard';

const SavedMerchandise = () => {



    const mockData =  [
        { id: 1, name: 'Khaleesi Signed T-Shirt', price: '$150', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
        { id: 2, name: 'Arya Stark Hoodie', price: '$120', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
        { id: 3, name: 'Jon Snow Jacket', price: '$180', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
        { id: 4, name: 'Daenerys Targaryen Cap', price: '$90', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
        { id: 5, name: 'Tyrion Lannister Shoes', price: '$130', description: 'Offal craft artisan. Man goth truffaut tousled cardigan.', owner: 'Tyrion Lannister' },
        { id: 6, name: 'Sansa Stark Scarf', price: '$70', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan.', owner: 'Sansa Stark' },
    ];


  const [merchandise,setMerchandise] = useState(mockData)

  return (
    <div className='flex flex-col gap-y-[100px]' >

            <section className="max-w-7xl mx-auto w-full mt-10">
                <h5 className="h5 ml-2">Saved Merchandise</h5>
                <div className='grid grid-cols-3 gap-8 mt-10'>
                    {merchandise.map((product) => (
                       <ProductCard key={product.id} name={product.name} price={product.price} description={product.description} owner={product.owner} isLiked={true} action={true} />
                    ))}
                </div>

            </section>
      
    </div>
  )
}

export default SavedMerchandise
