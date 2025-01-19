const cityPrices = {
    Riyadh: { high: 9500, medium: 7500, low: 6500 },
    Dammam: { high: 7500, medium: 6500, low: 5500 },
    Jeddah: { high: 8000, medium: 7000, low: 6000 },
    AlUla:  { high: 9000, medium: 8000, low: 7000 },
};

function calculateCost(city, budgetLevel, numberOfPeople) {
    const costPerPerson = cityPrices[city][budgetLevel];
    return costPerPerson * numberOfPeople;
}

document.getElementById('Registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let tripDate = document.getElementById('tripDate').value;
    let city = document.getElementById('city').value;
    let numberOfPeople = document.getElementById('numberOfPeople').value;
    let budgetLevel = document.getElementById('budgetLevel').value;

    const cost = calculateCost(city, budgetLevel, numberOfPeople);

    const client = {
        name,
        email,
        tripDate,
        city,
        numberOfPeople,
        budgetLevel,
        cost
    };

    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));

    alert('Registration successful! Total Cost: ${cost} SAR');
    this.reset();
});