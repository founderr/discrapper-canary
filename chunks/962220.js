var s = n(39612),
  r = n(271579),
  i = n(756647),
  l = n(625128),
  a = n(626135),
  o = n(954824),
  u = n(751189),
  c = n(981631);
let d = "template";
t.Z = {
  ...u.Z,
  openNativeAppModal(e) {
    l.Z.openNativeAppModal(e, c.Etm.GUILD_TEMPLATE_BROWSER)
  },
  openMobileApp(e, t) {
    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
    let n = null != e ? (0, s.Oh)(e) : (0, s.Gk)(),
      l = (0, r.WS)(),
      u = (0, r.ZP)(n, {
        utmSource: d,
        fingerprint: t,
        attemptId: l
      });
    a.default.track(c.rMx.DEEP_LINK_CLICKED, {
      fingerprint: (0, i.K)(t),
      attempt_id: l,
      source: d,
      guild_template_code: e
    }), o.Z.launch(u, () => {})
  }
}