i.d(s, {
  Z: function() {
return x;
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
  E = i(981631),
  m = i(505451);

function x(e) {
  var s;
  let {
user: i,
currentUser: x,
channelId: v,
displayProfile: S,
initialSection: Z,
initialSubsection: h,
friendToken: p,
onClose: T
  } = e, g = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(i.id)), N = (0, _.Z)({
user: i,
currentUser: x
  });
  return (0, n.jsxs)('div', {
className: m.body,
children: [
  (0, n.jsx)(u.Z, {
    user: i,
    profileType: f.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == S ? void 0 : S.guildId, v, i),
    pronouns: null == S ? void 0 : S.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, n.jsx)(r.Z, {
      userId: i.id
    }),
    tags: (0, n.jsx)(a.Z, {
      displayProfile: S,
      profileType: f.y0.FULL_SIZE,
      onClose: T
    })
  }),
  g === E.OGo.PENDING_INCOMING && (0, n.jsx)(c.Z.Overlay, {
    className: m.friendRequestBannerOverlay,
    children: (0, n.jsx)(d.Z, {
      user: i,
      guildId: null !== (s = null == S ? void 0 : S.guildId) && void 0 !== s ? s : void 0,
      channelId: v,
      friendToken: p,
      className: m.friendRequestBanner
    })
  }),
  (0, n.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, n.jsx)(I.Z, {
      user: i,
      currentUser: x,
      displayProfile: S,
      items: N,
      initialSection: Z,
      initialSubsection: h,
      onClose: T
    })
  })
]
  });
}