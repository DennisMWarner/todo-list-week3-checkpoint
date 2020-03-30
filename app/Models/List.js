import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.listTitle = data.listTitle;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/ `
    
    <div class="col-3 bg-warning rounded text-light text-left m-3 shadow" id="${this.id}"><h3>${this.listTitle}</h3>
      <div class="row ">
        <div class="col-1 offset-10 text-right">
          <button type="button"class="borderless-button offset-button">
            <i class="fa fa-minus-square text-danger bg-light rounded p-1 fa-2x text-right shadow" onclick="app.listController.deleteList('${this.id}')">
            </i>
            </button>
          </div>
        </div>
    </div>`;
  }
}
