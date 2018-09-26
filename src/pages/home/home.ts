import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  
 name: "";
 total: number;
 showValue: number;
 WhippedCream: boolean;
 Chocolate: boolean;


choc: number;
Wh: number;
WhChic: number;



isIt: boolean;

  constructor(public navCtrl: NavController) {
    this.total = 0;
    this.isIt = false;

    this.WhChic = 0;
    this.Wh = 0;
    this.choc = 0;
  }
  onClickAdd(){
      this.total += 1;
    
      }
    
  
    onClickSubtract(){
      this.total -= 1;
      
   } 
    onClickReset(){
      this.total= 0;
      this.showValue = 0;

    }

    onCheckNUM(){
      if(this.total==0){
        this.isIt = true;
      }
    }
    showSum(){
      this.showValue= 1;
      this.totNumber();
    }
    totNumber(){

      if(this.Chocolate == true && this.WhippedCream ==true){
        this.WhChic +=1;
      }else{
        if (this.Chocolate){
          this.choc += 1;
        }
        if(this.WhippedCream){
          this.Wh +=1;
        }   
     
   }
   console.log(this.choc);
   console.log(this.Wh);
   console.log(this.WhChic);


    }
  
  }

  
