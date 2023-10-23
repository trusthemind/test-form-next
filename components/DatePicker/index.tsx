"use client";
import { DatePicker } from "antd";
import { Button, Input } from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import s from "./style.module.scss";
const Picker = () => {
  return (
    <div className={s.pointBlock + " container"}>
      <h2>{"Tenancy Information"}</h2>
      <div className={s.inputBlock}>
        <div>
          <SearchOutlined className={s.search} />
          <Input placeholder="Adress" className={s.adressInput} />
        </div>
      </div>
      <div className={s.inputBlock}>
        <DatePicker format={"MM.DD.YYYY"} placement="bottomLeft" className={s.datePicker} />
        <ArrowRightOutlined />
        <DatePicker format={"MM.DD.YYYY"} placement="bottomRight" className={s.datePicker} />
      </div>
      <div className={s.rentalBlock}>
        <div>
          <Input
            placeholder="Rental Amount (Monthly)"
            className={s.rentInput}
          />
          <span className={s.currency}>GBP</span>
        </div>
      </div>
      <Button className={s.continue}>Continue</Button>
    </div>
  );
};
export default Picker;
