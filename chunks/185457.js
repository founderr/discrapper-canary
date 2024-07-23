i.d(n, {
  Z: function() {
return f;
  }
});
var t = i(735250),
  l = i(470079),
  s = i(481060),
  o = i(906732),
  a = i(702557),
  u = i(171368),
  d = i(314897),
  r = i(246946),
  c = i(626135),
  Z = i(981631),
  M = i(228168),
  E = i(689938);

function f(e) {
  let {
user: n,
guildId: i,
context: f
  } = e, {
id: _
  } = n, {
loading: A,
note: I
  } = (0, a.Z)(_), N = !A && null != I && I.length > 0, g = f === Z.IlC.POPOUT, v = l.useContext(c.AnalyticsContext), {
analyticsLocations: b
  } = (0, o.ZP)();
  return _ === d.default.getId() || r.Z.hidePersonalInformation || g ? null : (0, t.jsx)(s.MenuItem, {
id: 'note',
label: A ? E.Z.Messages.LOADING_NOTE : N ? E.Z.Messages.EDIT_NOTE : E.Z.Messages.ADD_NOTE,
action: () => {
  (0, u.openUserProfileModal)({
    userId: n.id,
    section: M.oh.USER_INFO,
    subsection: M.Tb.NOTE,
    guildId: i,
    sourceAnalyticsLocations: b,
    analyticsLocation: v.location
  });
}
  });
}