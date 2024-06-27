i.d(n, {
  Z: function() {
    return m
  }
});
var t = i(735250);
i(470079);
var s = i(120356),
  o = i.n(s),
  l = i(442837),
  a = i(481060),
  r = i(493683),
  d = i(194359),
  c = i(906732),
  u = i(740492),
  I = i(785717),
  f = i(993409),
  E = i(981631),
  _ = i(689938),
  Z = i(333355);

function m(e) {
  let {
    isCurrentUser: n,
    user: s,
    relationshipType: m,
    friendToken: S,
    originalFriendingEnabled: v = !1,
    improvedFriendingEnabled: x = !1,
    persistentCallCtaEnabled: h = !1,
    onClose: g
  } = e, {
    newestAnalyticsLocation: N
  } = (0, c.ZP)(), {
    trackUserProfileAction: p
  } = (0, I.KZ)(), C = (0, l.e7)([u.ZP], () => !u.ZP.disableCallUserConfirmationPrompt);
  if (n || m === E.OGo.BLOCKED) return null;
  let T = () => {
      p({
        action: "SEND_MESSAGE"
      }), r.Z.openPrivateChannel(s.id, !1, !1, N), g()
    },
    R = () => {
      p({
        action: "VOICE_CALL"
      }), r.Z.openPrivateChannel(s.id, !0), g()
    },
    A = h ? (0, t.jsx)(f.Z, {
      variant: "icon",
      text: _.Z.Messages.CALL,
      icon: a.PhoneCallIcon,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      onClick: C ? () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await i.e("27157").then(i.bind(i, 736454));
          return n => (0, t.jsx)(e, {
            onSubmit: R,
            ...n
          })
        })
      } : R,
      className: Z.iconButton
    }) : null;
  if (x) return m === E.OGo.FRIEND || s.bot ? (0, t.jsxs)("div", {
    className: Z.multipleButtons,
    children: [A, (0, t.jsx)(f.Z, {
      variant: "text",
      text: _.Z.Messages.SEND_DM,
      icon: a.ChatIcon,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      onClick: T
    })]
  }) : m === E.OGo.PENDING_OUTGOING ? (0, t.jsxs)("div", {
    className: Z.multipleButtons,
    children: [(0, t.jsx)(f.Z, {
      variant: "icon",
      text: _.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: a.UserClockIcon,
      className: Z.iconButton,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      disabled: !0
    }), A, (0, t.jsx)(f.Z, {
      variant: "text",
      text: _.Z.Messages.SEND_DM,
      icon: a.ChatIcon,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      onClick: T
    })]
  }) : m === E.OGo.PENDING_INCOMING ? (0, t.jsxs)("div", {
    className: Z.multipleButtons,
    children: [(0, t.jsx)(f.Z, {
      variant: "icon",
      text: _.Z.Messages.FRIENDS_SECTION_PENDING,
      icon: a.UserClockIcon,
      className: Z.iconButton,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      disabled: !0
    }), A, (0, t.jsx)(f.Z, {
      variant: "text",
      text: _.Z.Messages.SEND_DM,
      icon: a.ChatIcon,
      className: Z.iconButton,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      onClick: T
    })]
  }) : (0, t.jsxs)("div", {
    className: Z.multipleButtons,
    children: [A, (0, t.jsx)(f.Z, {
      variant: "icon",
      text: _.Z.Messages.SEND_DM,
      icon: a.ChatIcon,
      className: Z.iconButton,
      color: o()(a.Button.Colors.PRIMARY, Z.color),
      onClick: T
    }), (0, t.jsx)(f.Z, {
      variant: "text",
      text: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
      icon: a.UserPlusIcon,
      color: o()(a.Button.Colors.BRAND, Z.color),
      onClick: () => {
        p({
          action: "SEND_FRIEND_REQUEST"
        }), d.Z.addRelationship({
          userId: s.id,
          context: {
            location: N
          },
          friendToken: S
        })
      }
    })]
  });
  if (m === E.OGo.FRIEND || s.bot) return v ? (0, t.jsx)(f.Z, {
    variant: "text",
    text: _.Z.Messages.SEND_DM,
    color: o()(a.Button.Colors.PRIMARY, Z.color),
    onClick: T
  }) : (0, t.jsx)(f.Z, {
    variant: "text",
    text: _.Z.Messages.SEND_MESSAGE,
    color: a.Button.Colors.GREEN,
    onClick: T
  });
  if (m === E.OGo.PENDING_OUTGOING) return (0, t.jsx)(f.Z, {
    variant: "text",
    text: _.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
    color: a.Button.Colors.GREEN,
    disabled: !0
  });
  if (m === E.OGo.PENDING_INCOMING) return v ? (0, t.jsx)(f.Z, {
    variant: "text",
    text: _.Z.Messages.SEND_DM,
    color: o()(a.Button.Colors.PRIMARY, Z.color),
    onClick: T
  }) : (0, t.jsxs)("div", {
    className: Z.pendingIncoming,
    children: [(0, t.jsx)(f.Z, {
      variant: "text",
      text: _.Z.Messages.FRIEND_REQUEST_ACCEPT,
      color: a.Button.Colors.GREEN,
      onClick: () => {
        p({
          action: "ACCEPT_FRIEND_REQUEST"
        }), d.Z.addRelationship({
          userId: s.id,
          context: {
            location: N
          },
          friendToken: S
        })
      }
    }), (0, t.jsx)(f.Z, {
      variant: "text",
      text: _.Z.Messages.FRIEND_REQUEST_IGNORE,
      color: a.Button.Colors.PRIMARY,
      onClick: () => {
        p({
          action: "IGNORE_FRIEND_REQUEST"
        }), d.Z.cancelFriendRequest(s.id, {
          location: N
        })
      },
      className: Z.actionRightButton
    })]
  });
  return (0, t.jsx)(f.Z, {
    variant: "text",
    text: _.Z.Messages.ADD_FRIEND_BUTTON,
    color: a.Button.Colors.GREEN,
    onClick: () => {
      p({
        action: "SEND_FRIEND_REQUEST"
      }), d.Z.addRelationship({
        userId: s.id,
        context: {
          location: N
        },
        friendToken: S
      })
    }
  })
}