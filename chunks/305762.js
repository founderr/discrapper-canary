"use strict";
s.r(t), s.d(t, {
  CTAEmojiSize: function() {
    return T
  },
  default: function() {
    return i
  }
});
var E = s("735250");
s("470079");
var _ = s("596454"),
  a = s("307707"),
  n = s("945566");
let T = {
  SMALL: n.small,
  MEDIUM: n.medium,
  LARGE: n.large
};

function i(e) {
  let {
    emojiId: t,
    emojiName: s,
    defaultComponent: n,
    size: i = T.MEDIUM
  } = e, {
    customEmoji: A,
    unicodeEmoji: u
  } = (0, a.default)(t, s);
  return null == A && null == u ? (0, E.jsx)(E.Fragment, {
    children: n
  }) : (0, E.jsx)(_.default, {
    emojiName: null != A ? null == A ? void 0 : A.name : s,
    animated: null != A && A.animated,
    emojiId: null == A ? void 0 : A.id,
    autoplay: !0,
    className: i
  })
}