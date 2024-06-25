i.d(n, {
  Z: function() {
    return A
  }
});
var t = i(735250),
  s = i(470079),
  o = i(442837),
  l = i(692547),
  a = i(481060),
  r = i(239091),
  d = i(233440),
  c = i(314897),
  u = i(158776),
  I = i(699516),
  f = i(998502),
  E = i(785717),
  _ = i(621853),
  S = i(204197),
  Z = i(735336),
  m = i(520978),
  v = i(184325),
  x = i(652853),
  h = i(225714),
  g = i(228168),
  N = i(231338),
  p = i(689938),
  T = i(258125);
let C = a.AvatarSizes.SIZE_120,
  R = f.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
    displayProfile: n,
    user: f,
    guildId: A,
    channelId: M,
    friendToken: j,
    className: U,
    isStreaming: P,
    hasProfileEffect: L,
    onClose: O
  } = e, y = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(f.id)), b = (0, o.e7)([u.Z], () => u.Z.isMobileOnline(f.id)), D = (0, o.e7)([u.Z], () => u.Z.getStatus(f.id)), F = (0, o.e7)([_.Z], () => _.Z.getUserProfile(f.id)), B = (0, o.e7)([c.default], () => c.default.getId() === f.id), {
    theme: G
  } = (0, x.z)(), {
    trackUserProfileAction: w
  } = (0, E.KZ)(), {
    avatarSrc: k,
    eventHandlers: Y,
    avatarDecorationSrc: V
  } = (0, S.Z)({
    user: f,
    size: C
  }), H = s.useMemo(() => (0, d.W)(f, M), [f, M]);
  return (0, t.jsxs)("header", {
    className: U,
    children: [(0, t.jsx)(Z.Z, {
      displayProfile: n,
      onClose: O,
      user: f,
      profileType: g.y0.MODAL,
      hasProfileEffect: L
    }), (0, t.jsxs)("div", {
      className: T.header,
      children: [(0, t.jsx)("div", {
        ...Y,
        children: (0, t.jsx)(R, {
          src: k,
          avatarDecoration: V,
          size: C,
          className: T.avatar,
          status: H ? N.Sk.UNKNOWN : P ? N.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: b,
          statusTooltip: !0,
          "aria-label": f.username
        })
      }), (0, t.jsxs)("div", {
        className: T.headerTop,
        children: [(null == F ? void 0 : F.profileFetchFailed) && !f.isClyde() ? (0, t.jsx)(a.Tooltip, {
          text: p.Z.Messages.USER_PROFILE_LOAD_ERROR,
          spacing: 20,
          children: e => (0, t.jsx)(a.CircleExclamationPointIcon, {
            size: "custom",
            width: 20,
            height: 20,
            ...e,
            className: T.warningCircleIcon,
            color: l.Z.unsafe_rawColors.YELLOW_300.css
          })
        }) : (0, t.jsx)(v.Z, {
          user: f,
          className: T.badgeList,
          guildId: A,
          size: v.V.SIZE_24,
          shrinkAtCount: 8,
          shrinkToSize: v.V.SIZE_18,
          onBadgeClick: O
        }), (0, t.jsxs)("div", {
          className: T.relationshipButtons,
          children: [(null == F ? void 0 : F.application) != null && (0, t.jsx)(m.Z, {
            className: T.applicationInstallButton,
            application: F.application
          }), (0, t.jsx)(h.Z, {
            user: f,
            isCurrentUser: B,
            relationshipType: y,
            friendToken: j,
            onClose: O
          }), B || f.isNonUserBot() ? null : (0, t.jsx)(a.Clickable, {
            focusProps: {
              offset: {
                left: 8
              }
            },
            onClick: function(e) {
              w({
                action: "PRESS_OPTIONS"
              }), (0, r.jW)(e, async () => {
                let {
                  default: e
                } = await i.e("29136").then(i.bind(i, 193646));
                return n => (0, t.jsx)(e, {
                  ...n,
                  user: f,
                  isCurrentUser: B,
                  guildId: A,
                  relationshipType: y,
                  trackUserProfileAction: w,
                  onClose: O
                })
              })
            },
            children: (0, t.jsx)(a.MoreVerticalIcon, {
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