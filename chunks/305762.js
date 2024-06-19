e.d(_, {
  R: function() {
    return n
  },
  Z: function() {
    return N
  }
});
var T = e(735250);
e(470079);
var s = e(596454),
  I = e(307707),
  A = e(418068);
let n = {
  SMALL: A.small,
  MEDIUM: A.medium,
  LARGE: A.large
};

function N(E) {
  let {
    emojiId: _,
    emojiName: e,
    defaultComponent: A,
    size: N = n.MEDIUM
  } = E, {
    customEmoji: t,
    unicodeEmoji: r
  } = (0, I.Z)(_, e);
  return null == t && null == r ? (0, T.jsx)(T.Fragment, {
    children: A
  }) : (0, T.jsx)(s.Z, {
    emojiName: null != t ? null == t ? void 0 : t.name : e,
    animated: null != t && t.animated,
    emojiId: null == t ? void 0 : t.id,
    autoplay: !0,
    className: N
  })
}