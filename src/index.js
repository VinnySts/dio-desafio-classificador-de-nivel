console.log("Insert your nickname: ")

let nickname = "Vinny Saints"
const saudacao = "Welcome to your new adventure, "
console.log("[User Resgistered]")
console.log(saudacao + nickname + ". ")

let xp = 0
console.log("Your current XP is: " + xp)

let lvl = [
    "Iron", 
    "Bronze", 
    "Silver", 
    "Gold", 
    "Platinum", 
    "Ascendant", 
    "Immortal", 
    "Radiant"]

let levelText; 

if (xp <= 1000){
    levelText = lvl[0]
;}else if(xp <= 2000){
    levelText = lvl[1]
;}else if(xp <= 5000){
    levelText = lvl[2]
;}else if(xp <=7000){
    levelText = lvl[3]
;}else if(xp <= 8000){
    levelText = lvl[4]
;}else if(xp <= 9000){
    levelText = lvl[5]
;}else if(xp <= 10000){
    levelText = lvl[6]
;}else if(xp >= 10001){
    levelText = lvl[7]
;}

console.log("Status: The hero named " + nickname + ", is at level " + levelText);