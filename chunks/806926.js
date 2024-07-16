n.d(i, {
  Z: function() {
return Z;
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  o = n(699516),
  t = n(5192),
  r = n(642113),
  a = n(741308),
  d = n(681837),
  c = n(91433),
  u = n(502762),
  I = n(530),
  f = n(616140),
  _ = n(107194),
  E = n(228168),
  m = n(981631),
  S = n(505451);

function Z(e) {
  var i;
  let {
user: n,
currentUser: Z,
channelId: x,
displayProfile: v,
initialSection: h,
initialSubsection: p,
friendToken: T,
onClose: g
  } = e, N = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(n.id)), {
originalFriendingEnabled: C,
improvedFriendingEnabled: j
  } = (0, r.V)({
location: 'SimplifiedUserProfileModalBody'
  }), A = (0, _.Z)({
user: n,
currentUser: Z
  });
  return (0, s.jsxs)('div', {
className: S.body,
children: [
  (0, s.jsx)(I.Z, {
    user: n,
    profileType: E.y0.FULL_SIZE,
    nickname: t.ZP.getName(null == v ? void 0 : v.guildId, x, n),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, s.jsx)(d.Z, {
      userId: n.id
    }),
    tags: (0, s.jsx)(a.Z, {
      displayProfile: v,
      profileType: E.y0.FULL_SIZE,
      onClose: g
    })
  }),
  (j || C) && N === m.OGo.PENDING_INCOMING && (0, s.jsx)(u.Z.Overlay, {
    className: S.friendRequestBannerOverlay,
    children: (0, s.jsx)(c.Z, {
      user: n,
      guildId: null !== (i = null == v ? void 0 : v.guildId) && void 0 !== i ? i : void 0,
      channelId: x,
      friendToken: T,
      className: S.friendRequestBanner
    })
  }),
  (0, s.jsx)(u.Z.Overlay, {
    className: S.overlay,
    children: (0, s.jsx)(f.Z, {
      user: n,
      currentUser: Z,
      displayProfile: v,
      items: A,
      initialSection: h,
      initialSubsection: p,
      onClose: g
    })
  })
]
  });
}