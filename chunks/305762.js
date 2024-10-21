E.d(_, {
    R: function () {
        return T;
    },
    Z: function () {
        return a;
    }
});
var s = E(200651);
E(192379);
var n = E(596454),
    t = E(307707),
    r = E(683090);
let T = {
    SMALL: r.small,
    MEDIUM: r.medium,
    LARGE: r.large
};
function a(e) {
    let { emojiId: _, emojiName: E, defaultComponent: r, size: a = T.MEDIUM } = e,
        { customEmoji: I, unicodeEmoji: l } = (0, t.Z)(_, E);
    return null == I && null == l
        ? (0, s.jsx)(s.Fragment, { children: r })
        : (0, s.jsx)(n.Z, {
              emojiName: null != I ? (null == I ? void 0 : I.name) : E,
              animated: null != I && I.animated,
              emojiId: null == I ? void 0 : I.id,
              autoplay: !0,
              className: a
          });
}
