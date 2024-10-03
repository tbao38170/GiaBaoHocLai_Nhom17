const stateDeafault = {
    taiXiu: true,
    mangXucXac: [
        { ma: 6, hinhAnh: "./img/gameXucXac/1.png" },
        { ma: 6, hinhAnh: "./img/gameXucXac/1.png" },
        { ma: 6, hinhAnh: "./img/gameXucXac/1.png" }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const BaiTapXucSacReducer = (state = stateDeafault, action) => {
    switch (action.type) {
        default: return { ...state }
    }
}

export default BaiTapXucSacReducer;