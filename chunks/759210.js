"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  r = s("669491"),
  o = s("77078"),
  n = s("450911"),
  u = s("272030"),
  d = s("54239"),
  c = s("736964"),
  f = s("377114"),
  S = s("824794"),
  m = s("271938"),
  E = s("824563"),
  T = s("27618"),
  p = s("663745"),
  x = s("423487"),
  N = s("50885"),
  h = s("713135"),
  v = s("106435"),
  A = s("906889"),
  I = s("289918"),
  _ = s("609734"),
  U = s("590006"),
  C = s("717226"),
  j = s("590456"),
  y = s("49111"),
  g = s("843455"),
  R = s("782340"),
  M = s("431517");
let P = o.AvatarSizes.SIZE_120,
  O = N.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: N,
    guildId: F,
    channelId: B,
    friendToken: D,
    isStreaming: L,
    hasProfileEffect: b,
    onClose: G
  } = e, k = (0, i.useStateFromStores)([T.default], () => T.default.getRelationshipType(N.id)), w = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(N.id)), V = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(N.id)), H = (0, i.useStateFromStores)([h.default], () => h.default.getUserProfile(N.id)), z = (0, i.useStateFromStores)([m.default], () => m.default.getId() === N.id), {
    profileTheme: Y
  } = (0, A.default)(N, t), {
    avatarSrc: K,
    eventHandlers: Z,
    avatarDecorationSrc: Q
  } = (0, v.default)({
    user: N,
    size: P
  }), W = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(N, B), [N, B]);

  function q() {
    G(), (0, d.popLayer)()
  }

  function J() {
    c.default.removeFriend(N.id, {
      location: "User Profile"
    })
  }

  function X(e) {
    n.default.openPrivateChannel(N.id, !1, !1, e), q()
  }

  function $() {
    try {
      c.default.addRelationship({
        userId: N.id,
        context: {
          location: "User Profile"
        },
        type: y.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      q()
    }
  }

  function ee() {
    let e = "@me" === F ? void 0 : F;
    (0, f.showReportModalForUser)(N, e)
  }
  return (0, a.jsxs)("header", {
    children: [(0, a.jsx)(I.default, {
      displayProfile: t,
      onClose: q,
      user: N,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: b
    }), (0, a.jsxs)("div", {
      className: M.header,
      children: [(0, a.jsx)("div", {
        ...Z,
        children: (0, a.jsx)(O, {
          src: K,
          avatarDecoration: Q,
          size: P,
          className: M.avatar,
          status: W ? g.StatusTypes.UNKNOWN : L ? g.StatusTypes.STREAMING : V,
          statusBackdropColor: (0, o.getStatusBackdropColor)(Y),
          isMobile: w,
          statusTooltip: !0,
          "aria-label": N.username
        })
      }), (0, a.jsxs)("div", {
        className: M.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !N.isClyde() ? (0, a.jsx)(o.Tooltip, {
          text: R.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(x.default, {
            ...e,
            className: M.warningCircleIcon,
            color: r.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(U.default, {
          user: N,
          className: M.badgeList,
          guildId: F,
          size: U.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: U.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: M.relationshipButtons,
          children: [(0, a.jsx)(_.default, {
            className: M.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, a.jsx)(C.default, {
            user: N,
            isCurrentUser: z,
            relationshipType: k,
            onAddFriend: function() {
              try {
                c.default.addRelationship({
                  userId: N.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: D
                })
              } catch (e) {
                q()
              }
            },
            onIgnoreFriend: function() {
              c.default.cancelFriendRequest(N.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => X("User Profile Modal - Send Message Button")
          }), z || N.isNonUserBot() ? null : (0, a.jsx)(o.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              (0, u.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await s.el("487956").then(s.bind(s, "487956"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: k,
                  onRemoveFriend: J,
                  onBlock: $,
                  onReport: ee,
                  onMessage: () => X("User Profile Modal - Context Menu"),
                  user: N
                })
              })
            },
            children: (0, a.jsx)(p.default, {
              className: M.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}