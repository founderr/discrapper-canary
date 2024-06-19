i.d(n, {
  Z: function() {
    return Z
  }
});
var l = i(735250);
i(470079);
var s = i(120356),
  t = i.n(s),
  o = i(481060),
  a = i(493683),
  r = i(194359),
  d = i(906732),
  u = i(785717),
  c = i(993409),
  I = i(981631),
  E = i(689938),
  f = i(333355);

function Z(e) {
  let {
    isCurrentUser: n,
    user: i,
    relationshipType: s,
    friendToken: Z,
    originalFriendingEnabled: _ = !1,
    improvedFriendingEnabled: S = !1,
    onClose: m
  } = e, {
    newestAnalyticsLocation: v
  } = (0, d.ZP)(), {
    trackUserProfileAction: N
  } = (0, u.KZ)();
  if (n || s === I.OGo.BLOCKED) return null;
  let x = () => {
    N({
      action: "SEND_MESSAGE"
    }), a.Z.openPrivateChannel(i.id, !1, !1, v), m()
  };
  if (S) return s === I.OGo.FRIEND || i.bot ? (0, l.jsx)(c.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_DM,
    icon: o.ChatIcon,
    color: t()(o.Button.Colors.PRIMARY, f.color),
    onClick: x
  }) : s === I.OGo.PENDING_OUTGOING ? (0, l.jsxs)("div", {
    className: f.multipleButtons,
    children: [(0, l.jsx)(c.Z, {
      variant: "icon",
      text: E.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      className: f.iconButton,
      color: t()(o.Button.Colors.PRIMARY, f.color),
      disabled: !0
    }), (0, l.jsx)(c.Z, {
      variant: "text",
      text: E.Z.Messages.SEND_DM,
      icon: o.ChatIcon,
      color: t()(o.Button.Colors.PRIMARY, f.color),
      onClick: x
    })]
  }) : s === I.OGo.PENDING_INCOMING ? (0, l.jsxs)("div", {
    className: f.multipleButtons,
    children: [(0, l.jsx)(c.Z, {
      variant: "icon",
      text: E.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: o.UserClockIcon,
      className: f.iconButton,
      color: t()(o.Button.Colors.PRIMARY, f.color),
      disabled: !0
    }), (0, l.jsx)(c.Z, {
      variant: "text",
      text: E.Z.Messages.SEND_DM,
      icon: o.ChatIcon,
      className: f.iconButton,
      color: t()(o.Button.Colors.PRIMARY, f.color),
      onClick: x
    })]
  }) : (0, l.jsxs)("div", {
    className: f.multipleButtons,
    children: [(0, l.jsx)(c.Z, {
      variant: "icon",
      text: E.Z.Messages.SEND_DM,
      icon: o.ChatIcon,
      className: f.iconButton,
      color: t()(o.Button.Colors.PRIMARY, f.color),
      onClick: x
    }), (0, l.jsx)(c.Z, {
      variant: "text",
      text: E.Z.Messages.USER_PROFILE_ADD_FRIEND,
      icon: o.UserPlusIcon,
      color: t()(o.Button.Colors.BRAND, f.color),
      onClick: () => {
        N({
          action: "SEND_FRIEND_REQUEST"
        }), r.Z.addRelationship({
          userId: i.id,
          context: {
            location: v
          },
          friendToken: Z
        })
      }
    })]
  });
  if (s === I.OGo.FRIEND || i.bot) return _ ? (0, l.jsx)(c.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_DM,
    color: t()(o.Button.Colors.PRIMARY, f.color),
    onClick: x
  }) : (0, l.jsx)(c.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_MESSAGE,
    color: o.Button.Colors.GREEN,
    onClick: x
  });
  if (s === I.OGo.PENDING_OUTGOING) return (0, l.jsx)(c.Z, {
    variant: "text",
    text: E.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: o.Button.Colors.GREEN,
    disabled: !0
  });
  if (s === I.OGo.PENDING_INCOMING) return _ ? (0, l.jsx)(c.Z, {
    variant: "text",
    text: E.Z.Messages.SEND_DM,
    color: t()(o.Button.Colors.PRIMARY, f.color),
    onClick: x
  }) : (0, l.jsxs)("div", {
    className: f.pendingIncoming,
    children: [(0, l.jsx)(c.Z, {
      variant: "text",
      text: E.Z.Messages.FRIEND_REQUEST_ACCEPT,
      color: o.Button.Colors.GREEN,
      onClick: () => {
        N({
          action: "ACCEPT_FRIEND_REQUEST"
        }), r.Z.addRelationship({
          userId: i.id,
          context: {
            location: v
          },
          friendToken: Z
        })
      }
    }), (0, l.jsx)(c.Z, {
      variant: "text",
      text: E.Z.Messages.FRIEND_REQUEST_IGNORE,
      color: o.Button.Colors.PRIMARY,
      onClick: () => {
        N({
          action: "IGNORE_FRIEND_REQUEST"
        }), r.Z.cancelFriendRequest(i.id, {
          location: v
        })
      },
      className: f.actionRightButton
    })]
  });
  return (0, l.jsx)(c.Z, {
    variant: "text",
    text: E.Z.Messages.ADD_FRIEND_BUTTON,
    color: o.Button.Colors.GREEN,
    onClick: () => {
      N({
        action: "SEND_FRIEND_REQUEST"
      }), r.Z.addRelationship({
        userId: i.id,
        context: {
          location: v
        },
        friendToken: Z
      })
    }
  })
}