"use strict";
l.r(t), l.d(t, {
  default: function() {
    return F
  }
});
var s = l("735250"),
  a = l("470079"),
  i = l("442837"),
  n = l("692547"),
  r = l("481060"),
  o = l("493683"),
  u = l("239091"),
  d = l("37234"),
  c = l("194359"),
  f = l("726521"),
  S = l("233440"),
  E = l("314897"),
  m = l("158776"),
  I = l("699516"),
  _ = l("621113"),
  v = l("759231"),
  g = l("998502"),
  T = l("785717"),
  A = l("621853"),
  U = l("204197"),
  p = l("735336"),
  x = l("520978"),
  N = l("184325"),
  C = l("652853"),
  h = l("496206"),
  R = l("228168"),
  P = l("981631"),
  M = l("231338"),
  j = l("689938"),
  y = l("155614");
let L = r.AvatarSizes.SIZE_120,
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
  } = e, Y = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(g.id)), H = (0, i.useStateFromStores)([m.default], () => m.default.isMobileOnline(g.id)), V = (0, i.useStateFromStores)([m.default], () => m.default.getStatus(g.id)), z = (0, i.useStateFromStores)([A.default], () => A.default.getUserProfile(g.id)), W = (0, i.useStateFromStores)([E.default], () => E.default.getId() === g.id), {
    theme: Z
  } = (0, C.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, T.useUserProfileAnalyticsContext)(), {
    avatarSrc: Q,
    eventHandlers: J,
    avatarDecorationSrc: q
  } = (0, U.default)({
    user: g,
    size: L
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

  function el() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: g.id,
        context: {
          location: "User Profile"
        },
        type: P.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function es() {
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(g, e)
  }
  return (0, s.jsxs)("header", {
    className: B,
    children: [(0, s.jsx)(p.default, {
      displayProfile: t,
      onClose: $,
      user: g,
      profileType: R.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, s.jsxs)("div", {
      className: y.header,
      children: [(0, s.jsx)("div", {
        ...J,
        children: (0, s.jsx)(O, {
          src: Q,
          avatarDecoration: q,
          size: L,
          className: y.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : V,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": g.username
        })
      }), (0, s.jsxs)("div", {
        className: y.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !g.isClyde() ? (0, s.jsx)(r.Tooltip, {
          text: j.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, s.jsx)(v.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, s.jsx)(N.default, {
          user: g,
          className: y.badgeList,
          guildId: F,
          size: N.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: N.BadgeSizes.SIZE_18,
          onBadgeClick: w
        }), (0, s.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(null == z ? void 0 : z.application) != null && (0, s.jsx)(x.default, {
            className: y.applicationInstallButton,
            application: z.application
          }), (0, s.jsx)(h.default, {
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
          }), W || g.isNonUserBot() ? null : (0, s.jsx)(r.Clickable, {
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
                } = await l.e("29136").then(l.bind(l, "193646"));
                return t => (0, s.jsx)(e, {
                  ...t,
                  relationshipType: Y,
                  onRemoveFriend: ee,
                  onBlock: el,
                  onReport: es,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: g,
                  guildId: F
                })
              })
            },
            children: (0, s.jsx)(_.default, {
              className: y.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}