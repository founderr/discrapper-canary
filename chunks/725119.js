n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(40851),
  o = n(906732),
  l = n(171368),
  u = n(626135),
  c = n(981631),
  d = n(689938);

function _(e) {
  let {
userId: t,
guildId: n,
channelId: _,
section: E,
label: f
  } = e, h = i.useContext(u.AnalyticsContext), {
analyticsLocations: p
  } = (0, o.ZP)(), m = (0, s.Aq)();
  return (0, r.jsx)(a.MenuItem, {
id: 'user-profile',
label: null != f ? f : d.Z.Messages.PROFILE,
action: () => {
  (0, l.openUserProfileModal)({
    userId: t,
    guildId: n,
    channelId: _,
    section: E,
    sourceAnalyticsLocations: p,
    analyticsLocation: h.location
  }), m.dispatch(c.CkL.POPOUT_CLOSE);
}
  });
}