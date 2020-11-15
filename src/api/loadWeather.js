import RNFetchBlob from 'rn-fetch-blob';
import { API, APP_ID, UNITS } from '~/constants';

export default ({ latitude, longitude, city = null }) =>
  new Promise(async (resolve) => {
    const result = {
      error: undefined,
      response: {},
    };
    const basicUrl = `${API}units=${UNITS}`;
    let URL = `${basicUrl}&lat=${latitude}&lon=${longitude}&appid=${APP_ID}`;
    if (city) {
      URL = `${basicUrl}&q=${city}&appid=${APP_ID}`;
    }

    const response = await RNFetchBlob.fetch('GET', URL);

    const data = response.json();

    if (data.cod !== 200) {
      result.error = {
        message: data.message,
        code: data.cod,
        originalError: data,
      };
    } else {
      result.response = {
        ...data,
      };
    }

    resolve(result);
  });