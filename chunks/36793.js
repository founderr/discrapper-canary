function t(e, n, i, t) {
    let o = e.naturalWidth / e.width,
        a = n.width / 2,
        r = n.height / 2,
        l = (e.width / 2 - a - i.x) * o,
        s = (e.height / 2 - r - i.y) * o,
        c = n.width * o,
        d = n.height * o,
        u = Math.min(c, t.width),
        _ = Math.min(d, t.height);
    return {
        x: l,
        y: s,
        scaledCropWidth: c,
        scaledCropHeight: d,
        canvasWidth: u,
        canvasHeight: _
    };
}
function o(e, n, i, o) {
    let { x: a, y: r, scaledCropWidth: l, scaledCropHeight: s, canvasWidth: c, canvasHeight: d } = t(e, n, i, o),
        u = document.createElement('canvas');
    (u.width = c), (u.height = d);
    let _ = u.getContext('2d');
    return null != _ && _.drawImage(e, a, r, l, s, 0, 0, u.width, u.height), u.toDataURL('image/png');
}
function a(e, n, i) {
    let t = e.naturalWidth / e.naturalHeight,
        a = n,
        r = i;
    e.naturalWidth > e.naturalHeight ? (a /= t) : (r *= t);
    let l = {
        height: a,
        width: r
    };
    return o(
        e,
        {
            width: e.width,
            height: e.height
        },
        {
            x: 0,
            y: 0
        },
        l
    );
}
i.d(n, {
    Ae: function () {
        return a;
    },
    PT: function () {
        return o;
    },
    eu: function () {
        return t;
    }
});
