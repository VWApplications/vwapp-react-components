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
        return infoAlert.apply(infoAlert, [...arguments].slice(1));
      case this.SUCCESS:
        return successAlert.apply(successAlert, [...arguments].slice(1));
      case this.ERROR:
        return errorAlert.apply(errorAlert, [...arguments].slice(1));
      case this.LOADING:
        return loadingAlert.apply(loadingAlert, [...arguments].slice(1));
      case this.CHOICE:
        return choiceAlert.apply(choiceAlert, [...arguments].slice(1));
      case this.CLOSE:
        return closeSwal();
      default:
        return null;
    }
  }
}
