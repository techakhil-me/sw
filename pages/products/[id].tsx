import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useRouter } from 'next/router'

import Heart from "../../public/icons/Heart";
import DownArrow from "../../public/icons/DownArrow";
import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GhostButton from "../../components/Buttons/GhostButton";
import Button from "../../components/Buttons/Button";
import Card from "../../components/Card/Card";

// swiperjs
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import { apiProductsType, itemType } from "../../context/cart/cart-types";
import { useWishlist } from "../../context/wishlist/WishlistProvider";
import { useCart } from "../../context/cart/CartProvider";
import HeartSolid from "../../public/icons/HeartSolid";
import products from "../../components/Data/productDetails.json";


// install Swiper modules
SwiperCore.use([Pagination]);

type Props = {
  product: itemType;
  products: itemType[];
};

const Product: React.FC<Props> = () => {
  let temp: itemType =
  {
    id: 1560,
    name: "No Mercy Tshirt",
    price: 20.99,
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!",
    img1: "https://drive.google.com/uc?id=1nw-qOfaAslo6rpEXTKyB0R7aVRZlJmuE",
    img2: "https://drive.google.com/uc?id=1nw-qOfaAslo6rpEXTKyB0R7aVRZlJmuE",
    img3: "https://drive.google.com/uc?id=1nw-qOfaAslo6rpEXTKyB0R7aVRZlJmuE",
    categoryName: "214",
    colors:["black"]
  };



  const router = useRouter()
  let id = router?.query?.id ? +router?.query?.id : 1;

  const [product, setProduct] = useState(temp);

  const { addItem } = useCart();
  const { wishlist, addToWishlist, deleteWishlistItem } = useWishlist();
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");
  const [mainImg, setMainImg] = useState(product.img1);
  const [currentQty, setCurrentQty] = useState(1);
  // const t = useTranslations("Category");

  const alreadyWishlisted =
    wishlist.filter((wItem) => wItem.id === product.id).length > 0;

  useEffect(() => {
    let id = router?.query?.id ? +router?.query?.id : 1;
    setProduct(products[id - 1]);

  }, [router]);

  useEffect(() => {
    setMainImg(product.img1);

  }, [product]);

  const handleSize = (value: string) => {
    setSize(value);
  };
  const handleColor = (value: string) => {
    setColor(value);
  };
  const currentItem = {
    ...product,
    qty: currentQty,
    size: size,
    color:color,
  };

  const handleWishlist = () => {
    alreadyWishlisted
      ? deleteWishlistItem!(currentItem)
      : addToWishlist!(currentItem);
  };

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${product.name} - Haru Fashion`} />
   
      <main id="main-content">
        {/* ===== Breadcrumb Section ===== */}
        <div className="bg-lightgreen h-16 w-full flex items-center border-t-2 border-gray200">
          <div className="app-x-padding app-max-width w-full">
            <div className="breadcrumb">
              <Link href="/">
                <a className="text-gray400">home</a>
              </Link>{" "}
              /{" "}
              <Link href={`/product-category/${product.categoryName}`}>
                <a className="text-gray400 capitalize">
                  {product.categoryName as string}
                </a>
              </Link>{" "}
              / <span>{product.name}</span>
            </div>
          </div>
        </div>
        {/* ===== Main Content Section ===== */}
        <div className="itemSection app-max-width app-x-padding flex flex-col md:flex-row">
          <div className="imgSection w-full md:w-1/2 h-full flex">
            <div className="hidden sm:block w-full sm:w-1/4 h-full space-y-4 my-4">
              <Image
                className={`cursor-pointer ${mainImg === product.img1
                    ? "opacity-100 border border-gray300 h-72 2-56"
                    : "opacity-50 h-72 2-56"
                  }`}
                onClick={() => setMainImg(product.img1)}
                src={product.img1 as string}
                alt={product.name}
                width={1000}
                height={1282}

                objectFit='cover'
              />
              <Image
                className={`cursor-pointer ${mainImg === product.img2
                    ? "opacity-100 border border-gray300"
                    : "opacity-50"
                  }`}
                onClick={() => setMainImg(product.img2)}
                src={product.img2 as string}
                alt={product.name}
                width={1000}
                height={1282}
                objectFit='cover'
              />
              <Image
                className={`cursor-pointer ${mainImg === product.img3
                    ? "opacity-100 border border-gray300"
                    : "opacity-50"
                  }`}
                onClick={() => setMainImg(product.img3)}
                src={product.img3 as string}
                alt={product.name}
                width={1000}
                height={1282}
                objectFit='cover'
              />
            </div>
            <div className="w-full sm:w-3/4 h-full m-0 sm:m-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper sm:hidden"
              >
                <SwiperSlide>
                  <Image
                    className="each-slide w-full"
                    src={product.img1 as string}
                    width={1000}
                    height={1282}
                    alt={product.name}
                    objectFit='cover'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="each-slide w-full"
                    src={product.img2 as string}
                    width={1000}
                    height={1282}
                    alt={product.name}
                    objectFit='cover'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="each-slide w-full"
                    src={product.img3 as string}
                    width={1000}
                    height={1282}
                    alt={product.name}
                    objectFit='cover'
                  />
                </SwiperSlide>
              </Swiper>
              <div className="hidden sm:block h-full">
                <Image
                  className="w-full"
                  src={mainImg as string}
                  width={1000}
                  height={1282}
                  alt={product.name}
                  objectFit={mainImg===product.img3 ? 'contain' : 'cover'}
                />
              </div>
            </div>
          </div>
          <div className="infoSection w-full md:w-1/2 h-auto py-8 sm:pl-4 flex flex-col">
            <h1 className="text-3xl mb-4">{product.name}</h1>
            <span className="text-2xl text-gray400 mb-2">
              Rs {product.price}
            </span>
            <span className="mb-2 text-justify">{product.description}</span>
            <span className="mb-2">
              availability: in stock
            </span>
            <span className="mb-2">
              color: {color}
            </span>
            <div className="sizeContainer flex space-x-4 text-sm mb-4">
              {product?.colors?.map((col,i)=><div
              key={`color-${i}`}
                onClick={() => handleColor(col)}
                className={`px-2 h-8 flex items-center justify-center border ${color === col
                    ? "border-gray500"
                    : "border-gray300 text-gray400"
                  } cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                {col}
              </div>)}
              
             
            </div>
            <span className="mb-2">
              size: {size}
            </span>
            <div className="sizeContainer flex space-x-4 text-sm mb-4">
              <div
                onClick={() => handleSize("S")}
                className={`w-8 h-8 flex items-center justify-center border ${size === "S"
                    ? "border-gray500"
                    : "border-gray300 text-gray400"
                  } cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                S
              </div>
              <div
                onClick={() => handleSize("M")}
                className={`w-8 h-8 flex items-center justify-center border ${size === "M"
                    ? "border-gray500"
                    : "border-gray300 text-gray400"
                  } cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                M
              </div>
              <div
                onClick={() => handleSize("L")}
                className={`w-8 h-8 flex items-center justify-center border ${size === "L"
                    ? "border-gray500"
                    : "border-gray300 text-gray400"
                  } cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                L
              </div>
              <div
                onClick={() => handleSize("XL")}
                className={`w-8 h-8 flex items-center justify-center border ${size === "XL"
                    ? "border-gray500"
                    : "border-gray300 text-gray400"
                  } cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                XL
              </div>
              <div
                onClick={() => handleSize("XXL")}
                className={`w-8 h-8 flex items-center justify-center border ${size === "XXL"
                    ? "border-gray500"
                    : "border-gray300 text-gray400"
                  } cursor-pointer hover:bg-gray500 hover:text-gray100`}
              >
                XXL
              </div>
            </div>
            <div className="addToCart flex flex-col sm:flex-row md:flex-col lg:flex-row space-y-4 sm:space-y-0 mb-4">
              <div className="plusOrMinus h-12 flex border justify-center border-gray300 divide-x-2 divide-gray300 mb-4 mr-0 sm:mr-4 md:mr-0 lg:mr-4">
                <div
                  onClick={() => setCurrentQty((prevState) => prevState - 1)}
                  className={`${currentQty === 1 && "pointer-events-none"
                    } h-full w-full sm:w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100`}
                >
                  -
                </div>
                <div className="h-full w-28 sm:w-12 flex justify-center items-center pointer-events-none">
                  {currentQty}
                </div>
                <div
                  onClick={() => setCurrentQty((prevState) => prevState + 1)}
                  className="h-full w-full sm:w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                >
                  +
                </div>
              </div>
              <div className="flex h-12 space-x-4 w-full">
                <Button
                  value={"add to cart"}
                  size="lg"
                  extraClass={`flex-grow text-center whitespace-nowrap`}
                  onClick={() => addItem!(currentItem)}
                />
         
                <GhostButton onClick={handleWishlist}>
                  {alreadyWishlisted ? (
                    <HeartSolid extraClass="inline" />
                  ) : (
                    <Heart extraClass="inline" />
                  )}
                </GhostButton>
              </div>
            </div>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 focus:outline-none text-left mb-4 border-b-2 border-gray200 flex items-center justify-between">
                    <span>details</span>
                    <DownArrow
                      extraClass={`${open ? "" : "transform rotate-180"
                        } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`text-gray400 animate__animated animate__bounceIn`}
                  >
                    {product.detail}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <div className="flex items-center space-x-4 mt-4">
              <span>share</span>
              <FacebookLogo extraClass="h-4 cursor-pointer text-gray400 hover:text-gray500" />
              <InstagramLogo extraClass="h-4 cursor-pointer text-gray400 hover:text-gray500" />
            </div>
          </div>
        </div>
        {/* ===== Horizontal Divider ===== */}
        <div className="border-b-2 border-gray200"></div>

        {/* ===== You May Also Like Section ===== */}
        <div className="recSection my-8 app-max-width app-x-padding">
          <h2 className="text-3xl mb-6">you may also like</h2>
          <Swiper
            slidesPerView={2}
            // centeredSlides={true}
            spaceBetween={10}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            className="mySwiper card-swiper sm:hidden"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="mb-6">
                  <Card key={item.id} item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {products.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({
//   params,
//   locale,
// }) => {
//   const paramId = params!.id as number;

//   const fetchedProduct: apiProductsType = products.find(x=>x.id===paramId);
//   let product
//   let product: itemType = {
//     id: fetchedProduct.id,
//     name: fetchedProduct.name,
//     price: fetchedProduct.price,
//     detail: fetchedProduct.detail,
//     img1: fetchedProduct.image1,
//     img2: fetchedProduct.image2,
//     categoryName: fetchedProduct!.category!.name,
//   };


//   return {
//     props: {
//       product
//     },
//   };
// };

export default Product;
