n.d(i, {
  Z: function() {
return S;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  o = n(699516),
  t = n(5192),
  r = n(741308),
  a = n(681837),
  d = n(91433),
  c = n(502762),
  u = n(530),
  I = n(616140),
  _ = n(107194),
  f = n(228168),
  E = n(981631),
  m = n(505451);

function S(e) {
  var i;
  let {
user: n,
currentUser: S,
channelId: Z,
displayProfile: v,
initialSection: x,
initialSubsection: h,
friendToken: p,
onClose: T
  } = e, g = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(n.id)), N = (0, _.Z)({
user: n,
currentUser: S
  });
  return (0, s.jsxs)('div', {
className: m.body,
children: [
  (0, s.jsx)(u.Z, {
    user: n,
    profileType: f.y0.FULL_SIZE,
    nickname: t.ZP.getName(null == v ? void 0 : v.guildId, Z, n),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, s.jsx)(a.Z, {
      userId: n.id
    }),
    tags: (0, s.jsx)(r.Z, {
      displayProfile: v,
      profileType: f.y0.FULL_SIZE,
      onClose: T
    })
  }),
  g === E.OGo.PENDING_INCOMING && (0, s.jsx)(c.Z.Overlay, {
    className: m.friendRequestBannerOverlay,
    children: (0, s.jsx)(d.Z, {
      user: n,
      guildId: null !== (i = null == v ? void 0 : v.guildId) && void 0 !== i ? i : void 0,
      channelId: Z,
      friendToken: p,
      className: m.friendRequestBanner
    })
  }),
  (0, s.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, s.jsx)(I.Z, {
      user: n,
      currentUser: S,
      displayProfile: v,
      items: N,
      initialSection: x,
      initialSubsection: h,
      onClose: T
    })
  })
]
  });
}