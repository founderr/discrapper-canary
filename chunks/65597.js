"use strict";
E.r(_), E.d(_, {
  statesWillNeverBeEqual: function() {
    return r
  },
  default: function() {
    return a
  },
  useStateFromStoresObject: function() {
    return n
  },
  useStateFromStoresArray: function() {
    return i
  }
}), E("70102"), E("222007");
var t = E("884691"),
  o = E("233736"),
  I = E("995113");

function T(e, _) {
  return e === _
}

function r(e, _) {
  return !1
}

function a(e, _, E) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : T,
    {
      current: a
    } = (0, t.useRef)({
      stores: e,
      areStatesEqual: r,
      getStateFromStores: _,
      prevDeps: void 0,
      state: void 0
    }),
    n = a.state;
  if (null == E || !(0, o.areArraysShallowEqual)(E, a.prevDeps)) {
    let e = _();
    (null == n || !r(n, e)) && (n = e)
  }(0, t.useLayoutEffect)(() => {
    a.getStateFromStores = _, a.prevDeps = E, a.state = n
  });
  let [, i] = (0, t.useState)(null);
  return (0, t.useLayoutEffect)(() => {
    let _ = () => {
      let e = a.getStateFromStores();
      !r(a.state, e) && (a.state = e, i({}))
    };
    _();
    let E = new I.default(e, _);
    return E.attach("useStateFromStores"), () => E.detach()
  }, []), n
}

function n(e, _, E) {
  return a(e, _, E, o.default)
}

function i(e, _, E) {
  return a(e, _, E, o.areArraysShallowEqual)
}