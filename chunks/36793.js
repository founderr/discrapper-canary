function i(e, t, n, i) {
    let a = e.naturalWidth / e.width,
        o = t.width / 2,
        r = t.height / 2,
        s = (e.width / 2 - o - n.x) * a,
        l = (e.height / 2 - r - n.y) * a,
        c = t.width * a,
        d = t.height * a,
        u = Math.min(c, i.width),
        _ = Math.min(d, i.height);
    return {
        x: s,
        y: l,
        scaledCropWidth: c,
        scaledCropHeight: d,
        canvasWidth: u,
        canvasHeight: _
    };
}
function a(e, t, n, a) {
    let { x: o, y: r, scaledCropWidth: s, scaledCropHeight: l, canvasWidth: c, canvasHeight: d } = i(e, t, n, a),
        u = document.createElement('canvas');
    (u.width = c), (u.height = d);
    let _ = u.getContext('2d');
    return null != _ && _.drawImage(e, o, r, s, l, 0, 0, u.width, u.height), u.toDataURL('image/png');
}
function o(e, t, n) {
    let i = e.naturalWidth / e.naturalHeight,
        o = t,
        r = n;
    e.naturalWidth > e.naturalHeight ? (o /= i) : (r *= i);
    let s = {
        height: o,
        width: r
    };
    return a(
        e,
        {
            width: e.width,
            height: e.height
        },
        {
            x: 0,
            y: 0
        },
        s
    );
}
n.d(t, {
    Ae: function () {
        return o;
    },
    PT: function () {
        return a;
    },
    eu: function () {
        return i;
    }
});
