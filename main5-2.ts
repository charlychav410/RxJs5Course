import { Observable } from "rxjs";

let output = document.getElementById('output');
let button = document.getElementById('button');

let click = Observable.fromEvent(button, 'click');

function load(url: string) {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        
        xhr.addEventListener('load', () =>{
            if(xhr.status === 200){
                let starwars = JSON.parse(xhr.responseText);
                observer.next(starwars);
                observer.complete();
            }else{
                observer.error(xhr.statusText);
            }
        })
    
        xhr.open('GET', url);
        xhr.send();
    //});
    }).retry(3);
}

function renderStarWars(starwars){
    starwars.forEach(element => {
        let div = document.createElement('div');
        div.innerText = element.name;
        output.appendChild(div);
    });
}

click.flatMap(e => load('starwarss.json'))
     .subscribe(
        event => renderStarWars(event),
        error => console.log(`Error: ${error}`),
        () => console.log('Complete')
     );

/*click.subscribe(
    event => load("starwars.json").subscribe(x => renderStarWars(x)),
    error => console.log(`Error: ${error}`),
    () => console.log('Complete')
);*/