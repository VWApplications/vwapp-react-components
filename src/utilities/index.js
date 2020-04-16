import { infoAlert, successAlert, errorAlert, loadingAlert, choiceAlert, closeSwal } from './alerts';
import { isEmpty, formatWithLeftZero, replaceAll, makeURL, toBoolean, onlyNumbers, toString } from './utils';

export class Utilities {
  static alert(type, kwargs) {
    switch (type) {
      case 'info':
        return infoAlert(...kwargs);
      case 'success':
        return successAlert(...kwargs);
      case 'error':
        return errorAlert(...kwargs);
      case 'loading':
        return loadingAlert(...kwargs);
      case 'choice':
        return choiceAlert(...kwargs);
      case 'close':
        return closeSwal();
      default:
        return null;
    }
  }

  static method(type, kwargs) {
    switch (type) {
      case 'isEmpty':
        return isEmpty(...kwargs);
      case 'formatWithLeftZero':
        return formatWithLeftZero(...kwargs);
      case 'replaceAll':
        return replaceAll(...kwargs);
      case 'makeURL':
        return makeURL(...kwargs);
      case 'toBoolean':
        return toBoolean(...kwargs);
      case 'onlyNumbers':
        return onlyNumbers(...kwargs);
      case 'toString':
        return toString(...kwargs);
      default:
        return null;
    }
  }
}
