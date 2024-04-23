import React from "react";
import HinhAnhModel from "../Model/HinhAnhModel";
import { Request_api } from "./Request_api";

export async function getImageBySachId(maSach:number):Promise<HinhAnhModel[]>{
    const ketQua:HinhAnhModel[] = [];

    let url = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;

    const response = await Request_api(url);

    // Lấy ra json sach
    const responseData = response._embedded.hinhAnhs;
    // console.log(responseData);

    for (const key in responseData) {
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            laIcon: responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh,
        });
    }
    return ketQua;
}