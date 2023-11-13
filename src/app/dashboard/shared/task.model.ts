export class Task {

    constructor(
        public title: string,
        public description: string,
        public dueDate: string,
        public priority: string,
        public status: string,
        public actions: string[]) {}
}