import React from "react";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';
import getColors from "@/actions/get-colors";
import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';

interface ShopPageProps{
  searchParams:{
    sizeId:string,
    colorId:string,
  }
}

const ShopPage : React.FC<ShopPageProps> = async ({searchParams}) => {

  const products = await getProducts({ 
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div className='bg-slate-950'>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="mt-24 h-[100vh] hidden lg:block">
              <Filter
                valueKey="sizeId" 
                name="Sizes" 
                data={sizes}
              />
              <Filter 
                valueKey="colorId" 
                name="Colors" 
                data={colors}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0 pt-28">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ShopPage;
