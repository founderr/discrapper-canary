t.d(n, {
  Z: function() {
return E;
  }
});
var i = t(735250),
  r = t(470079),
  a = t(481060),
  s = t(40851),
  o = t(906732),
  l = t(171368),
  u = t(626135),
  d = t(981631),
  c = t(689938);

function E(e) {
  let {
userId: n,
guildId: t,
channelId: E,
section: _,
label: I
  } = e, T = r.useContext(u.AnalyticsContext), {
analyticsLocations: N
  } = (0, o.ZP)(), S = (0, s.Aq)();
  return (0, i.jsx)(a.MenuItem, {
id: 'user-profile',
label: null != I ? I : c.Z.Messages.PROFILE,
action: () => {
  (0, l.openUserProfileModal)({
    userId: n,
    guildId: t,
    channelId: E,
    section: _,
    sourceAnalyticsLocations: N,
    analyticsLocation: T.location
  }), S.dispatch(d.CkL.POPOUT_CLOSE);
}
  });
}