"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var l = s("37983");
s("884691");
var a = s("414456"),
  i = s.n(a),
  r = s("77078"),
  o = s("49111"),
  n = s("782340"),
  u = s("355718");

function d(e) {
  let {
    className: t,
    ...s
  } = e;
  return (0, l.jsx)(r.Button, {
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
    relationshipType: a,
    onAddFriend: i,
    onIgnoreFriend: c,
    onSendMessage: f
  } = e;
  return t || a === o.RelationshipTypes.BLOCKED ? null : a === o.RelationshipTypes.FRIEND || s.bot ? (0, l.jsx)(d, {
    color: r.Button.Colors.GREEN,
    onClick: f,
    children: n.default.Messages.SEND_MESSAGE
  }) : a === o.RelationshipTypes.PENDING_OUTGOING ? (0, l.jsx)(d, {
    color: r.Button.Colors.GREEN,
    disabled: !0,
    children: n.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : a === o.RelationshipTypes.PENDING_INCOMING ? (0, l.jsxs)("div", {
    className: u.pendingIncoming,
    children: [(0, l.jsx)(d, {
      color: r.Button.Colors.GREEN,
      onClick: i,
      children: n.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, l.jsx)(d, {
      color: r.Button.Colors.PRIMARY,
      onClick: c,
      className: u.actionRightButton,
      children: n.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, l.jsx)(d, {
    color: r.Button.Colors.GREEN,
    onClick: i,
    children: n.default.Messages.ADD_FRIEND_BUTTON
  })
}