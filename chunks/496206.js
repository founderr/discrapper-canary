"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var s = l("735250");
l("470079");
var a = l("120356"),
  i = l.n(a),
  n = l("481060"),
  r = l("981631"),
  o = l("689938"),
  u = l("615834");

function d(e) {
  let {
    className: t,
    ...l
  } = e;
  return (0, s.jsx)(n.Button, {
    ...l,
    look: n.Button.Looks.FILLED,
    size: n.Button.Sizes.SMALL,
    className: i()(u.actionButton, t)
  })
}

function c(e) {
  let {
    isCurrentUser: t,
    user: l,
    relationshipType: a,
    onAddFriend: i,
    onIgnoreFriend: c,
    onSendMessage: f
  } = e;
  return t || a === r.RelationshipTypes.BLOCKED ? null : a === r.RelationshipTypes.FRIEND || l.bot ? (0, s.jsx)(d, {
    color: n.Button.Colors.GREEN,
    onClick: f,
    children: o.default.Messages.SEND_MESSAGE
  }) : a === r.RelationshipTypes.PENDING_OUTGOING ? (0, s.jsx)(d, {
    color: n.Button.Colors.GREEN,
    disabled: !0,
    children: o.default.Messages.ADD_FRIEND_BUTTON_AFTER
  }) : a === r.RelationshipTypes.PENDING_INCOMING ? (0, s.jsxs)("div", {
    className: u.pendingIncoming,
    children: [(0, s.jsx)(d, {
      color: n.Button.Colors.GREEN,
      onClick: i,
      children: o.default.Messages.FRIEND_REQUEST_ACCEPT
    }), (0, s.jsx)(d, {
      color: n.Button.Colors.PRIMARY,
      onClick: c,
      className: u.actionRightButton,
      children: o.default.Messages.FRIEND_REQUEST_IGNORE
    })]
  }) : (0, s.jsx)(d, {
    color: n.Button.Colors.GREEN,
    onClick: i,
    children: o.default.Messages.ADD_FRIEND_BUTTON
  })
}