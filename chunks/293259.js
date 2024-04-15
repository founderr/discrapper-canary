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
  _ = s("998502"),
  N = s("785717"),
  x = s("621853"),
  A = s("204197"),
  v = s("358794"),
  U = s("735336"),
  h = s("520978"),
  C = s("184325"),
  R = s("496206"),
  P = s("228168"),
  j = s("981631"),
  M = s("231338"),
  g = s("689938"),
  y = s("950114");
let O = o.AvatarSizes.SIZE_120,
  D = _.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function F(e) {
  let {
    displayProfile: t,
    user: _,
    guildId: F,
    channelId: L,
    friendToken: B,
    className: b,
    isStreaming: G,
    hasProfileEffect: k,
    onClose: w
  } = e, z = (0, i.useStateFromStores)([I.default], () => I.default.getRelationshipType(_.id)), V = (0, i.useStateFromStores)([m.default], () => m.default.isMobileOnline(_.id)), Y = (0, i.useStateFromStores)([m.default], () => m.default.getStatus(_.id)), H = (0, i.useStateFromStores)([x.default], () => x.default.getUserProfile(_.id)), Q = (0, i.useStateFromStores)([E.default], () => E.default.getId() === _.id), {
    profileTheme: Z
  } = (0, v.default)(_, t), {
    trackUserProfileAction: K
  } = (0, N.useUserProfileAnalyticsContext)(), {
    avatarSrc: W,
    eventHandlers: q,
    avatarDecorationSrc: J
  } = (0, A.default)({
    user: _,
    size: O
  }), X = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(_, L), [_, L]);

  function $() {
    w(), (0, d.popLayer)()
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
    }), r.default.openPrivateChannel(_.id, !1, !1, e), $()
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
        type: j.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      $()
    }
  }

  function ea() {
    let e = "@me" === F ? void 0 : F;
    K({
      action: "REPORT"
    }), (0, f.showReportModalForUser)(_, e)
  }
  return (0, a.jsxs)("header", {
    className: b,
    children: [(0, a.jsx)(U.default, {
      displayProfile: t,
      onClose: $,
      user: _,
      profileType: P.UserProfileTypes.MODAL,
      hasProfileEffect: k
    }), (0, a.jsxs)("div", {
      className: y.header,
      children: [(0, a.jsx)("div", {
        ...q,
        children: (0, a.jsx)(D, {
          src: W,
          avatarDecoration: J,
          size: O,
          className: y.avatar,
          status: X ? M.StatusTypes.UNKNOWN : G ? M.StatusTypes.STREAMING : Y,
          statusBackdropColor: (0, o.getStatusBackdropColor)(Z),
          isMobile: V,
          statusTooltip: !0,
          "aria-label": _.username
        })
      }), (0, a.jsxs)("div", {
        className: y.headerTop,
        children: [(null == H ? void 0 : H.profileFetchFailed) && !_.isClyde() ? (0, a.jsx)(o.Tooltip, {
          text: g.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, a.jsx)(p.default, {
            ...e,
            className: y.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, a.jsx)(C.default, {
          user: _,
          className: y.badgeList,
          guildId: F,
          size: C.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: C.BadgeSizes.SIZE_18
        }), (0, a.jsxs)("div", {
          className: y.relationshipButtons,
          children: [(0, a.jsx)(h.default, {
            className: y.applicationInstallButton,
            application: null == H ? void 0 : H.application
          }), (0, a.jsx)(R.default, {
            user: _,
            isCurrentUser: Q,
            relationshipType: z,
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
                  friendToken: B
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
          }), Q || _.isNonUserBot() ? null : (0, a.jsx)(o.Clickable, {
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
                return t => (0, a.jsx)(e, {
                  ...t,
                  relationshipType: z,
                  onRemoveFriend: ee,
                  onBlock: es,
                  onReport: ea,
                  onCopyId: () => K({
                    action: "COPY_USER_ID"
                  }),
                  onMessage: () => et("User Profile Modal - Context Menu"),
                  user: _
                })
              })
            },
            children: (0, a.jsx)(T.default, {
              className: y.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}