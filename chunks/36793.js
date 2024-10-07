function t(e, i, n, t) {
    let o = e.naturalWidth / e.width,
        r = i.width / 2,
        a = i.height / 2,
        l = (e.width / 2 - r - n.x) * o,
        s = (e.height / 2 - a - n.y) * o,
        c = i.width * o,
        d = i.height * o,
        u = Math.min(c, t.width),
        g = Math.min(d, t.height);
    return {
        x: l,
        y: s,
        scaledCropWidth: c,
        scaledCropHeight: d,
        canvasWidth: u,
        canvasHeight: g
    };
}
function o(e, i, n, o) {
    let { x: r, y: a, scaledCropWidth: l, scaledCropHeight: s, canvasWidth: c, canvasHeight: d } = t(e, i, n, o),
        u = document.createElement('canvas');
    (u.width = c), (u.height = d);
    let g = u.getContext('2d');
    return null != g && g.drawImage(e, r, a, l, s, 0, 0, u.width, u.height), u.toDataURL('image/png');
}
function r(e, i, n) {
    let t = e.naturalWidth / e.naturalHeight,
        r = i,
        a = n;
    e.naturalWidth > e.naturalHeight ? (r /= t) : (a *= t);
    let l = {
        height: r,
        width: a
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
n.d(i, {
    Ae: function () {
        return r;
    },
    PT: function () {
        return o;
    },
    eu: function () {
        return t;
    }
});
