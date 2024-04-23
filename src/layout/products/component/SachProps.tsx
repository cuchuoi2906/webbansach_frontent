import React, { useEffect, useState } from "react";
import SachModel from "../../../Model/SachModel";
import HinhAnhModel from "../../../Model/HinhAnhModel";
import { getImageBySachId } from "../../../api/HinhAnhApi";
import { error } from "console";

interface SachPropInterface{
    sach:SachModel;
}

const SachProps:React.FC<SachPropInterface> = (props)=>{
    const sachs = props.sach;

    const [hinhAnh,setHinhAnh] = useState<HinhAnhModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] = useState(true);
    const [coLoi,setCoLoi] = useState(null);

    useEffect(()=>{
        getImageBySachId(sachs.maSach).then(
            hinhAnh =>{
                console.log(hinhAnh);
                setHinhAnh(hinhAnh);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error =>{
                setDangTaiDuLieu(false);
                setCoLoi(error.message);
            }
        );
    },[]);

    if(dangTaiDuLieu){
        return(
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }
    if(coLoi){
        return(
            <div><h1>Gặp lỗi: {coLoi}</h1></div>
        );
    }

    let urlImg:string = "";
    if(hinhAnh[0] && hinhAnh[0].duLieuAnh){
        urlImg = hinhAnh[0].duLieuAnh;
    }

    
    return(
        <div className="col-md-3 mt-2">
            <div className="card">
                <img
                    src={urlImg}
                    className="card-img-top"
                    alt={props.sach.tenSach}
                    style={{ height: '200px' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.sach.tenSach}</h5>
                    <p className="card-text">{props.sach.moTa}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.sach.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.sach.giaBan}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SachProps;