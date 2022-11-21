import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      imagem:'biscoito-removebg.png',
      textoBotao: "Quebrar Biscoito",
    };

    this.quebrado = false;
    this.quebrarBiscoito =  this.quebrarBiscoito.bind(this);

    this.frases =[
      'Siga os bons e aprenda com eles',
      'O bom-senso vale mais do que muito conhecimento',
      'O riso é a menor distância entre duas pessoas',
      'Deixe de lado as preocupaçôes e seja feliz',
      'Realize o óbvio, pense no improvável e conquiste o impossível',
      'Acredite em milagres, mas não dependa deles',
      'A maior barreira para o sucesso é o medo do fracasso',
    ];
  }

  quebrarBiscoito(){
    console.log(this.quebrado);
    let state = this.state;
    if(this.quebrado){
      console.log("novo");
      state.textoBotao = "Quebrar Biscoito";
      state.textoFrase= "";
      state.imagem = 'biscoito-removebg.png';
    } else{
      console.log("quebrado");
    let state = this.state;
    let numeroAleatorio = Math.floor(
      Math.random() * this.frases.length
      );
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    state.imagem = "biscoito quebrado.png";
    state.textoBotao = "Pedir outro biscoito";
    }
    this.setState(state);
    this.quebrado = !this.quebrado;
  }
  render(){
    return(
       <div className='container'>
        <img src={require(`./assets/${this.state.imagem}`)} alt="biscoito" className='imagem'></img>
        <Botao nome ={this.state.textoBotao} acaoBtn={this.quebrarBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
 }

 class Botao extends Component{
  render(){
    return(
      <div>
        <button className='botao btn' onClick={this.props.acaoBtn}>
          {this.props.nome}
        </button>
      </div>
    )
  }
 }

export default App;
