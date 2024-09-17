E.d(_, {
    R: function () {
        return a;
    },
    Z: function () {
        return T;
    }
});
var s = E(735250);
E(470079);
var n = E(596454),
    t = E(307707),
    r = E(683090);
let a = {
    SMALL: r.small,
    MEDIUM: r.medium,
    LARGE: r.large
};
function T(e) {
    let { emojiId: _, emojiName: E, defaultComponent: r, size: T = a.MEDIUM } = e,
        { customEmoji: I, unicodeEmoji: l } = (0, t.Z)(_, E);
    return null == I && null == l
        ? (0, s.jsx)(s.Fragment, { children: r })
        : (0, s.jsx)(n.Z, {
              emojiName: null != I ? (null == I ? void 0 : I.name) : E,
              animated: null != I && I.animated,
              emojiId: null == I ? void 0 : I.id,
              autoplay: !0,
              className: T
          });
}
