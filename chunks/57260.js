"use strict";
n.d(t, {
  z: function() {
    return d
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(393238),
  _ = n(607070),
  c = n(517236);

function d(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: s,
    isExpanded: d
  } = e, [E, I] = r.useState(!1), T = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), [h, S] = r.useState(!0), [f, N] = r.useState(!1), A = null != d ? d : E, {
    ref: m,
    height: O = 0
  } = (0, u.Z)(), {
    ref: R,
    height: p = 0
  } = (0, u.Z)(), g = (0, a.useSpring)({
    height: A ? O + p : p,
    immediate: h || T,
    config: a.config.stiff,
    onRest: () => N(!0)
  }), C = r.useCallback(() => {
    I(!E)
  }, [E, I]);
  return r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      S(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, i.jsx)("div", {
    className: o()(c.collapseable, {
      [c.toggled]: A
    }, n),
    children: (0, i.jsxs)(a.animated.div, {
      className: o()(c.contentExpandContainer, {
        [c.showOverflow]: A && f
      }),
      style: g,
      children: [(0, i.jsx)("div", {
        ref: R,
        className: o()(c.header, {
          [c.toggled]: A
        }),
        children: t({
          onClick: C
        })
      }), (0, i.jsx)("div", {
        ref: m,
        children: s
      })]
    })
  })
}