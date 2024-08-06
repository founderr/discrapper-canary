i.d(s, {
  Z: function() {
return S;
  }
});
var n = i(735250);
i(470079);
var l = i(442837),
  t = i(699516),
  o = i(5192),
  a = i(741308),
  r = i(681837),
  d = i(91433),
  c = i(502762),
  u = i(530),
  I = i(616140),
  _ = i(107194),
  f = i(228168),
  m = i(981631),
  E = i(505451);

function S(e) {
  var s;
  let {
user: i,
currentUser: S,
channelId: x,
displayProfile: v,
initialSection: Z,
initialSubsection: h,
friendToken: p,
onClose: T
  } = e, g = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(i.id)), N = (0, _.Z)({
user: i,
currentUser: S
  });
  return (0, n.jsxs)('div', {
className: E.body,
children: [
  (0, n.jsx)(u.Z, {
    user: i,
    profileType: f.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == v ? void 0 : v.guildId, x, i),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, n.jsx)(r.Z, {
      userId: i.id
    }),
    tags: (0, n.jsx)(a.Z, {
      displayProfile: v,
      profileType: f.y0.FULL_SIZE,
      onClose: T
    })
  }),
  g === m.OGo.PENDING_INCOMING && (0, n.jsx)(c.Z.Overlay, {
    className: E.friendRequestBannerOverlay,
    children: (0, n.jsx)(d.Z, {
      user: i,
      guildId: null !== (s = null == v ? void 0 : v.guildId) && void 0 !== s ? s : void 0,
      channelId: x,
      friendToken: p,
      className: E.friendRequestBanner
    })
  }),
  (0, n.jsx)(c.Z.Overlay, {
    className: E.overlay,
    children: (0, n.jsx)(I.Z, {
      user: i,
      currentUser: S,
      displayProfile: v,
      items: N,
      initialSection: Z,
      initialSubsection: h,
      onClose: T
    })
  })
]
  });
}