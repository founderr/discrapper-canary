n.d(t, {
  Z: function() {
    return p
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
  E = n(689938);

function p(e) {
  var t, n;
  let {
    channel: p
  } = e, g = (0, u.r_)(p), f = (0, i.e7)([a.Z], () => a.Z.hasHidden(p.id)), C = (0, d.c)(p.id), {
    sortOrder: _,
    tagFilter: I
  } = (0, c.H)(p.id), x = (0, i.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(p.id, _, I).length > 0) || !!(h.Z.getThreads(p.id, _, I).length > 0) || !1, [p.id, _, I]), T = p.isMediaChannel();
  if (!g || C || T && x) return null;
  let N = (t = f, n = T, t ? n ? E.Z.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_SHOW : E.Z.Messages.FORUM_CHANNEL_ONBOARDING_SHOW : n ? E.Z.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_HIDE : E.Z.Messages.FORUM_CHANNEL_ONBOARDING_HIDE);
  return (0, l.jsx)(m.JO, {
    tooltip: N,
    icon: s.CircleInformationIcon,
    onClick: () => r.Z.hideAdminOnboarding(p.id, !f),
    selected: !f
  })
}