"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("718017"),
  i = a("442837"),
  r = a("607070"),
  o = a("931240"),
  u = a("650461"),
  d = a("35313"),
  c = a("602014"),
  f = a("188837"),
  E = a("496376"),
  h = a("308083"),
  _ = a("156610");
t.default = e => {
  let {
    guildId: t,
    onClose: a,
    gameId: C
  } = e, m = (0, i.useStateFromStores)([u.default], () => null == u.default.getStateForGuild(t).progress), S = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), [p, I] = s.useState(m && !S ? h.ClanSetupModalPages.INTRO_ANIMATION : h.ClanSetupModalPages.SETUP);
  s.useEffect(() => {
    null != C && (0, o.updateClanSetup)(t, {
      requiredGameId: C
    })
  }, [C, t]);
  let T = (0, d.useFullScreenModalAnimationStyle)();
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