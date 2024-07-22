n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(40851),
  r = n(906732),
  o = n(171368),
  c = n(626135),
  d = n(981631),
  u = n(689938);

function h(e, t, n) {
  let h = a.useContext(c.AnalyticsContext),
{
  analyticsLocations: p
} = (0, r.ZP)(),
m = (0, l.Aq)();
  return (0, i.jsx)(s.MenuItem, {
id: 'user-profile',
label: u.Z.Messages.PROFILE,
action: () => {
  (0, o.openUserProfileModal)({
    userId: e,
    guildId: t,
    channelId: n,
    sourceAnalyticsLocations: p,
    analyticsLocation: h.location
  }), m.dispatch(d.CkL.POPOUT_CLOSE);
}
  });
}