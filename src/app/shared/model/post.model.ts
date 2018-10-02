export class Post {
    constructor(
        public title: string,
        public content: string,
        public loveIts ?: number,
        public dontLoveIts ?: number
    ) {
        this.loveIts = 0;
        this.dontLoveIts = 0;
    }
}
