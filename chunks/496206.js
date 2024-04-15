"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var l = s("735250");
s("470079");
var a = s("120356"),
  i = s.n(a),
  n = s("481060"),
  o = s("981631"),
  r = s("689938"),
  u = s("353491");

function d(e) {
  let {
    className: t,
    ...s
  } = e;
  return (0, l.jsx)(n.Button, {
    ...s,
    look: n.Button.Looks.FILLED,
    size: n.Button.Sizes.SMALL,
    className: i()(u.actionButton, t)
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
    color: n.Button.Colors.GREEN,
    onClick: f,
    children: r.default.Messages.SEND_MESSAGE
  }) : a === o.RelationshipTypes.PENDING_OUTGOING ? (0, l.jsx)(d, {
    color: n.Button.Colors.GREEN,
    disabled: !0,
    children: r.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : a === o.RelationshipTypes.PENDING_INCOMING ? (0, l.jsxs)("div", {
    className: u.pendingIncoming,
    children: [(0, l.jsx)(d, {
      color: n.Button.Colors.GREEN,
      onClick: i,
      children: r.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, l.jsx)(d, {
      color: n.Button.Colors.PRIMARY,
      onClick: c,
      className: u.actionRightButton,
      children: r.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, l.jsx)(d, {
    color: n.Button.Colors.GREEN,
    onClick: i,
    children: r.default.Messages.ADD_FRIEND_BUTTON
  })
}