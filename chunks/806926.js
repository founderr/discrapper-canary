i.d(n, {
  Z: function() {
    return S
  }
});
var t = i(735250);
i(470079);
var s = i(442837),
  o = i(699516),
  l = i(5192),
  a = i(877485),
  r = i(741308),
  d = i(681837),
  c = i(91433),
  u = i(502762),
  I = i(530),
  f = i(616140),
  E = i(107194),
  _ = i(228168),
  Z = i(981631),
  m = i(327570);

function S(e) {
  var n;
  let {
    user: i,
    currentUser: S,
    channelId: v,
    displayProfile: x,
    initialSection: h,
    initialSubsection: g,
    friendToken: N,
    onClose: p
  } = e, C = (0, s.e7)([o.Z], () => o.Z.getRelationshipType(i.id)), {
    originalFriendingEnabled: T,
    improvedFriendingEnabled: R
  } = (0, a.V)({
    location: "SimplifiedUserProfileModalBody"
  }), A = (0, E.Z)({
    user: i,
    currentUser: S
  });
  return (0, t.jsxs)("div", {
    className: m.body,
    children: [(0, t.jsx)(I.Z, {
      user: i,
      profileType: _.y0.FULL_SIZE,
      nickname: l.ZP.getName(null == x ? void 0 : x.guildId, v, i),
      pronouns: null == x ? void 0 : x.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, t.jsx)(d.Z, {
        userId: i.id
      }),
      tags: (0, t.jsx)(r.Z, {
        displayProfile: x,
        profileType: _.y0.FULL_SIZE,
        onClose: p
      })
    }), (R || T) && C === Z.OGo.PENDING_INCOMING && (0, t.jsx)(u.Z.Overlay, {
      className: m.friendRequestBannerOverlay,
      children: (0, t.jsx)(c.Z, {
        user: i,
        guildId: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : void 0,
        channelId: v,
        friendToken: N,
        className: m.friendRequestBanner
      })
    }), (0, t.jsx)(u.Z.Overlay, {
      className: m.overlay,
      children: (0, t.jsx)(f.Z, {
        user: i,
        currentUser: S,
        displayProfile: x,
        items: A,
        initialSection: h,
        initialSubsection: g,
        onClose: p
      })
    })]
  })
}