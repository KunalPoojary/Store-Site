import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
  import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import { LampDemo } from "@/components/ui/lamp";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("b1dda69f-58ef-46dd-a741-43da898016b5");

  return (
    <div className="">
      <Billboard data={billboard} />
      <LampDemo />
      <div className="relative top-[-320px] flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="" items={products} />
      </div>
    </div>
  );
};

export default HomePage;
