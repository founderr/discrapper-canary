"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("525654"),
  r = n.n(s),
  a = n("39612"),
  i = n("271579"),
  l = n("756647"),
  o = n("232567"),
  u = n("703656"),
  c = n("314897"),
  d = n("896797"),
  p = n("626135"),
  m = n("954824"),
  _ = n("981631");
async function f(e) {
  var t, n;
  let s = null === (t = r().os) || void 0 === t ? void 0 : t.family;
  if ("Android" === s || "iOS" === s) {
    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
      s = (0, i.generateAttemptId)();
    if (null == t && c.default.isAuthenticated()) try {
      await (0, o.fetchCurrentUser)(), t = c.default.getId()
    } catch {}
    return (0, i.default)((0, a.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: s
    })
  }
  return "discord://"
}
async function h(e) {
  let t = await f(e),
    n = (0, i.parseDynamicLink)(t);
  null != n && p.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, l.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), m.default.launch(t, e => {
    !e && (0, u.replaceWith)(d.default.fallbackRoute)
  })
}