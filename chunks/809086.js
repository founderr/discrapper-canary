a.d(t, {
    Z: function () {
        return c;
    },
    e: function () {
        return d;
    }
});
var n = a(735250);
a(470079);
var o = a(468194),
    l = a(477690),
    r = a(166081),
    s = a(841762);
let i = (0, o.Mg)(l.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function c(e) {
    let { listing: t, imageSize: a, alt: o, ...l } = e,
        s = (0, r.U)(t, a);
    return (0, n.jsx)('img', {
        src: s,
        alt: o,
        ...l
    });
}
function d(e) {
    let { listing: t, aspectRatio: a = 16 / 9, height: o, ...l } = e,
        c = (o - 2 * i) * a,
        d = (0, r.U)(t, c),
        u = (0, r.U)(t, c, { shouldAnimate: !1 });
    return (0, n.jsx)(s.Z, {
        src: d,
        backgroundSrc: u,
        aspectRatio: a,
        ...l
    });
}
