s.d(i, {
  Z: function() {
    return v
  }
});
var n = s(735250);
s(470079);
var l = s(442837),
  t = s(699516),
  o = s(5192),
  r = s(877485),
  a = s(741308),
  d = s(681837),
  c = s(91433),
  u = s(502762),
  I = s(530),
  E = s(616140),
  Z = s(107194),
  f = s(228168),
  _ = s(981631),
  S = s(327570);

function v(e) {
  var i;
  let {
    user: s,
    currentUser: v,
    channelId: m,
    displayProfile: x,
    initialSection: h,
    initialSubsection: N,
    friendToken: g,
    onClose: T
  } = e, R = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(s.id)), {
    originalFriendingEnabled: C,
    improvedFriendingEnabled: A
  } = (0, r.V)({
    location: "SimplifiedUserProfileModalBody"
  }), M = (0, Z.Z)({
    user: s,
    currentUser: v
  });
  return (0, n.jsxs)("div", {
    className: S.body,
    children: [(0, n.jsx)(I.Z, {
      user: s,
      profileType: f.y0.FULL_SIZE,
      nickname: o.ZP.getName(null == x ? void 0 : x.guildId, m, s),
      pronouns: null == x ? void 0 : x.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, n.jsx)(d.Z, {
        userId: s.id
      }),
      tags: (0, n.jsx)(a.Z, {
        displayProfile: x,
        profileType: f.y0.FULL_SIZE,
        onClose: T
      })
    }), (A || C) && R === _.OGo.PENDING_INCOMING && (0, n.jsx)(u.Z.Overlay, {
      className: S.friendRequestBannerOverlay,
      children: (0, n.jsx)(c.Z, {
        user: s,
        guildId: null !== (i = null == x ? void 0 : x.guildId) && void 0 !== i ? i : void 0,
        channelId: m,
        friendToken: g,
        className: S.friendRequestBanner
      })
    }), (0, n.jsx)(u.Z.Overlay, {
      className: S.overlay,
      children: (0, n.jsx)(E.Z, {
        user: s,
        currentUser: v,
        displayProfile: x,
        items: M,
        initialSection: h,
        initialSubsection: N,
        onClose: T
      })
    })]
  })
}