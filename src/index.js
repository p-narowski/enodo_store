import style from "./css/index.css";
import { markUp, markDown } from "./js/makeMarks";

const selectionPics = document.querySelectorAll(".fakeimg");
for (var i = 0; i < selectionPics.length; i++) {
  selectionPics[i].onmouseover = markUp;
  selectionPics[i].onmouseout = markDown;
}