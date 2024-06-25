var s = n(39612),
  i = n(271579),
  r = n(756647),
  a = n(625128),
  l = n(626135),
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
    let n = null != e ? (0, s.Oh)(e) : (0, s.Gk)(),
      a = (0, i.WS)(),
      c = (0, i.ZP)(n, {
        utmSource: d,
        fingerprint: t,
        attemptId: a
      });
    l.default.track(u.rMx.DEEP_LINK_CLICKED, {
      fingerprint: (0, r.K)(t),
      attempt_id: a,
      source: d,
      guild_template_code: e
    }), o.Z.launch(c, () => {})
  }
}