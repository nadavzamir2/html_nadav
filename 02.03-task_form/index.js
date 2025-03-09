document.getElementById("myForm").addEventListener('submit', function(event) {
    event.preventDefault();

    
    const salary = document.getElementById('salaryInput').value;
    const VAT_Rate = document.getElementById('VATRateInput').value;
    const Permanent_Tax_Reduce = document.getElementById('PermanentTaxReduceInput').value;

    const formData = { salary, VAT_Ratel, Permanent_Tax_Reduce };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form submitted successfully! Data has been saved.');

})