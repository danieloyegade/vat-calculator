"use strict";

const calculateVat = () => {
  while (true) {
    try {
      const netCost = prompt(
        "What is the cost of the goods or services before VAT?"
      );
      const vatPercent = prompt("What is the VAT as a percentage?");

      if (netCost === null || vatPercent === null) {
        // If the user cancels the prompt, break out of the loop
        break;
      }

      if (isNaN(netCost) || isNaN(vatPercent)) {
        alert("Invalid input, please make sure you enter a number");
        throw new Error("Invalid input, please make sure you enter a number");
      }

      if (netCost <= 0 || vatPercent < 0 || vatPercent > 100) {
        alert("Enter values within an acceptable range");
        throw new Error("Enter values within an acceptable range");
      }

      const vatAmount = (netCost * vatPercent) / 100;
      const totalCost = vatAmount + parseFloat(netCost);

      alert(`Your VAT is ${vatAmount} and your total cost is ${totalCost}`);
      console.log(
        `Your VAT is ${vatAmount} and your total cost is ${totalCost}`
      );

      const continueInput = confirm("Do you want to continue?");
      if (!continueInput) {
        break; // Exit the loop if the user chooses not to continue
      }
    } catch (err) {
      console.log(err);
    }
  }
};

calculateVat();
