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
  o = s("481060"),
  r = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  E = s("314897"),
  I = s("158776"),
  m = s("699516"),
  _ = s("621113"),
  T = s("759231"),
  p = s("998502"),
  A = s("785717"),
  N = s("621853"),
  v = s("204197"),
  x = s("358794"),
  U = s("735336"),
  h = s("520978"),
  C = s("184325"),
  R = s("496206"),
  P = s("228168"),
  M = s("981631"),
  g = s("231338"),
  j = s("689938"),
  y = s("950114");
let O = o.AvatarSizes.SIZE_120,
  D = p.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: p,
    guildId: F,
    channelId: L,
    friendToken: B,
    className: b,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, V = (0, i.useStateFromStores)([m.default], () => m.default.getRelationshipType(p.id)), z = (0, i.useStateFromStores)([I.default], () => I.default.isMobileOnline(p.id)), Y = (0, i.useStateFromStores)([I.default], () => I.default.getStatus(p.id)), H = (0, i.useStateFromStores)([N.default], () => N.default.getUserProfile(p.id)), Q = (0, i.useStateFromStores)([E.default], () => E.default.getId() === p.id), {
    profileTheme: W
  } = (0, x.default)(p, t), {
    trackUserProfileAction: K
  } = (0, A.useUserProfileAnalyticsContext)(), {
    avatarSrc: Z,
    eventHandlers: q,
    avatarDecorationSrc: J
  } = (0, v.default)({
    user: p,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(p, L), [p, L]);

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

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: p.id,
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
    }), (0, f.showReportModalForUser)(p, e)
  }
  return (0, l.jsxs)("header", {
    className: b,
    children: [(0, l.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: p,
      profileType: P.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: y.header,
      children: [(0, l.jsx)("div", {
        ...q,
        children: (0, l.jsx)(D, {
          src: Z,
          avatarDecoration: J,
          size: O,
          className: y.avatar,
          status: X ? g.StatusTypes.UNKNOWN : G ? g.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, o.getStatusBackdropColor)(W),
          isMobile: z,
          statusTooltip: !0,
          "aria-label": p.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !p.isClyde() ? (0, l.jsx)(o.Tooltip, {
          text: j.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(T.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(C.default, {
          user: p,
          className: y.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(h.default, {
            className: y.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, l.jsx)(R.default, {
            user: p,
            isCurrentUser: Q,
            relationshipType: V,
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
                  friendToken: B
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
          }), Q || p.isNonUserBot() ? null : (0, l.jsx)(o.Clickable, {
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
                  user: p
                })
              })
            },
            children: (0, l.jsx)(_.default, {
              className: y.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}