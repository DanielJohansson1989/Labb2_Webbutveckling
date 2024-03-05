async function fetchEducationData() {
    try {
        const response = await fetch('./json/education.json');

        if (!response.ok) {
            throw new Error(response.status); //Kolla upp try catch
        }

        const data = await response.json();
        displayEducationData(data);

    }
    catch (error) {
        console.error('Fel vid inläsningen')
    }
}

function displayEducationData(data) {
    const content = document.getElementById('education');
    data.forEach(item => {
        const element = document.createElement('tr');
        element.innerHTML = 
        `<td>${item.startDate} - ${item.endDate}</td>
        <td>${item.educationName}</td>
        <td>${item.school}</td>`;
        content.appendChild(element);
    });
}

fetchEducationData();