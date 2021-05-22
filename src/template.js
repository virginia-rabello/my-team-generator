const generateCards = cardsContent => {
let role = cardsContent.getRole();    
let icon = '';
let thirdLine = '';
if(role === 'Engineer'){
    thirdLine = 'Github: <a href="'+cardsContent.getGithub()+'" target="_blank" class="stretched-link">'+cardsContent.getGithub()+'</a>';
    //<a href="#" class="stretched-link">Go somewhere</a>
    icon = '<i class="fas fa-glasses"></i>';
}
else if(role === 'Intern'){
    thirdLine = 'School: '+ cardsContent.getSchool();
    icon = '<i class="fas fa-user-graduate"></i>';
}
else{
    thirdLine = 'Office: '+ cardsContent.getOfficeNumber();
    icon = '<i class="fas fa-mug-hot"></i>';
}

    return`  
    <div class="shadow card m-3" style="width: 15rem;">
        <div class="card-header text-white bg-primary">
            <h5>${cardsContent.getName()}</h5>
            <p>${icon} ${cardsContent.getRole()} </p>
        </div>
        <div class="card-body bg-light">
            <ul class="card list-group list-group-flush">
                <li class="list-group-item">ID: ${cardsContent.getId()}</li>
                <li class="list-group-item">Email: <a href = "mailto:${cardsContent.getEmail()}">${cardsContent.getEmail()}</a></li>
                <li class="list-group-item">${thirdLine}</li>
              </ul>
        </div>
    </div>`;
}

module.exports = data => {
let employeesList = '';
data.list.forEach(element => {
   employeesList += generateCards(element);
});

     return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<header>
  My Team
</header>
<body class="container-fluid">
    <div id="team-cards" class="container mt-3 d-flex flex-wrap justify-content-around">
        ${generateCards(data)}
        ${employeesList}
    </div>
    <script src="https://kit.fontawesome.com/a3add37c04.js" crossorigin="anonymous"></script>
</body>
</html>`
}