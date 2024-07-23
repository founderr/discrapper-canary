i.d(n, {
  Z: function() {
return Z;
  }
});
var t = i(735250),
  l = i(470079),
  s = i(481060),
  o = i(40851),
  a = i(906732),
  u = i(171368),
  d = i(626135),
  r = i(981631),
  c = i(689938);

function Z(e, n, i) {
  let Z = l.useContext(d.AnalyticsContext),
{
  analyticsLocations: M
} = (0, a.ZP)(),
E = (0, o.Aq)();
  return (0, t.jsx)(s.MenuItem, {
id: 'user-profile',
label: c.Z.Messages.PROFILE,
action: () => {
  (0, u.openUserProfileModal)({
    userId: e,
    guildId: n,
    channelId: i,
    sourceAnalyticsLocations: M,
    analyticsLocation: Z.location
  }), E.dispatch(r.CkL.POPOUT_CLOSE);
}
  });
}