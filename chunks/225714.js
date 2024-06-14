"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
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
  I = l("993409"),
  E = l("981631"),
  m = l("689938"),
  v = l("431154");

function _(e) {
  let {
    isCurrentUser: t,
    user: l,
    relationshipType: i,
    friendToken: _,
    originalFriendingEnabled: T = !1,
    improvedFriendingEnabled: p = !1,
    onClose: x
  } = e, {
    newestAnalyticsLocation: g
  } = (0, f.default)(), {
    trackUserProfileAction: N
  } = (0, S.useUserProfileAnalyticsContext)();
  if (t || i === E.RelationshipTypes.BLOCKED) return null;
  let C = () => {
    N({
      action: "SEND_MESSAGE"
    }), d.default.openPrivateChannel(l.id, !1, !1, g), x()
  };
  if (p) return i === E.RelationshipTypes.FRIEND || l.bot ? (0, s.jsx)(I.default, {
    variant: "text",
    text: m.default.Messages.SEND_DM,
    icon: n.ChatIcon,
    color: a()(u.Button.Colors.PRIMARY, v.color),
    onClick: C
  }) : i === E.RelationshipTypes.PENDING_OUTGOING ? (0, s.jsxs)("div", {
    className: v.multipleButtons,
    children: [(0, s.jsx)(I.default, {
      variant: "icon",
      text: m.default.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      className: v.iconButton,
      color: a()(u.Button.Colors.PRIMARY, v.color),
      disabled: !0
    }), (0, s.jsx)(I.default, {
      variant: "text",
      text: m.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      color: a()(u.Button.Colors.PRIMARY, v.color),
      onClick: C
    })]
  }) : i === E.RelationshipTypes.PENDING_INCOMING ? (0, s.jsxs)("div", {
    className: v.multipleButtons,
    children: [(0, s.jsx)(I.default, {
      variant: "icon",
      text: m.default.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      className: v.iconButton,
      color: a()(u.Button.Colors.PRIMARY, v.color),
      disabled: !0
    }), (0, s.jsx)(I.default, {
      variant: "text",
      text: m.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      className: v.iconButton,
      color: a()(u.Button.Colors.PRIMARY, v.color),
      onClick: C
    })]
  }) : (0, s.jsxs)("div", {
    className: v.multipleButtons,
    children: [(0, s.jsx)(I.default, {
      variant: "icon",
      text: m.default.Messages.SEND_DM,
      icon: n.ChatIcon,
      className: v.iconButton,
      color: a()(u.Button.Colors.PRIMARY, v.color),
      onClick: C
    }), (0, s.jsx)(I.default, {
      variant: "text",
      text: m.default.Messages.USER_PROFILE_ADD_FRIEND,
      icon: r.UserPlusIcon,
      color: a()(u.Button.Colors.BRAND, v.color),
      onClick: () => {
        N({
          action: "SEND_FRIEND_REQUEST"
        }), c.default.addRelationship({
          userId: l.id,
          context: {
            location: g
          },
          friendToken: _
        })
      }
    })]
  });
  if (i === E.RelationshipTypes.FRIEND || l.bot) return T ? (0, s.jsx)(I.default, {
    variant: "text",
    text: m.default.Messages.SEND_DM,
    color: a()(u.Button.Colors.PRIMARY, v.color),
    onClick: C
  }) : (0, s.jsx)(I.default, {
    variant: "text",
    text: m.default.Messages.SEND_MESSAGE,
    color: u.Button.Colors.GREEN,
    onClick: C
  });
  if (i === E.RelationshipTypes.PENDING_OUTGOING) return (0, s.jsx)(I.default, {
    variant: "text",
    text: m.default.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: u.Button.Colors.GREEN,
    disabled: !0
  });
  if (i === E.RelationshipTypes.PENDING_INCOMING) return T ? (0, s.jsx)(I.default, {
    variant: "text",
    text: m.default.Messages.SEND_DM,
    color: a()(u.Button.Colors.PRIMARY, v.color),
    onClick: C
  }) : (0, s.jsxs)("div", {
    className: v.pendingIncoming,
    children: [(0, s.jsx)(I.default, {
      variant: "text",
      text: m.default.Messages.FRIEND_REQUEST_ACCEPT,
      color: u.Button.Colors.GREEN,
      onClick: () => {
        N({
          action: "ACCEPT_FRIEND_REQUEST"
        }), c.default.addRelationship({
          userId: l.id,
          context: {
            location: g
          },
          friendToken: _
        })
      }
    }), (0, s.jsx)(I.default, {
      variant: "text",
      text: m.default.Messages.FRIEND_REQUEST_IGNORE,
      color: u.Button.Colors.PRIMARY,
      onClick: () => {
        N({
          action: "IGNORE_FRIEND_REQUEST"
        }), c.default.cancelFriendRequest(l.id, {
          location: g
        })
      },
      className: v.actionRightButton
    })]
  });
  return (0, s.jsx)(I.default, {
    variant: "text",
    text: m.default.Messages.ADD_FRIEND_BUTTON,
    color: u.Button.Colors.GREEN,
    onClick: () => {
      N({
        action: "SEND_FRIEND_REQUEST"
      }), c.default.addRelationship({
        userId: l.id,
        context: {
          location: g
        },
        friendToken: _
      })
    }
  })
}