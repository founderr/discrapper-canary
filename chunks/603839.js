"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("748780"),
  r = n("442837"),
  o = n("607070"),
  u = n("931240"),
  d = n("650461"),
  c = n("602014"),
  f = n("188837"),
  E = n("496376"),
  h = n("308083"),
  _ = n("653196");
t.default = e => {
  let {
    guildId: t,
    onClose: n,
    gameId: C
  } = e, m = (0, r.useStateFromStores)([d.default], () => null == d.default.getStateForGuild(t).progress), S = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion), [I, p] = s.useState(m && !S ? h.ClanSetupModalPages.INTRO_ANIMATION : h.ClanSetupModalPages.SETUP);
  s.useEffect(() => {
    null != C && (0, u.updateClanSetup)(t, {
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
  return (0, a.jsx)(l.animated.div, {
    style: T,
    className: _.modal,
    children: (0, a.jsx)("div", {
      className: _.modalContents,
      children: (() => {
        switch (I) {
          case h.ClanSetupModalPages.INTRO_ANIMATION:
            return (0, a.jsx)(c.default, {
              guildId: t,
              setPage: p
            });
          case h.ClanSetupModalPages.SETUP:
            return (0, a.jsx)(E.default, {
              guildId: t,
              setPage: p,
              onClose: n
            });
          case h.ClanSetupModalPages.SIGN:
            return (0, a.jsx)(f.default, {
              guildId: t,
              setPage: p,
              onClose: n
            });
          default:
            return null
        }
      })()
    })
  })
}