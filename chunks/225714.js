"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var s = l("735250");
l("470079");
var i = l("120356"),
  a = l.n(i),
  n = l("176743"),
  o = l("97910"),
  r = l("780014"),
  u = l("481060"),
  d = l("993409"),
  c = l("981631"),
  f = l("689938"),
  S = l("431154");

function E(e) {
  let {
    isCurrentUser: t,
    user: l,
    relationshipType: i,
    onAddFriend: E,
    onIgnoreFriend: I,
    onSendMessage: m,
    originalFriendingEnabled: _ = !1,
    improvedFriendingEnabled: v = !1
  } = e;
  if (t || i === c.RelationshipTypes.BLOCKED) return null;
  if (v) return i === c.RelationshipTypes.FRIEND || l.bot ? (0, s.jsx)(d.default, {
    text: f.default.Messages.SEND_DM,
    icon: n.ChatIcon,
    color: a()(u.Button.Colors.PRIMARY, S.color),
    onClick: m
  }) : i === c.RelationshipTypes.PENDING_OUTGOING || i === c.RelationshipTypes.PENDING_INCOMING ? (0, s.jsxs)("div", {
    className: S.multipleButtons,
    children: [(0, s.jsx)(d.default, {
      text: f.default.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      color: a()(u.Button.Colors.PRIMARY, S.color),
      onClick: m,
      compact: !0,
      disabled: !0
    }), (0, s.jsx)(d.default, {
      text: f.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      color: a()(u.Button.Colors.PRIMARY, S.color),
      onClick: m
    })]
  }) : (0, s.jsxs)("div", {
    className: S.multipleButtons,
    children: [(0, s.jsx)(d.default, {
      text: f.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      color: a()(u.Button.Colors.PRIMARY, S.color),
      onClick: m,
      compact: !0
    }), (0, s.jsx)(d.default, {
      text: f.default.Messages.USER_PROFILE_ADD_FRIEND,
      icon: r.UserPlusIcon,
      color: a()(u.Button.Colors.BRAND, S.color),
      onClick: E
    })]
  });
  if (i === c.RelationshipTypes.FRIEND || l.bot) return _ ? (0, s.jsx)(d.default, {
    text: f.default.Messages.SEND_DM,
    color: a()(u.Button.Colors.PRIMARY, S.color),
    onClick: m
  }) : (0, s.jsx)(d.default, {
    text: f.default.Messages.SEND_MESSAGE,
    color: u.Button.Colors.GREEN,
    onClick: m
  });
  if (i === c.RelationshipTypes.PENDING_OUTGOING) return (0, s.jsx)(d.default, {
    text: f.default.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: u.Button.Colors.GREEN,
    disabled: !0
  });
  if (i === c.RelationshipTypes.PENDING_INCOMING) return _ ? (0, s.jsx)(d.default, {
    text: f.default.Messages.SEND_DM,
    color: a()(u.Button.Colors.PRIMARY, S.color),
    onClick: m
  }) : (0, s.jsxs)("div", {
    className: S.pendingIncoming,
    children: [(0, s.jsx)(d.default, {
      text: f.default.Messages.FRIEND_REQUEST_ACCEPT,
      color: u.Button.Colors.GREEN,
      onClick: E
    }), (0, s.jsx)(d.default, {
      text: f.default.Messages.FRIEND_REQUEST_IGNORE,
      color: u.Button.Colors.PRIMARY,
      onClick: I,
      className: S.actionRightButton
    })]
  });
  return (0, s.jsx)(d.default, {
    text: f.default.Messages.ADD_FRIEND_BUTTON,
    color: u.Button.Colors.GREEN,
    onClick: E
  })
}