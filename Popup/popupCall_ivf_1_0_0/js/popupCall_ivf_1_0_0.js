document.addEventListener("DOMContentLoaded", function () {
    const bvkn_dkcall = document.getElementsByClassName("bvkn_dkcall");
    const popupCall_ivf_1_0_0_overlayClickform = document.getElementById("popupCall_ivf_1_0_0_overlayClickform");
    const popupCall_ivf_1_0_0_overlay = document.getElementById("popupCall_ivf_1_0_0_overlay");
    const popupCall_ivf_1_0_0_closePopup = document.getElementById("popupCall_ivf_1_0_0_closePopup");
    for (const call of bvkn_dkcall) {
        call.addEventListener("click", function () {
            popupCall_ivf_1_0_0_overlayClickform.style.display = "block";
            popupCall_ivf_1_0_0_overlay.style.display = "block";
        });
    }
    popupCall_ivf_1_0_0_closePopup.addEventListener("click", function () {
        popupCall_ivf_1_0_0_overlayClickform.style.display = "none";
        popupCall_ivf_1_0_0_overlay.style.display = "none";
    });
    popupCall_ivf_1_0_0_overlay.addEventListener("click", function () {
        popupCall_ivf_1_0_0_overlayClickform.style.display = "none";
        popupCall_ivf_1_0_0_overlay.style.display = "none";
    });
});