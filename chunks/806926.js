n.d(i, {
  Z: function() {
return x;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  t = n(699516),
  o = n(5192),
  a = n(741308),
  r = n(681837),
  d = n(91433),
  c = n(502762),
  u = n(530),
  I = n(616140),
  _ = n(107194),
  f = n(228168),
  m = n(981631),
  E = n(505451);

function x(e) {
  var i;
  let {
user: n,
currentUser: x,
channelId: v,
displayProfile: Z,
initialSection: h,
initialSubsection: S,
friendToken: p,
onClose: g
  } = e, j = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(n.id)), T = (0, _.Z)({
user: n,
currentUser: x
  });
  return (0, s.jsxs)('div', {
className: E.body,
children: [
  (0, s.jsx)(u.Z, {
    user: n,
    profileType: f.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == Z ? void 0 : Z.guildId, v, n),
    pronouns: null == Z ? void 0 : Z.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, s.jsx)(r.Z, {
      userId: n.id
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
      user: n,
      guildId: null !== (i = null == Z ? void 0 : Z.guildId) && void 0 !== i ? i : void 0,
      channelId: v,
      friendToken: p,
      className: E.friendRequestBanner
    })
  }),
  (0, s.jsx)(c.Z.Overlay, {
    className: E.overlay,
    children: (0, s.jsx)(I.Z, {
      user: n,
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