import React from "react";
import SachModel from "../Model/SachModel";
import { Request_api } from "./Request_api";

interface KetQuaInterface {
    tongSoTrang: number;
    ketQua: SachModel[];
    tongSoSach: number;
}

async function laySach(urlSach: string): Promise<KetQuaInterface> {
    const ketQua: SachModel[] = [];
    // Gọi phương thức request
    const response = await Request_api(urlSach);
    const responseData = response._embedded.saches;

    // lấy thông tin trang
    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;

    for (const key in responseData) {
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang
        });
    }
    return { ketQua: ketQua, tongSoSach: tongSoTrang, tongSoTrang: tongSoTrang };
}

export async function layToanBoSach(trang): Promise<KetQuaInterface> {
    // Xác định endpoint
    const urlSach: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=${trang}`;
    return laySach(urlSach);
}
