
//********************************************************************** */
//-------------------------ÖDEV-1 --------------------------------------
//********************************************************************** */

  // let enterNum = Number(prompt("Ortalaması alınacak sayı adedini giriniz♦️"));
  // let sum=0
  // let average=0
  //   for(let i=1;i<=enterNum;i++){
  //   let num = Number(prompt(`${i}. Sayıyı giriniz`));
      
  //     sum+=num;
  //     average = sum/enterNum;
      
  //   }alert(`Sonuç : ${average}`);


    //********************************************************************** */
//-------------------------ÖDEV-2 --------------------------------------
//********************************************************************** */

// let tabanSayi = Number(prompt("Üssü alınmasını istediğiniz taban sayısını giriniz♦️"));
// let usKuvveti = Number(prompt("Girdiğiniz taban sayısının kaçıncı kuvvetini bulmak istersiniz🤞"));
// let carpım=1 ;

//   for(let i=1;i<=usKuvveti;i++){
    
//     carpım*=tabanSayi;
       
//   }alert(`Sonuç : ${carpım}👻`);


    //********************************************************************** */
//-------------------------ÖDEV-3 --------------------------------------
//********************************************************************** */


let sayi = Number(prompt("Basamak adedini bulmak istediğiniz sayısını 😎"));
var basamakSayisi = 0;
while(sayi !== 0)
{
  sayi =Math.floor(sayi / 10);
  ++basamakSayisi;
}
alert(basamakSayisi)
