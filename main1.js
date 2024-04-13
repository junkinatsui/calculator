function get_calc(btn) {
    if(btn.value == "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    } else if (btn.value == "AC") {
        document.calculator.display.value = "";
    } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        } 
        document.calculator.display.value += btn.value;
        document.calculator.display.multi_btn.value = "*";
        document.calculator.display.div_btn.value = "/";
    }
}


const operatorReg = /^(\+|-|\*|\/)$/;


const numReg = /^([0-9]|00)$/;



function get_calc(btn) {
   const preValue = document.calculator.display.value.slice(-1);

   let value = btn.value;

   if (value == ".") {
      if (canAddDecimalPoint === false) return;
      if (preValue === "" || preValue === "." || operatorReg.test(preValue)) {
         return;
      }

      canAddDecimalPoint = false;
   }

   if (operatorReg.test(value) && operatorReg.test(preValue)) {
      return;
   }

   if (value == "00" && /^([0-9]|\.)$/.test(preValue) === false) {
      value = "0"
   }

   if (value === "=") {
      document.calculator.display.value = eval(document.calculator.display.value);
   } else if (value === "AC") {
      document.calculator.display.value = "";
   } else {
      document.calculator.display.value += value;
   }
}