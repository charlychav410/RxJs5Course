import { Observable } from "rxjs";
let number = [1, 5, 10, 20];


let source2=Observable.from(number).map(x=>x*2).filter(x=>x>=10);

let source = Observable.create((observer)=>{
/*number.forEach(element=>{
    
if (element===10){
    observer.error('Ya valio!');
}
observer.next(element);
});
observer.complete();*/

let index=0;
let produceValue=()=>{
observer.next(number[index++])
if(index<number.length){
setTimeout(()=>{
    produceValue();
},2000);

}
else{observer.complete();}
}
produceValue();
}).map(x=>x*2).filter(x=>x>=10);


source.subscribe(
value=>{
    console.log(`value: ${value}`);
},
error=>{console.log(`value: ${error}`);},
()=>{console.log(`value: ${'complete'}`);}

);
source2.subscribe(
    value=>{
        console.log(`value: ${value}`);
    },
    error=>{console.log(`value: ${error}`);},
    ()=>{console.log(`value: ${'complete'}`);}
    
    );