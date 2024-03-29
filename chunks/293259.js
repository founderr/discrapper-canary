"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("692547"),
  r = s("481060"),
  n = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  m = s("314897"),
  E = s("158776"),
  T = s("699516"),
  I = s("621113"),
  N = s("759231"),
  p = s("998502"),
  _ = s("785717"),
  A = s("621853"),
  v = s("204197"),
  x = s("358794"),
  U = s("735336"),
  h = s("520978"),
  C = s("184325"),
  y = s("496206"),
  j = s("228168"),
  R = s("981631"),
  M = s("231338"),
  P = s("689938"),
  g = s("950114");
let O = r.AvatarSizes.SIZE_120,
  F = p.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function D(e) {
  let {
    displayProfile: t,
    user: p,
    guildId: D,
    channelId: B,
    friendToken: L,
    isStreaming: b,
    hasProfileEffect: G,
    onClose: k
  } = e, H = (0, i.useStateFromStores)([T.default], () => T.default.getRelationshipType(p.id)), V = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(p.id)), w = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(p.id)), Y = (0, i.useStateFromStores)([A.default], () => A.default.getUserProfile(p.id)), z = (0, i.useStateFromStores)([m.default], () => m.default.getId() === p.id), {
    profileTheme: J
  } = (0, x.default)(p, t), {
    trackUserProfileAction: K
  } = (0, _.useUserProfileAnalyticsContext)(), {
    avatarSrc: Q,
    eventHandlers: W,
    avatarDecorationSrc: Z
  } = (0, v.default)({
    user: p,
    size: O
  }), q = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(p, B), [p, B]);

  function X() {
    k(), (0, d.popLayer)()
  }

  function $() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(p.id, {
      location: "User Profile"
    })
  }

  function ee(e) {
    K({
      action: "SEND_MESSAGE"
    }), n.default.openPrivateChannel(p.id, !1, !1, e), X()
  }

  function et() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: p.id,
        context: {
          location: "User Profile"
        },
        type: R.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      X()
    }
  }

  function es() {
    let e = "@me" === D ? void 0 : D;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(p, e)
  }
  return (0, a.jsxs)("header", {
    children: [(0, a.jsx)(U.default, {
      displayProfile: t,
      onClose: X,
      user: p,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: G
    }), (0, a.jsxs)("div", {
      className: g.header,
      children: [(0, a.jsx)("div", {
        ...W,
        children: (0, a.jsx)(F, {
          src: Q,
          avatarDecoration: Z,
          size: O,
          className: g.avatar,
          status: q ? M.StatusTypes.UNKNOWN : b ? M.StatusTypes.STREAMING : w,
          statusBackdropColor: (0, r.getStatusBackdropColor)(J),
          isMobile: V,
          statusTooltip: !0,
          "aria-label": p.username
        })
      }), (0, a.jsxs)("div", {
        className: g.headerTop,
        children: [(null == Y ? void 0 : Y.profileFetchFailed) && !p.isClyde() ? (0, a.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(N.default, {
            ...e,
            className: g.warningCircleIcon,
            color: o.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(C.default, {
          user: p,
          className: g.badgeList,
          guildId: D,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: g.relationshipButtons,
          children: [(0, a.jsx)(h.default, {
            className: g.applicationInstallButton,
            application: null == Y ? void 0 : Y.application
          }), (0, a.jsx)(y.default, {
            user: p,
            isCurrentUser: z,
            relationshipType: H,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: p.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: L
                })
              } catch (e) {
                X()
              }
            },
            onIgnoreFriend: function() {
              K({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(p.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => ee("User Profile Modal - Send Message Button")
          }), z || p.isNonUserBot() ? null : (0, a.jsx)(r.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              K({
                action: "PRESS_OPTIONS"
              }), (0, u.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await s.e("29136").then(s.bind(s, "193646"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: H,
                  onRemoveFriend: $,
                  onBlock: et,
                  onReport: es,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => ee("User Profile Modal - Context Menu"),
                  user: p
                })
              })
            },
            children: (0, a.jsx)(I.default, {
              className: g.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}