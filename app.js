'use strict';

// USE FOR YOUR HOMEWORK : prompt , alert , confirm
// conditional : if , else if , else
// To number type : +variable , parseInt(variable)
// < , > , <= , >=
// !!! and - && , or - ||
// ! TYPES

// 1) Get user : name , surname , address , year of birth (1970)
// 2) Print user data , but it must be in the next format :
// "Hello {name} , your surname is {surname} and you are {years old} ... Nice to meet you ;)"
// 3) Ask user to write what is mood she/he/it has today
// if ok => all right , it's great
// ... if fine =>  it's great
// ... if bad =>  you are so moody today
// ... if user unswer not equal any of above => there is something incorrect , try once again
// 4) Ask : How much money do you have ?
//  if more than 300 => output => i take a bit
//  if more than 500 => output => i take some
//  if more than 1000 => output => i take a half of it
//  if more than Not A Number => output => Something incorrect try again later.

// * <1-2> *

const userName = prompt ("Привет ! Как тебя зовут?");
alert (userName);
console.log ("[NAME]", userName);

const userSurname = prompt (`${userName}, как твоя фамилия?`);
alert(userSurname);
console.log ("[SURNAME]" , userSurname);

const userAdress = prompt (`${userName}  ${userSurname} где ты живешь?` );
alert(userAdress);
console.log ("[ADRESS]" , userAdress);

const userYearOfBirth = prompt (`${userName} ${userSurname} скажи свой год рождения?`);
alert (userYearOfBirth);
console.log ("[YEAR-OF-BIRTH]" , userYearOfBirth);

const userAge =  (` ${2023-userYearOfBirth}`);
console.log ("[AGE]" , userAge);

const userData={
    userName,
    userSurname,
    userAdress,
    userYearOfBirth,
    userAge
}
console.log(userData);

const sentence =  (`Привет ${userName} ${userSurname} , ${userAge} лет , приятно познакомиться!`);
alert (sentence);
console.log (sentence);

// * <3> *

const start = confirm (`${userName}, ответь на несколько вопросов:`);
if (start === true){
    alert (`Поехали:`)
}else{
    alert (`Давай тогда позже...`)
}

const question = prompt (" Какая погода за окном : дождь , облачно или солнце ? ");

if (question === "дождь"){
    alert (`Тогда ${userName} пойдем в кино`);
}
else if (question === "облачно"){
    alert (`Пошли ${userName} пошли гулять`);
}
else if (question === "солнце"){
    alert (`Пошли ${userName} загорать`);
}
else{
    alert (" Что случилось? Отвечай правильно!!!")
}

// * <4> *

const question2 = prompt (` ${userName} , у тебя есть деньги? Сколько ?`)

if (question2 < 100){
    alert(` Тебе добавить?`);
}
else if (question2 >= 100 && question2 <500){
    alert (` Давай половину!!!`)
}
else if (question2 >= 500){
    alert (` Оставь 500 , дашь мне половину , остальное отдай в приют для животных`);
}
else {
    alert (` Иди учи цифры !`);
}








