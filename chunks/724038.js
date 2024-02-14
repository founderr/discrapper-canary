"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("597755"),
  s = n.n(a),
  l = n("742270"),
  i = n("815157"),
  r = n("391679"),
  u = n("327037"),
  o = n("393414"),
  d = n("271938"),
  c = n("476108"),
  I = n("599110"),
  _ = n("65300"),
  f = n("49111");
async function T(e) {
  var t, n;
  let a = null === (t = s.os) || void 0 === t ? void 0 : t.family;
  if ("Android" === a || "iOS" === a) {
    let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
      a = (0, i.generateAttemptId)();
    if (null == t && d.default.isAuthenticated()) try {
      await (0, u.fetchCurrentUser)(), t = d.default.getId()
    } catch {}
    return (0, i.default)((0, l.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: a
    })
  }
  return "discord://"
}
async function S(e) {
  let t = await T(e),
    n = (0, i.parseDynamicLink)(t);
  null != n && I.default.track(f.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, r.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), _.default.launch(t, e => {
    !e && (0, o.replaceWith)(c.default.fallbackRoute)
  })
}