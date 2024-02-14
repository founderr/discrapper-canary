"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("49111"),
  n = s("782340"),
  u = s("124085");

function d(e) {
  let {
    className: t,
    ...s
  } = e;
  return (0, a.jsx)(r.Button, {
    ...s,
    look: r.Button.Looks.FILLED,
    size: r.Button.Sizes.SMALL,
    className: i(u.actionButton, t)
  })
}

function c(e) {
  let {
    isCurrentUser: t,
    user: s,
    relationshipType: l,
    onAddFriend: i,
    onIgnoreFriend: c,
    onSendMessage: f
  } = e;
  return t || l === o.RelationshipTypes.BLOCKED ? null : l === o.RelationshipTypes.FRIEND || s.bot ? (0, a.jsx)(d, {
    color: r.Button.Colors.GREEN,
    onClick: f,
    children: n.default.Messages.SEND_MESSAGE
  }) : l === o.RelationshipTypes.PENDING_OUTGOING ? (0, a.jsx)(d, {
    color: r.Button.Colors.GREEN,
    disabled: !0,
    children: n.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : l === o.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)("div", {
    className: u.pendingIncoming,
    children: [(0, a.jsx)(d, {
      color: r.Button.Colors.GREEN,
      onClick: i,
      children: n.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, a.jsx)(d, {
      color: r.Button.Colors.PRIMARY,
      onClick: c,
      className: u.actionRightButton,
      children: n.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, a.jsx)(d, {
    color: r.Button.Colors.GREEN,
    onClick: i,
    children: n.default.Messages.ADD_FRIEND_BUTTON
  })
}