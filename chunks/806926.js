n.d(s, {
  Z: function() {
return x;
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  t = n(699516),
  o = n(5192),
  r = n(741308),
  a = n(681837),
  d = n(91433),
  c = n(502762),
  u = n(530),
  _ = n(616140),
  I = n(107194),
  f = n(228168),
  E = n(981631),
  m = n(505451);

function x(e) {
  var s;
  let {
user: n,
currentUser: x,
channelId: S,
displayProfile: v,
initialSection: Z,
initialSubsection: p,
friendToken: h,
onClose: T
  } = e, g = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(n.id)), N = (0, I.Z)({
user: n,
currentUser: x
  });
  return (0, i.jsxs)('div', {
className: m.body,
children: [
  (0, i.jsx)(u.Z, {
    user: n,
    profileType: f.y0.FULL_SIZE,
    nickname: o.ZP.getName(null == v ? void 0 : v.guildId, S, n),
    pronouns: null == v ? void 0 : v.pronouns,
    nicknameVariant: 'heading-xl/bold',
    nicknameIcons: (0, i.jsx)(a.Z, {
      userId: n.id
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
      user: n,
      guildId: null !== (s = null == v ? void 0 : v.guildId) && void 0 !== s ? s : void 0,
      channelId: S,
      friendToken: h,
      className: m.friendRequestBanner
    })
  }),
  (0, i.jsx)(c.Z.Overlay, {
    className: m.overlay,
    children: (0, i.jsx)(_.Z, {
      user: n,
      currentUser: x,
      displayProfile: v,
      items: N,
      initialSection: Z,
      initialSubsection: p,
      onClose: T
    })
  })
]
  });
}