"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("907002"),
  o = s("446674"),
  d = s("77078"),
  u = s("731898"),
  c = s("206230"),
  E = s("782340"),
  _ = s("398277"),
  I = l.memo(function(e) {
    let {
      renderHeader: t,
      children: s,
      isExpanded: n,
      isStuck: I,
      onExpand: T
    } = e, f = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [S, m] = l.useState(!0), [N, g] = l.useState(!1), {
      ref: h,
      height: C = 0
    } = (0, u.default)(), {
      ref: R,
      height: x = 0
    } = (0, u.default)(), [L, O] = l.useState(n), p = (0, r.useSpring)({
      height: L ? x + C : C,
      immediate: S || f,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => {
        g(!1)
      },
      onRest: () => {
        g(!0)
      }
    });
    l.useLayoutEffect(() => {
      g(!1), O(n)
    }, [n]);
    let [A, M] = l.useState(!1), D = () => {
      M(!1)
    };
    return l.useLayoutEffect(() => {
      let e = setTimeout(() => {
        m(!1)
      }, 100);
      return () => clearTimeout(e)
    }, []), (0, a.jsx)(d.Clickable, {
      className: i(_.editCard, {
        [_.toggled]: n,
        [_.active]: A
      }),
      onMouseLeave: D,
      onMouseDown: () => {
        M(!0)
      },
      onMouseUp: D,
      children: (0, a.jsxs)(r.animated.div, {
        className: i(_.contentExpandContainer, {
          [_.showOverflow]: n && N
        }),
        style: p,
        children: [(0, a.jsx)(d.Clickable, {
          innerRef: h,
          onClick: I ? void 0 : T,
          className: i(_.innerHeader, {
            [_.toggled]: n && I
          }),
          "aria-label": E.default.Messages.EXPAND,
          children: t
        }), (0, a.jsx)("div", {
          ref: R,
          children: s
        })]
      })
    })
  })