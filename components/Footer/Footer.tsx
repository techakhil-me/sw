import Link from "next/link";
import { useTranslations } from "next-intl";

import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {
  // const t = useTranslations("Navigation");

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={`app-max-width app-x-padding gap-20 ${styles.footerContents}`}>
          <div className="flex items-center flex-col text-center">
            <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.5" width="24" className="hidden sm:block icon icon-picto-delivery-truck" viewBox="0 0 24 24">
              <path d="M23.25 13.5V6a1.5 1.5 0 0 0-1.5-1.5h-12A1.5 1.5 0 0 0 8.25 6v6m0 0V6h-3a4.5 4.5 0 0 0-4.5 4.5v6a1.5 1.5 0 0 0 1.5 1.5H3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M.75 12h3a1.5 1.5 0 0 0 1.5-1.5V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path clipRule="evenodd" d="M7.5 19.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm12 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M12 18h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <h3 className={styles.footerHead}>FREE DELIVERY</h3>
            <div className={styles.column}>
              FREE delivery all over Bharat on prepaid orders
            </div>
          </div>
          <div className="flex items-center flex-col text-center">
            <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.5" width="24" className="hidden sm:block icon icon-picto-award-gift" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M15.75 23.238a3 3 0 0 0-3-3H9a3 3 0 0 0-3-3H.75v6h15Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M6 20.238h3m2.25-3H21a.75.75 0 0 0 .75-.75v-6.75m-13.5 0v4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path clipRule="evenodd" d="M6.75 6.738a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-2.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M15 17.238V5.988" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path clipRule="evenodd" d="M19.265 3.867a11.855 11.855 0 0 1-4.242 2.121 11.856 11.856 0 0 1 2.121-4.242C18.463.428 19.21.63 19.8 1.216c.59.586.784 1.333-.535 2.651Zm-8.531 0c1.257.985 2.7 1.707 4.242 2.121a11.838 11.838 0 0 0-2.121-4.242C11.537.428 10.79.63 10.2 1.216c-.59.586-.784 1.333.534 2.651Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <h3 className={styles.footerHead}>CUSTOMER SUPPORT</h3>
            <div className={styles.column}>
              Call & chat support available 10AM-5PM, Monday to Saturday
            </div>
          </div>

          <div className="flex items-center flex-col text-center">
          <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.5" width="24" className="hidden sm:block icon icon-picto-plane" viewBox="0 0 24 24">
      <path clipRule="evenodd" d="m20.055 20.198.654-.654c.36-.36.502-.885.373-1.378l-2.326-8.837 3.075-3.075a2.972 2.972 0 0 0 .422-3.794 2.867 2.867 0 0 0-4.369-.37l-3.183 3.185L5.867 2.95a1.434 1.434 0 0 0-1.38.373l-.653.654A1.434 1.434 0 0 0 4.11 6.22l6.03 3.618-4.589 5.2-1.434.02a1.434 1.434 0 0 0-1.225.37L1.46 16.74a.716.716 0 0 0 .225 1.165l2.767 1.56 1.816 2.864a.718.718 0 0 0 1.166.224l1.251-1.193c.354-.333.515-.822.428-1.3l.023-1.438 5.058-4.73 3.618 6.03a1.434 1.434 0 0 0 2.243.276Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
            <h3 className={styles.footerHead}>EXPRESS DELIVERY</h3>
            <div className={styles.column}>
            Delivery in 4-7 business days (excluding weekends)
            </div>
          </div>

          <div className="flex items-center flex-col text-center">
          <svg aria-hidden="true" focusable="false" fill="none" strokeWidth="1.5" width="24" viewBox="0 0 24 24">
      <path d="m21.2 12.075 1.16 4.89a5.123 5.123 0 0 1-5.016 6.285H6.655a5.123 5.123 0 0 1-5.016-6.285l1.161-4.89" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M9.75 14.25H6.583a4.289 4.289 0 0 1-4.333-4.243V6.75a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5v3.257a4.29 4.29 0 0 1-4.333 4.243H14.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
      <path clipRule="evenodd" d="M12 16.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM10.25.75h3.5a2 2 0 0 1 2 2v2.5h-7.5v-2.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
            <h3 className={styles.footerHead}>SIZE EXCHANGE</h3>
            <div className={styles.column}>
            Size issues? No problem! Exchanges are available! (no refund)
            </div>
          </div>


          {/* <div>
            <h3 className={styles.footerHead}>{t("company")}</h3>
            <div className={styles.column}>
              <a href="example">{t("about_us")}</a>
              <a href="example">{t("contact_us")}</a>
              <a href="example">{t("store_location")}</a>
              <a href="example">{t("careers")}</a>
            </div>
          </div> */}
          {/* <div>
            <h3 className={styles.footerHead}>{t("help")}</h3>
            <div className={styles.column}>
              <a href="example">{t("order_tracking")}</a>
              <a href="example">{t("faqs")}</a>
              <a href="example">{t("privacy_policy")}</a>
              <a href="example">{t("terms_conditions")}</a>
            </div>
          </div> */}
          {/* <div>
            <h3 className={styles.footerHead}>{t("store")}</h3>
            <div className={styles.column}>
              <Link href={`/product-category/women`}>
                <a>{t("women")}</a>
              </Link>
              <Link href={`/product-category/men`}>
                <a>{t("men")}</a>
              </Link>
              <Link href={`/product-category/bags`}>
                <a>{t("bags")}</a>
              </Link>
            </div>
          </div> */}
          {/* <div>
            <h3 className={styles.footerHead}>{t("keep_in_touch")}</h3>
            <div className={styles.column}>
              <span>
                {t("address.detail")}
                <br />
                {t("address.road")}
                <br />
                {t("address.city")}
              </span>
              <span>{t("phone_number")}</span>
              <span>
                {t("open_all_days")} <br />- {t("opening_hours")}
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">{t("newsletter")}</h4>
        <span className="px-6 text-center">{t("newsletter_desc")}</span>
        <div className="mt-5 px-6 flex w-full sm:w-auto flex-col sm:flex-row">
          <Input
            label="Newsletter Input Box"
            name="email"
            type="email"
            extraClass=" w-full sm:w-auto"
          />{" "}
          <Button
            size="lg"
            value={t("send")}
            extraClass="ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 sm:ml-4 w-auto w-full sm:w-auto"
          />
        </div>
      </div> */}
      <div className={styles.bottomFooter}>
        <div className="app-max-width app-x-padding w-full flex justify-between">
          <span className="">@2023 Sanatan Wear - all rights reserved</span>
          <span className="flex items-center">
            <span className="hidden sm:block">
              Follow us on Social
            </span>{" "}
            <a
              href="www.facebook.com"
              aria-label="Facebook Page for Sanatan wear"
            >
              <FacebookLogo />
            </a>
            <a
              href="www.ig.com"
              aria-label="Instagram Account for Sanatan wear"
            >
              <InstagramLogo />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
