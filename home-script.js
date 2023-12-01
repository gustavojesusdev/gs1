document.getElementById('interestForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    var interestValue = document.getElementById('interestInput').value.toLowerCase();
    if (interestValue === 'tenho interesse') {
        document.getElementById('contactEmail').classList.remove('hidden');
    } else {
        alert('Por favor, escreva "tenho interesse" para ver o e-mail de contato.');
    }
});
