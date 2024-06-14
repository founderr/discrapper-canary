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
  I = l("759231"),
  E = l("998502"),
  m = l("785717"),
  v = l("621853"),
  _ = l("204197"),
  p = l("735336"),
  x = l("520978"),
  T = l("184325"),
  g = l("652853"),
  N = l("225714"),
  A = l("228168"),
  C = l("231338"),
  U = l("689938"),
  P = l("155614");
let h = o.AvatarSizes.SIZE_120,
  R = E.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function M(e) {
  let {
    displayProfile: t,
    user: E,
    guildId: M,
    channelId: j,
    friendToken: y,
    className: O,
    isStreaming: L,
    hasProfileEffect: F,
    onClose: D
  } = e, b = (0, a.useStateFromStores)([f.default], () => f.default.getRelationshipType(E.id)), B = (0, a.useStateFromStores)([c.default], () => c.default.isMobileOnline(E.id)), G = (0, a.useStateFromStores)([c.default], () => c.default.getStatus(E.id)), k = (0, a.useStateFromStores)([v.default], () => v.default.getUserProfile(E.id)), w = (0, a.useStateFromStores)([d.default], () => d.default.getId() === E.id), {
    theme: Y
  } = (0, g.useUserProfileThemeContext)(), {
    trackUserProfileAction: V
  } = (0, m.useUserProfileAnalyticsContext)(), {
    avatarSrc: H,
    eventHandlers: W,
    avatarDecorationSrc: z
  } = (0, _.default)({
    user: E,
    size: h
  }), Z = i.useMemo(() => (0, u.shouldDisableUserPresenceInChannel)(E, j), [E, j]);
  return (0, s.jsxs)("header", {
    className: O,
    children: [(0, s.jsx)(p.default, {
      displayProfile: t,
      onClose: D,
      user: E,
      profileType: A.UserProfileTypes.MODAL,
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
          status: Z ? C.StatusTypes.UNKNOWN : L ? C.StatusTypes.STREAMING : G,
          statusBackdropColor: (0, o.getStatusBackdropColor)(Y),
          isMobile: B,
          statusTooltip: !0,
          "aria-label": E.username
        })
      }), (0, s.jsxs)("div", {
        className: P.headerTop,
        children: [(null == k ? void 0 : k.profileFetchFailed) && !E.isClyde() ? (0, s.jsx)(o.Tooltip, {
          text: U.default.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, s.jsx)(I.default, {
            ...e,
            className: P.warningCircleIcon,
            color: n.default.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, s.jsx)(T.default, {
          user: E,
          className: P.badgeList,
          guildId: M,
          size: T.BadgeSizes.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: T.BadgeSizes.SIZE_18,
          onBadgeClick: D
        }), (0, s.jsxs)("div", {
          className: P.relationshipButtons,
          children: [(null == k ? void 0 : k.application) != null && (0, s.jsx)(x.default, {
            className: P.applicationInstallButton,
            application: k.application
          }), (0, s.jsx)(N.default, {
            user: E,
            isCurrentUser: w,
            relationshipType: b,
            friendToken: y,
            onClose: D
          }), w || E.isNonUserBot() ? null : (0, s.jsx)(o.Clickable, {
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
                  user: E,
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