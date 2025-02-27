function Cliente(nome, telefone, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    
    this.getNome = function() { return this.nome; };
    this.setNome = function(novoNome) { this.nome = novoNome; };
    
    this.getTelefone = function() { return this.telefone; };
    this.setTelefone = function(novoTelefone) { this.telefone = novoTelefone; };
    
    this.getEndereco = function() { return this.endereco; };
    this.setEndereco = function(novoEndereco) { this.endereco = novoEndereco; };
    
    this.getInfo = function() {
        return "----------------------------\n" +
               "Informações do Cliente:\n" +
               this.nome + "\n" +
               "----------------------------\n" +
               "Telefone:\n" +
               "DDD: " + this.telefone.ddd + "\n" +
               "Número: " + this.telefone.numero + "\n" +
               "----------------------------\n" +
               "Endereço:\n" +
               "Rua: " + this.endereco.rua + "\n" +
               "Número: " + this.endereco.numero + "\n" +
               "Cidade: " + this.endereco.cidade + "\n" +
               "Estado: " + this.endereco.estado + "\n" +
               "----------------------------";
    };
}

function ordenarClientes(clientes) {
    return clientes.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

let cliente1 = new Cliente("João Vitor", { ddd: 12, numero: "911111111" }, { rua: "Av. Jacareí", numero: "123", cidade: "São José dos Campos", estado: "SP" });
let cliente2 = new Cliente("Cláudio Souza", { ddd: 12, numero: "922222222" }, { rua: "Rua XV de Novembro", numero: "321", cidade: "São José dos Campos", estado: "SP" });
let cliente3 = new Cliente("Fernando Almeida", { ddd: 12, numero: "933333333" }, { rua: "Av. Central", numero: "789", cidade: "São José dos Campos", estado: "SP" });

let clientes = [cliente1, cliente2, cliente3];
let clientesOrdenados = ordenarClientes(clientes);

clientesOrdenados.forEach(cliente => console.log(cliente.getInfo()));