n.d(s, {
  Z: function() {
return S;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  o = n(699516),
  t = n(5192),
  r = n(741308),
  a = n(681837),
  d = n(91433),
  c = n(502762),
  u = n(530),
  _ = n(616140),
  I = n(107194),
  E = n(228168),
  f = n(981631),
  m = n(505451);

function S(e) {
  var s;
  let {
user: n,
currentUser: S,
channelId: Z,
displayProfile: x,
initialSection: v,
initialSubsection: h,
friendToken: T,
onClose: p
  } = e, g = (0, l.e7)([o.Z], () => o.Z.getRelationshipType(n.id)), N = (0, I.Z)({
user: n,
currentUser: S
  });
  return (0, i.jsxs)('div', {
className: m.body,
children: [
  (0, i.jsx)(u.Z, {
    user: n,
    profileType: E.y0.FULL_SIZE,
    nickname: t.ZP.getName(null == x ? void 0 : x.guildId, Z, n),
    pronouns: null == x ? void 0 : x.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, i.jsx)(a.Z, {
      userId: n.id
    }),
    tags: (0, i.jsx)(r.Z, {
      displayProfile: x,
      profileType: E.y0.FULL_SIZE,
      onClose: p
    })
  }),
  g === f.OGo.PENDING_INCOMING && (0, i.jsx)(c.Z.Overlay, {
    className: m.friendRequestBannerOverlay,
    children: (0, i.jsx)(d.Z, {
      user: n,
      guildId: null !== (s = null == x ? void 0 : x.guildId) && void 0 !== s ? s : void 0,
      channelId: Z,
      friendToken: T,
      className: m.friendRequestBanner
    })
  }),
  (0, i.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, i.jsx)(_.Z, {
      user: n,
      currentUser: S,
      displayProfile: x,
      items: N,
      initialSection: v,
      initialSubsection: h,
      onClose: p
    })
  })
]
  });
}