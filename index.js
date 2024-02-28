const fs = require("fs");
const path = require("path");
const tool = require("./funcoes.js");


const pasta_principal = fs.readdirSync("../");

console.log(pasta_principal);



//console.log( fs.statSync("coisas/teste.xlsx").mtime > new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate()))

//console.log(fs.mkdirSync(""))

///const extensoes = [".pdf",".png",".jpg",".jpeg",".mp4",".mp3",".movi"]
let maisAntigo;
let arqvs = [];

for(let i = 0; i < pasta_principal.length; i++){
    
    let arq = pasta_principal[i]
    
    if(arq.includes(".png") || arq.includes(".jpeg") || arq.includes(".jpg") || arq.includes(".ico") ) {

  

        if(tool.verificaSeExiste("imagem")){
            console.log("já existe")
        }else{
            tool.criarPasta("imagem")
        }

        if(tool.verificaSeExiste("imagem/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("imagem/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../imagem/antigo`,arq);
        }

        //!maisAntigo ? tool.mudaDeLugar(`../${arq}`,`../imagem`,arq) : tool.mudaDeLugar(`../${arq}`,`../imagem/antigo`,arq);
      
       
    }else if(arq.includes(".mp4") || arq.includes(".movi") ){


        
        
        if(tool.verificaSeExiste("videos")){
            console.log("já existe")
        }else{
            tool.criarPasta("videos")
        }
                
       

        if(tool.verificaSeExiste("videos/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("videos/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../videos`,arq);
        }else{

            tool.mudaDeLugar(`../videos/${arq}`,`../videos/antigo`,arq);
        }


       
        
    }else if(arq.includes(".pdf")){

        if(tool.verificaSeExiste("arquivos")){
            console.log("já existe")
        }else{
            tool.criarPasta("arquivos")
        }
        

        
        if(tool.verificaSeExiste("arquivos/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("arquivos/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../arquivos`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../arquivos/antigo`,arq);
        }


        ///tool.mudaDeLugar(`../${arq}`,`../arquivos`,arq);


        
    }else if(arq.includes(".m4a") || arq.includes(".mp3") || arq.includes(".ogg")){
        if(tool.verificaSeExiste("audio")){
            console.log("já existe")
        }else{
            tool.criarPasta("audio")
        }

        if(tool.verificaSeExiste("audio/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("audio/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../audio`,arq);
        }else{

            tool.mudaDeLugar(`../audio/${arq}`,`../audio/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../audio`,arq);
        
    }else if(arq.includes(".xlsx") || arq.includes(".csv") || arq.includes(".xls")){
        
        if(tool.verificaSeExiste("planilhas")){
            console.log("já existe")
        }else{
            tool.criarPasta("planilhas")
        }

        if(tool.verificaSeExiste("planilhas/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("planilhas/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../planilhas/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }else if(arq.includes(".psd") ){
        
        if(tool.verificaSeExiste("photoshop")){
            console.log("já existe")
        }else{
            tool.criarPasta("photoshop")
        }

        if(tool.verificaSeExiste("photoshop/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("photoshop/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../photoshop`,arq);
        }else{

            tool.mudaDeLugar(`../photoshop/${arq}`,`../photoshop/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }else if(arq.includes(".doc") || arq.includes(".docx") ){
        
        if(tool.verificaSeExiste("documentos")){
            console.log("já existe")
        }else{
            tool.criarPasta("documentos")
        }

        if(tool.verificaSeExiste("documentos/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("documentos/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../documentos`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../documentos/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }else if(arq.includes(".ppt") || arq.includes(".pptx") ){
        
        if(tool.verificaSeExiste("apresentacoes")){
            console.log("já existe")
        }else{
            tool.criarPasta("apresentacoes")
        }

        if(tool.verificaSeExiste("apresentacoes/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("apresentacoes/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../apresentacoes`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../apresentacoes/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }else if(arq.includes(".rar") || arq.includes(".zip") ){
        
        if(tool.verificaSeExiste("Arquivos Rar e Zip")){
            console.log("já existe")
        }else{
            tool.criarPasta("Arquivos Rar e Zip")
        }

        if(tool.verificaSeExiste("Arquivos Rar e Zip/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("Arquivos Rar e Zip/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../Arquivos Rar e Zip`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../Arquivos Rar e Zip/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }else if(arq.includes(".exe") || arq.includes(".msi") ){
        
        if(tool.verificaSeExiste("executaveis")){
            console.log("já existe")
        }else{
            tool.criarPasta("executaveis")
        }

        if(tool.verificaSeExiste("executaveis/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("executaveis/antigo")
        }

       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());



        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../executaveis`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../executaveis/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }else if(arq != "videos" && arq != "imagem" && arq != "documentos" && arq != "executaveis" && arq != "Arquivos Rar e Zip" && arq != "audio" && arq != "apresentacoes" && arq != "pastas" && arq != "planilhas" && arq != "arquivos" && arq != "photoshop" && arq != "organizador"){
        
        if(tool.verificaSeExiste("pastas")){
            console.log("já existe")
        }else{
            tool.criarPasta("pastas")
        }

        if(tool.verificaSeExiste("pastas/antigo")){
            console.log("já existe")
        }else{
            tool.criarPasta("pastas/antigo")
        }

       
       
        maisAntigo = fs.statSync(`../${arq}`).mtime >= new Date(new Date().getFullYear() - 2,(new Date().getMonth() - 12 ),new Date().getDate());

        //console.log(arq === "videos")
        //arqvs.push(arq);


        //console.log(arqvs)




        if(maisAntigo){
            //tool.mudaDeLugar(`../${arq}`,`../imagem`,arq);
            tool.mudaDeLugar(`../${arq}`,`../pastas`,arq);
        }else{

            tool.mudaDeLugar(`../${arq}`,`../pastas/antigo`,arq);
        }

        
        //tool.mudaDeLugar(`../${arq}`,`../planilhas`,arq);
        
    }
    
    console.log(arq)
    
    
}


/*

const imagemAntiga = '../logoSisteMAIS.jpg';
const novaPasta = 'coisas/imagem';
const nomeImagem = 'logoSisteMAIS.jpg';

const novoCaminho = path.join(novaPasta, nomeImagem);

fs.rename(imagemAntiga, novoCaminho, (err) => {
  if (err) {
    console.error('Erro ao mover a imagem:', err);
  } else {
    console.log('Imagem movida com sucesso!');
  }
});
*/