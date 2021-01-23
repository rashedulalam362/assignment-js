//https://github.com/rashedulalam362/assignment-js

//kilometerToMeter

function kilometerToMeter (kilo){

    var meter=kilo*1000;
    
    return meter
    
    }
     
    var result =kilometerToMeter(5)
    console.log(result)

    
    //budgetCalculator

    function budgetCalculator(watch,phone,laptop){

        var watchPrice=watch*50;
        var phonePrice=phone*100;
        var laptopPrice=laptop*500
    
        totalPrice=watchPrice+phonePrice+laptopPrice;
    
        return totalPrice
    
    }
    
    var totalBudget=budgetCalculator(1,3,2)
    console.log(totalBudget)


    //hotelCost

    function hotelCost (days){
        var days;
            if (days<=10){
              hotelFare =days*100;
             
            }
        
            if (days<=20){
              var hotelFare =days*80;
               
              }
        
              if (days>20){
                hotelFare =days*50;
                 
                }
          
         
        
          return hotelFare
        
        
         
        }
        
        
      var result=hotelCost(13)
        console.log(result)
    

// megaFriend

function megaFriend(array) {
    var friends = "";
  
    array.forEach(function(word) {
      if(word.length > friends.length) {
        friends = word;
      }
    });
  
    return friends;
  }
  
  var word = megaFriend(["rashed","minto", "rashedulaalam","jahed"]);
  console.log(word); 