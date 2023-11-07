console.log("Insert your nickname: ")

let nickname = "Vinny Saints"
const saudacao = "Welcome to your new adventure, "
console.log("[User Resgistered]")
console.log(saudacao + nickname + ". ")

let lvl = 0
console.log("Your current XP is: " + lvl)

let xp = [
    "Iron", 
    "Bronze", 
    "Silver", 
    "Gold", 
    "Platinum", 
    "Ascendant", 
    "Immortal", 
    "Radiant"]

let levelText; 

if (lvl <= 1000){
    levelText = xp[0]
;}else if(lvl <= 2000){
    levelText = xp[1]
;}else if(lvl <= 5000){
    levelText = xp[2]
;}else if(lvl <=7000){
    levelText = xp[3]
;}else if(lvl <= 8000){
    levelText = xp[4]
;}else if(lvl <= 9000){
    levelText = xp[5]
;}else if(lvl <= 10000){
    levelText = xp[6]
;}else if(lvl >= 10001){
    levelText = xp[7]
;}

console.log("Status: The hero named " + nickname + ", is at level " + levelText);