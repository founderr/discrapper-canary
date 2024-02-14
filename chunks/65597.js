"use strict";
E.r(_), E.d(_, {
  statesWillNeverBeEqual: function() {
    return i
  },
  default: function() {
    return r
  },
  useStateFromStoresObject: function() {
    return I
  },
  useStateFromStoresArray: function() {
    return T
  }
}), E("70102"), E("222007");
var t = E("884691"),
  o = E("233736"),
  n = E("995113");

function a(e, _) {
  return e === _
}

function i(e, _) {
  return !1
}

function r(e, _, E) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a,
    {
      current: r
    } = (0, t.useRef)({
      stores: e,
      areStatesEqual: i,
      getStateFromStores: _,
      prevDeps: void 0,
      state: void 0
    }),
    I = r.state;
  if (null == E || !(0, o.areArraysShallowEqual)(E, r.prevDeps)) {
    let e = _();
    (null == I || !i(I, e)) && (I = e)
  }(0, t.useLayoutEffect)(() => {
    r.getStateFromStores = _, r.prevDeps = E, r.state = I
  });
  let [, T] = (0, t.useState)(null);
  return (0, t.useLayoutEffect)(() => {
    let _ = () => {
      let e = r.getStateFromStores();
      !i(r.state, e) && (r.state = e, T({}))
    };
    _();
    let E = new n.default(e, _);
    return E.attach("useStateFromStores"), () => E.detach()
  }, []), I
}

function I(e, _, E) {
  return r(e, _, E, o.default)
}

function T(e, _, E) {
  return r(e, _, E, o.areArraysShallowEqual)
}