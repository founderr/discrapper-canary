"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("525654"),
  r = n.n(a),
  s = n("39612"),
  l = n("271579"),
  i = n("756647"),
  u = n("232567"),
  o = n("703656"),
  d = n("314897"),
  c = n("896797"),
  f = n("626135"),
  _ = n("954824"),
  P = n("981631");
async function S(e) {
  var t, n;
  let a = null === (t = r().os) || void 0 === t ? void 0 : t.family;
  if ("Android" === a || "iOS" === a) {
    let t = null !== (n = d.default.getFingerprint()) && void 0 !== n ? n : d.default.getId(),
      a = (0, l.generateAttemptId)();
    if (null == t && d.default.isAuthenticated()) try {
      await (0, u.fetchCurrentUser)(), t = d.default.getId()
    } catch {}
    return (0, l.default)((0, s.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: a
    })
  }
  return "discord://"
}
async function A(e) {
  let t = await S(e),
    n = (0, l.parseDynamicLink)(t);
  null != n && f.default.track(P.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, i.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), _.default.launch(t, e => {
    !e && (0, o.replaceWith)(c.default.fallbackRoute)
  })
}