import { LightningElement } from "lwc";

export default class ParentComponent extends LightningElement {
  parentUserName;

  handleClickHandler(event) {
    this.parentUserName = this.refs.userName.value;
    console.log("this.parentUserName", this.parentUserName);
  }
}

