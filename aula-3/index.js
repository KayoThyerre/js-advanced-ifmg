function showFile(input) {
    let file = input.files[0];
    if (!file) {
      console.error("Nenhum arquivo selecionado.");
      return;
    }
  
    let fileReader = new FileReader();
    fileReader.onload = function (dataFiles) {
      try {
        let data = JSON.parse(dataFiles.target.result);
        document.getElementById("user_name").value = data.name || "";
        document.getElementById("cep").value = data.cep || "";
        document.getElementById("street").value = data.street || "";
        document.getElementById("neighborhood").value = data.neighborhood || "";
        document.getElementById("city").value = data.city || "";
        document.getElementById("state").value = data.state || "";
      } catch (error) {
        console.error("Erro ao processar o arquivo JSON:", error);
        alert("O arquivo fornecido não está em um formato JSON válido.");
      }
    };
  
    fileReader.onerror = function () {
      console.error("Erro ao ler o arquivo.");
      alert("Não foi possível ler o arquivo. Tente novamente.");
    };
  
    fileReader.readAsText(file);
  }
  
  function save() {
    let dataSave = {
      name: document.getElementById("user_name").value,
      cep: document.getElementById("cep").value,
      street: document.getElementById("street").value,
      neighborhood: document.getElementById("neighborhood").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
    };
  
    console.log("Dados para salvar:", dataSave); // Verifica os dados
  
    try {
      let myInfo = new Blob([JSON.stringify(dataSave, null, 2)], { type: "application/json" });
      console.log("Blob criado:", myInfo);
  
      let templink = document.createElement("a");
      templink.href = URL.createObjectURL(myInfo);
      templink.download = "data.json";
      templink.style.display = "none";
  
      document.body.appendChild(templink);
      templink.click();
      document.body.removeChild(templink);
  
      console.log("Download iniciado.");
    } catch (error) {
      console.error("Erro ao salvar o arquivo:", error);
      alert("Não foi possível salvar o arquivo. Tente novamente.");
    }
  }
  
  