"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("597755"),
  l = n.n(a),
  i = n("742270"),
  r = n("815157"),
  s = n("391679"),
  u = n("327037"),
  o = n("393414"),
  d = n("271938"),
  c = n("476108"),
  f = n("599110"),
  I = n("65300"),
  _ = n("49111");
async function S(e) {
  var t, n;
  let a = null === (t = l.os) || void 0 === t ? void 0 : t.family;
  if ("Android" === a || "iOS" === a) {
    let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
      a = (0, r.generateAttemptId)();
    if (null == t && d.default.isAuthenticated()) try {
      await (0, u.fetchCurrentUser)(), t = d.default.getId()
    } catch {}
    return (0, r.default)((0, i.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: a
    })
  }
  return "discord://"
}
async function E(e) {
  let t = await S(e),
    n = (0, r.parseDynamicLink)(t);
  null != n && f.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, s.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), I.default.launch(t, e => {
    !e && (0, o.replaceWith)(c.default.fallbackRoute)
  })
}