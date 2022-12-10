import Loader from './loader';
import { API_KEY } from '../../../KEY';

class AppLoader extends Loader {
  constructor() {
    // super('https://newsapi.org/v2/', {
    // super('https://nodenews.herokuapp.com/', {
    super('https://newsapi-redirect-production.up.railway.app/', {
      apiKey: API_KEY,
    });
  }
}

export default AppLoader;
