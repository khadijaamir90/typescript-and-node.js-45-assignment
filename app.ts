type Car = {
    manufacture: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacture: string, model: string, options: Record<string, any>): Car {
    return {
        manufacture: manufacture,
        model: model,
        ...options,
    };
}

const myCar: Car = createCar("Toyota", "Corolla", { color: "silver", year: "2024" });
console.log(myCar);

