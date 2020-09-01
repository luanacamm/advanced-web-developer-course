a = 5;
b = '5';

if (a == b) {
    console.log('true')
}else{
    console.log('false')
}

//While loop
var a = 0;
while (a < 10){
    console.log(a + 'Hello Wold');
    a++;
}

var a = 0;
do{
    console.log(a +' Bye World');
    a++;
}while
    (a < 10);

for(i = 1; i< 20; i++){
    console.log(i+ 'Hi There!')
    if(i==6){
        console.log('We have reached 6!');
        continue;
    }
}
var someData = [10,20,50,30,40,60];
var newData = someData.sort();
console.log(newData);

var someData = [10,20,50,30,40,60];
var newData = someData.reverse();
console.log(newData);

var someData = [10,20,50,30,40,60];
var newData = someData.join();
console.log(newData);

