"use strict";
E.r(t), E.d(t, {
  CTAEmojiSize: function() {
    return A
  },
  default: function() {
    return n
  }
});
var _ = E("735250");
E("470079");
var s = E("596454"),
  T = E("307707"),
  a = E("945566");
let A = {
  SMALL: a.small,
  MEDIUM: a.medium,
  LARGE: a.large
};

function n(e) {
  let {
    emojiId: t,
    emojiName: E,
    defaultComponent: a,
    size: n = A.MEDIUM
  } = e, {
    customEmoji: I,
    unicodeEmoji: u
  } = (0, T.default)(t, E);
  return null == I && null == u ? (0, _.jsx)(_.Fragment, {
    children: a
  }) : (0, _.jsx)(s.default, {
    emojiName: null != I ? null == I ? void 0 : I.name : E,
    animated: null != I && I.animated,
    emojiId: null == I ? void 0 : I.id,
    autoplay: !0,
    className: n
  })
}