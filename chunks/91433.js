"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  o = n("194359"),
  l = n("906732"),
  u = n("5192"),
  d = n("877485"),
  _ = n("785717"),
  c = n("689938"),
  E = n("125188");

function I(e) {
  let {
    user: t,
    guildId: n,
    channelId: r,
    friendToken: I,
    className: T
  } = e, f = u.default.getName(n, r, t), {
    trackUserProfileAction: S
  } = (0, _.useUserProfileAnalyticsContext)(), {
    newestAnalyticsLocation: h
  } = (0, l.default)(), {
    originalFriendingEnabled: A,
    improvedFriendingEnabled: m
  } = (0, d.useSimplifiedProfileFriendingExperiment)({
    location: "UserProfileIncomingFriendRequestBanner"
  });
  return (0, i.jsxs)("div", {
    className: s()(E.container, T),
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: c.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
        username: f
      })
    }), (0, i.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, i.jsx)(a.Button, {
        look: a.Button.Looks.FILLED,
        color: s()({
          [a.Button.Colors.GREEN]: A,
          [a.Button.Colors.BRAND]: m,
          [E.color]: m
        }),
        size: a.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          S({
            action: "ACCEPT_FRIEND_REQUEST"
          }), o.default.addRelationship({
            userId: t.id,
            friendToken: I,
            context: {
              location: h
            }
          })
        },
        children: c.default.Messages.FRIEND_REQUEST_ACCEPT
      }), (0, i.jsx)(a.Button, {
        look: a.Button.Looks.FILLED,
        color: a.Button.Colors.PRIMARY,
        size: a.Button.Sizes.SMALL,
        className: E.button,
        onClick: () => {
          S({
            action: "IGNORE_FRIEND_REQUEST"
          }), o.default.cancelFriendRequest(t.id, {
            location: h
          })
        },
        children: c.default.Messages.FRIEND_REQUEST_IGNORE
      })]
    })]
  })
}