i.d(n, {
  Z: function() {
    return M
  }
});
var l = i(735250),
  s = i(470079),
  t = i(442837),
  o = i(692547),
  a = i(481060),
  r = i(239091),
  d = i(233440),
  u = i(314897),
  c = i(158776),
  I = i(699516),
  E = i(998502),
  f = i(785717),
  Z = i(621853),
  _ = i(204197),
  S = i(735336),
  m = i(520978),
  v = i(184325),
  N = i(652853),
  x = i(225714),
  h = i(228168),
  g = i(231338),
  C = i(689938),
  T = i(258125);
let R = a.AvatarSizes.SIZE_120,
  A = E.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function M(e) {
  let {
    displayProfile: n,
    user: E,
    guildId: M,
    channelId: j,
    friendToken: p,
    className: U,
    isStreaming: O,
    hasProfileEffect: P,
    onClose: L
  } = e, D = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(E.id)), y = (0, t.e7)([c.Z], () => c.Z.isMobileOnline(E.id)), F = (0, t.e7)([c.Z], () => c.Z.getStatus(E.id)), b = (0, t.e7)([Z.Z], () => Z.Z.getUserProfile(E.id)), G = (0, t.e7)([u.default], () => u.default.getId() === E.id), {
    theme: B
  } = (0, N.z)(), {
    trackUserProfileAction: k
  } = (0, f.KZ)(), {
    avatarSrc: w,
    eventHandlers: Y,
    avatarDecorationSrc: V
  } = (0, _.Z)({
    user: E,
    size: R
  }), W = s.useMemo(() => (0, d.W)(E, j), [E, j]);
  return (0, l.jsxs)("header", {
    className: U,
    children: [(0, l.jsx)(S.Z, {
      displayProfile: n,
      onClose: L,
      user: E,
      profileType: h.y0.MODAL,
      hasProfileEffect: P
    }), (0, l.jsxs)("div", {
      className: T.header,
      children: [(0, l.jsx)("div", {
        ...Y,
        children: (0, l.jsx)(A, {
          src: w,
          avatarDecoration: V,
          size: R,
          className: T.avatar,
          status: W ? g.Sk.UNKNOWN : O ? g.Sk.STREAMING : F,
          statusBackdropColor: (0, a.getStatusBackdropColor)(B),
          isMobile: y,
          statusTooltip: !0,
          "aria-label": E.username
        })
      }), (0, l.jsxs)("div", {
        className: T.headerTop,
        children: [(null == b ? void 0 : b.profileFetchFailed) && !E.isClyde() ? (0, l.jsx)(a.Tooltip, {
          text: C.Z.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, l.jsx)(a.CircleExclamationPointIcon, {
            size: "custom",
            width: 20,
            height: 20,
            ...e,
            className: T.warningCircleIcon,
            color: o.Z.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, l.jsx)(v.Z, {
          user: E,
          className: T.badgeList,
          guildId: M,
          size: v.V.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: v.V.SIZE_18,
          onBadgeClick: L
        }), (0, l.jsxs)("div", {
          className: T.relationshipButtons,
          children: [(null == b ? void 0 : b.application) != null && (0, l.jsx)(m.Z, {
            className: T.applicationInstallButton,
            application: b.application
          }), (0, l.jsx)(x.Z, {
            user: E,
            isCurrentUser: G,
            relationshipType: D,
            friendToken: p,
            onClose: L
          }), G || E.isNonUserBot() ? null : (0, l.jsx)(a.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              k({
                action: "PRESS_OPTIONS"
              }), (0, r.jW)(e, async () => {
                let {
                  default: e
                } = await i.e("29136").then(i.bind(i, 193646));
                return n => (0, l.jsx)(e, {
                  ...n,
                  user: E,
                  isCurrentUser: G,
                  guildId: M,
                  relationshipType: D,
                  trackUserProfileAction: k,
                  onClose: L
                })
              })
            },
            children: (0, l.jsx)(a.MoreVerticalIcon, {
              size: "md",
              color: "currentColor",
              className: T.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}