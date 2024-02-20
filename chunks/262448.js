"use strict";
n.r(t), n.d(t, {
  Collapsible: function() {
    return p
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("907002"),
  l = n("446674"),
  u = n("731898"),
  c = n("206230"),
  d = n("716806");

function p(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: s,
    isExpanded: p
  } = e, [h, f] = r.useState(!1), E = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), [_, m] = r.useState(!0), [S, g] = r.useState(!1), T = null != p ? p : h, {
    ref: I,
    height: v = 0
  } = (0, u.default)(), {
    ref: C,
    height: A = 0
  } = (0, u.default)(), R = (0, o.useSpring)({
    height: T ? v + A : A,
    immediate: _ || E,
    config: o.config.stiff,
    onRest: () => g(!0)
  }), N = r.useCallback(() => {
    f(!h)
  }, [h, f]);
  return r.useLayoutEffect(() => {
    let e = setTimeout(() => {
      m(!1)
    }, 100);
    return () => clearTimeout(e)
  }, []), (0, i.jsx)("div", {
    className: a(d.collapseable, {
      [d.toggled]: T
    }, n),
    children: (0, i.jsxs)(o.animated.div, {
      className: a(d.contentExpandContainer, {
        [d.showOverflow]: T && S
      }),
      style: R,
      children: [(0, i.jsx)("div", {
        ref: C,
        className: a(d.header, {
          [d.toggled]: T
        }),
        children: t({
          onClick: N
        })
      }), (0, i.jsx)("div", {
        ref: I,
        children: s
      })]
    })
  })
}