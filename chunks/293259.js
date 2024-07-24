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
  _ = i(998502),
  f = i(785717),
  m = i(621853),
  E = i(204197),
  x = i(735336),
  v = i(520978),
  Z = i(184325),
  S = i(652853),
  h = i(225714),
  p = i(228168),
  j = i(231338),
  T = i(689938),
  g = i(520067);
let N = a.AvatarSizes.SIZE_120,
  C = _.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function A(e) {
  let {
displayProfile: s,
user: _,
guildId: A,
channelId: L,
friendToken: O,
className: R,
isStreaming: U,
hasProfileEffect: M,
onClose: y
  } = e, P = (0, t.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), b = (0, t.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, t.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, t.e7)([m.Z], () => m.Z.getUserProfile(_.id)), B = (0, t.e7)([c.default], () => c.default.getId() === _.id), {
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
  }), H = l.useMemo(() => (0, d.W)(_, L), [
_,
L
  ]);
  return (0, n.jsxs)('header', {
className: R,
children: [
  (0, n.jsx)(x.Z, {
    displayProfile: s,
    onClose: y,
    user: _,
    profileType: p.y0.MODAL,
    hasProfileEffect: M
  }),
  (0, n.jsxs)('div', {
    className: g.header,
    children: [
      (0, n.jsx)('div', {
        ...Y,
        children: (0, n.jsx)(C, {
          src: k,
          avatarDecoration: V,
          size: N,
          className: g.avatar,
          status: H ? j.Sk.UNKNOWN : U ? j.Sk.STREAMING : D,
          statusBackdropColor: (0, a.getStatusBackdropColor)(G),
          isMobile: b,
          statusTooltip: !0,
          'aria-label': _.username
        })
      }),
      (0, n.jsxs)('div', {
        className: g.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !_.isClyde() ? (0, n.jsx)(a.Tooltip, {
            text: T.Z.Messages.USER_PROFILE_LOAD_ERROR,
            spacing: 20,
            children: e => (0, n.jsx)(a.CircleExclamationPointIcon, {
              size: 'custom',
              width: 20,
              height: 20,
              ...e,
              className: g.warningCircleIcon,
              color: o.Z.unsafe_rawColors.YELLOW_300.css
            })
          }) : (0, n.jsx)(Z.Z, {
            user: _,
            className: g.badgeList,
            guildId: A,
            size: Z.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: Z.V.SIZE_18,
            onBadgeClick: y
          }),
          (0, n.jsxs)('div', {
            className: g.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, n.jsx)(v.Z, {
                className: g.applicationInstallButton,
                application: F.application
              }),
              (0, n.jsx)(h.Z, {
                user: _,
                isCurrentUser: B,
                relationshipType: P,
                friendToken: O,
                onClose: y
              }),
              B || _.isNonUserBot() ? null : (0, n.jsx)(a.Clickable, {
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
                      user: _,
                      isCurrentUser: B,
                      guildId: A,
                      relationshipType: P,
                      trackUserProfileAction: w,
                      onClose: y
                    });
                  });
                },
                children: (0, n.jsx)(a.MoreVerticalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: g.additionalActionsIcon
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