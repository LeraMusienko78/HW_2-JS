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

const age = confirm (`${userName} ${userSurname} тебе ${2023-userYearOfBirth} ?`);
alert (age);
console.log ("[AGE]" , age);