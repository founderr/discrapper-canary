"use strict";
n.r(t), n.d(t, {
  Popper: function() {
    return c
  }
});
var r = n("884691"),
  a = n("204748"),
  o = n("84075"),
  i = n("734059"),
  u = function() {},
  s = function() {
    return Promise.resolve(null)
  },
  l = [];

function c(e) {
  var t = e.placement,
    n = void 0 === t ? "bottom" : t,
    c = e.strategy,
    f = void 0 === c ? "absolute" : c,
    d = e.modifiers,
    p = void 0 === d ? l : d,
    h = e.referenceElement,
    m = e.onFirstUpdate,
    _ = e.innerRef,
    y = e.children,
    g = r.useContext(a.ManagerReferenceNodeContext),
    v = r.useState(null),
    b = v[0],
    M = v[1],
    w = r.useState(null),
    k = w[0],
    L = w[1];
  r.useEffect(function() {
    (0, o.setRef)(_, b)
  }, [_, b]);
  var D = r.useMemo(function() {
      return {
        placement: n,
        strategy: f,
        onFirstUpdate: m,
        modifiers: [].concat(p, [{
          name: "arrow",
          enabled: null != k,
          options: {
            element: k
          }
        }])
      }
    }, [n, f, m, p, k]),
    S = (0, i.usePopper)(h || g, b, D),
    T = S.state,
    Y = S.styles,
    x = S.forceUpdate,
    E = S.update,
    O = r.useMemo(function() {
      return {
        ref: M,
        style: Y.popper,
        placement: T ? T.placement : n,
        hasPopperEscaped: T && T.modifiersData.hide ? T.modifiersData.hide.hasPopperEscaped : null,
        isReferenceHidden: T && T.modifiersData.hide ? T.modifiersData.hide.isReferenceHidden : null,
        arrowProps: {
          style: Y.arrow,
          ref: L
        },
        forceUpdate: x || u,
        update: E || s
      }
    }, [M, L, n, T, Y, E, x]);
  return (0, o.unwrapArray)(y)(O)
}