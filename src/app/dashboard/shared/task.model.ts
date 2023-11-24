export class Task {

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public dueDate: string,
        public priority: string,
        public status: string
    ) {}
}