let studentName = "Andi";

let assingmentPrecent = 30;
let midtermPrecent = 30;
let finalExamPrecent = 40;

const assignment = 80;
const midterm = 75;
const finalExam = 90;

let finalAssingmentScore = assignment * assingmentPrecent / 100;
let finalMidtermScore = midterm * midtermPrecent / 100;
let finalExamScore = finalExam * finalExamPrecent / 100;

let finalStudentScore = finalAssingmentScore + finalMidtermScore + finalExamScore;


console.log(`
Student Name : ${studentName}    
Assignment : ${assignment}
Midterm : ${midterm}
Final Exam : ${finalExam}
Final Score : ${finalStudentScore}
`)

if (finalStudentScore >= 85){
    console.log("Excellent");
    console.log("passes");
}
else if (finalStudentScore >= 70){
    console.log("Good");
    console.log("passes");
}
else {
    console.log("Fail");
    console.log("Not passes");
}

console.log(`
==========
==========    
==========       
`)



const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

// Calculate total before shipping
function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100);
    const afterDiscount = subtotal - discountAmount;

    return {
        subtotal,
        discountAmount,
        afterDiscount
    };
}

// Calculate shipping
const calculateShipping = (total) => {
    if (total >= 500000) {
        return 0;
    }

    return shippingCost;
};

// Calculate
const result = calculateTotal(
    productPrice,
    quantity,
    discountPercent
);

const shipping = calculateShipping(result.afterDiscount);
const totalPayment = result.afterDiscount + shipping;

// Output
console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${result.subtotal}`);
console.log(`Discount: Rp${result.discountAmount}`);
console.log(`After Discount: Rp${result.afterDiscount}`);
console.log(`Shipping: Rp${shipping}`);
console.log(`Total Payment: Rp${totalPayment}`);

































const studentName1 = "Siti";
const averageScore1 = 86;
const attendance1 = 92;
const familyIncome1 = 4000000;
const organizationMember1 = true;

console.log(`
Student: ${studentName1}
Average Score: ${averageScore1}
Attendance: ${attendance1}%
Family Income: ${familyIncome1}
Organization Member: ${organizationMember1} 
`)

if (averageScore1 >= 80 && attendance1 >= 90 && familyIncome1 <= 3000000 && organizationMember1 == true){
    console.log("Basic Requirement: Passed");
    console.log("Scholarship Category: Category : A");
}
else if (averageScore1 >= 80 && attendance1 >= 90 && familyIncome1 <= 5000000 && organizationMember1 == true){
    console.log("Basic Requirement: Passed");
    console.log("Scholarship Category: Category : B");
}
else {
    console.log("not Eligible");
}



console.log(`
==========
==========    
==========       
`)




const studentName2 = "Andi";
const averageScore2 = 75;
const attendance2 = 95;
const familyIncome2 = 2000000;
const organizationMember2 = true;

console.log(`
Student: ${studentName2}
Average Score: ${averageScore2}
Attendance: ${attendance2}%
Family Income: ${familyIncome2}
Organization Member: ${organizationMember2} 
`)

if (averageScore2 >= 80 && attendance2 >= 90 && familyIncome2 <= 3000000 && organizationMember2 == true){
    console.log("Basic Requirement: Passed");
    console.log("Scholarship Category: Category : A");
}
else if (averageScore2 >= 80 && attendance2 >= 90 && familyIncome2 <= 5000000 && organizationMember2 == true){
    console.log("Basic Requirement: Passed");
    console.log("Scholarship Category: Category : B");
}
else {
    console.log("not Eligible");
}

console.log(`
==========
==========    
==========       
`)






const studentName3 = "Andi";
const averageScore3 = 75;
const attendance3 = 95;
const familyIncome3 = 2000000;
const organizationMember3 = true;

console.log(`
Student: ${studentName3}
Average Score: ${averageScore3}
Attendance: ${attendance3}%
Family Income: ${familyIncome3}
Organization Member: ${organizationMember3} 
`)

if (averageScore3 >= 80 && attendance3 >= 90 && familyIncome3 <= 3000000 && organizationMember3 == true){
    console.log("Basic Requirement: Passed");
    console.log("Scholarship Category: Category : A");
}
else if (averageScore3 >= 80 && attendance3 >= 90 && familyIncome3 <= 5000000 && organizationMember3 == true){
    console.log("Basic Requirement: Passed");
    console.log("Scholarship Category: Category : B");
}
else {
    console.log("not Eligible");
}




