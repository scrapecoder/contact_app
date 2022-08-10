import {CommonActions} from '@react-navigation/core';

let _container; // eslint-disable-line

function setContainer(container) {
  _container = container;
}

function navigate(routeName) {
  _container.dispatch(
    CommonActions.navigate({
      name: routeName,
    }),
  );
}
function goBack() {
  _container.dispatch(CommonActions.goBack());
}

function getCurrentRoute() {
  if (!_container || !_container.state.nav) {
    return null;
  }

  return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
  setContainer,
  goBack,
  getCurrentRoute,
};
