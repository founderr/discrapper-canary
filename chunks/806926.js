n.d(i, {
  Z: function() {
    return v
  }
});
var s = n(735250);
n(470079);
var l = n(442837),
  t = n(699516),
  o = n(5192),
  r = n(877485),
  a = n(741308),
  d = n(681837),
  u = n(91433),
  c = n(502762),
  I = n(530),
  E = n(616140),
  Z = n(107194),
  _ = n(228168),
  f = n(981631),
  S = n(327570);

function v(e) {
  var i;
  let {
    user: n,
    currentUser: v,
    channelId: m,
    displayProfile: x,
    initialSection: N,
    initialSubsection: h,
    friendToken: g,
    onClose: T
  } = e, C = (0, l.e7)([t.Z], () => t.Z.getRelationshipType(n.id)), {
    originalFriendingEnabled: A,
    improvedFriendingEnabled: R
  } = (0, r.V)({
    location: "SimplifiedUserProfileModalBody"
  }), M = (0, Z.Z)({
    user: n,
    currentUser: v
  });
  return (0, s.jsxs)("div", {
    className: S.body,
    children: [(0, s.jsx)(I.Z, {
      user: n,
      profileType: _.y0.FULL_SIZE,
      nickname: o.ZP.getName(null == x ? void 0 : x.guildId, m, n),
      pronouns: null == x ? void 0 : x.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, s.jsx)(d.Z, {
        userId: n.id
      }),
      tags: (0, s.jsx)(a.Z, {
        displayProfile: x,
        profileType: _.y0.FULL_SIZE,
        onClose: T
      })
    }), (R || A) && C === f.OGo.PENDING_INCOMING && (0, s.jsx)(c.Z.Overlay, {
      className: S.friendRequestBanner,
      children: (0, s.jsx)(u.Z, {
        user: n,
        guildId: null !== (i = null == x ? void 0 : x.guildId) && void 0 !== i ? i : void 0,
        channelId: m,
        friendToken: g
      })
    }), (0, s.jsx)(c.Z.Overlay, {
      className: S.overlay,
      children: (0, s.jsx)(E.Z, {
        user: n,
        currentUser: v,
        displayProfile: x,
        items: M,
        initialSection: N,
        initialSubsection: h,
        onClose: T
      })
    })]
  })
}