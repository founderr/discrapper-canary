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
  n = l("877485"),
  o = l("741308"),
  r = l("484404"),
  u = l("681837"),
  d = l("91433"),
  c = l("502762"),
  f = l("530"),
  S = l("616140"),
  E = l("228168"),
  I = l("981631"),
  m = l("602091"),
  _ = l("854898");

function v(e) {
  let {
    user: t,
    guildId: l,
    channelId: v,
    displayProfile: p,
    initialSection: T,
    autoFocusNote: g,
    friendToken: x,
    transitionState: A,
    onClose: C
  } = e, N = (0, i.useStateFromStores)([a.default], () => a.default.getRelationshipType(t.id)), {
    originalFriendingEnabled: U,
    improvedFriendingEnabled: R
  } = (0, n.useSimplifiedProfileFriendingExperiment)({
    location: "SimplifiedUserProfileModalBody"
  });
  return (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsx)(f.default, {
      user: t,
      profileType: E.UserProfileTypes.FULL_SIZE,
      guildId: null == p ? void 0 : p.guildId,
      pronouns: null == p ? void 0 : p.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, s.jsx)(u.default, {
        userId: t.id
      }),
      tags: (0, s.jsx)(o.default, {
        displayProfile: p,
        profileType: E.UserProfileTypes.FULL_SIZE,
        onClose: C
      })
    }), (R || U) && N === I.RelationshipTypes.PENDING_INCOMING && (0, s.jsx)(c.default.Overlay, {
      className: _.banner,
      children: (0, s.jsx)(d.default, {
        user: t,
        guildId: l,
        channelId: v,
        friendToken: x
      })
    }), (0, s.jsxs)(c.default.Overlay, {
      className: _.overlay,
      children: [A === m.ModalTransitionState.ENTERED && (0, s.jsx)(r.default, {
        onTooltipClose: C
      }), (0, s.jsx)(S.default, {
        user: t,
        displayProfile: p,
        initialSection: T,
        autoFocusNote: g,
        onClose: C
      })]
    })]
  })
}