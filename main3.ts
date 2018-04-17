import {Observable, Observer} from "rxjs";
let number = [1, 5, 10];
let source = Observable.from(number);

class MyObservable implements Observer<number> {
    closed?: boolean;
    next(value: number)
    {console.log( `ValueOK: ${value} ` )};
    error (err: any) {console.log( `Error: ${err} `)};
    complete() {console.log( `Complete! `)};
}

source.subscribe(new MyObservable);
source.subscribe(
value=>{
    console.log(`value: ${value}`);
},
error=>{console.log(`value: ${error}`);},
()=>{console.log(`value: ${'complete'}`);}

);