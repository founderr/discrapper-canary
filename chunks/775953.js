r.d(n, {
    SE: function () {
        return d;
    }
});
var i = r(68133),
    a = r(431462),
    s = r(51466),
    o = r(754396),
    l = r(961742);
async function u(e, n = {}) {
    let { width: r, height: u } = (0, l.Ad)(e, n),
        c = await (0, i.s)(e, n, !0);
    return await (0, o.Y)(c, n), await (0, a.A)(c, n), (0, s.b)(c, n), await (0, l.P9)(c, r, u);
}
async function c(e, n = {}) {
    let { width: r, height: i } = (0, l.Ad)(e, n),
        a = await u(e, n),
        s = await (0, l.Bi)(a),
        o = document.createElement('canvas'),
        c = o.getContext('2d'),
        d = n.pixelRatio || (0, l.mX)(),
        f = n.canvasWidth || r,
        _ = n.canvasHeight || i;
    return (o.width = f * d), (o.height = _ * d), !n.skipAutoScale && (0, l.Nv)(o), (o.style.width = `${f}`), (o.style.height = `${_}`), n.backgroundColor && ((c.fillStyle = n.backgroundColor), c.fillRect(0, 0, o.width, o.height)), c.drawImage(s, 0, 0, o.width, o.height), o;
}
async function d(e, n = {}) {
    let r = await c(e, n);
    return await (0, l._c)(r);
}
