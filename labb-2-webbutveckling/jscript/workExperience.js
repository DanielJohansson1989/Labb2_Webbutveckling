async function fetchEmploymentData() {
    try {
        const response = await fetch('./json/workExperience.json');

       // Har tagit bort throw exception. Osäker på om meddelandet response.status är menigsfullt.
       //OBS finns kvar i scriptet education.js 

        const data = await response.json();
        displayEmploymentData(data);

    }
    catch (error) {
        console.error(error)
    }
}

function displayEmploymentData(data) {
    const content = document.getElementById('workExperience');
    data.forEach(item => {
        const element = document.createElement('tr');
        element.innerHTML = 
        `<td>${item.startDate} - ${item.endDate}</td>
        <td>${item.title}</td>
        <td>${item.companyName}</td>`;
        content.appendChild(element);
    });
}

fetchEmploymentData();