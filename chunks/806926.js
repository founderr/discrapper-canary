"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var s = l("735250");
l("470079");
var i = l("442837"),
  a = l("699516"),
  n = l("5192"),
  o = l("877485"),
  r = l("741308"),
  u = l("484404"),
  d = l("681837"),
  c = l("91433"),
  f = l("502762"),
  S = l("530"),
  E = l("616140"),
  I = l("228168"),
  m = l("981631"),
  v = l("602091"),
  _ = l("854898");

function T(e) {
  var t;
  let {
    user: l,
    channelId: T,
    displayProfile: p,
    initialSection: x,
    initialSubsection: g,
    friendToken: A,
    transitionState: C,
    onClose: N
  } = e, U = (0, i.useStateFromStores)([a.default], () => a.default.getRelationshipType(l.id)), {
    originalFriendingEnabled: P,
    improvedFriendingEnabled: h
  } = (0, o.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalBody"
  });
  return (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsx)(S.default, {
      user: l,
      profileType: I.UserProfileTypes.FULL_SIZE,
      nickname: n.default.getName(null == p ? void 0 : p.guildId, T, l),
      pronouns: null == p ? void 0 : p.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, s.jsx)(d.default, {
        userId: l.id
      }),
      tags: (0, s.jsx)(r.default, {
        displayProfile: p,
        profileType: I.UserProfileTypes.FULL_SIZE,
        onClose: N
      })
    }), (h || P) && U === m.RelationshipTypes.PENDING_INCOMING && (0, s.jsx)(f.default.Overlay, {
      className: _.banner,
      children: (0, s.jsx)(c.default, {
        user: l,
        guildId: null !== (t = null == p ? void 0 : p.guildId) && void 0 !== t ? t : void 0,
        channelId: T,
        friendToken: A
      })
    }), (0, s.jsxs)(f.default.Overlay, {
      className: _.overlay,
      children: [C === v.ModalTransitionState.ENTERED && (0, s.jsx)(u.default, {
        onTooltipClose: N
      }), (0, s.jsx)(E.default, {
        user: l,
        displayProfile: p,
        initialSection: x,
        initialSubsection: g,
        onClose: N
      })]
    })]
  })
}