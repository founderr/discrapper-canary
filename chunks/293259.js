s.d(n, {
  Z: function() {
return A;
  }
});
var i = s(735250),
  l = s(470079),
  o = s(442837),
  t = s(692547),
  r = s(481060),
  a = s(239091),
  d = s(233440),
  c = s(314897),
  u = s(158776),
  I = s(699516),
  _ = s(998502),
  f = s(785717),
  E = s(621853),
  m = s(204197),
  S = s(735336),
  Z = s(520978),
  v = s(184325),
  x = s(652853),
  h = s(225714),
  T = s(228168),
  p = s(231338),
  g = s(689938),
  N = s(520067);
let C = r.AvatarSizes.SIZE_120,
  j = _.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function A(e) {
  let {
displayProfile: n,
user: _,
guildId: A,
channelId: O,
friendToken: R,
className: L,
isStreaming: U,
hasProfileEffect: M,
onClose: P
  } = e, b = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(_.id)), y = (0, o.e7)([u.Z], () => u.Z.isMobileOnline(_.id)), D = (0, o.e7)([u.Z], () => u.Z.getStatus(_.id)), F = (0, o.e7)([E.Z], () => E.Z.getUserProfile(_.id)), B = (0, o.e7)([c.default], () => c.default.getId() === _.id), {
theme: G
  } = (0, x.z)(), {
trackUserProfileAction: w
  } = (0, f.KZ)(), {
avatarSrc: V,
eventHandlers: k,
avatarDecorationSrc: Y
  } = (0, m.Z)({
user: _,
size: C
  }), H = l.useMemo(() => (0, d.W)(_, O), [
_,
O
  ]);
  return (0, i.jsxs)('header', {
className: L,
children: [
  (0, i.jsx)(S.Z, {
    displayProfile: n,
    onClose: P,
    user: _,
    profileType: T.y0.MODAL,
    hasProfileEffect: M
  }),
  (0, i.jsxs)('div', {
    className: N.header,
    children: [
      (0, i.jsx)('div', {
        ...k,
        children: (0, i.jsx)(j, {
          src: V,
          avatarDecoration: Y,
          size: C,
          className: N.avatar,
          status: H ? p.Sk.UNKNOWN : U ? p.Sk.STREAMING : D,
          statusBackdropColor: (0, r.getStatusBackdropColor)(G),
          isMobile: y,
          statusTooltip: !0,
          'aria-label': _.username
        })
      }),
      (0, i.jsxs)('div', {
        className: N.headerTop,
        children: [
          (null == F ? void 0 : F.profileFetchFailed) && !_.isClyde() ? (0, i.jsx)(r.Tooltip, {
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
          }) : (0, i.jsx)(v.Z, {
            user: _,
            className: N.badgeList,
            guildId: A,
            size: v.V.SIZE_24,
            shrinkAtCount: 8,
            shrinkToSize: v.V.SIZE_18,
            onBadgeClick: P
          }),
          (0, i.jsxs)('div', {
            className: N.relationshipButtons,
            children: [
              (null == F ? void 0 : F.application) != null && (0, i.jsx)(Z.Z, {
                className: N.applicationInstallButton,
                application: F.application
              }),
              (0, i.jsx)(h.Z, {
                user: _,
                isCurrentUser: B,
                relationshipType: b,
                friendToken: R,
                onClose: P
              }),
              B || _.isNonUserBot() ? null : (0, i.jsx)(r.Clickable, {
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
                    } = await s.e('29136').then(s.bind(s, 193646));
                    return n => (0, i.jsx)(e, {
                      ...n,
                      user: _,
                      isCurrentUser: B,
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