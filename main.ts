import { Observable, Subject } from "rxjs";

let input = <HTMLInputElement>document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('button');
let unsuscribeButton = document.getElementById('unsuscribe');

let click = Observable.fromEvent(button, 'click');
let clickUnsuscribe = Observable.fromEvent(unsuscribeButton, 'click');
let subject = new Subject();

let clickButton = click.subscribe(
    event => {
        console.log('click' + input.value);
        subject.next(input.value);
    },
    error => console.log(`Error: ${error}`),
    () => console.log('Complete')
)

clickUnsuscribe.subscribe(x => {
    clickButton.unsubscribe();
})

subject.subscribe(
    value => {
        console.log('subject' + value);
        let div = document.createElement('div');
        div.innerText = value.toString();
        output.appendChild(div);
    }
)


/*click.subscribe(
    event => load("starwars.json").subscribe(x => renderStarWars(x)),
    error => console.log(`Error: ${error}`),
    () => console.log('Complete')
);*/