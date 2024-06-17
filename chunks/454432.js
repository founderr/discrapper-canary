"use strict";
s.r(t), s("47120"), s("653041");
var l = s("470079"),
  a = s("442837"),
  i = s("430824"),
  n = s("496675"),
  d = s("771845"),
  r = s("99325"),
  o = s("273387"),
  u = s("981631");
t.default = (e, t) => {
  let [s, c] = l.useState(!1), C = (0, a.useStateFromStores)([o.default], () => o.default.getAdminGuildEntryIds(t)), m = (0, a.useStateFromStoresArray)([d.default, i.default, n.default], () => {
    let t = d.default.getFlattenedGuildIds(),
      s = [];
    return t.forEach(t => {
      let l = i.default.getGuild(t);
      null != l && n.default.can(u.Permissions.ADMINISTRATOR, l) && l.id !== e && s.push(l)
    }), s
  }, [e]), f = l.useCallback(async () => {
    c(!0), await r.fetchGuildEntriesForIds(t, m.map(e => e.id)), c(!1)
  }, [t, m]);
  l.useEffect(() => {
    f()
  }, []);
  let _ = l.useMemo(() => m.filter(e => !(null == C ? void 0 : C.has(e.id))), [m, C]);
  return {
    availableGuilds: _,
    addedGuilds: l.useMemo(() => m.filter(e => null == C ? void 0 : C.has(e.id)), [m, C]),
    loading: s
  }
}