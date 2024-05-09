"use strict";
s.r(t), s.d(t, {
  CTAEmojiSize: function() {
    return l
  },
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var n = s("596454"),
  i = s("307707"),
  E = s("945566");
let l = {
  SMALL: E.small,
  MEDIUM: E.medium,
  LARGE: E.large
};

function _(e) {
  let {
    emojiId: t,
    emojiName: s,
    defaultComponent: E,
    size: _ = l.MEDIUM
  } = e, {
    customEmoji: r,
    unicodeEmoji: u
  } = (0, i.default)(t, s);
  return null == r && null == u ? (0, a.jsx)(a.Fragment, {
    children: E
  }) : (0, a.jsx)(n.default, {
    emojiName: null != r ? null == r ? void 0 : r.name : s,
    animated: null != r && r.animated,
    emojiId: null == r ? void 0 : r.id,
    autoplay: !0,
    className: _
  })
}