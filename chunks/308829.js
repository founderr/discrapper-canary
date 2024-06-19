n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(906732),
  a = n(785717),
  r = n(171368),
  o = n(689938),
  c = n(615264);

function u(e) {
  let {
    user: t,
    channelId: n
  } = e, {
    analyticsLocations: u
  } = (0, s.ZP)(), {
    trackUserProfileAction: d
  } = (0, a.KZ)();
  return (0, l.jsx)("footer", {
    className: c.footer,
    children: (0, l.jsx)(i.Button, {
      fullWidth: !0,
      size: i.Button.Sizes.LARGE,
      look: i.Button.Looks.BLANK,
      color: c.buttonColor,
      onClick: () => {
        d({
          action: "PRESS_VIEW_PROFILE"
        }), (0, r.openUserProfileModal)({
          sourceAnalyticsLocations: u,
          userId: t.id,
          channelId: n
        })
      },
      children: o.Z.Messages.VIEW_FULL_PROFILE
    })
  })
}