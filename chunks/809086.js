t.d(n, {
    Z: function () {
        return l;
    },
    e: function () {
        return d;
    }
});
var o = t(735250);
t(470079);
var r = t(468194), a = t(477690), i = t(166081), c = t(841762);
let s = (0, r.Mg)(a.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function l(e) {
    let {
            listing: n,
            imageSize: t,
            alt: r,
            ...a
        } = e, c = (0, i.U)(n, t);
    return (0, o.jsx)('img', {
        src: c,
        alt: r,
        ...a
    });
}
function d(e) {
    let {
            listing: n,
            aspectRatio: t = 16 / 9,
            height: r,
            ...a
        } = e, l = (r - 2 * s) * t, d = (0, i.U)(n, l), u = (0, i.U)(n, l, { shouldAnimate: !1 });
    return (0, o.jsx)(c.Z, {
        src: d,
        backgroundSrc: u,
        aspectRatio: t,
        ...a
    });
}
