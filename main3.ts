import { Observable } from "rxjs";
import { map } from "rxjs/Operator/map";

let numbers = [1, 5, 10];
let source = Observable.create((observer) => {

    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if(index < numbers.length){
            setTimeout(() => {
                produceValue();
            }, 1000);
        }else{
            observer.complete();
        }
    }

    produceValue();
}).map(x => x * 2)
  .filter(x => x > 4);

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('Complete')
);