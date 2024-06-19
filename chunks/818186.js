n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(758059),
  r = n(377171),
  o = n(497089),
  c = n(703656),
  u = n(699516),
  d = n(626135),
  E = n(981631),
  _ = n(689938),
  I = n(566832);

function T(e) {
  let {
    closePopout: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getPendingCount());
  return (0, s.jsx)(l.TooltipContainer, {
    text: _.Z.Messages.VIEW_FRIEND_REQUESTS,
    children: (0, s.jsxs)(l.Clickable, {
      className: I.friendRequestsButton,
      onClick: () => {
        d.default.track(E.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: o.ud.FRIEND_REQUESTS_BUTTON_CLICK
        }), (0, c.uL)(E.Z5c.FRIENDS), a.Z.setSection(E.pJs.PENDING), t()
      },
      children: [(0, s.jsx)(l.FriendsIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, s.jsx)(l.NumberBadge, {
        count: n,
        color: r.Z.BACKGROUND_ACCENT
      })]
    })
  })
}