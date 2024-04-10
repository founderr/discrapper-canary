"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("692547"),
  o = s("481060"),
  r = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  E = s("314897"),
  m = s("158776"),
  I = s("699516"),
  T = s("621113"),
  p = s("759231"),
  N = s("998502"),
  x = s("785717"),
  A = s("621853"),
  v = s("204197"),
  _ = s("358794"),
  h = s("735336"),
  C = s("520978"),
  U = s("184325"),
  j = s("496206"),
  R = s("228168"),
  P = s("981631"),
  M = s("231338"),
  y = s("689938"),
  g = s("950114");
let O = o.AvatarSizes.SIZE_120,
  D = N.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: N,
    guildId: F,
    channelId: L,
    friendToken: B,
    className: b,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: z
  } = e, w = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(N.id)), V = (0, i.useStateFromStores)([m.default], () => m.default.isMobileOnline(N.id)), Y = (0, i.useStateFromStores)([m.default], () => m.default.getStatus(N.id)), H = (0, i.useStateFromStores)([A.default], () => A.default.getUserProfile(N.id)), Q = (0, i.useStateFromStores)([E.default], () => E.default.getId() === N.id), {
    profileTheme: K
  } = (0, _.default)(N, t), {
    trackUserProfileAction: W
  } = (0, x.useUserProfileAnalyticsContext)(), {
    avatarSrc: Z,
    eventHandlers: q,
    avatarDecorationSrc: J
  } = (0, v.default)({
    user: N,
    size: O
  }), X = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(N, L), [N, L]);

  function $() {
    z(), (0, d.popLayer)()
  }

  function ee() {
    W({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(N.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    W({
      action: "SEND_MESSAGE"
    }), r.default.openPrivateChannel(N.id, !1, !1, e), $()
  }

  function es() {
    try {
      W({
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

  function ea() {
    let e = "@me" === F ? void 0 : F;
    W({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(N, e)
  }
  return (0, a.jsxs)("header", {
    className: b,
    children: [(0, a.jsx)(h.default, {
      displayProfile: t,
      onClose: $,
      user: N,
      profileType: R.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, a.jsxs)("div", {
      className: g.header,
      children: [(0, a.jsx)("div", {
        ...q,
        children: (0, a.jsx)(D, {
          src: Z,
          avatarDecoration: J,
          size: O,
          className: g.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, o.getStatusBackdropColor)(K),
          isMobile: V,
          statusTooltip: !0,
          "aria-label": N.username
        })
      }), (0, a.jsxs)("div", {
        className: g.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !N.isClyde() ? (0, a.jsx)(o.Tooltip, {
          text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(p.default, {
            ...e,
            className: g.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(U.default, {
          user: N,
          className: g.badgeList,
          guildId: F,
          size: U.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: U.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: g.relationshipButtons,
          children: [(0, a.jsx)(C.default, {
            className: g.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, a.jsx)(j.default, {
            user: N,
            isCurrentUser: Q,
            relationshipType: w,
            onAddFriend: function() {
              try {
                W({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: N.id,
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
              W({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(N.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), Q || N.isNonUserBot() ? null : (0, a.jsx)(o.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              W({
                action: "PRESS_OPTIONS"
              }), (0, u.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await s.e("29136").then(s.bind(s, "193646"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: w,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: ea,
                  onCopyId: () => W({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: N
                })
              })
            },
            children: (0, a.jsx)(T.default, {
              className: g.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}