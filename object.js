const livro = {
    titulo: "Ação humana",
    genero: "Economia",

    printarGenero: function () {
        console.log(`O livro ${this.titulo} é do gênero ${this.genero}`);
    }
}

livro.printarGenero()

livro.titulo = "Sócrates"
livro.genero = "filosofia"

livro.printarGenero()