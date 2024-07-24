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

function E(e, n, t) {
  let E = r.useContext(u.AnalyticsContext),
{
  analyticsLocations: _
} = (0, o.ZP)(),
I = (0, s.Aq)();
  return (0, i.jsx)(a.MenuItem, {
id: 'user-profile',
label: c.Z.Messages.PROFILE,
action: () => {
  (0, l.openUserProfileModal)({
    userId: e,
    guildId: n,
    channelId: t,
    sourceAnalyticsLocations: _,
    analyticsLocation: E.location
  }), I.dispatch(d.CkL.POPOUT_CLOSE);
}
  });
}