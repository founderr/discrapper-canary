"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("158776"),
  o = s("484404"),
  r = s("193281"),
  n = s("184325"),
  u = s("502762"),
  d = s("530"),
  c = s("894374"),
  f = s("616140"),
  S = s("981631"),
  m = s("602091"),
  E = s("727705");

function I(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: I,
    autoFocusNote: v,
    transitionState: x,
    onClose: N
  } = e, _ = (0, a.useStateFromStores)([i.default], () => i.default.findActivity(t.id, e => e.type === S.ActivityTypes.PLAYING), [t]);
  return (0, l.jsxs)("div", {
    className: E.container,
    children: [(0, l.jsxs)("div", {
      className: E.usernameBadgeList,
      children: [(0, l.jsx)(d.default, {
        className: E.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        nicknameVariant: "heading-xl/bold",
        tags: (0, l.jsx)(c.UserProfilePronounsTag, {
          pronouns: null == s ? void 0 : s.pronouns
        })
      }), (0, l.jsx)(n.default, {
        className: E.badgeList,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        size: n.BadgeSizes.SIZE_24
      })]
    }), null != _ && (0, l.jsx)(r.default, {
      activity: _
    }), (0, l.jsxs)(u.default.Overlay, {
      children: [x === m.ModalTransitionState.ENTERED && (0, l.jsx)(o.default, {
        onTooltipClose: N
      }), (0, l.jsx)(f.default, {
        user: t,
        displayProfile: s,
        initialSection: I,
        autoFocusNote: v,
        onClose: N
      })]
    })]
  })
}