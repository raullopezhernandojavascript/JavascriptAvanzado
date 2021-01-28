
// EXPLICACION DEL OBSERVER IMPLEMENTADO

// Por si queda un poco de duda con este patrón les pongo a detalle la explicación.

// Básicamente en este patrón todo interactúa entre si, tenemos la clase Bitcoin Price
//  que tiene un array observers, un constructor con el elemento HTML 
//  de donde se tomaran los valores, en el mismo constructor tenemos 
//  un evento que activara el método notify() en cuando este cambie.

// El método notify pasara al constructor PriceDisplay, quien sera el encargado de actualizar el elemento HTML (el observador).

// En el momento que hacemos lo siguiente:

// const value = new BitcoinPrice();
// const display = new PriceDisplay();
// value.subscribe(display);
// Hacemos que surja la conexión, entre el input y el elemento HTML que mostrara la actualización.


interface Observer {
    update: (data: any) => void
}

// EL subject expone dos funciones : subscribe y unsuscribe
interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

// Notificar a los subjects el cambio de precio del Bitcoin

class BitcoinPrice implements Subject {
    observers: Observer[] = []

    constructor() {
        // Cuando el value del input cambie su valor queremos notificar a todos
        // nuestros subscriptores
        //* Importante al estar utilizanod 'Typescript' hay que definir siempre
        // el tipo de variable. Ejemplo 'el' es el input del HTML donde va el valor
        // asi que es de tipo 'HtmlInputElement'


        const inputPrecio: HTMLInputElement = document.querySelector('#value');
        inputPrecio.addEventListener('input', () => {
            this.notify(inputPrecio.value);
        })
    }
    // Agregamos los observadores a la subscripcion

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    // Nos quitamos de la subscripcion

    unsubscribe(observer: Observer) {
        // Encontramos el indice de ese observer
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })
        // Sacamos al observer de la lista de observers
        this.observers.splice(index, 1);
    }
    // Cuando el precio cambie queremos notificar a todos nuestros subscriptores
    //Le pasamos "data" que son los datos que han cambiado
    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

// Esta clase nos va a permitir imprimir los cambios
class PriceDisplay implements Observer {
    private inputMostrarActualizacionesPrecio: HTMLInputElement;
    constructor() {
        this.inputMostrarActualizacionesPrecio = document.querySelector('#price');
    }
    update(data: any) {
        this.inputMostrarActualizacionesPrecio.innerText = data;
    }
}


const value = new BitcoinPrice()
const display = new PriceDisplay()

// Instanciamos la clase para tener un objeto "BitCoinPrice" y a traves de su metodo "subcribe"
// y el valor que recogemos despues de la instanciacion de "PriceDisplay" podemos mostrar el
// valor que ha sido modificado en el input

value.subscribe(display);

// A los 5 segundos dejaremos de estar subscritos
setTimeout(() =>
    value.unsubscribe(display),
    5000
)