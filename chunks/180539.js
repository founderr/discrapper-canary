n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(816782),
  r = n(318661),
  o = n(57048),
  c = n(87728),
  u = n(433355),
  d = n(502568),
  h = n(981631),
  m = n(689938);

function p(e) {
  let {
    channel: t,
    showCallOrActivityPanel: n
  } = e, p = (0, i.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? void 0 : t.isDM())), E = (0, r.ZP)(t.getRecipientId()), g = (0, c.Z)(), f = p === h.ULH.PROFILE && !g;
  return (0, l.jsx)(d.JO, {
    disabled: g || n,
    tooltip: g || n ? m.Z.Messages.SHOW_USER_PROFILE_UNAVAILABLE : f ? m.Z.Messages.HIDE_USER_PROFILE : m.Z.Messages.SHOW_USER_PROFILE,
    icon: s.UserCircleStatusIcon,
    onClick: () => {
      (0, o.a)(E, !f), a.Z.toggleProfilePanelSection()
    },
    selected: f && !g && !n
  })
}