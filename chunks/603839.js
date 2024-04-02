"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("748780"),
  r = n("442837"),
  o = n("607070"),
  u = n("650461"),
  d = n("602014"),
  c = n("188837"),
  f = n("496376"),
  E = n("308083"),
  h = n("653196");
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, _ = (0, r.useStateFromStores)([u.default], () => null == u.default.getState(t)), C = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), S = (0, l.useSpring)({
    from: {
      opacity: C ? 1 : 0,
      transform: C ? "scale(1)" : "scale(1.2)"
    },
    to: {
      opacity: 1,
      transform: "scale(1)"
    },
    config: {
      easing: i.default.Easing.quad,
      duration: C ? 0 : 200,
      clamp: !0
    }
  }), [m, I] = s.useState(_ ? E.ClanSetupModalPages.INTRO : E.ClanSetupModalPages.SETUP);
  return (0, a.jsx)(l.animated.div, {
    style: S,
    className: h.modal,
    children: (0, a.jsx)("div", {
      className: h.modalContents,
      children: (() => {
        switch (m) {
          case E.ClanSetupModalPages.INTRO:
            return (0, a.jsx)(d.ClanSetupIntro, {
              onClose: n,
              setPage: I
            });
          case E.ClanSetupModalPages.ANIMATE:
            return (0, a.jsx)(d.ClanSetupIntroAnimation, {
              guildId: t,
              setPage: I
            });
          case E.ClanSetupModalPages.SETUP:
            return (0, a.jsx)(f.default, {
              guildId: t,
              setPage: I,
              onClose: n
            });
          case E.ClanSetupModalPages.SIGN:
            return (0, a.jsx)(c.default, {
              guildId: t,
              setPage: I,
              onClose: n
            });
          default:
            return null
        }
      })()
    })
  })
}