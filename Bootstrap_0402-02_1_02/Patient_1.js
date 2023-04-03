class Patient {
    constructor(f, i, o, d, s, sh) {
        this.F = f;
        this.I = i;
        this.O = o;
        this.D = new Date(d);
        this.S = s;
        this.SH = sh;
    }
    setById() {
    document.getElementById("F").textContent = this.F;
    document.getElementById("I").textContent = this.I;
    document.getElementById("O").textContent = this.O;
    document.getElementById("Y").textContent = this.D.getFullYear();
    document.getElementById("S").textContent = this.S;
    document.getElementById("SH").textContent = this.SH;
    }
}
let Ivanov = new Patient('Иванов', 'Иван', 'Иванович', new Date(1974, 15, 5), "м", "Исполнено");
Ivanov.setById();
let Sidorov = new Patient('Сидоров', 'Сидор', 'Сидорович', new Date(1980, 20, 5), "м", "Медотвод");
Sidorov.setById();
let Petrova = new Patient('Петрова', 'Мария', 'Иванавна', new Date(1975, 1, 6), "ж", "Назначено");
Petrova.setById();