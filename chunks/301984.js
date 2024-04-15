"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var l = s("735250");
s("470079");
var a = s("481060"),
  i = s("194359"),
  n = s("782089"),
  o = s("877410"),
  r = s("785717"),
  u = s("993409"),
  d = s("981631"),
  c = s("689938");

function f(e) {
  let {
    user: t,
    relationshipType: s,
    friendToken: f,
    onClose: S
  } = e, {
    trackUserProfileAction: E
  } = (0, r.useUserProfileAnalyticsContext)(), I = () => i.default.addRelationship({
    userId: t.id,
    friendToken: f
  }, S), m = () => i.default.cancelFriendRequest(t.id);
  return s === d.RelationshipTypes.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.default, {
      icon: n.default,
      text: c.default.Messages.FRIEND_REQUEST_ACCEPT,
      onClick: () => (E({
        action: "ACCEPT_FRIEND_REQUEST"
      }), I())
    }), (0, l.jsx)(u.default, {
      icon: o.default,
      text: c.default.Messages.FRIEND_REQUEST_IGNORE,
      color: a.ButtonColors.RED,
      onClick: () => (E({
        action: "IGNORE_FRIEND_REQUEST"
      }), m())
    })]
  }) : s === d.RelationshipTypes.PENDING_OUTGOING ? (0, l.jsx)(u.default, {
    icon: n.default,
    text: c.default.Messages.REQUEST_SENT,
    disabled: !0
  }) : (0, l.jsx)(u.default, {
    icon: n.default,
    text: c.default.Messages.ADD_FRIEND,
    onClick: () => (E({
      action: "SEND_FRIEND_REQUEST"
    }), I())
  })
}