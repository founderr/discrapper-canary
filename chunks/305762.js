"use strict";
E.r(t), E.d(t, {
  CTAEmojiSize: function() {
    return n
  },
  default: function() {
    return A
  }
});
var s = E("735250");
E("470079");
var _ = E("596454"),
  a = E("307707"),
  T = E("945566");
let n = {
  SMALL: T.small,
  MEDIUM: T.medium,
  LARGE: T.large
};

function A(e) {
  let {
    emojiId: t,
    emojiName: E,
    defaultComponent: T,
    size: A = n.MEDIUM
  } = e, {
    customEmoji: I,
    unicodeEmoji: u
  } = (0, a.default)(t, E);
  return null == I && null == u ? (0, s.jsx)(s.Fragment, {
    children: T
  }) : (0, s.jsx)(_.default, {
    emojiName: null != I ? null == I ? void 0 : I.name : E,
    animated: null != I && I.animated,
    emojiId: null == I ? void 0 : I.id,
    autoplay: !0,
    className: A
  })
}