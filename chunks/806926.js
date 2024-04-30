"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var l = s("735250");
s("470079");
var a = s("290421"),
  i = s("80132"),
  n = s("484404"),
  r = s("681837"),
  o = s("502762"),
  u = s("530"),
  d = s("558888"),
  c = s("616140"),
  f = s("602091"),
  S = s("727004");

function m(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: m,
    autoFocusNote: v,
    transitionState: I,
    onClose: E
  } = e, x = (0, a.default)(s);
  return (0, l.jsxs)("div", {
    className: S.container,
    children: [(0, l.jsxs)("div", {
      className: S.usernameBadgeList,
      children: [(0, l.jsx)(u.default, {
        className: S.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        pronouns: null == s ? void 0 : s.pronouns,
        nicknameVariant: "heading-xl/bold",
        nicknameIcons: (0, l.jsx)(r.default, {
          userId: t.id
        })
      }), x.length > 0 && (0, l.jsx)(o.default.Overlay, {
        children: (0, l.jsx)(i.default, {
          badges: x,
          className: S.badgeList,
          onClose: E
        })
      })]
    }), (0, l.jsx)(d.default, {
      user: t
    }), (0, l.jsxs)(o.default.Overlay, {
      children: [I === f.ModalTransitionState.ENTERED && (0, l.jsx)(n.default, {
        onTooltipClose: E
      }), (0, l.jsx)(c.default, {
        user: t,
        displayProfile: s,
        initialSection: m,
        autoFocusNote: v,
        onClose: E
      })]
    })]
  })
}