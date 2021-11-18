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
  let highUnit=student[0].unitTestMarks;
  let highPreFinal = student[0].preFinalMarks;
  let high=student[0].finalMarks;       
  
  let indexUnit=0;  
  let indexPre=0;    
  let index=0;       

  // Unit test
  for(let i=0;i<student.length;){       
    if(highUnit>student[i].unitTestMarks){   
      i++;                             
    }else{
      highUnit =student[i].unitTestMarks;    
      i++;                               
      indexUnit++;
    }
  }
  console.log("| " +student[indexUnit].name+" | " + "Scored highest marks in the final exam with score of : "+highUnit);
  console.log(" ");
  // Pre-final
  
  for(let i=0;i<student.length; ){
    if(highPreFinal>student[i].preFinalMarks){
      i++;
    }else{
      highPreFinal = student[1].preFinalMarks;
      i++;
      indexPre++;
    }
  }
  console.log("| " +student[indexPre].name+" | " + "Scored highest marks in the Pre-final exam with score of : "+highPreFinal);
  console.log(" ");
  // final
  for(let i=0;i<student.length;){       
    if(high>student[i].finalMarks){   
      i++;                             
    }else{
      high =student[i].finalMarks;    
      i++;                               
      index++;
    }
  }
  console.log("| " +student[index].name+" | " + "Scored highest marks in the final exam with score of : "+high);
  console.log(" ");
}

function averageFinalMark(){
  let avg = 0;
  let sum=0;
  for(leti=0;i<student.lengh;i++){
    sum=avg+student[i].finalMarks;
  }
  avg=sum/student.length;
  console.log("Average Final Marks of all students is :"+avg);
}

studentData();
highestMarks();
averageFinalMark();