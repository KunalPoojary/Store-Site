import { Billboard } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  console;
  return (
    // <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
    //   <div
    //     style={{ backgroundImage: `url(${data?.imageUrl})` }}
    //     className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
    //   >
    //     <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
    //       <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
    //         {data?.label}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <main className="flex items-center justify-center flex-col">
      <section className="h-full w-full rounded-md  !overflow-visible relative flex flex-col items-center mt-20 antialiased">
        <div className="w-full">
          <div>
            <div className="h-[122px] flex items-center justify-center font-medium text-[122px]">
              {data?.label}
            </div>
            <Image
              height={2160}
              width={3840}
              src={data.imageUrl}
              className="h-[764px] object-cover pt-5 " //min-h-[680px]
              alt="Model"
            />
            {/*md:mt-20*/}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Billboard;
