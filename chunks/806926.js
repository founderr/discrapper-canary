"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var s = l("735250");
l("470079");
var a = l("290421"),
  i = l("80132"),
  n = l("484404"),
  r = l("681837"),
  o = l("502762"),
  u = l("530"),
  d = l("616140"),
  c = l("228168"),
  f = l("602091"),
  S = l("854898");

function E(e) {
  let {
    user: t,
    displayProfile: l,
    initialSection: E,
    autoFocusNote: m,
    transitionState: I,
    onClose: _
  } = e, v = (0, a.default)(l);
  return (0, s.jsxs)("div", {
    className: S.container,
    children: [(0, s.jsxs)("div", {
      className: S.usernameBadgeList,
      children: [(0, s.jsx)(u.default, {
        user: t,
        className: S.username,
        profileType: c.UserProfileTypes.FULL_SIZE,
        guildId: null == l ? void 0 : l.guildId,
        pronouns: null == l ? void 0 : l.pronouns,
        nicknameVariant: "heading-xl/bold",
        nicknameIcons: (0, s.jsx)(r.default, {
          userId: t.id
        })
      }), v.length > 0 && (0, s.jsx)(o.default.Overlay, {
        children: (0, s.jsx)(i.default, {
          badges: v,
          className: S.badgeList,
          onClose: _
        })
      })]
    }), (0, s.jsxs)(o.default.Overlay, {
      className: S.overlay,
      children: [I === f.ModalTransitionState.ENTERED && (0, s.jsx)(n.default, {
        onTooltipClose: _
      }), (0, s.jsx)(d.default, {
        user: t,
        displayProfile: l,
        initialSection: E,
        autoFocusNote: m,
        onClose: _
      })]
    })]
  })
}