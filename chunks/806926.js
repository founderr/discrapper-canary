i.d(n, {
  Z: function() {
return x;
  }
});
var s = i(735250);
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

function x(e) {
  var n;
  let {
user: i,
currentUser: x,
channelId: v,
displayProfile: Z,
initialSection: h,
initialSubsection: S,
friendToken: p,
onClose: g
  } = e, j = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(i.id)), T = (0, _.Z)({
user: i,
currentUser: x
  });
  return (0, s.jsxs)('div', {
className: E.body,
children: [
  (0, s.jsx)(u.Z, {
    user: i,
    profileType: f.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == Z ? void 0 : Z.guildId, v, i),
    pronouns: null == Z ? void 0 : Z.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, s.jsx)(r.Z, {
      userId: i.id
    }),
    tags: (0, s.jsx)(a.Z, {
      displayProfile: Z,
      profileType: f.y0.FULL_SIZE,
      onClose: g
    })
  }),
  j === m.OGo.PENDING_INCOMING && (0, s.jsx)(c.Z.Overlay, {
    className: E.friendRequestBannerOverlay,
    children: (0, s.jsx)(d.Z, {
      user: i,
      guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
      channelId: v,
      friendToken: p,
      className: E.friendRequestBanner
    })
  }),
  (0, s.jsx)(c.Z.Overlay, {
    className: E.overlay,
    children: (0, s.jsx)(I.Z, {
      user: i,
      currentUser: x,
      displayProfile: Z,
      items: T,
      initialSection: h,
      initialSubsection: S,
      onClose: g
    })
  })
]
  });
}