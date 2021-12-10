////////question 1//////////////

var arr = [
    {
        name : "juice",
        price : 50,
        quantity : 3
    },
    {
        name : "cookie",
        price : 30,
        quantity : 9
    },
    {
        name : "shirt",
        price : 880,
        quantity : 1
    },
    {
        name : "pen",
        price : 100,
        quantity : 2
    },
    // totalPrice = function (){
    //     var obt = this.arr[0].price*3 + this.arr[1].price*9 + this.arr[2].price*1 + this.arr[3].price*2
    //     return obt
    // }
]
console.log(arr[0].price*3)
console.log(arr[1].price*9)
console.log(arr[2].price*1)
console.log(arr[3].price*2)


/////////////////question 2/////////////////
var object = {
    name : "Nimra",
    email : "nimrairfan43320@gmail.com",
    password : "12345",
    age : 17,
    gender : "Female",
    city : "Karachi",
    country : "Pakistan"

}
var check = "age" in object
console.log(check)
var check = "country" in object
console.log(check)
var check = "firstName" in object
console.log(check)
var check = "Lastname" in object
console.log(check)


/////////////question 3/////////////
function Teachers(teachName , teachSub , teachClass , teachQuali){
    this.teachName = teachName;
    this.teachSub = teachSub;
    this.teachClass = teachClass;
    this.teachQuali = teachQuali;
}
var teacher1 = new Teachers("Esha" , "Biology" , 10 , "BS.hons" )
var teacher2 = new Teachers("Rukhsar" , "Maths" , 5 , "Masters" )
var teacher3 = new Teachers("Alaya" , "English" , 8 , "Under Graduate" )
console.log(teacher1)
console.log(teacher2)
console.log(teacher3)


/////////////////queston 4 //////////


function Records(Name , Gender , Address , Education , Profession){
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
var person1 = new Records("Nimra" , "female" , "gulshan" , "HSC" , "student")
var person2 = new Records("Usama" , "male" , "clifton" , "under Graduate" , "Businessman")
var person3 = new Records("Esha" , "female" , "Female" , "Matric" , "physiologist")

document.getElementById("myselectbox")
Select = "<select>" + 
    "<option>" + "HSC" + "</option>" + 
    "<option>" + "Under Graduate" + "</option>" +
    "<option>" + "Matric" + "</option>" +
    "<select>"

    myselectbox.innerHTML = Select

document.getElementById("myselectbox2")
Select2 = "<select>" + 
    "<option >" + "Profession" + "</option>" + 
    "<option>" + "student" + "</option>" + 
    "<option>" + "Bussinessman" + "</option>" +
    "<option>" + "Physiologist" + "</option>" +
    "<select>"

    myselectbox2.innerHTML = Select2

