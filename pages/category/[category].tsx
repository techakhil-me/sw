import Link from "next/link";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import { useTranslations } from "next-intl";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
// import Pagination from "../../components/Util/Pagination";
import { apiProductsType, itemType } from "../../context/cart/cart-types";
// import DownArrow from "../../public/icons/DownArrow";
import items from "../../components/Data/productDetails.json";
import { useEffect } from "react";



type Props = {
  items: itemType[];
  page: number;
  numberOfProducts: number;
};

const ProductCategory: React.FC<Props> = () => {
  // const t = useTranslations("Category");  

  const router = useRouter();
  const { category } = router.query;
  // const lastPage = Math.ceil(numberOfProducts / 10);
  let temp = items.filter((item) => item.categoryName === category);
  let item = temp;
  
  
  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${category} - Haru Fashion`} />

      <main id="main-content">
        {/* ===== Breadcrumb Section ===== */}
        <div className="bg-lightgreen h-16 w-full flex items-center">
          <div className="app-x-padding app-max-width w-full">
            <div className="breadcrumb">
              <Link href="/">
                <a className="text-gray400">Home</a>
              </Link>{" "}
               <span className="capitalize">{category as string}</span>
            </div>
          </div>
        </div>

        {/* ===== Heading & Filter Section ===== */}
        <div className="app-x-padding app-max-width w-full mt-8">
          <h3 className="text-4xl mb-2 capitalize">{category as string}</h3>
          {/* <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 justify-between mt-4 sm:mt-6">
            {category !== "new-arrivals" && <SortMenu orderby={orderby} />}
          </div> */}
        </div>

        {/* ===== Main Content Section ===== */}
        <div className="app-x-padding app-max-width mt-3 mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {item.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          {/* {category !== "new-arrivals" && (
            <Pagination
              currentPage={page}
              lastPage={lastPage}
              orderby={orderby}
            />
          )} */}
        </div>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export default ProductCategory;
