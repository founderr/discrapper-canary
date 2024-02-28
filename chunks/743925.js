"use strict";
l.r(t), l.d(t, {
  useActivityShelfData: function() {
    return f
  }
}), l("222007");
var i = l("884691"),
  n = l("446674"),
  a = l("442939"),
  d = l("697218"),
  u = l("167726"),
  o = l("449008"),
  r = l("773336"),
  c = l("191225"),
  s = l("334368");

function f(e) {
  let t = (0, n.useStateFromStores)([d.default], d.default.getCurrentUser),
    l = (0, n.useStateFromStoresArray)([c.default], () => c.default.getShelfActivities(e)),
    f = (0, n.useStateFromStores)([u.default], () => u.default.testModeEmbeddedApplicationId),
    p = l.map(e => e.application_id),
    v = null != f ? [f, ...p] : p,
    A = (0, a.default)(v),
    E = i.useMemo(() => A.filter(o.isNotNullish), [A]),
    m = i.useMemo(() => null != f && E.length > 0 && E[0].id === f && null != E[0].embeddedActivityConfig ? [{
      activity: E[0].embeddedActivityConfig,
      application: E[0]
    }] : [], [E, f]),
    y = i.useMemo(() => l.map(e => {
      let t = E.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(o.isNotNullish), [l, E]);
  return i.useMemo(() => [...m, ...y].filter(e => {
    var t;
    let {
      activity: l
    } = e;
    return (null !== (t = l.supported_platforms) && void 0 !== t ? t : []).includes((0, s.default)((0, r.getOS)()))
  }).filter(e => {
    let {
      activity: l
    } = e;
    return !l.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
  }), [null == t ? void 0 : t.nsfwAllowed, y, m])
}