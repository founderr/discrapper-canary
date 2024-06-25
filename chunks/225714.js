i.d(n, {
  Z: function() {
    return _
  }
});
var t = i(735250);
i(470079);
var s = i(120356),
  o = i.n(s),
  l = i(481060),
  a = i(493683),
  r = i(194359),
  d = i(906732),
  c = i(785717),
  u = i(993409),
  I = i(981631),
  f = i(689938),
  E = i(333355);

function _(e) {
  let {
    isCurrentUser: n,
    user: i,
    relationshipType: s,
    friendToken: _,
    originalFriendingEnabled: S = !1,
    improvedFriendingEnabled: Z = !1,
    onClose: m
  } = e, {
    newestAnalyticsLocation: v
  } = (0, d.ZP)(), {
    trackUserProfileAction: x
  } = (0, c.KZ)();
  if (n || s === I.OGo.BLOCKED) return null;
  let h = () => {
    x({
      action: "SEND_MESSAGE"
    }), a.Z.openPrivateChannel(i.id, !1, !1, v), m()
  };
  if (Z) return s === I.OGo.FRIEND || i.bot ? (0, t.jsx)(u.Z, {
    variant: "text",
    text: f.Z.Messages.SEND_DM,
    icon: l.ChatIcon,
    color: o()(l.Button.Colors.PRIMARY, E.color),
    onClick: h
  }) : s === I.OGo.PENDING_OUTGOING ? (0, t.jsxs)("div", {
    className: E.multipleButtons,
    children: [(0, t.jsx)(u.Z, {
      variant: "icon",
      text: f.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: l.UserClockIcon,
      className: E.iconButton,
      color: o()(l.Button.Colors.PRIMARY, E.color),
      disabled: !0
    }), (0, t.jsx)(u.Z, {
      variant: "text",
      text: f.Z.Messages.SEND_DM,
      icon: l.ChatIcon,
      color: o()(l.Button.Colors.PRIMARY, E.color),
      onClick: h
    })]
  }) : s === I.OGo.PENDING_INCOMING ? (0, t.jsxs)("div", {
    className: E.multipleButtons,
    children: [(0, t.jsx)(u.Z, {
      variant: "icon",
      text: f.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: l.UserClockIcon,
      className: E.iconButton,
      color: o()(l.Button.Colors.PRIMARY, E.color),
      disabled: !0
    }), (0, t.jsx)(u.Z, {
      variant: "text",
      text: f.Z.Messages.SEND_DM,
      icon: l.ChatIcon,
      className: E.iconButton,
      color: o()(l.Button.Colors.PRIMARY, E.color),
      onClick: h
    })]
  }) : (0, t.jsxs)("div", {
    className: E.multipleButtons,
    children: [(0, t.jsx)(u.Z, {
      variant: "icon",
      text: f.Z.Messages.SEND_DM,
      icon: l.ChatIcon,
      className: E.iconButton,
      color: o()(l.Button.Colors.PRIMARY, E.color),
      onClick: h
    }), (0, t.jsx)(u.Z, {
      variant: "text",
      text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
      icon: l.UserPlusIcon,
      color: o()(l.Button.Colors.BRAND, E.color),
      onClick: () => {
        x({
          action: "SEND_FRIEND_REQUEST"
        }), r.Z.addRelationship({
          userId: i.id,
          context: {
            location: v
          },
          friendToken: _
        })
      }
    })]
  });
  if (s === I.OGo.FRIEND || i.bot) return S ? (0, t.jsx)(u.Z, {
    variant: "text",
    text: f.Z.Messages.SEND_DM,
    color: o()(l.Button.Colors.PRIMARY, E.color),
    onClick: h
  }) : (0, t.jsx)(u.Z, {
    variant: "text",
    text: f.Z.Messages.SEND_MESSAGE,
    color: l.Button.Colors.GREEN,
    onClick: h
  });
  if (s === I.OGo.PENDING_OUTGOING) return (0, t.jsx)(u.Z, {
    variant: "text",
    text: f.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: l.Button.Colors.GREEN,
    disabled: !0
  });
  if (s === I.OGo.PENDING_INCOMING) return S ? (0, t.jsx)(u.Z, {
    variant: "text",
    text: f.Z.Messages.SEND_DM,
    color: o()(l.Button.Colors.PRIMARY, E.color),
    onClick: h
  }) : (0, t.jsxs)("div", {
    className: E.pendingIncoming,
    children: [(0, t.jsx)(u.Z, {
      variant: "text",
      text: f.Z.Messages.FRIEND_REQUEST_ACCEPT,
      color: l.Button.Colors.GREEN,
      onClick: () => {
        x({
          action: "ACCEPT_FRIEND_REQUEST"
        }), r.Z.addRelationship({
          userId: i.id,
          context: {
            location: v
          },
          friendToken: _
        })
      }
    }), (0, t.jsx)(u.Z, {
      variant: "text",
      text: f.Z.Messages.FRIEND_REQUEST_IGNORE,
      color: l.Button.Colors.PRIMARY,
      onClick: () => {
        x({
          action: "IGNORE_FRIEND_REQUEST"
        }), r.Z.cancelFriendRequest(i.id, {
          location: v
        })
      },
      className: E.actionRightButton
    })]
  });
  return (0, t.jsx)(u.Z, {
    variant: "text",
    text: f.Z.Messages.ADD_FRIEND_BUTTON,
    color: l.Button.Colors.GREEN,
    onClick: () => {
      x({
        action: "SEND_FRIEND_REQUEST"
      }), r.Z.addRelationship({
        userId: i.id,
        context: {
          location: v
        },
        friendToken: _
      })
    }
  })
}