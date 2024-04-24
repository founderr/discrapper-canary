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
  r = s("290421"),
  n = s("80132"),
  o = s("484404"),
  u = s("193281"),
  d = s("502762"),
  c = s("530"),
  f = s("616140"),
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
  } = e, _ = (0, r.default)(s), T = (0, a.useStateFromStores)([i.default], () => i.default.findActivity(t.id, e => null != e.type && u.SUPPORTED_ACTIVITY_TYPES.has(e.type)), [t]);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsxs)("div", {
      className: m.usernameBadgeList,
      children: [(0, l.jsx)(c.default, {
        className: m.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold"
      }), _.length > 0 && (0, l.jsx)(n.default, {
        badges: _,
        className: m.badgeList
      })]
    }), null != T && (0, l.jsx)(u.default, {
      activity: T
    }), (0, l.jsxs)(d.default.Overlay, {
      children: [v === S.ModalTransitionState.ENTERED && (0, l.jsx)(o.default, {
        onTooltipClose: x
      }), (0, l.jsx)(f.default, {
        user: t,
        displayProfile: s,
        initialSection: E,
        autoFocusNote: I,
        onClose: x
      })]
    })]
  })
}