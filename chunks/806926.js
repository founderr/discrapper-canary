"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
});
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("158776"),
  n = s("290421"),
  r = s("80132"),
  o = s("484404"),
  u = s("193281"),
  d = s("681837"),
  c = s("502762"),
  f = s("530"),
  S = s("616140"),
  m = s("602091"),
  I = s("727004");

function v(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: v,
    autoFocusNote: E,
    transitionState: x,
    onClose: _
  } = e, T = (0, n.default)(s), A = (0, a.useStateFromStores)([i.default], () => i.default.findActivity(t.id, e => null != e.type && u.SUPPORTED_ACTIVITY_TYPES.has(e.type)), [t]);
  return (0, l.jsxs)("div", {
    className: I.container,
    children: [(0, l.jsxs)("div", {
      className: I.usernameBadgeList,
      children: [(0, l.jsx)(f.default, {
        className: I.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold",
        nicknameIcons: (0, l.jsx)(d.default, {
          userId: t.id
        })
      }), T.length > 0 && (0, l.jsx)(c.default.Overlay, {
        children: (0, l.jsx)(r.default, {
          badges: T,
          className: I.badgeList,
          onClose: _
        })
      })]
    }), null != A && (0, l.jsx)(u.default, {
      activity: A
    }), (0, l.jsxs)(c.default.Overlay, {
      children: [x === m.ModalTransitionState.ENTERED && (0, l.jsx)(o.default, {
        onTooltipClose: _
      }), (0, l.jsx)(S.default, {
        user: t,
        displayProfile: s,
        initialSection: v,
        autoFocusNote: E,
        onClose: _
      })]
    })]
  })
}