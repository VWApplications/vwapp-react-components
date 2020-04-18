import { infoAlert, successAlert, errorAlert, loadingAlert, choiceAlert, closeSwal } from "./alerts";

export class Utilities {
  static alert(type, kwargs) {
    switch (type) {
      case "info":
        return infoAlert(...kwargs);
      case "success":
        return successAlert(...kwargs);
      case "error":
        return errorAlert(...kwargs);
      case "loading":
        return loadingAlert(...kwargs);
      case "choice":
        return choiceAlert(...kwargs);
      case "close":
        return closeSwal();
      default:
        return null;
    }
  }
}
