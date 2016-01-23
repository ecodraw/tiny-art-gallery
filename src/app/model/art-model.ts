export class Picture {
    name: string;
    link: string;


    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }
}

interface Pictures {
    Name: string;
    Year: number;
    Length: number;
    High: number;
}

export class Collection {
    pictures: Picture[];
    responseText: string;
    obj: any;
    bla: Pictures[];
    constructor() {
        this.pictures =
            [
                new Picture('pink', 'Panther'),
                new Picture('purple', 'mango'),
                new Picture('Blau23', 'vfdg.jpg')
            ];
    }


    addPicture(p_name: string, p_link: string) {
        this.pictures.push(new Picture(p_name, p_link));

        function levelRequestListener() {
            this.bla = JSON.parse(this.responseText);
            console.log(this.bla);
            this.obj = this.bla[0].Name;
        }
        var request = new XMLHttpRequest();
        request.onload = levelRequestListener;
        request.open('get', '/app/model/myart.json', true);
        request.send();

        this.pictures.push(new Picture(p_name, this.bla[0].Name));

    }
}