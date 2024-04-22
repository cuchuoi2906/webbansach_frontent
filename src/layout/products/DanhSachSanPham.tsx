import React, { useEffect, useState } from "react";
import SachProps from "./component/SachProps";
import SachModel from "../../Model/SachModel";
import { layToanBoSach } from "../../api/SachApi";

const DanhSachSanPham: React.FC = ()=>{
    const [danhSachQuyenSach,setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] = useState(true);
    const [baoLoi,setBaoLoi] = useState(null);

    useEffect(()=>{
        layToanBoSach().then(sachData=>{
            setDanhSachQuyenSach(sachData);
            setDangTaiDuLieu(false);
        }).catch(
            error => {
                setDangTaiDuLieu(false);
                setBaoLoi(error.message);
            }
        );
    },[]); // [] chỉ gọi 1 lần

    if(dangTaiDuLieu){
        return(
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }
    if(baoLoi){
        return(
            <div><h1>Gặp lỗi: {baoLoi}</h1></div>
        );
    }
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    danhSachQuyenSach.map((QuyenSach)=>(
                        <SachProps sach={QuyenSach} />
                    ))
                }
            </div>
        </div>
    );
}
export default DanhSachSanPham;