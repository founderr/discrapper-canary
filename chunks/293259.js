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
  E = s("158776"),
  I = s("699516"),
  v = s("621113"),
  _ = s("759231"),
  g = s("998502"),
  A = s("785717"),
  T = s("621853"),
  x = s("204197"),
  N = s("735336"),
  U = s("520978"),
  C = s("184325"),
  h = s("652853"),
  p = s("496206"),
  R = s("228168"),
  M = s("981631"),
  P = s("231338"),
  j = s("689938"),
  L = s("155614");
let y = r.AvatarSizes.SIZE_120,
  O = g.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: g,
    guildId: F,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, Y = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(g.id)), H = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(g.id)), V = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(g.id)), z = (0, i.useStateFromStores)([T.default], () => T.default.getUserProfile(g.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === g.id), {
    theme: Z
  } = (0, h.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, A.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, x.default)({
    user: g,
    size: y
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(g, D), [g, D]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(g.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), o.default.openPrivateChannel(g.id, !1, !1, e), $()
  }

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: g.id,
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
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(g, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(N.default, {
      displayProfile: t,
      onClose: $,
      user: g,
      profileType: R.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: L.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(O, {
          src: J,
          avatarDecoration: q,
          size: y,
          className: L.avatar,
          status: X ? P.StatusTypes.UNKNOWN : G ? P.StatusTypes.STREAMING : V,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": g.username
        })
      }), (0, l.jsxs)("div", {
        className: L.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !g.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: j.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(_.default, {
            ...e,
            className: L.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(C.default, {
          user: g,
          className: L.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18,
          onBadgeClick: w
        }), (0, l.jsxs)("div", {
          className: L.relationshipButtons,
          children: [(0, l.jsx)(U.default, {
            className: L.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, l.jsx)(p.default, {
            user: g,
            isCurrentUser: W,
            relationshipType: Y,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: g.id,
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
              }), c.default.cancelFriendRequest(g.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || g.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
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
                  relationshipType: Y,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: el,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: g
                })
              })
            },
            children: (0, l.jsx)(v.default, {
              className: L.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}