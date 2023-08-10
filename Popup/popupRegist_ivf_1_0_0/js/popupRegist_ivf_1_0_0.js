document.addEventListener("DOMContentLoaded", function () {

    const btnkn1km = document.getElementsByClassName("btnkn1km");
    const popupRegist_ivf_1_0_0_overlayClickForm = document.getElementById("popupRegist_ivf_1_0_0_overlayClickForm");
    const popupRegist_ivf_1_0_0_overlay = document.getElementById("popupRegist_ivf_1_0_0_overlay");
    const popupRegist_ivf_1_0_0_closePopup = document.getElementById("popupRegist_ivf_1_0_0_closePopup");

    for (const regist of btnkn1km) {
        regist.addEventListener("click", function () {
            popupRegist_ivf_1_0_0_overlayClickForm.style.display = "block";
            popupRegist_ivf_1_0_0_overlay.style.display = "block";
        });
    }

    popupRegist_ivf_1_0_0_closePopup.addEventListener("click", function () {
        popupRegist_ivf_1_0_0_overlayClickForm.style.display = "none";
        popupRegist_ivf_1_0_0_overlay.style.display = "none";
    });

    popupRegist_ivf_1_0_0_overlay.addEventListener("click", function () {
        popupRegist_ivf_1_0_0_overlayClickForm.style.display = "none";
        popupRegist_ivf_1_0_0_overlay.style.display = "none";
    });

});