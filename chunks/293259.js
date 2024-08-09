n.d(s, {
  Z: function() {
return A;
  }
});
var i = n(735250),
  l = n(470079),
  o = n(442837),
  t = n(692547),
  r = n(481060),
  a = n(239091),
  d = n(233440),
  c = n(314897),
  u = n(158776),
  _ = n(699516),
  I = n(998502),
  E = n(785717),
  f = n(621853),
  m = n(204197),
  S = n(735336),
  Z = n(520978),
  x = n(184325),
  v = n(652853),
  h = n(225714),
  T = n(228168),
  p = n(231338),
  g = n(689938),
  N = n(520067);
let C = r.AvatarSizes.SIZE_120,
  j = I.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function A(e) {
  let {
displayProfile: s,
user: I,
guildId: A,
channelId: O,
friendToken: R,
className: L,
isStreaming: U,
hasProfileEffect: M,
onClose: P
  } = e, b = (0, o.e7)([_.Z], () => _.Z.getRelationshipType(I.id)), y = (0, o.e7)([u.Z], () => u.Z.isMobileOnline(I.id)), D = (0, o.e7)([u.Z], () => u.Z.getStatus(I.id)), B = (0, o.e7)([f.Z], () => f.Z.getUserProfile(I.id)), F = (0, o.e7)([c.default], () => c.default.getId() === I.id), {
theme: G
  } = (0, v.z)(), {
trackUserProfileAction: w
  } = (0, E.KZ)(), {
avatarSrc: k,
eventHandlers: V,
avatarDecorationSrc: Y
  } = (0, m.Z)({
user: I,
size: C
  }), H = l.useMemo(() => (0, d.W)(I, O), [
I,
O
  ]);
  return (0, i.jsxs)('header', {
className: L,
children: [
  (0, i.jsx)(S.Z, {
    displayProfile: s,
    onClose: P,
    user: I,
    profileType: T.y0.MODAL,
    hasProfileEffect: M
  }),
  (0, i.jsxs)('div', {
    className: N.header,
    children: [
      (0, i.jsx)('div', {
        ...V,
        children: (0, i.jsx)(j, {
          src: k,
          avatarDecoration: Y,
          size: C,
          className: N.avatar,
          status: H ? p.Sk.UNKNOWN : U ? p.Sk.STREAMING : D,
          statusBackdropColor: (0, r.getStatusBackdropColor)(G),
          isMobile: y,
          statusTooltip: !0,
          'aria-label': I.username
        })
      }),
      (0, i.jsxs)('div', {
        className: N.headerTop,
        children: [
          (null == B ? void 0 : B.profileFetchFailed) && !I.isClyde() ? (0, i.jsx)(r.Tooltip, {
            text: g.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, i.jsx)(r.CircleExclamationPointIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: N.warningCircleIcon,
              color: t.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, i.jsx)(x.Z, {
            user: I,
            className: N.badgeList,
            guildId: A,
            size: x.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: x.V.SIZE_18,
            onBadgeClick: P
          }),
          (0, i.jsxs)('div', {
            className: N.relationshipButtons,
            children: [
              (null == B ? void 0 : B.application) != null && (0, i.jsx)(Z.Z, {
                className: N.applicationInstallButton,
                application: B.application
              }),
              (0, i.jsx)(h.Z, {
                user: I,
                isCurrentUser: F,
                relationshipType: b,
                friendToken: R,
                onClose: P
              }),
              F || I.isNonUserBot() ? null : (0, i.jsx)(r.Clickable, {
                focusProps: {
                  offset: {
                    left: 8
                  }
                },
                onClick: function(e) {
                  w({
                    action: 'PRESS_OPTIONS'
                  }), (0, a.jW)(e, async () => {
                    let {
                      default: e
                    } = await n.e('29136').then(n.bind(n, 193646));
                    return s => (0, i.jsx)(e, {
                      ...s,
                      user: I,
                      isCurrentUser: F,
                      guildId: A,
                      relationshipType: b,
                      trackUserProfileAction: w,
                      onClose: P
                    });
                  });
                },
                children: (0, i.jsx)(r.MoreVerticalIcon, {
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