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
  _ = s("998502"),
  A = s("785717"),
  U = s("621853"),
  T = s("204197"),
  N = s("735336"),
  g = s("520978"),
  C = s("184325"),
  h = s("652853"),
  p = s("496206"),
  R = s("228168"),
  j = s("981631"),
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
    hasProfileEffect: k,
    onClose: w
  } = e, V = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(_.id)), H = (0, i.useStateFromStores)([v.default], () => v.default.isMobileOnline(_.id)), Y = (0, i.useStateFromStores)([v.default], () => v.default.getStatus(_.id)), z = (0, i.useStateFromStores)([U.default], () => U.default.getUserProfile(_.id)), W = (0, i.useStateFromStores)([m.default], () => m.default.getId() === _.id), {
    theme: Z
  } = (0, h.useUserProfileThemeContext)(), {
    trackUserProfileAction: J
  } = (0, A.useUserProfileAnalyticsContext)(), {
    avatarSrc: K,
    eventHandlers: Q,
    avatarDecorationSrc: q
  } = (0, T.default)({
    user: _,
    size: O
  }), X = a.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(_, D), [_, D]);

  function $() {
    w(), (0, d.popLayer)()
  }

  function ee() {
    J({
      action: "REMOVE_FRIEND"
    }), c.default.removeFriend(_.id, {
      location: "User Profile"
    })
  }

  function et(e) {
    J({
      action: "SEND_MESSAGE"
    }), o.default.openPrivateChannel(_.id, !1, !1, e), $()
  }

  function es() {
    try {
      J({
        action: "BLOCK"
      }), c.default.addRelationship({
        userId: _.id,
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
    J({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(_, e)
  }
  return (0, l.jsxs)("header", {
    className: B,
    children: [(0, l.jsx)(N.default, {
      displayProfile: t,
      onClose: $,
      user: _,
      profileType: R.UserProfileTypes.MODAL,
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
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, r.getStatusBackdropColor)(Z),
          isMobile: H,
          statusTooltip: !0,
          "aria-label": _.username
        })
      }), (0, l.jsxs)("div", {
        className: y.headerTop,
        children: [(null == z ? void 0 : z.profileFetchFailed) && !_.isClyde() ? (0, l.jsx)(r.Tooltip, {
          text: P.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(x.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(C.default, {
          user: _,
          className: y.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18,
          onBadgeClick: w
        }), (0, l.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, l.jsx)(g.default, {
            className: y.applicationInstallButton,
            application: null == z ? void 0 : z.application
          }), (0, l.jsx)(p.default, {
            user: _,
            isCurrentUser: W,
            relationshipType: V,
            onAddFriend: function() {
              try {
                J({
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
              J({
                action: "CANCEL_FRIEND_REQUEST"
              }), c.default.cancelFriendRequest(_.id, {
                location: "User Profile"
              })
            },
            onSendMessage: () => et("User Profile Modal - Send Message Button")
          }), W || _.isNonUserBot() ? null : (0, l.jsx)(r.Clickable, {
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