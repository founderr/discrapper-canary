i.d(s, {
  Z: function() {
return A;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(692547),
  a = i(481060),
  r = i(239091),
  d = i(233440),
  c = i(314897),
  u = i(158776),
  I = i(699516),
  f = i(998502),
  _ = i(785717),
  m = i(621853),
  E = i(204197),
  v = i(735336),
  x = i(520978),
  S = i(184325),
  Z = i(652853),
  h = i(225714),
  p = i(228168),
  g = i(231338),
  T = i(689938),
  N = i(520067);
let j = a.AvatarSizes.SIZE_120,
  C = f.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
displayProfile: s,
user: f,
guildId: A,
channelId: M,
friendToken: R,
className: U,
isStreaming: L,
hasProfileEffect: O,
onClose: y
  } = e, b = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(f.id)), P = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(f.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(f.id)), F = (0, t.e7)([m.Z], () => m.Z.getUserProfile(f.id)), B = (0, t.e7)([c.default], () => c.default.getId() === f.id), {
theme: G
  } = (0, Z.z)(), {
trackUserProfileAction: w
  } = (0, _.KZ)(), {
avatarSrc: k,
eventHandlers: Y,
avatarDecorationSrc: V
  } = (0, E.Z)({
user: f,
size: j
  }), H = l.useMemo(() => (0, d.W)(f, M), [
f,
M
  ]);
  return (0, n.jsxs)('header', {
className: U,
children: [
  (0, n.jsx)(v.Z, {
    displayProfile: s,
    onClose: y,
    user: f,
    profileType: p.y0.MODAL,
    hasProfileEffect: O
  }),
  (0, n.jsxs)('div', {
    className: N.header,
    children: [
      (0, n.jsx)('div', {
        ...Y,
        children: (0, n.jsx)(C, {
          src: k,
          avatarDecoration: V,
          size: j,
          className: N.avatar,
          status: H ? g.Sk.UNKNOWN : L ? g.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: P,
          statusTooltip: !0,
          'aria-label': f.username
        })
      }),
      (0, n.jsxs)('div', {
        className: N.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !f.isClyde() ? (0, n.jsx)(a.Tooltip, {
            text: T.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, n.jsx)(a.CircleExclamationPointIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: N.warningCircleIcon,
              color: o.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, n.jsx)(S.Z, {
            user: f,
            className: N.badgeList,
            guildId: A,
            size: S.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: S.V.SIZE_18,
            onBadgeClick: y
          }),
          (0, n.jsxs)('div', {
            className: N.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, n.jsx)(x.Z, {
                className: N.applicationInstallButton,
                application: F.application
              }),
              (0, n.jsx)(h.Z, {
                user: f,
                isCurrentUser: B,
                relationshipType: b,
                friendToken: R,
                onClose: y
              }),
              B || f.isNonUserBot() ? null : (0, n.jsx)(a.Clickable, {
                focusProps: {
                  offset: {
                    left: 8
                  }
                },
                onClick: function(e) {
                  w({
                    action: 'PRESS_OPTIONS'
                  }), (0, r.jW)(e, async () => {
                    let {
                      default: e
                    } = await i.e('29136').then(i.bind(i, 193646));
                    return s => (0, n.jsx)(e, {
                      ...s,
                      user: f,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: b,
                      trackUserProfileAction: w,
                      onClose: y
                    });
                  });
                },
                children: (0, n.jsx)(a.MoreVerticalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: N.additionalActionsIcon
                })
              })
            ]
          })
        ]
      })
    ]
  })
]
  });
}