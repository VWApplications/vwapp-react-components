import { infoAlert, successAlert, errorAlert, loadingAlert, choiceAlert, closeSwal } from "./alerts";

export class Utilities {
  static alert(type) {
    switch (type) {
      case "info":
        return infoAlert.apply(null, [...arguments].slice(1));
      case "success":
        return successAlert.apply(null, [...arguments].slice(1));
      case "error":
        return errorAlert.apply(null, [...arguments].slice(1));
      case "loading":
        return loadingAlert.apply(null, [...arguments].slice(1));
      case "choice":
        return choiceAlert.apply(null, [...arguments].slice(1));
      case "close":
        return closeSwal();
      default:
        return null;
    }
  }
}
