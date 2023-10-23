"use client";
import s from "./style.module.scss";
import {
  HomeOutlined,
  CreditCardOutlined,
  KeyOutlined,
  BankOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icon.png"
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname().slice(1);

  return (
    <div className={s.header}>
      <Link href="/" className={s.companyName}>
       <Image src={logo} alt="logo"/>
      </Link>

      {path == "dashboard" && (
        <div className={s.points}>
          <ul>
            <li>
              <HomeOutlined />
              <p>Tenency Information</p>
            </li>
            <li>
              <KeyOutlined />
              <p>Tenency Agreement</p>
            </li>
            <li>
              <BankOutlined />
              <p>Recipt Bank Details</p>
            </li>
            <li>
              <CreditCardOutlined />
              <p>Payment Method</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
