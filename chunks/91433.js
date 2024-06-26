"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(194359),
  l = n(906732),
  u = n(5192),
  _ = n(877485),
  c = n(785717),
  d = n(689938),
  E = n(866254);

function I(e) {
  let {
    user: t,
    guildId: n,
    channelId: r,
    friendToken: I,
    className: T
  } = e, h = u.ZP.getName(n, r, t), {
    trackUserProfileAction: f
  } = (0, c.KZ)(), {
    newestAnalyticsLocation: S
  } = (0, l.ZP)(), {
    originalFriendingEnabled: N
  } = (0, _.V)({
    location: "UserProfileIncomingFriendRequestBanner"
  });
  return (0, i.jsxs)("div", {
    className: s()(E.container, T),
    children: [(0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
        username: h
      })
    }), (0, i.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, i.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: N ? o.Button.Colors.GREEN : s()(o.Button.Colors.BRAND, E.color),
        size: o.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          f({
            action: "ACCEPT_FRIEND_REQUEST"
          }), a.Z.addRelationship({
            userId: t.id,
            friendToken: I,
            context: {
              location: S
            }
          })
        },
        children: d.Z.Messages.FRIEND_REQUEST_ACCEPT
      }), (0, i.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          f({
            action: "IGNORE_FRIEND_REQUEST"
          }), a.Z.cancelFriendRequest(t.id, {
            location: S
          })
        },
        children: d.Z.Messages.FRIEND_REQUEST_IGNORE
      })]
    })]
  })
}