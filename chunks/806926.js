i.d(n, {
  Z: function() {
    return S
  }
});
var l = i(735250);
i(470079);
var s = i(442837),
  t = i(699516),
  o = i(5192),
  a = i(877485),
  r = i(741308),
  d = i(681837),
  u = i(91433),
  c = i(502762),
  I = i(530),
  E = i(616140),
  f = i(228168),
  Z = i(981631),
  _ = i(294070);

function S(e) {
  var n;
  let {
    user: i,
    channelId: S,
    displayProfile: m,
    initialSection: v,
    initialSubsection: N,
    friendToken: x,
    onClose: h
  } = e, g = (0, s.e7)([t.Z], () => t.Z.getRelationshipType(i.id)), {
    originalFriendingEnabled: C,
    improvedFriendingEnabled: T
  } = (0, a.V)({
    location: "SimplifiedUserProfileModalBody"
  });
  return (0, l.jsxs)("div", {
    className: _.container,
    children: [(0, l.jsx)(I.Z, {
      user: i,
      profileType: f.y0.FULL_SIZE,
      nickname: o.ZP.getName(null == m ? void 0 : m.guildId, S, i),
      pronouns: null == m ? void 0 : m.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, l.jsx)(d.Z, {
        userId: i.id
      }),
      tags: (0, l.jsx)(r.Z, {
        displayProfile: m,
        profileType: f.y0.FULL_SIZE,
        onClose: h
      })
    }), (T || C) && g === Z.OGo.PENDING_INCOMING && (0, l.jsx)(c.Z.Overlay, {
      className: _.banner,
      children: (0, l.jsx)(u.Z, {
        user: i,
        guildId: null !== (n = null == m ? void 0 : m.guildId) && void 0 !== n ? n : void 0,
        channelId: S,
        friendToken: x
      })
    }), (0, l.jsx)(c.Z.Overlay, {
      className: _.overlay,
      children: (0, l.jsx)(E.Z, {
        user: i,
        displayProfile: m,
        initialSection: v,
        initialSubsection: N,
        onClose: h
      })
    })]
  })
}