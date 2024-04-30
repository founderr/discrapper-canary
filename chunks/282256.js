"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("393903"),
  u = n("514361"),
  d = n("44315"),
  c = n("979264"),
  f = n("915432");
t.default = l.memo(function(e) {
  let {
    children: t,
    fadeClassName: n,
    ...s
  } = e, h = l.useRef(null), [m, p] = l.useState({
    width: 0,
    opacity: 0,
    right: 0
  }), E = (0, r.useStateFromStores)([u.default], () => u.default.gradientPreset), C = l.useCallback(() => {
    var e, t;
    let n = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      a = null === (t = h.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == n || null == a) {
      p({
        width: 0,
        opacity: 0,
        right: 0
      });
      return
    }
    let l = a.right - n.right,
      s = a.width - l;
    p({
      width: s > 0 ? s : 0,
      height: a.height,
      opacity: l > 0 ? 1 : 0,
      right: l
    })
  }, []), g = l.useMemo(() => null == E ? m : {
    ...m,
    background: function(e) {
      let {
        colors: t
      } = e, n = t[t.length - 1];
      return "linear-gradient(to right, transparent, ".concat((0, d.getColor)(n.token), ")")
    }(E)
  }, [m, E]), S = (0, o.useResizeObserver)(C), _ = (0, c.useShouldDisplayClanTag)(s.userId);
  return l.useEffect(() => {
    null != S.current && C()
  }, [_]), (0, a.jsxs)("div", {
    className: f.container,
    ref: S,
    children: [(0, a.jsx)("div", {
      className: f.usernameContainer,
      children: t
    }), (0, a.jsxs)("div", {
      className: f.chipletParent,
      children: [(0, a.jsx)("span", {
        className: f.chipletContainer,
        ref: h,
        children: (0, a.jsx)(c.default, {
          ...s
        })
      }), (0, a.jsx)("div", {
        style: g,
        className: i()(f.overflowingFade, n)
      })]
    })]
  })
})