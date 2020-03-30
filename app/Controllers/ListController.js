import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.State.lists;
  console.log(_store.State.lists);
  lists.forEach(list => (template += list.Template));
  document.getElementById("listsList").innerHTML = template;
}
//}
//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(event) {
    event.preventDefault();
    let listData = event.target;
    let newList = {
      listTitle: listData.listName.value
    };
    _listService.addList(newList);
    listData.reset();
    _drawLists();
  }
  deleteList(listId) {
    console.log(listId);
    console.log("deleteList called...");
    _store.State.lists = _store.State.lists.filter(
      element => element.id != listId
    );
    _drawLists();
  }
}
