const calculateButton = document.getElementById("calculate")
const inputNumbers = document.querySelectorAll(".num")

calculateButton.addEventListener("click", function () {
    const values = Array.from(inputNumbers, (input) => Number(input.value))

    if (values.some(isNaN)) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter valid numbers in all input fields.',
            icon: 'error',
        });
        return;
    }

    const [num1, num2, num3, num4, num5, num6] = values
    const firstVal = num1 - num2 - num3
    const secondVal = num4 / num5 / num6
    const finalVal = firstVal + secondVal

    Swal.fire({
        title: '<strong>Total Calculation</strong>',
        icon: 'info',
        html:
          `The sum of the 3 fields subtracted and the quotient of the next 3 fields is: <b>${finalVal}</b>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
});