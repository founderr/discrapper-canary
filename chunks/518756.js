"use strict";
n.r(t), n("47120");
var u = n("470079"),
  l = n("442837"),
  i = n("889161"),
  r = n("984933"),
  d = n("430824"),
  a = n("496675"),
  s = n("981631");
t.default = (e, t) => {
  let n = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
    {
      canCreateGuildEvent: E
    } = (0, i.useManageResourcePermissions)(n),
    o = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
    c = u.useMemo(() => null != t ? o.filter(e => {
      let {
        channel: n
      } = e;
      return n.type === t
    }) : o, [o, t]);
  return (0, l.useStateFromStores)([a.default], () => {
    if (a.default.can(s.Permissions.ADMINISTRATOR, n) || E) return !0;
    for (let {
        channel: e
      }
      of c) {
      let {
        canCreateGuildEvent: t
      } = (0, i.getManageResourcePermissions)(e);
      if (t) return !0
    }
    return !1
  }, [c, n, E])
}