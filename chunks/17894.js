"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var r = n("525654"),
  s = n.n(r),
  a = n("39612"),
  l = n("271579"),
  i = n("756647"),
  o = n("232567"),
  u = n("703656"),
  c = n("314897"),
  d = n("896797"),
  p = n("626135"),
  m = n("954824"),
  f = n("981631");
async function h(e) {
  var t, n;
  let r = null === (t = s().os) || void 0 === t ? void 0 : t.family;
  if ("Android" === r || "iOS" === r) {
    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
      r = (0, l.generateAttemptId)();
    if (null == t && c.default.isAuthenticated()) try {
      await (0, o.fetchCurrentUser)(), t = c.default.getId()
    } catch {}
    return (0, l.default)((0, a.getDefaultDynamicLinkTemplate)(), {
      utmSource: e,
      fingerprint: t,
      attemptId: r
    })
  }
  return "discord://"
}
async function E(e) {
  let t = await h(e),
    n = (0, l.parseDynamicLink)(t);
  null != n && p.default.track(f.AnalyticEvents.DEEP_LINK_CLICKED, {
    fingerprint: (0, i.maybeExtractId)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), m.default.launch(t, e => {
    !e && (0, u.replaceWith)(d.default.fallbackRoute)
  })
}