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
  I = s("158776"),
  E = s("699516"),
  v = s("621113"),
  _ = s("759231"),
  x = s("998502"),
  T = s("785717"),
  U = s("621853"),
  A = s("204197"),
  N = s("735336"),
  g = s("520978"),
  C = s("184325"),
  h = s("652853"),
  R = s("496206"),
  p = s("228168"),
  j = s("981631"),
  M = s("231338"),
  P = s("689938"),
  O = s("370386");
let y = r.AvatarSizes.SIZE_120,
  L = x.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: x,
    guildId: F,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, V = (0, i.useStateFromStores)([E.default], () => E.default.getRelationshipType(x.id)), H = (0, i.useStateFromStores)([I.default], () => I.default.isMobileOnline(x.id)), Y = (0, i.useStateFromStores)([I.default], () => I.default.getStatus(x.id)), z = (0, i.useStateFromStores)([U.default], () => U.default.getUserProfile(x.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === x.id), {
    theme: Z
  } = (0, h.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, T.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, A.default)({
    user: x,
    size: y
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(x, D), [x, D]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(x.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), o.default.openPrivateChannel(x.id, !1, !1, e), $()
  }

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: x.id,
        context: {
          location: "User Profile"
        },
        type: j.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function el() {
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(x, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(N.default, {
      displayProfile: t,
      onClose: $,
      user: x,
      profileType: p.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: O.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(L, {
          src: J,
          avatarDecoration: q,
          size: y,
          className: O.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": x.username
        })
      }), (0, l.jsxs)("div", {
        className: O.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !x.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(_.default, {
            ...e,
            className: O.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(C.default, {
          user: x,
          className: O.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18,
          onBadgeClick: w
        }), (0, l.jsxs)("div", {
          className: O.relationshipButtons,
          children: [(0, l.jsx)(g.default, {
            className: O.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, l.jsx)(R.default, {
            user: x,
            isCurrentUser: W,
            relationshipType: V,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: x.id,
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
              }), c.default.cancelFriendRequest(x.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || x.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
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
                  user: x
                })
              })
            },
            children: (0, l.jsx)(v.default, {
              className: O.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}