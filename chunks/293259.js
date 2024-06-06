"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("442837"),
  n = l("692547"),
  o = l("481060"),
  r = l("493683"),
  u = l("239091"),
  d = l("37234"),
  c = l("194359"),
  f = l("726521"),
  S = l("233440"),
  E = l("314897"),
  I = l("158776"),
  m = l("699516"),
  _ = l("621113"),
  v = l("759231"),
  p = l("998502"),
  T = l("785717"),
  g = l("621853"),
  x = l("204197"),
  A = l("735336"),
  U = l("520978"),
  N = l("184325"),
  C = l("652853"),
  R = l("225714"),
  h = l("228168"),
  P = l("981631"),
  M = l("231338"),
  y = l("689938"),
  j = l("155614");
let F = o.AvatarSizes.SIZE_120,
  L = p.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function O(e) {
  let {
    displayProfile: t,
    user: p,
    guildId: O,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, Y = (0, a.useStateFromStores)([m.default], () => m.default.getRelationshipType(p.id)), H = (0, a.useStateFromStores)([I.default], () => I.default.isMobileOnline(p.id)), V = (0, a.useStateFromStores)([I.default], () => I.default.getStatus(p.id)), W = (0, a.useStateFromStores)([g.default], () => g.default.getUserProfile(p.id)), z = (0, a.useStateFromStores)([E.default], () => E.default.getId() === p.id), {
    theme: Z
  } = (0, C.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, T.useUserProfileAnalyticsContext)(), {
    avatarSrc: Q,
    eventHandlers: J,
    avatarDecorationSrc: q
  } = (0, x.default)({
    user: p,
    size: F
  }), X = i.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(p, D), [p, D]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(p.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), r.default.openPrivateChannel(p.id, !1, !1, e), $()
  }

  function el() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: p.id,
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
    let e = "@me" === O ? void 0 : O;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(p, e)
  }
  return (0, s.jsxs)("header", {
    className: B,
    children: [(0, s.jsx)(A.default, {
      displayProfile: t,
      onClose: $,
      user: p,
      profileType: h.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, s.jsxs)("div", {
      className: j.header,
      children: [(0, s.jsx)("div", {
        ...J,
        children: (0, s.jsx)(L, {
          src: Q,
          avatarDecoration: q,
          size: F,
          className: j.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : V,
          statusBackdropColor: (0, o.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": p.username
        })
      }), (0, s.jsxs)("div", {
        className: j.headerTop,
        children: [(null == W ? void 0 : W.profileFetchFailed) && !p.isClyde() ? (0, s.jsx)(o.Tooltip, {
          text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, s.jsx)(v.default, {
            ...e,
            className: j.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, s.jsx)(N.default, {
          user: p,
          className: j.badgeList,
          guildId: O,
          size: N.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: N.BadgeSizes.SIZE_18,
          onBadgeClick: w
        }), (0, s.jsxs)("div", {
          className: j.relationshipButtons,
          children: [(null == W ? void 0 : W.application) != null && (0, s.jsx)(U.default, {
            className: j.applicationInstallButton,
            application: W.application
          }), (0, s.jsx)(R.default, {
            user: p,
            isCurrentUser: z,
            relationshipType: Y,
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
                  friendToken: b
                })
              } catch (e) {
                $()
              }
            },
            onIgnoreFriend: function() {
              K({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(p.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), z || p.isNonUserBot() ? null : (0, s.jsx)(o.Clickable, {
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
                  user: p,
                  isCurrentUser: z,
                  guildId: O
                })
              })
            },
            children: (0, s.jsx)(_.default, {
              className: j.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}