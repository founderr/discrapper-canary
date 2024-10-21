t.d(n, {
    Z: function () {
        return s;
    },
    e: function () {
        return i;
    }
});
var r = t(200651);
t(192379);
var o = t(468194),
    u = t(477690),
    a = t(166081),
    c = t(841762);
let l = (0, o.Mg)(u.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function s(e) {
    let { listing: n, imageSize: t, alt: o, ...u } = e,
        c = (0, a.U)(n, t);
    return (0, r.jsx)('img', {
        src: c,
        alt: o,
        ...u
    });
}
function i(e) {
    let { listing: n, aspectRatio: t = 16 / 9, height: o, ...u } = e,
        s = (o - 2 * l) * t,
        i = (0, a.U)(n, s),
        d = (0, a.U)(n, s, { shouldAnimate: !1 });
    return (0, r.jsx)(c.Z, {
        src: i,
        backgroundSrc: d,
        aspectRatio: t,
        ...u
    });
}
