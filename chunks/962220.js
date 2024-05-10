"use strict";
n.r(t);
var a = n("39612"),
  s = n("271579"),
  i = n("756647"),
  l = n("625128"),
  r = n("626135"),
  o = n("954824"),
  u = n("751189"),
  d = n("981631");
let c = "template";
t.default = {
  ...u.default,
  openNativeAppModal(e) {
    l.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER)
  },
  openMobileApp(e, t) {
    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
    let n = null != e ? (0, a.getGuildTemplateDynamicLinkTemplate)(e) : (0, a.getDefaultDynamicLinkTemplate)(),
      l = (0, s.generateAttemptId)(),
      u = (0, s.default)(n, {
        utmSource: c,
        fingerprint: t,
        attemptId: l
      });
    r.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
      fingerprint: (0, i.maybeExtractId)(t),
      attempt_id: l,
      source: c,
      guild_template_code: e
    }), o.default.launch(u, () => {})
  }
}