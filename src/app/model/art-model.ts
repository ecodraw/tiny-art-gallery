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
    selectedPicture: Picture;
    responseText: string;
    obj: any;
    bla: Pictures[];
    selected: number;
    showDetail: boolean;
    constructor() {
        this.pictures =
            [
                new Picture('pink', 'picture_001.jpg'),
                new Picture('purple', 'picture_002.jpg'),
                new Picture('Blau23', 'picture_003.jpg')
            ];
            this.selected = 0;
            this.showDetail = false;
            this.selectedPicture = this.pictures[0];
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
        this.showDetail = !this.showDetail;
        this.pictures.push(new Picture(p_name, this.bla[0].Name));
        this.selected = 2;

    }
    setImage(name: string) {
        this.showDetail = !this.showDetail;
        this.selectedPicture = this.pictures[1];
    }

    getImage(): Picture {
        return this.pictures[this.selected];
    }

    isDetailShown(): boolean {
        return this.showDetail;
    }
}