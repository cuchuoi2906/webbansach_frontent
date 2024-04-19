import React from "react";
import SachModel from "../Model/SachModel";

export async function Request_api(url:string) {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Có lối xảy ra");   
    }
    // trả về dữ liệu mảng json
    return response.json();
}

export async function layToanBoSach():Promise<SachModel[]> {
    const ketqua:SachModel[] = [];
    const urlSach: string = "http://localhost:8080/sach";
    // Gọi phương thức request
    const response = await my_request(duongDan);
    
    return ketqua;
}