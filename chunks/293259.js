i.d(n, {
  Z: function() {
return A;
  }
});
var s = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(692547),
  a = i(481060),
  r = i(239091),
  d = i(233440),
  c = i(314897),
  u = i(158776),
  I = i(699516),
  _ = i(998502),
  f = i(785717),
  m = i(621853),
  E = i(204197),
  x = i(735336),
  v = i(520978),
  h = i(184325),
  Z = i(652853),
  S = i(225714),
  p = i(228168),
  g = i(231338),
  j = i(689938),
  T = i(520067);
let N = a.AvatarSizes.SIZE_120,
  C = _.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
displayProfile: n,
user: _,
guildId: A,
channelId: y,
friendToken: R,
className: O,
isStreaming: L,
hasProfileEffect: U,
onClose: M
  } = e, b = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), P = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, t.e7)([m.Z], () => m.Z.getUserProfile(_.id)), B = (0, t.e7)([c.default], () => c.default.getId() === _.id), {
theme: G
  } = (0, Z.z)(), {
trackUserProfileAction: w
  } = (0, f.KZ)(), {
avatarSrc: k,
eventHandlers: V,
avatarDecorationSrc: Y
  } = (0, E.Z)({
user: _,
size: N
  }), H = l.useMemo(() => (0, d.W)(_, y), [
_,
y
  ]);
  return (0, s.jsxs)('header', {
className: O,
children: [
  (0, s.jsx)(x.Z, {
    displayProfile: n,
    onClose: M,
    user: _,
    profileType: p.y0.MODAL,
    hasProfileEffect: U
  }),
  (0, s.jsxs)('div', {
    className: T.header,
    children: [
      (0, s.jsx)('div', {
        ...V,
        children: (0, s.jsx)(C, {
          src: k,
          avatarDecoration: Y,
          size: N,
          className: T.avatar,
          status: H ? g.Sk.UNKNOWN : L ? g.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: P,
          statusTooltip: !0,
          'aria-label': _.username
        })
      }),
      (0, s.jsxs)('div', {
        className: T.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !_.isClyde() ? (0, s.jsx)(a.Tooltip, {
            text: j.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, s.jsx)(a.CircleExclamationPointIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: T.warningCircleIcon,
              color: o.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, s.jsx)(h.Z, {
            user: _,
            className: T.badgeList,
            guildId: A,
            size: h.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: h.V.SIZE_18,
            onBadgeClick: M
          }),
          (0, s.jsxs)('div', {
            className: T.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, s.jsx)(v.Z, {
                className: T.applicationInstallButton,
                application: F.application
              }),
              (0, s.jsx)(S.Z, {
                user: _,
                isCurrentUser: B,
                relationshipType: b,
                friendToken: R,
                onClose: M
              }),
              B || _.isNonUserBot() ? null : (0, s.jsx)(a.Clickable, {
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
                    return n => (0, s.jsx)(e, {
                      ...n,
                      user: _,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: b,
                      trackUserProfileAction: w,
                      onClose: M
                    });
                  });
                },
                children: (0, s.jsx)(a.MoreVerticalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: T.additionalActionsIcon
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