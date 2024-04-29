"use strict";
s.r(t), s.d(t, {
  CTAEmojiSize: function() {
    return T
  },
  default: function() {
    return u
  }
});
var E = s("735250");
s("470079");
var _ = s("596454"),
  a = s("307707"),
  n = s("145448");
let T = {
  SMALL: n.small,
  MEDIUM: n.medium,
  LARGE: n.large
};

function u(e) {
  let {
    emojiId: t,
    emojiName: s,
    defaultComponent: n,
    size: u = T.MEDIUM
  } = e, {
    customEmoji: i,
    unicodeEmoji: A
  } = (0, a.default)(t, s);
  return null == i && null == A ? (0, E.jsx)(E.Fragment, {
    children: n
  }) : (0, E.jsx)(_.default, {
    emojiName: null != i ? null == i ? void 0 : i.name : s,
    animated: null != i && i.animated,
    emojiId: null == i ? void 0 : i.id,
    autoplay: !0,
    className: u
  })
}