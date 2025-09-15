//Basic Operations
function add(nums = []) {
    let val = 0;
    for (let i = 0; i < nums.length; i++) {
        val += nums[i];
    }
    return val;
}
function subtract(nums = []) {
    let val = nums[0];
    for (let i = 1; i < nums.length; i++) {
        val -= nums[i];
    }
    return val;
}
function multiply(nums = []) {
    let val = 1;
    for (let i = 0; i < nums.length; i++) {
        val *= nums[i];
    }
    return val;
}
function divide(nums = []) {
    let val = nums[0];
    for (let i = 1; i < nums.length; i++) {
        val /= nums[i];
    }
    return val;
}

//Exponential
function power(base, ex) {
    let val = base;
    if (ex>0) {
        for (let i = 1; i < ex; i++) {
            val *= base;
        }
        return val;
    } else if (ex<0) {
        for (let i = ex+1; i < 0; i++) {
            val *= base;
        }
        return 1/val;
    }
    return 1;
}
function radical(base, ex) {
    let val = Math.pow(base, 1/ex);
    return val
}

//Misc
function factorial(num) {
    let val = 1;
    for (let i = 2; i <= num; i++) {
        val *= i;
    }
    return val;
}

//Single Variable
/*function standard1Var(e) {
    if (e.includes("x") && e.includes("=")) {
        let equa = "";
        let esplit = e.split("=");
        if esplit[0].includes("x"):
        
    }
    return "";
}*/
function solve1Var(e) {
    if (e.includes("x") && e.includes("=")) {
        //e = standard1Var(e);
        let val = 0;
        let coef = 0;
        let eq = e.split("=");
        let eq2 = [];
        if (eq[0].includes("+")) {
            eq2 = eq[0].split("+");
        } else if (eq[0].includes("-")) {
            eq2 = eq[0].split("-");
            eq2[1] = "-"+eq2[1].trim();
        } else {
            eq2 = [eq[0]];
        }
        eq[1] = eq[1].trim();
        for (let i = 0; i < eq2.length; i++) {
            eq2[i] = eq2[i].trim();
        }
        coef = parseInt(eq2[0].replace("x", ""));
        if (eq2.length>1) {
            val = -parseInt(eq2[1])+parseInt(eq[1]);
        } else {
            val = parseInt(eq[1]);
        }
        return val/coef;
    }
    return 0;
}

//Converson
//    Binary
function decimalToBinary(nums) {
    let bins = [];
    let bits = 32;
    for (let i = 0; i < nums.length; i++) {
        let val = "";
        let num = nums[i];
        for (let j = bits; j > 0; j--) {
            if (num>=2**(j-1) && num>0) {
                val += "1";
                num -= 2**(j-1);
            } else if (val!="" || j==1) {
                val += "0";
            }
        }
        bins[i] = val;
    }
    return bins.join(", ");
}
