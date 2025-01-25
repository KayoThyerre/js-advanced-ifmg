function alertar () {
    let name = document.getElementById("name").value;
    alert("Olá! Tudo bem com você " + name + " ?");
    document.getElementById("nameUser").innerText = "Seja bem vindo "+ name + ".";
}
    