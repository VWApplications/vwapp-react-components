import { infoAlert, successAlert, errorAlert, loadingAlert, choiceAlert, closeSwal } from "./alerts";

export class Alert {
  static INFO = "INFO";
  static SUCCESS = "SUCCESS";
  static ERROR = "ERROR";
  static LOADING = "LOADING";
  static CHOICE = "CHOICE";
  static CLOSE = "CLOSE";

  static run(type) {
    switch (type) {
      case this.INFO:
        return infoAlert.apply(null, [...arguments].slice(1));
      case this.SUCCESS:
        return successAlert.apply(null, [...arguments].slice(1));
      case this.ERROR:
        return errorAlert.apply(null, [...arguments].slice(1));
      case this.LOADING:
        return loadingAlert.apply(null, [...arguments].slice(1));
      case this.CHOICE:
        return choiceAlert.apply(null, [...arguments].slice(1));
      case this.CLOSE:
        return closeSwal();
      default:
        return null;
    }
  }
}
