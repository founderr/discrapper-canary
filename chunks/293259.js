s.d(i, {
  Z: function() {
    return M
  }
});
var n = s(735250),
  l = s(470079),
  t = s(442837),
  o = s(692547),
  r = s(481060),
  a = s(239091),
  d = s(233440),
  c = s(314897),
  u = s(158776),
  I = s(699516),
  E = s(998502),
  Z = s(785717),
  f = s(621853),
  _ = s(204197),
  S = s(735336),
  v = s(520978),
  m = s(184325),
  x = s(652853),
  h = s(225714),
  N = s(228168),
  g = s(231338),
  T = s(689938),
  C = s(258125);
let R = r.AvatarSizes.SIZE_120,
  A = E.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function M(e) {
  let {
    displayProfile: i,
    user: E,
    guildId: M,
    channelId: p,
    friendToken: j,
    className: U,
    isStreaming: L,
    hasProfileEffect: O,
    onClose: P
  } = e, y = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(E.id)), D = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(E.id)), F = (0, t.e7)([u.Z], () => u.Z.getStatus(E.id)), b = (0, t.e7)([f.Z], () => f.Z.getUserProfile(E.id)), B = (0, t.e7)([c.default], () => c.default.getId() === E.id), {
    theme: G
  } = (0, x.z)(), {
    trackUserProfileAction: k
  } = (0, Z.KZ)(), {
    avatarSrc: w,
    eventHandlers: Y,
    avatarDecorationSrc: V
  } = (0, _.Z)({
    user: E,
    size: R
  }), W = l.useMemo(() => (0, d.W)(E, p), [E, p]);
  return (0, n.jsxs)("header", {
    className: U,
    children: [(0, n.jsx)(S.Z, {
      displayProfile: i,
      onClose: P,
      user: E,
      profileType: N.y0.MODAL,
      hasProfileEffect: O
    }), (0, n.jsxs)("div", {
      className: C.header,
      children: [(0, n.jsx)("div", {
        ...Y,
        children: (0, n.jsx)(A, {
          src: w,
          avatarDecoration: V,
          size: R,
          className: C.avatar,
          status: W ? g.Sk.UNKNOWN : L ? g.Sk.STREAMING : F,
          statusBackdropColor: (0, r.getStatusBackdropColor)(G),
          isMobile: D,
          statusTooltip: !0,
          "aria-label": E.username
        })
      }), (0, n.jsxs)("div", {
        className: C.headerTop,
        children: [(null == b ? void 0 : b.profileFetchFailed) && !E.isClyde() ? (0, n.jsx)(r.Tooltip, {
          text: T.Z.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, n.jsx)(r.CircleExclamationPointIcon, {
            size: "custom",
            width: 20,
            height: 20,
            ...e,
            className: C.warningCircleIcon,
            color: o.Z.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, n.jsx)(m.Z, {
          user: E,
          className: C.badgeList,
          guildId: M,
          size: m.V.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: m.V.SIZE_18,
          onBadgeClick: P
        }), (0, n.jsxs)("div", {
          className: C.relationshipButtons,
          children: [(null == b ? void 0 : b.application) != null && (0, n.jsx)(v.Z, {
            className: C.applicationInstallButton,
            application: b.application
          }), (0, n.jsx)(h.Z, {
            user: E,
            isCurrentUser: B,
            relationshipType: y,
            friendToken: j,
            onClose: P
          }), B || E.isNonUserBot() ? null : (0, n.jsx)(r.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              k({
                action: "PRESS_OPTIONS"
              }), (0, a.jW)(e, async () => {
                let {
                  default: e
                } = await s.e("29136").then(s.bind(s, 193646));
                return i => (0, n.jsx)(e, {
                  ...i,
                  user: E,
                  isCurrentUser: B,
                  guildId: M,
                  relationshipType: y,
                  trackUserProfileAction: k,
                  onClose: P
                })
              })
            },
            children: (0, n.jsx)(r.MoreVerticalIcon, {
              size: "md",
              color: "currentColor",
              className: C.additionalActionsIcon
            })
          })]
        })]
      })]
    })]
  })
}