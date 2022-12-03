let YearlySpend = document.getElementById("Yearly_Spend");
let PreviousLoan = document.getElementById("Previous_Loan");
let Balance = document.getElementById("Balance_Fd");
let YearlyIncome = document.getElementById("Yearly_Income");



let TotalSpend = document.querySelector(".Yearly_Spend");
let TotalEarning = document.querySelector(".Previous_Loan");
let RiskRatio = document.querySelector(".Balance_Fd");



let submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function(){

    Spend = YearlySpend.value;
    Loan = PreviousLoan.value; 
    Balance = Balance.value; 
    Income = YearlyIncome.value;


    TSpend = (Spend+Loan);
    TEarning = ( Balance + Income );
    RiskRatio = (TSpend)/(TEarning);

    

    TotalSpend.innerHTML = Math.floor(TSpend);
    TotalEarning.innerHTML = Math.floor(TEarning);
    RiskRatio.innerHTML = Math.floor(RiskRatio);
  


    //Loanchart
    let xValues = ["Total Spend", "Total Earning"];
    let yValues = [Math.floor(TSpend), Math.floor(TEarning)];

    let barColors = ["#961251", "#000000"];

    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets:[{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display:false,
            }
        }
    });


});
