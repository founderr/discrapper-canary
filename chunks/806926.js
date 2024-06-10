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
  u = l("484404"),
  d = l("681837"),
  c = l("91433"),
  f = l("502762"),
  S = l("530"),
  E = l("616140"),
  I = l("228168"),
  m = l("981631"),
  _ = l("602091"),
  p = l("854898");

function v(e) {
  let {
    user: t,
    guildId: l,
    channelId: v,
    displayProfile: T,
    initialSection: g,
    autoFocusNote: x,
    friendToken: A,
    transitionState: C,
    onClose: N
  } = e, U = (0, i.useStateFromStores)([a.default], () => a.default.getRelationshipType(t.id)), {
    originalFriendingEnabled: R,
    improvedFriendingEnabled: h
  } = (0, o.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalBody"
  });
  return (0, s.jsxs)("div", {
    className: p.container,
    children: [(0, s.jsx)(S.default, {
      user: t,
      profileType: I.UserProfileTypes.FULL_SIZE,
      nickname: n.default.getName(l, v, t),
      pronouns: null == T ? void 0 : T.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, s.jsx)(d.default, {
        userId: t.id
      }),
      tags: (0, s.jsx)(r.default, {
        displayProfile: T,
        profileType: I.UserProfileTypes.FULL_SIZE,
        onClose: N
      })
    }), (h || R) && U === m.RelationshipTypes.PENDING_INCOMING && (0, s.jsx)(f.default.Overlay, {
      className: p.banner,
      children: (0, s.jsx)(c.default, {
        user: t,
        guildId: l,
        channelId: v,
        friendToken: A
      })
    }), (0, s.jsxs)(f.default.Overlay, {
      className: p.overlay,
      children: [C === _.ModalTransitionState.ENTERED && (0, s.jsx)(u.default, {
        onTooltipClose: N
      }), (0, s.jsx)(E.default, {
        user: t,
        displayProfile: T,
        initialSection: g,
        autoFocusNote: x,
        onClose: N
      })]
    })]
  })
}