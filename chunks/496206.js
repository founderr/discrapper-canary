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
  o = s("481060"),
  r = s("981631"),
  n = s("689938"),
  u = s("353491");

function d(e) {
  let {
    className: t,
    ...s
  } = e;
  return (0, l.jsx)(o.Button, {
    ...s,
    look: o.Button.Looks.FILLED,
    size: o.Button.Sizes.SMALL,
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
  return t || a === r.RelationshipTypes.BLOCKED ? null : a === r.RelationshipTypes.FRIEND || s.bot ? (0, l.jsx)(d, {
    color: o.Button.Colors.GREEN,
    onClick: f,
    children: n.default.Messages.SEND_MESSAGE
  }) : a === r.RelationshipTypes.PENDING_OUTGOING ? (0, l.jsx)(d, {
    color: o.Button.Colors.GREEN,
    disabled: !0,
    children: n.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : a === r.RelationshipTypes.PENDING_INCOMING ? (0, l.jsxs)("div", {
    className: u.pendingIncoming,
    children: [(0, l.jsx)(d, {
      color: o.Button.Colors.GREEN,
      onClick: i,
      children: n.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, l.jsx)(d, {
      color: o.Button.Colors.PRIMARY,
      onClick: c,
      className: u.actionRightButton,
      children: n.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, l.jsx)(d, {
    color: o.Button.Colors.GREEN,
    onClick: i,
    children: n.default.Messages.ADD_FRIEND_BUTTON
  })
}