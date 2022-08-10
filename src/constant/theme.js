import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
export const widthToDp = number => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

export const heightToDp = number => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};
export const theme = {
  colors: {
    textColor: '#313236',
    placeholder: '#AAABAC',
    primary: '#FC997C',
    secondary: '#FBAF98',
    appColor: '#F86E44',
    danger: '#F81F10',
  },
  spacing: {
    xs: widthToDp('1%'),
    s: widthToDp('2%'),
    m: widthToDp('5%'),
    l: widthToDp('8%'),
    xl: widthToDp('10%'),
  },
  textSize: {
    xs: widthToDp('3%'),
    s: widthToDp('3.5%'),
    m: widthToDp('4%'),
    xm: widthToDp('4.5%'),
    l: widthToDp('5%'),
    x: widthToDp('6%'),
  },
};

Object.freeze(theme);
