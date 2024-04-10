"use strict";
n.r(t), n("47120");
var l = n("470079"),
  a = n("442837"),
  s = n("889161"),
  i = n("984933"),
  r = n("430824"),
  o = n("496675"),
  u = n("981631");
t.default = (e, t) => {
  let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
    {
      canCreateGuildEvent: d
    } = (0, s.useManageResourcePermissions)(n),
    c = (0, a.useStateFromStores)([i.default], () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY], [e]),
    f = l.useMemo(() => null != t ? c.filter(e => {
      let {
        channel: n
      } = e;
      return n.type === t
    }) : c, [c, t]);
  return (0, a.useStateFromStores)([o.default], () => {
    if (o.default.can(u.Permissions.ADMINISTRATOR, n) || d) return !0;
    for (let {
        channel: e
      }
      of f) {
      let {
        canCreateGuildEvent: t
      } = (0, s.getManageResourcePermissions)(e);
      if (t) return !0
    }
    return !1
  }, [f, n, d])
}