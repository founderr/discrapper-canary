"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("758059"),
  r = n("377171"),
  o = n("497089"),
  u = n("703656"),
  d = n("699516"),
  c = n("988951"),
  f = n("26290"),
  h = n("626135"),
  E = n("981631"),
  m = n("689938"),
  p = n("966171");

function g(e) {
  let {
    closePopout: t
  } = e, n = (0, l.useStateFromStores)([d.default], () => d.default.getPendingCount());
  return (0, a.jsx)(s.TooltipContainer, {
    text: m.default.Messages.VIEW_FRIEND_REQUESTS,
    children: (0, a.jsxs)(s.Clickable, {
      className: p.friendRequestsButton,
      onClick: () => {
        h.default.track(E.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
          action_type: o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK
        }), (0, u.transitionTo)(E.Routes.FRIENDS), i.default.setSection(E.FriendsSections.PENDING), t()
      },
      children: [(0, a.jsx)(c.default, {}), (0, a.jsx)(f.NumberBadge, {
        count: n,
        color: r.default.BACKGROUND_ACCENT
      })]
    })
  })
}