"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("597755"),
  l = n.n(a),
  i = n("742270"),
  s = n("815157"),
  r = n("391679"),
  u = n("327037"),
  o = n("393414"),
  c = n("271938"),
  d = n("476108"),
  f = n("599110"),
  I = n("65300"),
  _ = n("49111");
async function S(e) {
  var t, n;
  let a = null === (t = l.os) || void 0 === t ? void 0 : t.family;
  if ("Android" === a || "iOS" === a) {
    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
      a = (0, s.generateAttemptId)();
    if (null == t && c.default.isAuthenticated()) try {
      await (0, u.fetchCurrentUser)(), t = c.default.getId()
    } catch {}
    return (0, s.default)((0, i.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: a
    })
  }
  return "discord://"
}
async function T(e) {
  let t = await S(e),
    n = (0, s.parseDynamicLink)(t);
  null != n && f.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, r.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), I.default.launch(t, e => {
    !e && (0, o.replaceWith)(d.default.fallbackRoute)
  })
}