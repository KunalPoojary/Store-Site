import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import { LampDemo } from "@/components/ui/lamp";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c48e0ddc-0d39-4ee5-9757-68a8e62683d7");

  return (
    <div>
      <Billboard data={billboard} />
      <LampDemo />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </div>
  );
};

export default HomePage;
