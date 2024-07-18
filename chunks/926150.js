n.d(t, {
  Z: function() {
return Z;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(699516),
  l = n(246946),
  r = n(5192),
  o = n(621853),
  c = n(910128),
  d = n(741308),
  u = n(588822),
  h = n(940730),
  p = n(681837),
  m = n(91433),
  _ = n(900927),
  f = n(678738),
  E = n(502762),
  C = n(530),
  g = n(7242),
  I = n(827313),
  x = n(580512),
  T = n(228168),
  v = n(981631),
  N = n(689938),
  S = n(790884);

function Z(e) {
  let {
user: t,
displayProfile: n,
channel: Z,
isHovering: A,
onOpenProfile: M
  } = e, {
activeInviteToCallCtaEnabled: b
  } = (0, c.l)({
location: 'SimplifiedProfilePanelBody'
  }), R = (0, a.e7)([s.Z], () => s.Z.getRelationshipType(t.id)), j = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation), L = (0, a.e7)([o.Z], () => {
var e;
return null === (e = o.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
  });
  return (0, i.jsxs)('div', {
className: S.body,
children: [
  (0, i.jsx)(C.Z, {
    user: t,
    profileType: T.y0.PANEL,
    nickname: r.ZP.getName(null, Z.id, t),
    pronouns: null == n ? void 0 : n.pronouns,
    onOpenProfile: M,
    tags: (0, i.jsx)(d.Z, {
      displayProfile: n,
      profileType: T.y0.PANEL
    }),
    nicknameIcons: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(p.Z, {
          userId: t.id
        }),
        !j && (0, i.jsx)(I.Z, {
          userId: t.id,
          isHovering: A,
          onOpenProfile: M
        })
      ]
    })
  }),
  R === v.OGo.PENDING_INCOMING && (0, i.jsx)(E.Z.Overlay, {
    children: (0, i.jsx)(m.Z, {
      user: t,
      channelId: Z.id
    })
  }),
  b && (0, i.jsx)(g.Z, {
    user: t
  }),
  (0, i.jsx)(x.Z, {
    user: t,
    channelId: Z.id
  }),
  (0, i.jsxs)(E.Z.Overlay, {
    className: S.overlay,
    children: [
      !j && (null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== '' && (0, i.jsx)(f.Z, {
        title: N.Z.Messages.USER_POPOUT_ABOUT_ME,
        headingColor: 'header-primary',
        children: (0, i.jsx)(u.Z, {
          userBio: n.bio,
          animateOnHover: !0,
          isHovering: A,
          userId: t.id
        })
      }),
      (null == L ? void 0 : L.popularApplicationCommandIds) != null && (0, i.jsx)(h.Z, {
        applicationId: L.id,
        commandIds: L.popularApplicationCommandIds,
        channel: Z
      }),
      (0, i.jsx)(f.Z, {
        title: N.Z.Messages.BOT_PROFILE_CREATED_ON,
        headingColor: 'header-primary',
        children: (0, i.jsx)(_.Z, {
          userId: t.id
        })
      })
    ]
  })
]
  });
}