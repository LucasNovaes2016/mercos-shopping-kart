import React from "react";
import HeaderBottomMenuItems from "./headerbottommenuitems/HeaderBottomMenuItems";
import HeaderBottomSearchInput from "./headerbottomsearchinput";
import HeaderBottomKartTotal from "./headerbottomkarttotal";

export default function HeaderBottom() {
  return (
    <div className="header-bottom d-lg-flex justify-content-between">
      <div className="py-2">
        <HeaderBottomMenuItems />
      </div>
      <div>
        <HeaderBottomSearchInput />
      </div>
      <div>
        <HeaderBottomKartTotal />
      </div>
    </div>
  );
}
