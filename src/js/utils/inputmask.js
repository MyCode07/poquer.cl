import inputmask from "inputmask/dist/inputmask.es6.js";

inputmask({
    mask: "+99 9999 99 999", //+56 8943 39 342
    greedy: false,
    clearIncomplete: true,
    showMaskOnHover: true,
}).mask('input[name="phone"]'); 