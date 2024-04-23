"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  r = s("692547"),
  n = s("481060"),
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
  x = s("759231"),
  _ = s("998502"),
  A = s("785717"),
  N = s("621853"),
  T = s("204197"),
  U = s("735336"),
  h = s("520978"),
  p = s("184325"),
  j = s("652853"),
  g = s("496206"),
  R = s("228168"),
  P = s("981631"),
  M = s("231338"),
  C = s("689938"),
  y = s("950114");
let O = n.AvatarSizes.SIZE_120,
  F = _.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

function L(e) {
  let {
    displayProfile: t,
    user: _,
    guildId: L,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: V
  } = e, w = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(_.id)), H = (0, i.useStateFromStores)([E.default], () => E.default.isMobileOnline(_.id)), Y = (0, i.useStateFromStores)([E.default], () => E.default.getStatus(_.id)), z = (0, i.useStateFromStores)([N.default], () => N.default.getUserProfile(_.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === _.id), {
    theme: Z
  } = (0, j.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, A.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, T.default)({
    user: _,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(_, D), [_, D]);

  function $() {
    V(), (0, d.popLayer)()
  }

  function ee() {
    K({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(_.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    K({
      action: "SEND_MESSAGE"
    }), o.default.openPrivateChannel(_.id, !1, !1, e), $()
  }

  function es() {
    try {
      K({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: _.id,
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
    let e = "@me" === L ? void 0 : L;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(_, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: _,
      profileType: R.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, l.jsxs)("div", {
      className: y.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(F, {
          src: J,
          avatarDecoration: q,
          size: O,
          className: y.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, n.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": _.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !_.isClyde() ? (0, l.jsx)(n.Tooltip, {
          text: C.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(x.default, {
            ...e,
            className: y.warningCircleIcon,
            color: r.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(p.default, {
          user: _,
          className: y.badgeList,
          guildId: L,
          size: p.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: p.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(h.default, {
            className: y.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, l.jsx)(g.default, {
            user: _,
            isCurrentUser: W,
            relationshipType: w,
            onAddFriend: function() {
              try {
                K({
                  action: "SEND_FRIEND_REQUEST"
                }), c.default.addRelationship({
                  userId: _.id,
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
              }), c.default.cancelFriendRequest(_.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || _.isNonUserBot() ? null : (0, l.jsx)(n.Clickable, {
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
                  user: _
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