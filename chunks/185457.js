l.d(n, {
  Z: function() {
return _;
  }
});
var t = l(735250),
  i = l(470079),
  r = l(481060),
  a = l(906732),
  s = l(702557),
  u = l(171368),
  o = l(314897),
  d = l(246946),
  c = l(626135),
  Z = l(981631),
  E = l(228168),
  M = l(689938);

function _(e) {
  let {
user: n,
guildId: l,
context: _
  } = e, {
id: f
  } = n, {
loading: g,
note: m
  } = (0, s.Z)(f), R = !g && null != m && m.length > 0, I = _ === Z.IlC.POPOUT, N = i.useContext(c.AnalyticsContext), {
analyticsLocations: C
  } = (0, a.ZP)();
  return f === o.default.getId() || d.Z.hidePersonalInformation || I ? null : (0, t.jsx)(r.MenuItem, {
id: 'note',
label: g ? M.Z.Messages.LOADING_NOTE : R ? M.Z.Messages.EDIT_NOTE : M.Z.Messages.ADD_NOTE,
action: () => {
  (0, u.openUserProfileModal)({
    userId: n.id,
    section: E.oh.USER_INFO,
    subsection: E.Tb.NOTE,
    guildId: l,
    sourceAnalyticsLocations: C,
    analyticsLocation: N.location
  });
}
  });
}