import { Observable } from "rxjs";

let output = document.getElementById('output');
let button = document.getElementById('button');

let click = Observable.fromEvent(button, 'click');

function load(url: string) {
    let xhr = new XMLHttpRequest();
    
    xhr.addEventListener('load', () =>{
        let starwars = JSON.parse(xhr.responseText);
        starwars.forEach(element => {
            let div = document.createElement('div');
            div.innerText = element.name;
            output.appendChild(div);
        });
    })

    xhr.open('GET', url);
    xhr.send();
}

click.subscribe(
    event => load("starwars.json"),
    error => console.log(`Error: ${error}`),
    () => console.log('Complete')
);