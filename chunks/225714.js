s.d(i, {
  Z: function() {
    return f
  }
});
var n = s(735250);
s(470079);
var l = s(120356),
  t = s.n(l),
  o = s(481060),
  r = s(493683),
  a = s(194359),
  d = s(906732),
  c = s(785717),
  u = s(993409),
  I = s(981631),
  E = s(689938),
  Z = s(333355);

function f(e) {
  let {
    isCurrentUser: i,
    user: s,
    relationshipType: l,
    friendToken: f,
    originalFriendingEnabled: _ = !1,
    improvedFriendingEnabled: S = !1,
    onClose: v
  } = e, {
    newestAnalyticsLocation: m
  } = (0, d.ZP)(), {
    trackUserProfileAction: x
  } = (0, c.KZ)();
  if (i || l === I.OGo.BLOCKED) return null;
  let h = () => {
    x({
      action: "SEND_MESSAGE"
    }), r.Z.openPrivateChannel(s.id, !1, !1, m), v()
  };
  if (S) return l === I.OGo.FRIEND || s.bot ? (0, n.jsx)(u.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_DM,
    icon: o.ChatIcon,
    color: t()(o.Button.Colors.PRIMARY, Z.color),
    onClick: h
  }) : l === I.OGo.PENDING_OUTGOING ? (0, n.jsxs)("div", {
    className: Z.multipleButtons,
    children: [(0, n.jsx)(u.Z, {
      variant: "icon",
      text: E.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      className: Z.iconButton,
      color: t()(o.Button.Colors.PRIMARY, Z.color),
      disabled: !0
    }), (0, n.jsx)(u.Z, {
      variant: "text",
      text: E.Z.Messages.SEND_DM,
      icon: o.ChatIcon,
      color: t()(o.Button.Colors.PRIMARY, Z.color),
      onClick: h
    })]
  }) : l === I.OGo.PENDING_INCOMING ? (0, n.jsxs)("div", {
    className: Z.multipleButtons,
    children: [(0, n.jsx)(u.Z, {
      variant: "icon",
      text: E.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      className: Z.iconButton,
      color: t()(o.Button.Colors.PRIMARY, Z.color),
      disabled: !0
    }), (0, n.jsx)(u.Z, {
      variant: "text",
      text: E.Z.Messages.SEND_DM,
      icon: o.ChatIcon,
      className: Z.iconButton,
      color: t()(o.Button.Colors.PRIMARY, Z.color),
      onClick: h
    })]
  }) : (0, n.jsxs)("div", {
    className: Z.multipleButtons,
    children: [(0, n.jsx)(u.Z, {
      variant: "icon",
      text: E.Z.Messages.SEND_DM,
      icon: o.ChatIcon,
      className: Z.iconButton,
      color: t()(o.Button.Colors.PRIMARY, Z.color),
      onClick: h
    }), (0, n.jsx)(u.Z, {
      variant: "text",
      text: E.Z.Messages.USER_PROFILE_ADD_FRIEND,
      icon: o.UserPlusIcon,
      color: t()(o.Button.Colors.BRAND, Z.color),
      onClick: () => {
        x({
          action: "SEND_FRIEND_REQUEST"
        }), a.Z.addRelationship({
          userId: s.id,
          context: {
            location: m
          },
          friendToken: f
        })
      }
    })]
  });
  if (l === I.OGo.FRIEND || s.bot) return _ ? (0, n.jsx)(u.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_DM,
    color: t()(o.Button.Colors.PRIMARY, Z.color),
    onClick: h
  }) : (0, n.jsx)(u.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_MESSAGE,
    color: o.Button.Colors.GREEN,
    onClick: h
  });
  if (l === I.OGo.PENDING_OUTGOING) return (0, n.jsx)(u.Z, {
    variant: "text",
    text: E.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: o.Button.Colors.GREEN,
    disabled: !0
  });
  if (l === I.OGo.PENDING_INCOMING) return _ ? (0, n.jsx)(u.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_DM,
    color: t()(o.Button.Colors.PRIMARY, Z.color),
    onClick: h
  }) : (0, n.jsxs)("div", {
    className: Z.pendingIncoming,
    children: [(0, n.jsx)(u.Z, {
      variant: "text",
      text: E.Z.Messages.FRIEND_REQUEST_ACCEPT,
      color: o.Button.Colors.GREEN,
      onClick: () => {
        x({
          action: "ACCEPT_FRIEND_REQUEST"
        }), a.Z.addRelationship({
          userId: s.id,
          context: {
            location: m
          },
          friendToken: f
        })
      }
    }), (0, n.jsx)(u.Z, {
      variant: "text",
      text: E.Z.Messages.FRIEND_REQUEST_IGNORE,
      color: o.Button.Colors.PRIMARY,
      onClick: () => {
        x({
          action: "IGNORE_FRIEND_REQUEST"
        }), a.Z.cancelFriendRequest(s.id, {
          location: m
        })
      },
      className: Z.actionRightButton
    })]
  });
  return (0, n.jsx)(u.Z, {
    variant: "text",
    text: E.Z.Messages.ADD_FRIEND_BUTTON,
    color: o.Button.Colors.GREEN,
    onClick: () => {
      x({
        action: "SEND_FRIEND_REQUEST"
      }), a.Z.addRelationship({
        userId: s.id,
        context: {
          location: m
        },
        friendToken: f
      })
    }
  })
}