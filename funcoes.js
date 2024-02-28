const fs = require("fs");
const path = require("path");

class Tool{

    static criarPasta(file){
        fs.mkdirSync(`../${file}`);

        console.log("criada");


    }


    static verificaSeExiste(pasta){

        let cam = "../"+pasta;

        console.log(cam)
        
        try{
           const stat =  fs.statSync(cam);

           return stat.isDirectory();

       }catch(err){

        console.log(err)

        return false;

       }

    }

    static mudaDeLugar(arqAntigo,novaPasta,nomeArq){
        
        //const imagemAntiga = 'coisas/logoSisteMAIS.jpg';
        //const novaPasta = 'coisas/imagem';
        //const nomeImagem = 'logoSisteMAIS.jpg';

        const novoCaminho = path.join(novaPasta, nomeArq);

        fs.rename(arqAntigo, novoCaminho, (err) => {
        if (err) {
            console.error('Erro ao mover o arquivo:', err);
        } else {
            console.log('Arquivo movido com sucesso!');
        }
        });

    }

    static separaMaisAntigo(nomePasta,arquivo){
            let arq = arquivo;
        
            nomePasta = this.toString(nomePasta)
    
            if(Tool.verificaSeExiste(nomePasta)){
                console.log("já existe")
            }else{
                this.tool.criarPasta(`${nomePasta}`)
            }

            (this.Tool.verificaSeExiste(`${nomePasta}/antigo`)) && this.Tool.criarPasta(`${nomePasta}/antigo`);

            let maisAntigo = fs.statSync(`coisas/${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());

            !maisAntigo ? this.Tool.mudaDeLugar(`coisas/${arq}`,`coisas/${nomePasta}`,arq) : this.Tool.mudaDeLugar(`coisas/${arq}`,`coisas/${nomePasta}/antigo`,arq);
      

    }

    


}

module.exports = Tool;