"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("653041"), l("47120");
var n = l("470079"),
  i = l("442837"),
  r = l("430824"),
  a = l("973001");

function s(e) {
  let {
    application: t,
    showMutualGuilds: l = !0
  } = e, s = (0, i.useStateFromStores)([a.default], () => a.default.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), o = (0, i.useStateFromStores)([r.default], () => r.default.isLoaded());
  return n.useMemo(() => {
    let e = [];
    if (!o || !l || null == s || null == t) return e;
    for (let t of s) {
      let l = r.default.getGuild(t);
      null != l && e.push(l)
    }
    return e
  }, [o, s, t, l])
}