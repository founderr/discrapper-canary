"use strict";
t.r(l);
var a = t("735250"),
  n = t("470079"),
  s = t("442837"),
  i = t("749210"),
  d = t("112724"),
  r = t("923029"),
  u = t("353926"),
  o = t("931261"),
  c = t("333323"),
  f = t("430824");
let m = (0, d.default)(c.default);
l.default = function(e) {
  let {
    guildId: l
  } = e, t = (0, s.useStateFromStores)([f.default], () => f.default.getGuild(l), [l]), d = (0, s.useStateFromStores)([u.default], () => u.default.hasLoadedExperiments), c = (0, o.useCanSeeOnboardingHome)(l);
  return (n.useEffect(() => {
    if (d && !c) {
      i.default.escapeToDefaultChannel(l);
      return
    }
  }, [l, d, c]), null != t && c) ? (0, a.jsx)(m, {
    guild: t
  }) : (0, a.jsx)(r.default, {
    channelId: void 0
  })
}