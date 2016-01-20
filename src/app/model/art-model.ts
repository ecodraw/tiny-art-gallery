export class Picture {
    name: string;
    link: string;

    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }
}

export class Collection {
    pictures: Picture[];

    constructor() {
        this.pictures =
        [
            new Picture('pink', 'Panther'),
            new Picture('purple', 'mango')
        ];
    }
    addPicture(p_name: string, p_link: string) {
        this.pictures.push(new Picture(p_name, p_link));
    }
}