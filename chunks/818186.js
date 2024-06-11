"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("758059"),
  r = n("377171"),
  o = n("497089"),
  u = n("703656"),
  d = n("699516"),
  c = n("988951"),
  f = n("626135"),
  E = n("981631"),
  _ = n("689938"),
  m = n("966171");

function T(e) {
  let {
    closePopout: t
  } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPendingCount());
  return (0, s.jsx)(l.TooltipContainer, {
    text: _.default.Messages.VIEW_FRIEND_REQUESTS,
    children: (0, s.jsxs)(l.Clickable, {
      className: m.friendRequestsButton,
      onClick: () => {
        f.default.track(E.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK
        }), (0, u.transitionTo)(E.Routes.FRIENDS), i.default.setSection(E.FriendsSections.PENDING), t()
      },
      children: [(0, s.jsx)(c.default, {}), (0, s.jsx)(l.NumberBadge, {
        count: n,
        color: r.default.BACKGROUND_ACCENT
      })]
    })
  })
}