"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("718017"),
  i = a("748780"),
  r = a("442837"),
  o = a("607070"),
  u = a("931240"),
  d = a("650461"),
  c = a("602014"),
  f = a("188837"),
  E = a("496376"),
  h = a("308083"),
  _ = a("653196");
t.default = e => {
  let {
    guildId: t,
    onClose: a,
    gameId: C
  } = e, m = (0, r.useStateFromStores)([d.default], () => null == d.default.getStateForGuild(t).progress), S = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), [p, I] = s.useState(m && !S ? h.ClanSetupModalPages.INTRO_ANIMATION : h.ClanSetupModalPages.SETUP);
  s.useEffect(() => {
    null != C && (0, u.updateClanSettings)(t, {
      requiredGameId: C
    })
  }, [C, t]);
  let T = (0, l.useSpring)({
    from: {
      opacity: S ? 1 : 0,
      transform: S ? "scale(1)" : "scale(1.2)"
    },
    to: {
      opacity: 1,
      transform: "scale(1)"
    },
    config: {
      easing: i.default.Easing.quad,
      duration: S ? 0 : 200,
      clamp: !0
    }
  });
  return (0, n.jsx)(l.animated.div, {
    style: T,
    className: _.modal,
    children: (0, n.jsx)("div", {
      className: _.modalContents,
      children: (() => {
        switch (p) {
          case h.ClanSetupModalPages.INTRO_ANIMATION:
            return (0, n.jsx)(c.default, {
              guildId: t,
              setPage: I
            });
          case h.ClanSetupModalPages.SETUP:
            return (0, n.jsx)(E.default, {
              guildId: t,
              setPage: I,
              onClose: a
            });
          case h.ClanSetupModalPages.SIGN:
            return (0, n.jsx)(f.default, {
              guildId: t,
              setPage: I,
              onClose: a
            });
          default:
            return null
        }
      })()
    })
  })
}