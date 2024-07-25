n.d(i, {
  Z: function() {
return A;
  }
});
var s = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(692547),
  a = n(481060),
  r = n(239091),
  d = n(233440),
  c = n(314897),
  u = n(158776),
  I = n(699516),
  _ = n(998502),
  f = n(785717),
  m = n(621853),
  E = n(204197),
  x = n(735336),
  v = n(520978),
  h = n(184325),
  S = n(652853),
  Z = n(225714),
  p = n(228168),
  g = n(231338),
  j = n(689938),
  T = n(520067);
let N = a.AvatarSizes.SIZE_120,
  C = _.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
displayProfile: i,
user: _,
guildId: A,
channelId: R,
friendToken: L,
className: y,
isStreaming: O,
hasProfileEffect: U,
onClose: P
  } = e, M = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), b = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, t.e7)([m.Z], () => m.Z.getUserProfile(_.id)), B = (0, t.e7)([c.default], () => c.default.getId() === _.id), {
theme: G
  } = (0, S.z)(), {
trackUserProfileAction: w
  } = (0, f.KZ)(), {
avatarSrc: k,
eventHandlers: Y,
avatarDecorationSrc: V
  } = (0, E.Z)({
user: _,
size: N
  }), H = l.useMemo(() => (0, d.W)(_, R), [
_,
R
  ]);
  return (0, s.jsxs)('header', {
className: y,
children: [
  (0, s.jsx)(x.Z, {
    displayProfile: i,
    onClose: P,
    user: _,
    profileType: p.y0.MODAL,
    hasProfileEffect: U
  }),
  (0, s.jsxs)('div', {
    className: T.header,
    children: [
      (0, s.jsx)('div', {
        ...Y,
        children: (0, s.jsx)(C, {
          src: k,
          avatarDecoration: V,
          size: N,
          className: T.avatar,
          status: H ? g.Sk.UNKNOWN : O ? g.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: b,
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
            onBadgeClick: P
          }),
          (0, s.jsxs)('div', {
            className: T.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, s.jsx)(v.Z, {
                className: T.applicationInstallButton,
                application: F.application
              }),
              (0, s.jsx)(Z.Z, {
                user: _,
                isCurrentUser: B,
                relationshipType: M,
                friendToken: L,
                onClose: P
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
                    } = await n.e('29136').then(n.bind(n, 193646));
                    return i => (0, s.jsx)(e, {
                      ...i,
                      user: _,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: M,
                      trackUserProfileAction: w,
                      onClose: P
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