"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
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
  m = s("314897"),
  E = s("158776"),
  I = s("699516"),
  v = s("621113"),
  x = s("759231"),
  N = s("998502"),
  _ = s("785717"),
  A = s("621853"),
  T = s("204197"),
  U = s("735336"),
  h = s("520978"),
  p = s("184325"),
  j = s("652853"),
  g = s("496206"),
  R = s("228168"),
  P = s("981631"),
  C = s("231338"),
  M = s("689938"),
  y = s("950114");
let O = r.AvatarSizes.SIZE_120,
  L = N.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: N,
    guildId: F,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: V
  } = e, w = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(N.id)), z = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(N.id)), H = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(N.id)), Y = (0, i.useStateFromStores)([A.default], () => A.default.getUserProfile(N.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === N.id), {
    theme: Z
  } = (0, j.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, _.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, T.default)({
    user: N,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(N, D), [N, D]);

  function $() {
    V(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(N.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), n.default.openPrivateChannel(N.id, !1, !1, e), $()
  }

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: N.id,
        context: {
          location: "User Profile"
        },
        type: P.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function el() {
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(N, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: N,
      profileType: R.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: y.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(L, {
          src: J,
          avatarDecoration: q,
          size: O,
          className: y.avatar,
          status: X ? C.StatusTypes.UNKNOWN : G ? C.StatusTypes.STREAMING : H,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: z,
          statusTooltip: !0,
          "aria-label": N.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == Y ? void 0 : Y.profileFetchFailed) && !N.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(x.default, {
            ...e,
            className: y.warningCircleIcon,
            color: o.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(p.default, {
          user: N,
          className: y.badgeList,
          guildId: F,
          size: p.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: p.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(h.default, {
            className: y.applicationInstallButton,
            application: null == Y ? void 0 : Y.application
          }), (0, l.jsx)(g.default, {
            user: N,
            isCurrentUser: W,
            relationshipType: w,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: N.id,
                  context: {
                    location: "User Profile"
                  },
                  type: void 0,
                  friendToken: b
                })
              } catch (e) {
                $()
              }
            },
            onIgnoreFriend: function() {
              K({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(N.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || N.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
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
                  relationshipType: w,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: el,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: N
                })
              })
            },
            children: (0, l.jsx)(v.default, {
              className: y.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}