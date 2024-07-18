i.d(n, {
  Z: function() {
return S;
  }
});
var s = i(735250);
i(470079);
var l = i(442837),
  o = i(699516),
  t = i(5192),
  r = i(741308),
  a = i(681837),
  d = i(91433),
  c = i(502762),
  u = i(530),
  I = i(616140),
  _ = i(107194),
  f = i(228168),
  E = i(981631),
  m = i(505451);

function S(e) {
  var n;
  let {
user: i,
currentUser: S,
channelId: Z,
displayProfile: v,
initialSection: x,
initialSubsection: h,
friendToken: p,
onClose: T
  } = e, g = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(i.id)), N = (0, _.Z)({
user: i,
currentUser: S
  });
  return (0, s.jsxs)('div', {
className: m.body,
children: [
  (0, s.jsx)(u.Z, {
    user: i,
    profileType: f.y0.FULL_SIZE,
    nickname: t.ZP.getName(null == v ? void 0 : v.guildId, Z, i),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, s.jsx)(a.Z, {
      userId: i.id
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
      user: i,
      guildId: null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n ? n : void 0,
      channelId: Z,
      friendToken: p,
      className: m.friendRequestBanner
    })
  }),
  (0, s.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, s.jsx)(I.Z, {
      user: i,
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