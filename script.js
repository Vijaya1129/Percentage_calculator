//function for calculating grades
const calculate = () =>{

    //getting input from user 
    let eng=document.querySelector("#eng").value;
    let hin=document.querySelector("#hin").value;
    let chem=document.querySelector("#chem").value;
    let phy=document.querySelector("#phy").value;
    let mat=document.querySelector("#mat").value;
    let soc=document.querySelector("#soc").value;
    let grades="";
    let subject1=parseInt(eng);
    let subject2=parseInt(hin);
    let subject3=parseInt(chem);
    let subject4=parseInt(phy);
    let subject5=parseInt(mat);
    let subject6=parseInt(soc);
         
    //input is string so the typecasting is neccessary
    let totalmarks= parseFloat(eng)+parseFloat(hin)+parseFloat(chem)+parseFloat(phy)
                    +parseFloat(mat)+parseFloat(soc);

    //checking condition for  the providing the grade to student based on there percentage
      let percentage =( totalmarks / 600 ) * 100;
      if(percentage<=100 && percentage>=80)
      {
        grades="A";
      } 
      else if(percentage<=79 && percentage>=60)
      {
        grades="B";
      } 
      else if(percentage<=59 && percentage>=40)
      {
        grades="C";
      }   
      else
      {
        grades="F";
      }         
       
      //checking the values are empty if empty means show message as fill them
      if(eng == ""||hin == ""||chem == ""||phy == ""||mat == ""||soc == "")
      {
         document.querySelector("#showdata").innerHTML="please enter data of all the  fields";
      }
      else
      {
        // checking the condition wheather student is pass or fail
        if(percentage>100 || subject1>100 || subject2>100 || subject3>100 || subject4>100 || subject5>100 || subject6>100)
        {
          document.querySelector("#showdata").innerHTML="out of range";
        }
        else if(subject1>=40 && subject2>=40 && subject3>=40 && subject4>=40 && subject5>=40 && subject6>=40)
        {
         if(percentage>=40){
            document.querySelector("#showdata").innerHTML=
             `Out of 600 your total is  ${totalmarks} and
            percentage is ${percentage}%. <br>
            your grade is ${grades}. <br>
            your are pass.`;
           } 
           else{
            document.querySelector("#showdata").innerHTML=
            `Out of 600 your total is ${totalmarks} and
           percentage is ${percentage}%. <br>
           your grade is ${grades}. <br>
           your are fail  .`;
           }
        }
        else{
          document.querySelector("#showdata").innerHTML="FAIL";
        }
      }
      
};
