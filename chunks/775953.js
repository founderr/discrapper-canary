n.d(t, {
    YM: function () {
        return c;
    }
});
var r = n(68133),
    i = n(431462),
    a = n(51466),
    s = n(754396),
    o = n(961742);
async function l(e, t = {}) {
    let { width: n, height: l } = (0, o.Ad)(e, t),
        u = await (0, r.s)(e, t, !0);
    return await (0, s.Y)(u, t), await (0, i.A)(u, t), (0, a.b)(u, t), await (0, o.P9)(u, n, l);
}
async function u(e, t = {}) {
    let { width: n, height: r } = (0, o.Ad)(e, t),
        i = await l(e, t),
        a = await (0, o.Bi)(i),
        s = document.createElement('canvas'),
        u = s.getContext('2d'),
        c = t.pixelRatio || (0, o.mX)(),
        d = t.canvasWidth || n,
        f = t.canvasHeight || r;
    return (s.width = d * c), (s.height = f * c), !t.skipAutoScale && (0, o.Nv)(s), (s.style.width = `${d}`), (s.style.height = `${f}`), t.backgroundColor && ((u.fillStyle = t.backgroundColor), u.fillRect(0, 0, s.width, s.height)), u.drawImage(a, 0, 0, s.width, s.height), s;
}
async function c(e, t = {}) {
    return (await u(e, t)).toDataURL();
}
