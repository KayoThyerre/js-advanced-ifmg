let names = ["Kayo", "Alana", "Garbiela", "Marcelo"];
let task = {"Descrição": "Estudar JS", "Local": "IFMG", "Hora": "21:00"};
let tasksList = [
    {"Descrição": "Estudar JS", "Local": "IFMG", "Hora": "21:00"},
    {"Descrição": "Ler Livro JS", "Local": "IFMG", "Hora": "20:00"},
    {"Descrição": "Fazer academia", "Local": "Clube", "Hora": "18:00"}
];
console.log(names, task, tasksList)
console.log(tasksList[0])
console.log(tasksList[0].Descrição)

function addList(descricao, local, hora){
    let newElement = {"Descrição": descricao, "Local": local, "Hora": hora};
    tasksList.push(newElement);
    console.log(tasksList);
}

addList("Ficar Feliz", "Em casa", "23:00");