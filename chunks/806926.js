i.d(s, {
  Z: function() {
return v;
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
  f = i(107194),
  _ = i(228168),
  m = i(981631),
  E = i(505451);

function v(e) {
  var s;
  let {
user: i,
currentUser: v,
channelId: x,
displayProfile: S,
initialSection: Z,
initialSubsection: h,
friendToken: p,
onClose: g
  } = e, T = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(i.id)), N = (0, f.Z)({
user: i,
currentUser: v
  });
  return (0, n.jsxs)('div', {
className: E.body,
children: [
  (0, n.jsx)(u.Z, {
    user: i,
    profileType: _.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == S ? void 0 : S.guildId, x, i),
    pronouns: null == S ? void 0 : S.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, n.jsx)(r.Z, {
      userId: i.id
    }),
    tags: (0, n.jsx)(a.Z, {
      displayProfile: S,
      profileType: _.y0.FULL_SIZE,
      onClose: g
    })
  }),
  T === m.OGo.PENDING_INCOMING && (0, n.jsx)(c.Z.Overlay, {
    className: E.friendRequestBannerOverlay,
    children: (0, n.jsx)(d.Z, {
      user: i,
      guildId: null !== (s = null == S ? void 0 : S.guildId) && void 0 !== s ? s : void 0,
      channelId: x,
      friendToken: p,
      className: E.friendRequestBanner
    })
  }),
  (0, n.jsx)(c.Z.Overlay, {
    className: E.overlay,
    children: (0, n.jsx)(I.Z, {
      user: i,
      currentUser: v,
      displayProfile: S,
      items: N,
      initialSection: Z,
      initialSubsection: h,
      onClose: g
    })
  })
]
  });
}