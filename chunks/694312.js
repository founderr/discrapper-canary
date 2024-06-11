"use strict";
n.r(t), n.d(t, {
  useActivityShelfData: function() {
    return c
  }
}), n("47120");
var i = n("470079"),
  r = n("442837"),
  s = n("835473"),
  a = n("594174"),
  o = n("695103"),
  l = n("823379"),
  u = n("358085"),
  d = n("317381"),
  _ = n("761122");

function c(e) {
  let t = (0, r.useStateFromStores)([a.default], a.default.getCurrentUser),
    n = (0, r.useStateFromStoresArray)([d.default], () => d.default.getShelfActivities(e)),
    c = (0, r.useStateFromStores)([o.default], () => o.default.testModeEmbeddedApplicationId),
    E = n.map(e => e.application_id),
    I = null != c ? [c, ...E] : E,
    T = (0, s.default)(I),
    f = i.useMemo(() => T.filter(l.isNotNullish), [T]),
    S = i.useMemo(() => null != c && f.length > 0 && f[0].id === c && null != f[0].embeddedActivityConfig ? [{
      activity: f[0].embeddedActivityConfig,
      application: f[0]
    }] : [], [f, c]),
    h = i.useMemo(() => n.map(e => {
      let t = f.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(l.isNotNullish), [n, f]);
  return i.useMemo(() => [...S, ...h].filter(e => {
    var t;
    let {
      activity: n
    } = e;
    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, _.default)((0, u.getOS)()))
  }).filter(e => {
    let {
      activity: n
    } = e;
    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
  }), [null == t ? void 0 : t.nsfwAllowed, h, S])
}