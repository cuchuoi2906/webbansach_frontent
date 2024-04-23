import React from "react";

export async function Request_api(url:string) {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Có lối xảy ra");   
    }
    // trả về dữ liệu mảng json
    return response.json();
}