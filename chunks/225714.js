"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
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
  d = l("493683"),
  c = l("194359"),
  f = l("906732"),
  S = l("785717"),
  E = l("993409"),
  I = l("981631"),
  m = l("689938"),
  _ = l("431154");

function v(e) {
  let {
    isCurrentUser: t,
    user: l,
    relationshipType: i,
    friendToken: v,
    onClose: p,
    originalFriendingEnabled: T = !1,
    improvedFriendingEnabled: g = !1
  } = e, {
    newestAnalyticsLocation: A
  } = (0, f.default)(), {
    trackUserProfileAction: x
  } = (0, S.useUserProfileAnalyticsContext)();
  if (t || i === I.RelationshipTypes.BLOCKED) return null;
  let C = () => {
    x({
      action: "SEND_MESSAGE"
    }), d.default.openPrivateChannel(l.id, !1, !1, A), p()
  };
  if (g) return i === I.RelationshipTypes.FRIEND || l.bot ? (0, s.jsx)(E.default, {
    text: m.default.Messages.SEND_DM,
    icon: n.ChatIcon,
    color: a()(u.Button.Colors.PRIMARY, _.color),
    onClick: C
  }) : i === I.RelationshipTypes.PENDING_OUTGOING || i === I.RelationshipTypes.PENDING_INCOMING ? (0, s.jsxs)("div", {
    className: _.multipleButtons,
    children: [(0, s.jsx)(E.default, {
      text: m.default.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      color: a()(u.Button.Colors.PRIMARY, _.color),
      compact: !0,
      disabled: !0
    }), (0, s.jsx)(E.default, {
      text: m.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      color: a()(u.Button.Colors.PRIMARY, _.color),
      onClick: C
    })]
  }) : (0, s.jsxs)("div", {
    className: _.multipleButtons,
    children: [(0, s.jsx)(E.default, {
      text: m.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      color: a()(u.Button.Colors.PRIMARY, _.color),
      onClick: C,
      compact: !0
    }), (0, s.jsx)(E.default, {
      text: m.default.Messages.USER_PROFILE_ADD_FRIEND,
      icon: r.UserPlusIcon,
      color: a()(u.Button.Colors.BRAND, _.color),
      onClick: () => {
        x({
          action: "SEND_FRIEND_REQUEST"
        }), c.default.addRelationship({
          userId: l.id,
          context: {
            location: A
          },
          friendToken: v
        }), p()
      }
    })]
  });
  if (i === I.RelationshipTypes.FRIEND || l.bot) return T ? (0, s.jsx)(E.default, {
    text: m.default.Messages.SEND_DM,
    color: a()(u.Button.Colors.PRIMARY, _.color),
    onClick: C
  }) : (0, s.jsx)(E.default, {
    text: m.default.Messages.SEND_MESSAGE,
    color: u.Button.Colors.GREEN,
    onClick: C
  });
  if (i === I.RelationshipTypes.PENDING_OUTGOING) return (0, s.jsx)(E.default, {
    text: m.default.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: u.Button.Colors.GREEN,
    disabled: !0
  });
  if (i === I.RelationshipTypes.PENDING_INCOMING) return T ? (0, s.jsx)(E.default, {
    text: m.default.Messages.SEND_DM,
    color: a()(u.Button.Colors.PRIMARY, _.color),
    onClick: C
  }) : (0, s.jsxs)("div", {
    className: _.pendingIncoming,
    children: [(0, s.jsx)(E.default, {
      text: m.default.Messages.FRIEND_REQUEST_ACCEPT,
      color: u.Button.Colors.GREEN,
      onClick: () => {
        x({
          action: "ACCEPT_FRIEND_REQUEST"
        }), c.default.addRelationship({
          userId: l.id,
          context: {
            location: A
          },
          friendToken: v
        }), p()
      }
    }), (0, s.jsx)(E.default, {
      text: m.default.Messages.FRIEND_REQUEST_IGNORE,
      color: u.Button.Colors.PRIMARY,
      onClick: () => {
        x({
          action: "IGNORE_FRIEND_REQUEST"
        }), c.default.cancelFriendRequest(l.id, {
          location: A
        })
      },
      className: _.actionRightButton
    })]
  });
  return (0, s.jsx)(E.default, {
    text: m.default.Messages.ADD_FRIEND_BUTTON,
    color: u.Button.Colors.GREEN,
    onClick: () => {
      x({
        action: "SEND_FRIEND_REQUEST"
      }), c.default.addRelationship({
        userId: l.id,
        context: {
          location: A
        },
        friendToken: v
      }), p()
    }
  })
}