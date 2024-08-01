E.d(_, {
  R: function() {
return n;
  },
  Z: function() {
return t;
  }
});
var s = E(735250);
E(470079);
var T = E(596454),
  I = E(307707),
  A = E(16666);
let n = {
  SMALL: A.small,
  MEDIUM: A.medium,
  LARGE: A.large
};

function t(e) {
  let {
emojiId: _,
emojiName: E,
defaultComponent: A,
size: t = n.MEDIUM
  } = e, {
customEmoji: a,
unicodeEmoji: r
  } = (0, I.Z)(_, E);
  return null == a && null == r ? (0, s.jsx)(s.Fragment, {
children: A
  }) : (0, s.jsx)(T.Z, {
emojiName: null != a ? null == a ? void 0 : a.name : E,
animated: null != a && a.animated,
emojiId: null == a ? void 0 : a.id,
autoplay: !0,
className: t
  });
}