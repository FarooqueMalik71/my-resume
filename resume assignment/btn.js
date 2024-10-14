"use strict";
let cors_sec = document.getElementById('refCors');
let cors_btn = document.getElementById("btnId");
cors_btn?.addEventListener('click', () => {
    cors_sec.classList.toggle('hide');
});
let get_btnPrint = document.getElementById('btnPrint');
get_btnPrint?.addEventListener('click', () => {
    window.print();
});
