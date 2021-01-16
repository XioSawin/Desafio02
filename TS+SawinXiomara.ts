function operacion (a: number, b:number, op:string) {
    return new Promise((resolv, reject)=> {
        switch(op){
            case 'suma':
                import('./suma').then(e => { 
                    let Suma = e.default;
                    let s = new Suma(a, b); 
                    resolv(s.resultado()); 
                })
            break;
            
            case 'resta':
                import('./resta').then(e => { 
                    let Resta = e.default;
                    let r = new Resta(a, b); 
                    resolv(r.resultado());
                })
            break;
        }
    })
}

async function operaciones() {
    let suma = await operacion(33, 23, 'suma');
    let resta = await operacion(55, 18, 'resta');

    console.log(`Resultado de 33 + 23 = ${suma}`);
    console.log(`Resultado de 55 - 18 = ${resta}`);
}

operaciones();