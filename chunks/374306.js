n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(961675),
  r = n(883429),
  o = n(238349),
  c = n(109434),
  u = n(456269),
  d = n(432771),
  h = n(920303),
  m = n(502568),
  p = n(689938);

function E(e) {
  var t, n;
  let {
    channel: E
  } = e, g = (0, u.r_)(E), f = (0, i.e7)([a.Z], () => a.Z.hasHidden(E.id)), C = (0, d.c)(E.id), {
    sortOrder: _,
    tagFilter: I
  } = (0, c.H)(E.id), x = (0, i.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(E.id, _, I).length > 0) || !!(h.Z.getThreads(E.id, _, I).length > 0) || !1, [E.id, _, I]), T = E.isMediaChannel();
  if (!g || C || T && x) return null;
  let N = (t = f, n = T, t ? n ? p.Z.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_SHOW : p.Z.Messages.FORUM_CHANNEL_ONBOARDING_SHOW : n ? p.Z.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_HIDE : p.Z.Messages.FORUM_CHANNEL_ONBOARDING_HIDE);
  return (0, l.jsx)(m.JO, {
    tooltip: N,
    icon: s.CircleInformationIcon,
    onClick: () => r.Z.hideAdminOnboarding(E.id, !f),
    selected: !f
  })
}