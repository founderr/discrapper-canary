"use strict";
l.r(t), l.d(t, {
  useActivityShelfData: function() {
    return f
  }
}), l("47120");
var i = l("470079"),
  n = l("442837"),
  a = l("835473"),
  u = l("594174"),
  d = l("695103"),
  r = l("823379"),
  o = l("358085"),
  s = l("317381"),
  c = l("761122");

function f(e) {
  let t = (0, n.useStateFromStores)([u.default], u.default.getCurrentUser),
    l = (0, n.useStateFromStoresArray)([s.default], () => s.default.getShelfActivities(e)),
    f = (0, n.useStateFromStores)([d.default], () => d.default.testModeEmbeddedApplicationId),
    p = l.map(e => e.application_id),
    v = null != f ? [f, ...p] : p,
    E = (0, a.default)(v),
    A = i.useMemo(() => E.filter(r.isNotNullish), [E]),
    m = i.useMemo(() => null != f && A.length > 0 && A[0].id === f && null != A[0].embeddedActivityConfig ? [{
      activity: A[0].embeddedActivityConfig,
      application: A[0]
    }] : [], [A, f]),
    y = i.useMemo(() => l.map(e => {
      let t = A.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(r.isNotNullish), [l, A]);
  return i.useMemo(() => [...m, ...y].filter(e => {
    var t;
    let {
      activity: l
    } = e;
    return (null !== (t = l.supported_platforms) && void 0 !== t ? t : []).includes((0, c.default)((0, o.getOS)()))
  }).filter(e => {
    let {
      activity: l
    } = e;
    return !l.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
  }), [null == t ? void 0 : t.nsfwAllowed, y, m])
}