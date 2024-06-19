n.d(t, {
  Z: function() {
    return x
  }
});
var r = n(525654),
  s = n.n(r),
  a = n(39612),
  o = n(271579),
  i = n(756647),
  l = n(232567),
  u = n(703656),
  c = n(314897),
  d = n(896797),
  p = n(626135),
  m = n(954824),
  N = n(981631);
async function h(e) {
  var t, n;
  let r = null === (t = s().os) || void 0 === t ? void 0 : t.family;
  if ("Android" === r || "iOS" === r) {
    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
      r = (0, o.WS)();
    if (null == t && c.default.isAuthenticated()) try {
      await (0, l.k)(), t = c.default.getId()
    } catch {}
    return (0, o.ZP)((0, a.Gk)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: r
    })
  }
  return "discord://"
}
async function x(e) {
  let t = await h(e),
    n = (0, o.zS)(t);
  null != n && p.default.track(N.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, i.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), m.Z.launch(t, e => {
    !e && (0, u.dL)(d.Z.fallbackRoute)
  })
}