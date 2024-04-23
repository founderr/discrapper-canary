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
  r = s("290421"),
  n = s("80132"),
  o = s("484404"),
  u = s("193281"),
  d = s("502762"),
  c = s("530"),
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
    onClose: _
  } = e, A = (0, r.default)(s), N = (0, a.useStateFromStores)([i.default], () => i.default.findActivity(t.id, e => e.type === S.ActivityTypes.PLAYING), [t]);
  return (0, l.jsxs)("div", {
    className: E.container,
    children: [(0, l.jsxs)("div", {
      className: E.usernameBadgeList,
      children: [(0, l.jsx)(c.default, {
        className: E.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold"
      }), A.length > 0 && (0, l.jsx)(n.default, {
        badges: A,
        className: E.badgeList
      })]
    }), null != N && (0, l.jsx)(u.default, {
      activity: N
    }), (0, l.jsxs)(d.default.Overlay, {
      children: [x === m.ModalTransitionState.ENTERED && (0, l.jsx)(o.default, {
        onTooltipClose: _
      }), (0, l.jsx)(f.default, {
        user: t,
        displayProfile: s,
        initialSection: I,
        autoFocusNote: v,
        onClose: _
      })]
    })]
  })
}