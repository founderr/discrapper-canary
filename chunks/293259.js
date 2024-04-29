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
  v = s("699516"),
  E = s("621113"),
  x = s("759231"),
  _ = s("998502"),
  T = s("785717"),
  A = s("621853"),
  N = s("204197"),
  C = s("735336"),
  g = s("520978"),
  h = s("184325"),
  U = s("652853"),
  p = s("496206"),
  j = s("228168"),
  R = s("981631"),
  M = s("231338"),
  P = s("689938"),
  y = s("370386");
let O = r.AvatarSizes.SIZE_120,
  L = _.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: _,
    guildId: F,
    channelId: D,
    friendToken: b,
    className: B,
    isStreaming: G,
    hasProfileEffect: w,
    onClose: k
  } = e, V = (0, i.useStateFromStores)([v.default], () => v.default.getRelationshipType(_.id)), Y = (0, i.useStateFromStores)([I.default], () => I.default.isMobileOnline(_.id)), z = (0, i.useStateFromStores)([I.default], () => I.default.getStatus(_.id)), H = (0, i.useStateFromStores)([A.default], () => A.default.getUserProfile(_.id)), Z = (0, i.useStateFromStores)([m.default], () => m.default.getId() === _.id), {
    theme: W
  } = (0, U.useUserProfileThemeContext)(), {
    trackUserProfileAction: K
  } = (0, T.useUserProfileAnalyticsContext)(), {
    avatarSrc: J,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, N.default)({
    user: _,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(_, D), [_, D]);

  function $() {
    k(), (0, d.popLayer)()
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
        type: R.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function el() {
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(_, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(C.default, {
      displayProfile: t,
      onClose: $,
      user: _,
      profileType: j.UserProfileTypes.MODAL,
      hasProfileEffect: w
    }), (0, l.jsxs)("div", {
      className: y.header,
      children: [(0, l.jsx)("div", {
        ...Q,
        children: (0, l.jsx)(L, {
          src: J,
          avatarDecoration: q,
          size: O,
          className: y.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : z,
          statusBackdropColor: (0, r.getStatusBackdropColor)(W),
          isMobile: Y,
          statusTooltip: !0,
          "aria-label": _.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !_.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(x.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(h.default, {
          user: _,
          className: y.badgeList,
          guildId: F,
          size: h.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: h.BadgeSizes.SIZE_18
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(g.default, {
            className: y.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, l.jsx)(p.default, {
            user: _,
            isCurrentUser: Z,
            relationshipType: V,
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
          }), Z || _.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
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
                  user: _
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