var questionArray=[
    {
        question:"1-Who is founder of Pakistan?",
        answer :"Jinnah",
        options:[
            "Iqbal",
            "Jinnah",
            "Gandhi",
            "Trump"
        ]
    },
    {
        question:"2-Who dicovered Cell?",
        answer:"Robert hook",
        options:[
            "Robert hook",
            "Robert brown",
            "Antony ven leunhook",
            "Galaleo"
        ]
    },
    {
        question:"3-Which is absent in animal cell?",
        answer:"Cell Wall",
        options:[
            "Cell Membrane",
            "Mitochondria",
            "Vacuole",
            "Cell Wall"
        ]
    },
    {
        question:"4-CPU stand for",
        answer:"Control processing unit",
        options:[
            "Control processing unit",
            "Cyber system unit ",
            "Class stand uniform",
            "controlling processes"
        ]
    },
    {
        question:"5-Karachi is also called",
        answer:"City of lights",
        options:[
            "City of roses",
            "City of roads",
            "City of lights",
            "City of temples"
        ]
    }

]
function start(){
    location.href="question.html";
}
function showQues(e){
    var questionElement=document.getElementById("questionElement")
    questionElement.innerHTML=questionArray[e].question;
    
    var optionElement=document.getElementsByClassName("optionElement")
    for(var i=0; i<optionElement.length; i++){
    optionElement[i].innerHTML=questionArray[e].options[i]
    }
    }

var nextQues=document.getElementById("nextQues")
var questionCount=0
    function nextQuestion(){ 
        questionCount++; 
        result(questionCount)
        showQues(questionCount)
        removeActive();
    }
   
        
var ans2;
    function activeClass(e){
        removeActive()
        e.classList.add('active')
        ans2=e.innerHTML;

    }
        
    function removeActive(e){
        var active=document.getElementsByClassName('active')
        for(var i=0; i<active.length; i++)
        active[i].classList.remove('active')
    }
var ans1;
var point=0;
    function result(){
        ans1=questionArray[questionCount-1].answer
        if(ans1==ans2){
            console.log("right")
            point+=10
            console.log(point)
        }else{
            console.log("wrong")
        }
  if(questionCount===questionArray.length){
        alert("Your score : " + point + "/50")}
        else{
            showQues(questionCount);
        }
        }



        // var startingMinutes=04;
        // var time=startingMinutes*60;
        // var timer=document.getElementById("timer")
        // setInterval(timer,10)
        // function countDown(){
        //     var minutes=Math.floor(time/60);
        //     var seconds=time % 60 ;
        //     seconds=seconds<10 ? '0' + seconds: seconds;
        //     timer.innerHTML=minutes+":"+seconds;
        //     time--;

        // }
        // countDown();
        
// var element = document.querySelector(".anim")
// var frames = [{
//     backgroundColor: "#FCE4EC",
//     },
//     {backgroundColor: "#F48FB1"}
// ]
// var timing = {
//     duration : 2000 , 
//     iteration : Infinity,
// }

// element.animate(frames,timing)




// window.addEventListener("load" , function(){
//     shapeAnimation = document.querySelector(".anim");
//     var frames = [
       
//         {background : "#F06292" },
//         {background : "#FF80AB"} , 
//         {background : "#FF4081" } ,
//         {background : "silver" },
//         {background : "palevioletred"}, 
        
//     ];

//     var timing = {
//         duration : 1000, 
//         iterations : Infinity,
//     }
//     shapeAnimation.animate(frames,timing)
// });
       
    
    


