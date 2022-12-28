export default class Todo {
  constructor(name, due, cat) {
    this.name = name;
    this.due = due;
    this.cat = cat;
  }

  save() {
    console.log(this);
  }
}
