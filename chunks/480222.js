"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("207796"),
  d = n("420212"),
  c = n("689938"),
  f = n("885107");
let E = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};
t.default = function(e) {
  let {
    children: t,
    onClose: n
  } = e, C = s.useCallback(() => {
    (0, u.setClanDiscoveryMode)(u.ClanDiscoveryMode.DISCOVERY), null == n || n()
  }, [n]);
  s.useEffect(() => {
    let e = e => {
      e.key === d.KeyboardKeysUpdated.ESCAPE && C()
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [C]);
  let h = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion),
    _ = (0, l.useSpring)({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      config: E,
      delay: 500,
      immediate: h
    });
  return (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("div", {
      className: f.saveContainer,
      children: (0, a.jsx)(r.Button, {
        onClick: C,
        look: r.ButtonLooks.OUTLINED,
        color: r.ButtonColors.PRIMARY,
        children: c.default.Messages.SAVE
      })
    }), (0, a.jsx)(l.animated.div, {
      style: {
        opacity: _.opacity,
        transform: _.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)"))
      },
      className: f.contentWrapper,
      children: (0, a.jsx)(r.Scroller, {
        fade: !0,
        className: f.content,
        children: t
      })
    })]
  })
}