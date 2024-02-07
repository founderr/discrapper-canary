"use strict";
n.r(t), n.d(t, {
  CTAEmojiSize: function() {
    return l
  },
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var r = n("430568"),
  i = n("569912"),
  a = n("286667");
let l = {
  SMALL: a.small,
  MEDIUM: a.medium,
  LARGE: a.large
};

function o(e) {
  let {
    emojiId: t,
    emojiName: n,
    defaultComponent: a,
    size: o = l.MEDIUM
  } = e, {
    customEmoji: u,
    unicodeEmoji: d
  } = (0, i.default)(t, n);
  return null == u && null == d ? (0, s.jsx)(s.Fragment, {
    children: a
  }) : (0, s.jsx)(r.default, {
    emojiName: null != u ? null == u ? void 0 : u.name : n,
    animated: null != u && u.animated,
    emojiId: null == u ? void 0 : u.id,
    autoplay: !0,
    className: o
  })
}