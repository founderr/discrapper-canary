"use strict";
a.r(t);
var n = a("39612"),
  s = a("271579"),
  l = a("756647"),
  i = a("625128"),
  r = a("626135"),
  o = a("954824"),
  u = a("751189"),
  d = a("981631");
let c = "template";
t.default = {
  ...u.default,
  openNativeAppModal(e) {
    i.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER)
  },
  openMobileApp(e, t) {
    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
    let a = null != e ? (0, n.getGuildTemplateDynamicLinkTemplate)(e) : (0, n.getDefaultDynamicLinkTemplate)(),
      i = (0, s.generateAttemptId)(),
      u = (0, s.default)(a, {
        utmSource: c,
        fingerprint: t,
        attemptId: i
      });
    r.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
      fingerprint: (0, l.maybeExtractId)(t),
      attempt_id: i,
      source: c,
      guild_template_code: e
    }), o.default.launch(u, () => {})
  }
}