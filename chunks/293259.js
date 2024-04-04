"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  r = s("692547"),
  o = s("481060"),
  n = s("493683"),
  u = s("239091"),
  d = s("37234"),
  c = s("194359"),
  f = s("726521"),
  S = s("233440"),
  m = s("314897"),
  E = s("158776"),
  I = s("699516"),
  T = s("621113"),
  N = s("759231"),
  x = s("998502"),
  A = s("785717"),
  _ = s("621853"),
  p = s("204197"),
  v = s("358794"),
  h = s("735336"),
  U = s("520978"),
  C = s("184325"),
  j = s("496206"),
  y = s("228168"),
  M = s("981631"),
  P = s("231338"),
  R = s("689938"),
  g = s("950114");
let O = o.AvatarSizes.SIZE_120,
  D = x.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: x,
    guildId: F,
    channelId: L,
    friendToken: B,
    className: b,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, H = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(x.id)), V = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(x.id)), Y = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(x.id)), z = (0, i.useStateFromStores)([_.default], () => _.default.getUserProfile(x.id)), J = (0, i.useStateFromStores)([m.default], () => m.default.getId() === x.id), {
    profileTheme: K
  } = (0, v.default)(x, t), {
    trackUserProfileAction: Q
  } = (0, A.useUserProfileAnalyticsContext)(), {
    avatarSrc: W,
    eventHandlers: Z,
    avatarDecorationSrc: q
  } = (0, p.default)({
    user: x,
    size: O
  }), X = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(x, L), [x, L]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    Q({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(x.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    Q({
      action: "SEND_MESSAGE"
    }), n.default.openPrivateChannel(x.id, !1, !1, e), $()
  }

  function es() {
    try {
      Q({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: x.id,
        context: {
          location: "User Profile"
        },
        type: M.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function ea() {
    let e = "@me" === F ? void 0 : F;
    Q({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(x, e)
  }
  return (0, a.jsxs)("header", {
    className: b,
    children: [(0, a.jsx)(h.default, {
      displayProfile: t,
      onClose: $,
      user: x,
      profileType: y.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, a.jsxs)("div", {
      className: g.header,
      children: [(0, a.jsx)("div", {
        ...Z,
        children: (0, a.jsx)(D, {
          src: W,
          avatarDecoration: q,
          size: O,
          className: g.avatar,
          status: X ? P.StatusTypes.UNKNOWN : G ? P.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, o.getStatusBackdropColor)(K),
          isMobile: V,
          statusTooltip: !0,
          "aria-label": x.username
        })
      }), (0, a.jsxs)("div", {
        className: g.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !x.isClyde() ? (0, a.jsx)(o.Tooltip, {
          text: R.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(N.default, {
            ...e,
            className: g.warningCircleIcon,
            color: r.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(C.default, {
          user: x,
          className: g.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: g.relationshipButtons,
          children: [(0, a.jsx)(U.default, {
            className: g.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, a.jsx)(j.default, {
            user: x,
            isCurrentUser: J,
            relationshipType: H,
            onAddFriend: function() {
              try {
                Q({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: x.id,
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
              Q({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(x.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), J || x.isNonUserBot() ? null : (0, a.jsx)(o.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              Q({
                action: "PRESS_OPTIONS"
              }), (0, u.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await s.e("29136").then(s.bind(s, "193646"));
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: H,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: ea,
                  onCopyId: () => Q({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: x
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