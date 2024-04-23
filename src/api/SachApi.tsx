import React from "react";
import SachModel from "../Model/SachModel";
import { Request_api } from "./Request_api";

export async function layToanBoSach():Promise<SachModel[]> {
    const ketQua:SachModel[] = [];
    const urlSach: string = "http://localhost:8080/sach";
    // Gọi phương thức request
    const response = await Request_api(urlSach);
    const responseData =  response._embedded.saches;

    for (const key in responseData) {
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa:responseData[key].moTa,
            soLuong:responseData[key].soLuong,
            tenTacGia:responseData[key].tenTacGia,
            trungBinhXepHang:responseData[key].trungBinhXepHang
        });
    }
    return ketQua;
}
