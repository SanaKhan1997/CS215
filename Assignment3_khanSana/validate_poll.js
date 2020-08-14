function pollForm(event){
    var condition = true;
    ResetForm();
    
    var ques = document.forms.newpoll.ques.value;
    var opendate = document.forms["newpoll"].odate.value;
    var opentime = document.forms["newpoll"].otime.value;
    var closedate = document.forms["newpoll"].cdate.value;
    var closetime = document.forms["newpoll"].ctime.value;
    var answer1 = document.forms["newpoll"].ans1.value;
    var answer2 = document.forms["newpoll"].ans2.value;
    var answer3 = document.forms["newpoll"].ans3.value;
    var answer4 = document.forms["newpoll"].ans4.value;
    var answer5 = document.forms["newpoll"].ans5.value;

    var myDate1 = new Date(opendate);
    var mydate2 = new Date(closedate);
    var today = new Date();
    
    if(ques == null || ques == ""){
        condition = false;
        
        document.getElementById("ques_msg").innerHTML = "Enter question \n";
    }
    else if(ques.length > 100){
        condition = false;
        document.getElementById("ques_msg").innerHTML = "Only 100 characters allowd \n";
    }
    if(opendate == null || opendate == ""){
        condition = false;
        
        document.getElementById("open_msg").innerHTML = "Date not selected \n";
    }
    else if(myDate1 < today){
        condition = false;
        document.getElementById("open_msg").innerHTML = "Date selected cannot be earlier than date and time rightnow \n";
    }
    if(closedate == null || closedate == ""){
        condition = false;
        document.getElementById("close_msg").innerHTML = "Closing date is empty \n";
    }
    else if(mydate2 <= myDate1){
        condition = false;
        document.getElementById("close_msg").innerHTML = "Closing cannot be earlier than opening date \n";
    }
    
    if(answer1 == "" && answer2 == "" && answer3 == "" && answer4 == "" && answer5 == ""){
        condition = false;
        document.getElementById("ans_msg").innerHTML = "Enter atleast one answer \n";
    }
    else if(answer1.length > 50 || answer2.length > 50 || answer3.length > 50 || answer4.length > 50 || answer5.length >50){
        condition = false;
        document.getElementById("ans_msg").innerHTML = "One of the anwer has more than 50 characters(reduce the length to 50 character)\n";
    }
    
    
   
    if(condition == true){
        alert("Poll Created!!");
        ResetForm();
    }
    else{
        event.preventDefault();
    }
}

function ResetForm(){
    document.getElementById("ques_msg").innerHTML = "";
    document.getElementById("ans_msg").innerHTML = "";
    document.getElementById("open_msg").innerHTML = "";
    
    document.getElementById("close_msg").innerHTML = "";
}
/*Question Dynamic character count */
function countCharsQues(obj){
    var maxLength = 100;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain <= 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' characters used/'+charRemain+' characters remaining';
    }
}

/* Answer Dynamic Character Count */
function countCharsAns(obj, num){
    var maxLength = 50;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain <= 0){
        document.getElementById("charNumAns"+"num").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNumAns"+num).innerHTML = strLength+' characters used/'+charRemain+' characters remaining';
    }
}