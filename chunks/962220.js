var i = n(39612),
  s = n(271579),
  l = n(756647),
  a = n(625128),
  r = n(626135),
  o = n(954824),
  c = n(751189),
  u = n(981631);
let d = "template";
t.Z = {
  ...c.Z,
  openNativeAppModal(e) {
    a.Z.openNativeAppModal(e, u.Etm.GUILD_TEMPLATE_BROWSER)
  },
  openMobileApp(e, t) {
    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
    let n = null != e ? (0, i.Oh)(e) : (0, i.Gk)(),
      a = (0, s.WS)(),
      c = (0, s.ZP)(n, {
        utmSource: d,
        fingerprint: t,
        attemptId: a
      });
    r.default.track(u.rMx.DEEP_LINK_CLICKED, {
      fingerprint: (0, l.K)(t),
      attempt_id: a,
      source: d,
      guild_template_code: e
    }), o.Z.launch(c, () => {})
  }
}