import { Component } from '@angular/core';
import { isNumber } from 'util';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nvEntree = true;

  // Variable contenant le calcul
  Calculate = '0';

  // tableau contenant la liste des valeurs à calculer 
  list: number[] = [] ;

  //variable contenant la position des operateurs
  IndexOperator = null;

  // Variable booleenne pour savaoir si la barre de calcul est vide
  valueInit = true;
  
  // Variable contenant le symbole de l'operateur
  Operator = '';

  readyForAnother = false; 
  // Declaration d'un tableau contenant les differents symboles de la calculatrice
  numberGroups = [
    ['.' , 'Sup' , 'sqrt' , '%'],
    [7 , 8 , 9 , 'x'],
    [4 , 5 , 6 , '-'],
    [1 , 2 , 3 , '+'],
    [0 , '/' , '=', 'AC'],

  ];

  // Fonction permettant de verifier les syntaxes de calcul
  signeCalcul(signe: string) {
   if ( this.readyForAnother  ) {
     // Lorsqu'il n'y a pas encore d'operateur
       if (this.Operator === '') {
        this.Operator = signe;
        // Le tableau recoit le premier element à calculer
        this.list.push(Number(this.Calculate));
        this.Calculate += '' + signe; 
        this.readyForAnother = false;
        this.IndexOperator = 0;
        console.log(this.list);
      } else {
        //Dans le cas contrait
        if (signe === this.Operator) {
          this.IndexOperator += 1;
          this.Calculate += '' + signe; 
           // Le tableau recoit l'element precedent le signe de calcul
          let nbr:number = Number(this.Calculate.substring(this.Calculate.indexOf(signe, this.IndexOperator),
          this.Calculate.lastIndexOf(signe)));
          nbr = Math.abs(nbr) ;
          this.list.push(nbr);
          this.readyForAnother = false;
          console.log(this.list);
       }}
    }
  }
  //Fonctions permettant de faire les operation de calculs
  Calculer() {
    // Verifie si le dernier element de l'operation n'est pas un signe
    if (Number(this.Calculate.substring((this.Calculate.lastIndexOf(this.Operator) + 1), this.Calculate.length))) {
    this.list.push(Number(this.Calculate.substring((this.Calculate.lastIndexOf(this.Operator) + 1), this.Calculate.length)));
    console.log(this.list);
    //L'operation d'addition
    if (this.Operator === '+' ) {
     let somme: number = 0;
     this.list.forEach( function(value) {
       somme += value;
      });
     this.Calculate = '' + somme;
     this.list = [];
     this.Operator = '';
     }

     //L'operation de soustraction
    else if (this.Operator === '-' ) {
      //console.log()
      let moins: number;
      this.list.forEach( function(value, index, array) {
        if (index === 0 ) {
           moins = value;
           console.log(value);
        }else{
          console.log(value);
          moins -=  value;

        }
       });
      this.Calculate = '' +  moins;
      this.list = [];
      this.Operator = '';
      }

      //L'operation de multiplication
     else if (this.Operator === 'x' ) {
        let fois: number = 1;
        this.list.forEach( function(value) {
          fois *= value;
         });
        this.Calculate = '' + fois;
        this.list = [];
        this.Operator = '';
        }  
        
        //L'operation de division
        else if (this.Operator === '/' ) {
          let div: number;
          this.list.forEach( function(value, index, array) {
            if (index === 0 ) {
              div = value;
            }else{
              if (value === 0) {
                this.Calculate = 'Error';
                this.valueInit = true;
                this.list = [];
                this.Operator = '';
              } else {
                div /= value;
              }
             
            }
          });
          this.Calculate = '' + div;
          this.list = [];
          this.Operator = '';
          }  

          else if (this.Operator === '%' ) {
            let div: number;
            this.list.forEach( function(value, index, array) {
              if (index === 0 ) {
                div = value;
              }else{
                if (value === 0) {
                  this.Calculate = 'Error';
                  this.valueInit = true;
                  this.list = [];
                  this.Operator = '';
                } else {
                  div %= value;
                }
               
              }
            });
            this.Calculate = '' + div;
            this.list = [];
            this.Operator = '';
            }    
    }
     else{
       
      this.Calculate = 'Error';
      this.valueInit = true;
      this.list = [];
      this.Operator = '';
  }}
  // Fonction declencher lors du clic
  onClick(symbol) {
    console.log(symbol);

    if (isNumber(symbol)) {
      if (this.valueInit === true) {
        this.Calculate = '' + symbol; 
        this.valueInit = false;
        this.readyForAnother = true;
      } else { 
      this.Calculate += '' + symbol; 
      this.readyForAnother = true;
       }

    }
    // La fonction pour efacer l'ecran
    else if(symbol === 'AC'){
      this.Calculate = '0';
      this.valueInit = true;

    }

    // La fonction racine carré
    else if(symbol === 'sqrt'){
            let racine: number ;
            
            if (this.Operator === '') {
               racine =  Math.sqrt(Number(this.Calculate));
               console.log(racine);
               this.Calculate = '' + racine;
               this.list = [];
               this.Operator = '';
             } else{
              this.Calculate = 'Error';
              this.valueInit = true;
              this.list = [];
              this.Operator = '';
          }

    }

     // La fonction x au carré
    else if(symbol === 'x^2'){
      let racine: number ;
     
      if (this.Operator === '') {
         racine =  Math.pow(Number(this.Calculate), 2);
         console.log(racine);
         this.Calculate = '' + racine;
         this.list = [];
         this.Operator = '';
       } else{
        this.Calculate = 'Error';
        this.valueInit = true;
        this.list = [];
        this.Operator = '';
    }

}   
 // La fonction pour efacer la derniere entree de l'ecran
    else if(symbol === 'Sup') {
      if (this.Calculate.length === 1) {
        this.Calculate = '0';
        this.valueInit = true;
      } else {
        this.Calculate = this.Calculate.substring(0, (this.Calculate.length - 1));
        if (isNumber(this.Calculate.substring( (this.Calculate.length - 1), this.Calculate.length))) {
          this.readyForAnother = true;
          this.Operator = '';
          this.list.splice((this.list.length - 1));
        }
      }
      
    }

    // La virgule
    else if (symbol === '.' ) {
     if (this.readyForAnother) {
       this.Calculate += '.';
     }
      }  
     // L'egalite
    else if (symbol === '=') {
      console.log(!isNumber(this.Calculate));
      if (!isNumber(this.Calculate)) { 
           this.Calculer();
      } 
    }
    else { 
      this.signeCalcul(symbol);}
   
}
 }