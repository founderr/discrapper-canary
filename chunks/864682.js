n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(594174),
  a = n(74538),
  o = n(327943),
  u = n(997945),
  c = n(630117),
  d = n(441319);

function h() {
  let [e, t, n] = (0, i.Wu)([r.default, o.Z], () => [o.Z.getCurrentDesktopIcon(), o.Z.isEditorOpen, a.ZP.isPremium(r.default.getCurrentUser())]), h = d.QA[e], g = e !== u.aH.DEFAULT && (n || t), p = (0, s.useRedesignIconContext)().enabled, m = (0, l.jsx)(s.ClydeIcon, {
    size: "custom",
    color: "currentColor",
    width: 30,
    height: p ? 30 : 22
  });
  return null != h && g ? (0, l.jsx)(c.Z, {
    id: e,
    width: 48
  }) : m
}