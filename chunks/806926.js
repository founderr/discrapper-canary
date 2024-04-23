"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("158776"),
  r = s("484404"),
  n = s("193281"),
  o = s("184325"),
  u = s("502762"),
  d = s("530"),
  c = s("616140"),
  f = s("981631"),
  S = s("602091"),
  m = s("727705");

function E(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: E,
    autoFocusNote: I,
    transitionState: v,
    onClose: x
  } = e, _ = (0, a.useStateFromStores)([i.default], () => i.default.findActivity(t.id, e => e.type === f.ActivityTypes.PLAYING), [t]);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsxs)("div", {
      className: m.usernameBadgeList,
      children: [(0, l.jsx)(d.default, {
        className: m.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold"
      }), (0, l.jsx)(o.default, {
        className: m.badgeList,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        size: o.BadgeSizes.SIZE_24
      })]
    }), null != _ && (0, l.jsx)(n.default, {
      activity: _
    }), (0, l.jsxs)(u.default.Overlay, {
      children: [v === S.ModalTransitionState.ENTERED && (0, l.jsx)(r.default, {
        onTooltipClose: x
      }), (0, l.jsx)(c.default, {
        user: t,
        displayProfile: s,
        initialSection: E,
        autoFocusNote: I,
        onClose: x
      })]
    })]
  })
}