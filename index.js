function show(data) {
    console.log(data);
}
//
//var user = {
//    name: 'Пилип',
//    surname: 'Шевченко'
//};
//
//show(user);
//user.name = 'Сергій';
//show(user);
//delete user.name;
//show(user); 

////////////////////


var EmployeeSalaries = {
    Petro:2000,
    Oleg:3000,
    Svytek:1500,
    Bartek:1000
};
var sum = 0;
for(var key in EmployeeSalaries){
    sum+= EmployeeSalaries [key] 
}
show(sum);