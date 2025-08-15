const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// メニュー開閉
toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
});

// サイドバー内のクリックは閉じない
sidebar.addEventListener("click", function (e) {
    e.stopPropagation();
});

// オーバーレイクリックで閉じる
overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
});

// ページの余白クリックで閉じる（PCで誤作動しないようにオーバーレイ優先）
document.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
    }
});