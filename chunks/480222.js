var s = n(735250),
  i = n(470079),
  l = n(920906),
  a = n(442837),
  r = n(481060),
  o = n(607070),
  c = n(207796),
  u = n(420212),
  d = n(689938),
  E = n(151785);
let h = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};
t.Z = function(e) {
  let {
    children: t,
    onClose: n
  } = e, _ = i.useCallback(() => {
    (0, c.fH)(c.v0.DISCOVERY), null == n || n()
  }, [n]);
  i.useEffect(() => {
    let e = e => {
      e.key === u.vn.ESCAPE && _()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [_]);
  let I = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
    m = (0, l.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: h,
      delay: 500,
      immediate: I
    });
  return (0, s.jsxs)("div", {
    className: E.container,
    children: [(0, s.jsx)("div", {
      className: E.saveContainer,
      children: (0, s.jsx)(r.Button, {
        onClick: _,
        look: r.ButtonLooks.OUTLINED,
        color: r.ButtonColors.PRIMARY,
        children: d.Z.Messages.SAVE
      })
    }), (0, s.jsx)(l.animated.div, {
      style: {
        opacity: m.opacity,
        transform: m.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
      },
      className: E.contentWrapper,
      children: (0, s.jsx)(r.Scroller, {
        fade: !0,
        className: E.content,
        children: t
      })
    })]
  })
}