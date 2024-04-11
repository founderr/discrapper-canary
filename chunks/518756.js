"use strict";
r.r(t), r("47120");
var s = r("470079"),
  a = r("442837"),
  n = r("889161"),
  u = r("984933"),
  l = r("430824"),
  i = r("496675"),
  o = r("981631");
t.default = (e, t) => {
  let r = (0, a.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
    {
      canCreateGuildEvent: d
    } = (0, n.useManageResourcePermissions)(r),
    c = (0, a.useStateFromStores)([u.default], () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY], [e]),
    f = s.useMemo(() => null != t ? c.filter(e => {
      let {
        channel: r
      } = e;
      return r.type === t
    }) : c, [c, t]);
  return (0, a.useStateFromStores)([i.default], () => {
    if (i.default.can(o.Permissions.ADMINISTRATOR, r) || d) return !0;
    for (let {
        channel: e
      }
      of f) {
      let {
        canCreateGuildEvent: t
      } = (0, n.getManageResourcePermissions)(e);
      if (t) return !0
    }
    return !1
  }, [f, r, d])
}