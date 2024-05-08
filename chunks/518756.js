"use strict";
n.r(t), n("47120");
var l = n("470079"),
  a = n("442837"),
  s = n("889161"),
  i = n("984933"),
  u = n("430824"),
  r = n("496675"),
  d = n("981631");
t.default = (e, t) => {
  let n = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
    {
      canCreateGuildEvent: o
    } = (0, s.useManageResourcePermissions)(n),
    I = (0, a.useStateFromStores)([i.default], () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY], [e]),
    c = l.useMemo(() => null != t ? I.filter(e => {
      let {
        channel: n
      } = e;
      return n.type === t
    }) : I, [I, t]);
  return (0, a.useStateFromStores)([r.default], () => {
    if (r.default.can(d.Permissions.ADMINISTRATOR, n) || o) return !0;
    for (let {
        channel: e
      }
      of c) {
      let {
        canCreateGuildEvent: t
      } = (0, s.getManageResourcePermissions)(e);
      if (t) return !0
    }
    return !1
  }, [c, n, o])
}