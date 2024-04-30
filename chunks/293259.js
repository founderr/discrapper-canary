"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("692547"),
  r = s("481060"),
  o = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  m = s("314897"),
  v = s("158776"),
  I = s("699516"),
  E = s("621113"),
  x = s("759231"),
  A = s("998502"),
  _ = s("785717"),
  T = s("621853"),
  N = s("204197"),
  U = s("735336"),
  C = s("520978"),
  g = s("184325"),
  h = s("652853"),
  p = s("496206"),
  j = s("228168"),
  R = s("981631"),
  P = s("231338"),
  M = s("689938"),
  y = s("370386");
let O = r.AvatarSizes.SIZE_120,
  L = A.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: A,
    guildId: F,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, V = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(A.id)), Y = (0, i.useStateFromStores)([v.default], () => v.default.isMobileOnline(A.id)), H = (0, i.useStateFromStores)([v.default], () => v.default.getStatus(A.id)), z = (0, i.useStateFromStores)([T.default], () => T.default.getUserProfile(A.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === A.id), {
    theme: Z
  } = (0, h.useUserProfileThemeContext)(), {
    trackUserProfileAction: J
  } = (0, _.useUserProfileAnalyticsContext)(), {
    avatarSrc: K,
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
    J({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(A.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    J({
      action: "SEND_MESSAGE"
    }), o.default.openPrivateChannel(A.id, !1, !1, e), $()
  }

  function es() {
    try {
      J({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: A.id,
        context: {
          location: "User Profile"
        },
        type: R.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function el() {
    let e = "@me" === F ? void 0 : F;
    J({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(A, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: A,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: y.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(L, {
          src: K,
          avatarDecoration: q,
          size: O,
          className: y.avatar,
          status: X ? P.StatusTypes.UNKNOWN : G ? P.StatusTypes.STREAMING : H,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: Y,
          statusTooltip: !0,
          "aria-label": A.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !A.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(x.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(g.default, {
          user: A,
          className: y.badgeList,
          guildId: F,
          size: g.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: g.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(C.default, {
            className: y.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, l.jsx)(p.default, {
            user: A,
            isCurrentUser: W,
            relationshipType: V,
            onAddFriend: function() {
              try {
                J({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: A.id,
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
              J({
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
              J({
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
                  onCopyId: () => J({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: A
                })
              })
            },
            children: (0, l.jsx)(E.default, {
              className: y.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}