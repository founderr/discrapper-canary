t.d(n, {
  Z: function() {
    return N
  }
});
var r = t(525654),
  s = t.n(r),
  a = t(39612),
  l = t(271579),
  i = t(756647),
  o = t(232567),
  u = t(703656),
  c = t(314897),
  d = t(896797),
  I = t(626135),
  _ = t(954824),
  T = t(981631);
async function E(e) {
  var n, t;
  let r = null === (n = s().os) || void 0 === n ? void 0 : n.family;
  if ("Android" === r || "iOS" === r) {
    let n = null !== (t = c.default.getFingerprint()) && void 0 !== t ? t : c.default.getId(),
      r = (0, l.WS)();
    if (null == n && c.default.isAuthenticated()) try {
      await (0, o.k)(), n = c.default.getId()
    } catch {}
    return (0, l.ZP)((0, a.Gk)(), {
      utmSource: e,
      fingerprint: n,
      attemptId: r
    })
  }
  return "discord://"
}
async function N(e) {
  let n = await E(e),
    t = (0, l.zS)(n);
  null != t && I.default.track(T.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, i.K)(t.fingerprint),
    attempt_id: t.attemptId,
    source: t.utmSource
  }), _.Z.launch(n, e => {
    !e && (0, u.dL)(d.Z.fallbackRoute)
  })
}