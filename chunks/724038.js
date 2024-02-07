"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var r = n("597755"),
  i = n.n(r),
  s = n("742270"),
  l = n("815157"),
  a = n("391679"),
  u = n("327037"),
  o = n("393414"),
  c = n("271938"),
  d = n("476108"),
  f = n("599110"),
  I = n("65300"),
  _ = n("49111");
async function E(e) {
  var t, n;
  let r = null === (t = i.os) || void 0 === t ? void 0 : t.family;
  if ("Android" === r || "iOS" === r) {
    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
      r = (0, l.generateAttemptId)();
    if (null == t && c.default.isAuthenticated()) try {
      await (0, u.fetchCurrentUser)(), t = c.default.getId()
    } catch {}
    return (0, l.default)((0, s.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: r
    })
  }
  return "discord://"
}
async function T(e) {
  let t = await E(e),
    n = (0, l.parseDynamicLink)(t);
  null != n && f.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, a.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), I.default.launch(t, e => {
    !e && (0, o.replaceWith)(d.default.fallbackRoute)
  })
}