s.d(n, {
  Z: function() {
return S;
  }
});
var i = s(735250);
s(470079);
var l = s(442837),
  o = s(699516),
  t = s(5192),
  r = s(741308),
  a = s(681837),
  d = s(91433),
  c = s(502762),
  u = s(530),
  I = s(616140),
  _ = s(107194),
  f = s(228168),
  E = s(981631),
  m = s(505451);

function S(e) {
  var n;
  let {
user: s,
currentUser: S,
channelId: Z,
displayProfile: v,
initialSection: x,
initialSubsection: h,
friendToken: p,
onClose: T
  } = e, g = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(s.id)), N = (0, _.Z)({
user: s,
currentUser: S
  });
  return (0, i.jsxs)('div', {
className: m.body,
children: [
  (0, i.jsx)(u.Z, {
    user: s,
    profileType: f.y0.FULL_SIZE,
    nickname: t.ZP.getName(null == v ? void 0 : v.guildId, Z, s),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, i.jsx)(a.Z, {
      userId: s.id
    }),
    tags: (0, i.jsx)(r.Z, {
      displayProfile: v,
      profileType: f.y0.FULL_SIZE,
      onClose: T
    })
  }),
  g === E.OGo.PENDING_INCOMING && (0, i.jsx)(c.Z.Overlay, {
    className: m.friendRequestBannerOverlay,
    children: (0, i.jsx)(d.Z, {
      user: s,
      guildId: null !== (n = null == v ? void 0 : v.guildId) && void 0 !== n ? n : void 0,
      channelId: Z,
      friendToken: p,
      className: m.friendRequestBanner
    })
  }),
  (0, i.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, i.jsx)(I.Z, {
      user: s,
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