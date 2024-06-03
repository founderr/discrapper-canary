"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var s = l("735250");
l("470079");
var a = l("741308"),
  i = l("484404"),
  n = l("681837"),
  r = l("502762"),
  o = l("530"),
  u = l("616140"),
  d = l("228168"),
  c = l("602091"),
  f = l("854898");

function S(e) {
  let {
    user: t,
    displayProfile: l,
    initialSection: S,
    autoFocusNote: E,
    transitionState: I,
    onClose: m
  } = e;
  return (0, s.jsxs)("div", {
    className: f.container,
    children: [(0, s.jsx)(o.default, {
      user: t,
      profileType: d.UserProfileTypes.FULL_SIZE,
      guildId: null == l ? void 0 : l.guildId,
      pronouns: null == l ? void 0 : l.pronouns,
      nicknameVariant: "heading-xl/bold",
      nicknameIcons: (0, s.jsx)(n.default, {
        userId: t.id
      }),
      tags: (0, s.jsx)(a.default, {
        displayProfile: l,
        profileType: d.UserProfileTypes.FULL_SIZE,
        onClose: m
      })
    }), (0, s.jsxs)(r.default.Overlay, {
      className: f.overlay,
      children: [I === c.ModalTransitionState.ENTERED && (0, s.jsx)(i.default, {
        onTooltipClose: m
      }), (0, s.jsx)(u.default, {
        user: t,
        displayProfile: l,
        initialSection: S,
        autoFocusNote: E,
        onClose: m
      })]
    })]
  })
}