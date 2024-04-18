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
  E = s("602091"),
  m = s("727705");

function I(e) {
  let {
    user: t,
    displayProfile: s,
    initialSection: I,
    autoFocusNote: v,
    transitionState: A,
    onClose: _
  } = e, T = (0, a.useStateFromStores)([i.default], () => i.default.findActivity(t.id, e => e.type === S.ActivityTypes.PLAYING), [t]);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsxs)("div", {
      className: m.usernameBadgeList,
      children: [(0, l.jsx)(d.default, {
        className: m.username,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        nicknameVariant: "heading-xl/bold",
        tags: (0, l.jsx)(c.UserProfilePronounsTag, {
          pronouns: null == s ? void 0 : s.pronouns
        })
      }), (0, l.jsx)(n.default, {
        className: m.badgeList,
        user: t,
        guildId: null == s ? void 0 : s.guildId,
        size: n.BadgeSizes.SIZE_24
      })]
    }), null != T && (0, l.jsx)(r.default, {
      activity: T
    }), (0, l.jsxs)(u.default.Overlay, {
      children: [A === E.ModalTransitionState.ENTERED && (0, l.jsx)(o.default, {
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