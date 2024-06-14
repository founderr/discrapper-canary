"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("442837"),
  n = l("692547"),
  o = l("481060"),
  r = l("239091"),
  u = l("233440"),
  d = l("314897"),
  c = l("158776"),
  f = l("699516"),
  S = l("621113"),
  E = l("759231"),
  I = l("998502"),
  m = l("785717"),
  v = l("621853"),
  _ = l("204197"),
  T = l("735336"),
  p = l("520978"),
  x = l("184325"),
  g = l("652853"),
  A = l("225714"),
  C = l("228168"),
  N = l("231338"),
  U = l("689938"),
  P = l("155614");
let h = o.AvatarSizes.SIZE_120,
  R = I.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function M(e) {
  let {
    displayProfile: t,
    user: I,
    guildId: M,
    channelId: j,
    friendToken: y,
    className: O,
    isStreaming: L,
    hasProfileEffect: F,
    onClose: D
  } = e, b = (0, a.useStateFromStores)([f.default], () => f.default.getRelationshipType(I.id)), B = (0, a.useStateFromStores)([c.default], () => c.default.isMobileOnline(I.id)), G = (0, a.useStateFromStores)([c.default], () => c.default.getStatus(I.id)), k = (0, a.useStateFromStores)([v.default], () => v.default.getUserProfile(I.id)), w = (0, a.useStateFromStores)([d.default], () => d.default.getId() === I.id), {
    theme: Y
  } = (0, g.useUserProfileThemeContext)(), {
    trackUserProfileAction: V
  } = (0, m.useUserProfileAnalyticsContext)(), {
    avatarSrc: H,
    eventHandlers: W,
    avatarDecorationSrc: z
  } = (0, _.default)({
    user: I,
    size: h
  }), Z = i.useMemo(() => (0, u.shouldDisableUserPresenceInChannel)(I, j), [I, j]);
  return (0, s.jsxs)("header", {
    className: O,
    children: [(0, s.jsx)(T.default, {
      displayProfile: t,
      onClose: D,
      user: I,
      profileType: C.UserProfileTypes.MODAL,
      hasProfileEffect: F
    }), (0, s.jsxs)("div", {
      className: P.header,
      children: [(0, s.jsx)("div", {
        ...W,
        children: (0, s.jsx)(R, {
          src: H,
          avatarDecoration: z,
          size: h,
          className: P.avatar,
          status: Z ? N.StatusTypes.UNKNOWN : L ? N.StatusTypes.STREAMING : G,
          statusBackdropColor: (0, o.getStatusBackdropColor)(Y),
          isMobile: B,
          statusTooltip: !0,
          "aria-label": I.username
        })
      }), (0, s.jsxs)("div", {
        className: P.headerTop,
        children: [(null == k ? void 0 : k.profileFetchFailed) && !I.isClyde() ? (0, s.jsx)(o.Tooltip, {
          text: U.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, s.jsx)(E.default, {
            ...e,
            className: P.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, s.jsx)(x.default, {
          user: I,
          className: P.badgeList,
          guildId: M,
          size: x.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: x.BadgeSizes.SIZE_18,
          onBadgeClick: D
        }), (0, s.jsxs)("div", {
          className: P.relationshipButtons,
          children: [(null == k ? void 0 : k.application) != null && (0, s.jsx)(p.default, {
            className: P.applicationInstallButton,
            application: k.application
          }), (0, s.jsx)(A.default, {
            user: I,
            isCurrentUser: w,
            relationshipType: b,
            friendToken: y,
            onClose: D
          }), w || I.isNonUserBot() ? null : (0, s.jsx)(o.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              V({
                action: "PRESS_OPTIONS"
              }), (0, r.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await l.e("29136").then(l.bind(l, "193646"));
                return t => (0, s.jsx)(e, {
                  ...t,
                  user: I,
                  isCurrentUser: w,
                  guildId: M,
                  relationshipType: b,
                  trackUserProfileAction: V,
                  onClose: D
                })
              })
            },
            children: (0, s.jsx)(S.default, {
              className: P.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}