import { Component } from '@angular/core';
import { isNumber } from 'util';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 //Variable  pour verifier si la virgule n'est pas placé deux fois dans le meme nombre
   UneVirgule = false;
   plusoumoins = false;

  // Variable contenant le calcul
  Calculate = '0';

  // tableau contenant la liste des valeurs à calculer 
  list = [] ;

  //variable contenant la position des operateurs
  IndexOperator = null;

  // Variable booleenne pour savaoir si la barre de calcul est vide
  valueInit = true;
  
  // Variable contenant le symbole de l'operateur
  Operator = '';

  readyForAnother = false; 
  // Declaration d'un tableau contenant les differents symboles de la calculatrice
  numberGroups = [
    ['AC' ,'+/-', '%', '÷'],
    [7 , 8 , 9 , 'x'],
    [4 , 5 , 6 , '-'],
    [1 , 2 , 3 , '+'],
    [0 , 'DEL' ,'.', '=', ],

  ];

  // Fonction permettant de verifier les syntaxes de calcul
  signeCalcul(signe: string) {
   if ( this.readyForAnother  ) {
     // Lorsqu'il n'y a pas encore d'operateur
       if (this.Operator === '') {
        this.Operator = signe;
        this.Calculate += '' + signe; 
        this.readyForAnother = false;
      } else {
        //Dans le cas contrait
        if (signe === this.Operator) {
          this.Calculate += '' + signe; 
          this.readyForAnother = false;
        
       }}
    }
  }
  //Fonctions permettant de faire les operation de calculs
  Calculer() {
    // Verifie si le dernier element de l'operation n'est pas un signe
    if (Number(this.Calculate.substring((this.Calculate.lastIndexOf(this.Operator) + 1), this.Calculate.length))) {
    this.list = this.Calculate.split(this.Operator);
    this.list.forEach(element => {
      
    });
      console.log(this.list);
    //L'operation d'addition
    if (this.Operator === '+' ) {
      this.addition();
     }
     //L'operation de soustraction
    else if (this.Operator === '-' ) {
      this.Difference();
      }
     //L'operation de multiplication
    else if (this.Operator === 'x' ) {
          this.Produit();
        }  
    //L'operation de division
    else if (this.Operator === '÷' ) {
          this.Divison();
          }  
    else if (this.Operator === '%' ) {
        this.Modulo(); 
    }
   
  }
     else{
   this.Erreur();
  }}
  // Fonction declencher lors du clic
  onClick(symbol) {
    console.log(symbol);
   //Si le symbole sur lequel l'utilisateur a cliqué est un chiffre
    if (isNumber(symbol)) {
      if (this.valueInit === true) {
        this.Calculate = '' + symbol; 
        this.valueInit = false;
      } else { 
      this.Calculate += '' + symbol; 
       }
       this.UneVirgule = false;
       this.readyForAnother = true;
    }else{
      switch (symbol) {
        case 'AC':
           // La fonction pour efacer l'ecran
          this.Calculate = '0';
          this.valueInit = true;
          break;

        case 'DEL':
          //La fonction qui permet de supprimer la derniere entree 
         this.Supprimer1();
          break; 
         
        case '.':
          //Fonction permettant d'ajouter une virgule 
          if (this.readyForAnother && !this.UneVirgule) {
            this.Calculate += '.';
            this.UneVirgule = true;
          } 
          break;

        case '+/-':
           /*  //Fonction permettant d'ajouter le plus ou moins
          if (!this.readyForAnother) {
            this.Calculate += '(-';
          }  */
            break;  
  
        case '=':
          // L'egalité
          console.log(!isNumber(this.Calculate));
          if (!isNumber(this.Calculate)) { 
               this.Calculer();
          } 
          break;   
        default:
          this.signeCalcul(symbol);
          break;
      }
    }
}
  addition(){
    let somme: number = 0;
    this.list.forEach( function(value) {
      somme += Number(value);
    });
  this.Initialiser(somme);
  } 
  Difference(){
    //console.log()
    let moins: number;
    this.list.forEach( function(value, index, array) {
      if (index === 0 ) {
        moins = Number(value);
        console.log(value);
      }else{
        console.log(value);
        moins -= Number(value);
      }
    });
    this.Initialiser(moins);
  }
  Produit(){
    let fois: number = 1;
    this.list.forEach( function(value) {
      fois *= Number(value);
    });
    this.Initialiser(fois);
  }
  Divison(){
    let div: number;
    this.list.forEach( function(value, index, array) {
      if (index === 0 ) {
        div = Number(value);
      }else{
        if (value === 0) {
          this.Calculate = 'Error';
          this.valueInit = true;
          this.list = [];
          this.Operator = '';
        } else {
          div /= Number(value);
        }
      }
    });
    this.Initialiser(div);
  }
 // La fonction pour efacer la derniere entree de l'ecran
  Supprimer1(){
     
     if (this.Calculate.length === 1) {
      this.Calculate = '0';
      this.valueInit = true;
    } else {
      this.Calculate = this.Calculate.substring(0, (this.Calculate.length - 1));
      if (isNumber(this.Calculate.substring( (this.Calculate.length - 1), this.Calculate.length))) {
        this.readyForAnother = true;
        this.Operator = '';
        this.list.pop();
      }
    }
  }

  Modulo(){
    let div: number;
    this.list.forEach( function(value, index, array) {
      if (index === 0 ) {
        div = value;
      }else{
        if (value === 0) {
         this.Erreur();
        } else {
          div %= value;
        }
      }
    });
   this.Initialiser(div); 
  }
  Initialiser(result:number){
    this.Calculate = '' + result;
    this.list = [];
    this.Operator = '';
   
  }
  Erreur(){
    this.Calculate = 'Error';
          this.valueInit = true;
          this.list = [];
          this.Operator = '';
  }
  } 