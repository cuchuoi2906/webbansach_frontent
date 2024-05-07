import React, { useEffect, useState } from "react";
import SachProps from "./component/SachProps";
import SachModel from "../../Model/SachModel";
import { layToanBoSach,timKiemSach } from "../../api/SachApi";
import { Paginations } from "../../utils/Paginations";
interface DanhSachSanPhamProp {
    tuKhoaTimKiem:string;
}
const DanhSachSanPham: React.FC<DanhSachSanPhamProp> = (props) => {
    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null);
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    let tuKhoaTimKiem = props.tuKhoaTimKiem;
    useEffect(() => {
        if(tuKhoaTimKiem != ''){
            timKiemSach(tuKhoaTimKiem).then(kp => {
                    setDanhSachQuyenSach(kp.ketQua);
                    setDangTaiDuLieu(false);
                    setTongSoTrang(kp.tongSoTrang);
                }).catch(
                error1 => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error1.message);
                }
            );
        }else{
            layToanBoSach(trangHienTai - 1).then(kp => {
                setDanhSachQuyenSach(kp.ketQua);
                setDangTaiDuLieu(false);
                setTongSoTrang(kp.tongSoTrang);
            }).catch(
                error => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                }
            );
        }
    }, [trangHienTai,tuKhoaTimKiem]); // [] chỉ gọi 1 lần

    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }
    if (baoLoi) {
        return (
            <div><h1>Gặp lỗi: {baoLoi}</h1></div>
        );
    }
    const phanTrang = (pageCurrent: number) => {
        setTrangHienTai(pageCurrent);
    }
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    danhSachQuyenSach.map((QuyenSach) => (
                        <SachProps sach={QuyenSach} />
                    ))
                }
            </div>
            <Paginations trangHienTai={trangHienTai} tongSoTrang={tongSoTrang} phanTrang={phanTrang} />
        </div>
    );
}
export default DanhSachSanPham;