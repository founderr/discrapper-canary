t.d(e, {
  Z: function() {
    return _
  }
});
var u = t(735250),
  l = t(470079),
  i = t(481060),
  r = t(40851),
  a = t(906732),
  o = t(171368),
  c = t(626135),
  s = t(981631),
  d = t(689938);

function _(n, e, t) {
  let _ = l.useContext(c.AnalyticsContext),
    {
      analyticsLocations: E
    } = (0, a.ZP)(),
    M = (0, r.Aq)();
  return (0, u.jsx)(i.MenuItem, {
    id: "user-profile",
    label: d.Z.Messages.PROFILE,
    action: () => {
      (0, o.openUserProfileModal)({
        userId: n,
        guildId: e,
        channelId: t,
        sourceAnalyticsLocations: E,
        analyticsLocation: _.location
      }), M.dispatch(s.CkL.POPOUT_CLOSE)
    }
  })
}