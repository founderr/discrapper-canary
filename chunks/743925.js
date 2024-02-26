"use strict";
i.r(t), i.d(t, {
  useActivityShelfData: function() {
    return f
  }
}), i("222007");
var l = i("884691"),
  n = i("446674"),
  a = i("442939"),
  d = i("697218"),
  u = i("167726"),
  r = i("449008"),
  o = i("773336"),
  c = i("191225"),
  s = i("334368");

function f(e) {
  let t = (0, n.useStateFromStores)([d.default], d.default.getCurrentUser),
    i = (0, n.useStateFromStoresArray)([c.default], () => c.default.getShelfActivities(e)),
    f = (0, n.useStateFromStores)([u.default], () => u.default.testModeEmbeddedApplicationId),
    p = i.map(e => e.application_id),
    v = null != f ? [f, ...p] : p,
    A = (0, a.default)(v),
    E = l.useMemo(() => A.filter(r.isNotNullish), [A]),
    m = l.useMemo(() => null != f && E.length > 0 && E[0].id === f && null != E[0].embeddedActivityConfig ? [{
      activity: E[0].embeddedActivityConfig,
      application: E[0]
    }] : [], [E, f]),
    y = l.useMemo(() => i.map(e => {
      let t = E.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(r.isNotNullish), [i, E]);
  return l.useMemo(() => [...m, ...y].filter(e => {
    var t;
    let {
      activity: i
    } = e;
    return (null !== (t = i.supported_platforms) && void 0 !== t ? t : []).includes((0, s.default)((0, o.getOS)()))
  }).filter(e => {
    let {
      activity: i
    } = e;
    return !i.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
  }), [null == t ? void 0 : t.nsfwAllowed, y, m])
}