import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import Slideshow from "../components/HeroSection/Slideshow";
import OverlayContainer from "../components/OverlayContainer/OverlayContainer";
import Card from "../components/Card/Card";
import TestiSlider from "../components/TestiSlider/TestiSlider";
import { apiProductsType, itemType } from "../context/cart/cart-types";
import LinkButton from "../components/Buttons/LinkButton";
import currentItems from "../components/Data/productDetails.json";
// /bg-img/ourshop.png
import ourShop from "../public/bg-img/ourshop.png";

type Props = {
  products: itemType[];
};

const Home: React.FC<Props> = ({ products }) => {
  // const t = useTranslations("Index");
  // const [currentItems, setCurrentItems] = useState(products);
  const [isFetching, setIsFetching] = useState(false);


  const handleSeemore = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsFetching(true);
  };

  return (
    <>
      {/* ===== Header Section ===== */}
      <Header />

      {/* ===== Carousel Section ===== */}
      <Slideshow />

      <main id="main-content" className="-mt-20">
        {/* ===== Category Section ===== */}
        <section className="w-full h-auto py-10 border border-b-2 border-gray100">
          <div className="app-max-width app-x-padding h-full flex gap-4">

            <div className="w-full">
              <OverlayContainer
                imgSrc="/bg-img/banner_standard.png"
                imgAlt="standard"
              >
                <LinkButton
                  href="/category/standard"
                  extraClass="absolute bottom-10-per z-20"
                >
                  Standard Collection
                </LinkButton>
              </OverlayContainer>
            </div>

            <div className="w-full">
              <OverlayContainer
                imgSrc="/bg-img/banner_premium.png"
                // imgSrc2="/bg-img/banner_diamond.png"
                imgAlt="premium Collection"
              >
                <LinkButton
                  href="/category/premium"
                  extraClass="absolute bottom-10-per z-20"
                >
                  Premium Collection
                </LinkButton>
              </OverlayContainer>
            </div>
          </div>
        </section>





        {/* ===== Best Selling Section ===== */}
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <div className="flex justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
              <h2 className="text-3xl mb-4">Best Selling</h2>
              <span>Feel the blessings of Real super Heroes of universe and wear them proudly on your chest</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-12 gap-y-6 mb-10 app-x-padding">
            <Card key={currentItems[1 - 1].id} item={currentItems[1 - 1]}  colcase={false} />
            <Card key={currentItems[4 - 1].id} item={currentItems[4 - 1]}  colcase={true}/>
            <Card key={currentItems[6 - 1].id} item={currentItems[6 - 1]}  colcase={false}/>
            <Card key={currentItems[8 - 1].id} item={currentItems[8 - 1]}  colcase={true} />
          </div>
        </section>

        {/* ===== Testimonial Section ===== */}
        {/* <section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-lightgreen">
          <h2 className="text-3xl">Testimonial</h2>
          <TestiSlider />
        </section> */}

        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
          <img src="/rakesh.png" alt="" />
        </section>

        {/* ===== Featured Products Section ===== */}
        <section className="app-max-width app-x-padding my-16 flex flex-col">
          <div className="text-center mb-6">
            <h2 className="text-3xl">Sanatan Wear Collections</h2>
            <span>A brand by Rakesh Sinha</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {currentItems.map((item,i) => (
              <Card key={item.id} item={item} colcase={i%2? true:false} />
            ))}
          </div>
          {/* <div className="flex justify-center">
            <Button
              value={!isFetching ? t("see_more") : t("loading")}
              onClick={handleSeemore}
            />
          </div> */}
        </section>

        <div className="border-gray100 border-b-2"></div>

        {/* ===== Our Shop Section */}
        {/* <section className="app-max-width mt-16 mb-20 flex flex-col justify-center items-center text-center">
          <div className="textBox w-3/4 md:w-2/4 lg:w-2/5 mb-6">
            <h2 className="text-3xl mb-6">Our Shop</h2>
            <span className="w-full">Our Shop Desc</span>
          </div>
          <div className="w-full app-x-padding flex justify-center">
            <Image src={ourShop} alt="Our Shop" />
          </div>
        </section> */}
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   let products: itemType[] = [];
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&limit=10`
//   );
//   const fetchedProducts = res.data;
//   fetchedProducts.data.forEach((product: apiProductsType) => {
//     products = [
//       ...products,
//       {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         img1: product.image1,
//         img2: product.image2,
//       },
//     ];
//   });
//   return {
//     props: {
//       messages: {
//         // ...require(`../messages/index/${locale}.json`),
//         ...require(`../messages/common/${locale}.json`),
//       },
//       products,
//     }, // will be passed to the page component as props
//   };
// };

export default Home;
