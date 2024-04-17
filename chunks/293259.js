"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  o = s("692547"),
  r = s("481060"),
  n = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  E = s("314897"),
  m = s("158776"),
  I = s("699516"),
  v = s("621113"),
  _ = s("759231"),
  A = s("998502"),
  T = s("785717"),
  x = s("621853"),
  N = s("204197"),
  U = s("735336"),
  p = s("520978"),
  h = s("184325"),
  C = s("652853"),
  P = s("496206"),
  j = s("228168"),
  M = s("981631"),
  y = s("231338"),
  R = s("689938"),
  g = s("950114");
let O = r.AvatarSizes.SIZE_120,
  F = A.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function L(e) {
  let {
    displayProfile: t,
    user: A,
    guildId: L,
    channelId: D,
    friendToken: B,
    className: b,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, V = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(A.id)), z = (0, i.useStateFromStores)([m.default], () => m.default.isMobileOnline(A.id)), Y = (0, i.useStateFromStores)([m.default], () => m.default.getStatus(A.id)), H = (0, i.useStateFromStores)([x.default], () => x.default.getUserProfile(A.id)), W = (0, i.useStateFromStores)([E.default], () => E.default.getId() === A.id), {
    theme: Z
  } = (0, C.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, T.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, N.default)({
    user: A,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(A, D), [A, D]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(A.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), n.default.openPrivateChannel(A.id, !1, !1, e), $()
  }

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: A.id,
        context: {
          location: "User Profile"
        },
        type: M.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function el() {
    let e = "@me" === L ? void 0 : L;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(A, e)
  }
  return (0, l.jsxs)("header", {
    className: b,
    children: [(0, l.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: A,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: g.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(F, {
          src: J,
          avatarDecoration: q,
          size: O,
          className: g.avatar,
          status: X ? y.StatusTypes.UNKNOWN : G ? y.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: z,
          statusTooltip: !0,
          "aria-label": A.username
        })
      }), (0, l.jsxs)("div", {
        className: g.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !A.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: R.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(_.default, {
            ...e,
            className: g.warningCircleIcon,
            color: o.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(h.default, {
          user: A,
          className: g.badgeList,
          guildId: L,
          size: h.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: h.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: g.relationshipButtons,
          children: [(0, l.jsx)(p.default, {
            className: g.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, l.jsx)(P.default, {
            user: A,
            isCurrentUser: W,
            relationshipType: V,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: A.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: B
                })
              } catch (e) {
                $()
              }
            },
            onIgnoreFriend: function() {
              K({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(A.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || A.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
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
                return t => (0, l.jsx)(e, {
                  ...t,
                  relationshipType: V,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: el,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: A
                })
              })
            },
            children: (0, l.jsx)(v.default, {
              className: g.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}