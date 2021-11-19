let readlineSync = require("readline-sync");
let userName = readlineSync.question("What is your name? ");

console.log("Welcome :" + userName);
console.log(" ");
console.log("Please enter students information to find out highest marks and average marks of all 5 students. ");
console.log(" ");

let student=[
{name: "",unitTestMarks:"",preFinalMarks:"",finalMarks: ""},
{name: "",unitTestMarks:"",preFinalMarks:"",finalMarks: ""},
{name: "",unitTestMarks:"",preFinalMarks:"",finalMarks: ""},
{name: "",unitTestMarks:"",preFinalMarks:"",finalMarks: ""},
{name: "",unitTestMarks:"",preFinalMarks:"",finalMarks: ""}
];

function studentData(){
  let index=1;
  for(let i=0;i<student.length;i++){
    student[i].name=readlineSync.question("Enter name of Student - "+index+" : " );
    student[i].unitTestMarks=Number(readlineSync.question("Enter Unit Test Marks for "+student[i].name + " : " ));
    student[i].preFinalMarks=Number(readlineSync.question("Enter Pre-Final Marks for "+student[i].name+" : "));
    student[i].finalMarks=Number(readlineSync.question("Enter Final Marks for "+student[i].name+" : "));
    index++;
    console.log(" ");
  }
}

function highestMarks(){
  let highUnit= student[0].unitTestMarks;
  let highPreFinal = student[0].preFinalMarks;
  let high=student[0].finalMarks;       
  
  let hNameUnit="";  
  let hNamePre="";    
  let hName="";       

  // Unit test
  for(let i=0;i<student.length; ){       
    if(highUnit>student[i].unitTestMarks){   
      i++;                             
    }else{
      highUnit =student[i].unitTestMarks;   
      hNameUnit=student[i].name;
      i++;                               
    }
  }
  console.log(hNameUnit+ " scored highest marks in the Unit text with score of : "+ highUnit);
  console.log(" ");
  // Pre-final
  
  for(let i=0;i<student.length; ){
    if(highPreFinal>student[i].preFinalMarks){
      i++;
    }else{
      highPreFinal = student[i].preFinalMarks;
      hNamePre=student[i].name;
      i++;
    }
  }
  console.log(hNamePre+" scored highest marks in the Pre-final exam with score of : "+highPreFinal);
  console.log(" ");
  // final
  for(let i=0;i<student.length;){       
    if(high>student[i].finalMarks){   
      i++;                             
    }else{
      high =student[i].finalMarks;   
      hName=student[i].name; 
      i++;                            
    }
  }
  console.log(hName+" scored highest marks in the final exam with score of : "+high);
  console.log(" ");
}

let avg = 0;
let sum= 0;
function averageFinalMark(){  
  for(let i=0;i<student.lengh;i++){
    sum=sum+student[i].finalMarks;
  }
  avg=(sum/student.length);
  console.log("Total sum is" + sum + ", Average Final Marks of all students is : "+avg);
}

studentData();
highestMarks();
averageFinalMark();