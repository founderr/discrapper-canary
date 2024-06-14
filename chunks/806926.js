"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
});
var s = l("735250");
l("470079");
var i = l("442837"),
  a = l("699516"),
  n = l("5192"),
  o = l("877485"),
  r = l("741308"),
  u = l("681837"),
  d = l("91433"),
  c = l("502762"),
  f = l("530"),
  S = l("616140"),
  I = l("228168"),
  E = l("981631"),
  m = l("854898");

function v(e) {
  var t;
  let {
    user: l,
    channelId: v,
    displayProfile: _,
    initialSection: p,
    initialSubsection: x,
    friendToken: T,
    onClose: g
  } = e, N = (0, i.useStateFromStores)([a.default], () => a.default.getRelationshipType(l.id)), {
    originalFriendingEnabled: A,
    improvedFriendingEnabled: C
  } = (0, o.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalBody"
  });
  return (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)(f.default, {
      user: l,
      profileType: I.UserProfileTypes.FULL_SIZE,
      nickname: n.default.getName(null == _ ? void 0 : _.guildId, v, l),
      pronouns: null == _ ? void 0 : _.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, s.jsx)(u.default, {
        userId: l.id
      }),
      tags: (0, s.jsx)(r.default, {
        displayProfile: _,
        profileType: I.UserProfileTypes.FULL_SIZE,
        onClose: g
      })
    }), (C || A) && N === E.RelationshipTypes.PENDING_INCOMING && (0, s.jsx)(c.default.Overlay, {
      className: m.banner,
      children: (0, s.jsx)(d.default, {
        user: l,
        guildId: null !== (t = null == _ ? void 0 : _.guildId) && void 0 !== t ? t : void 0,
        channelId: v,
        friendToken: T
      })
    }), (0, s.jsx)(c.default.Overlay, {
      className: m.overlay,
      children: (0, s.jsx)(S.default, {
        user: l,
        displayProfile: _,
        initialSection: p,
        initialSubsection: x,
        onClose: g
      })
    })]
  })
}