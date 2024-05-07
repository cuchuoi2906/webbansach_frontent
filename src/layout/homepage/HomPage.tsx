import React from "react";
import DanhSachSanPham from "../products/DanhSachSanPham";

interface HomePageProp{
    tuKhoaTimKiem:string;
}
const HomePage:React.FC<HomePageProp> = (props) => {
    return (
        <DanhSachSanPham tuKhoaTimKiem={props.tuKhoaTimKiem} />
    );
}

export default HomePage;