e.d(n, {
    I: function () {
        return l;
    }
}),
    e(518263),
    e(970173),
    e(520712),
    e(268111),
    e(941497),
    e(32026),
    e(480839),
    e(744285),
    e(492257),
    e(873817),
    e(963458),
    e(47120);
var r = e(309651),
    i = e(802667);
let u = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    o = {
        N: 16384,
        r: 8,
        p: 2,
        dkLen: 64
    };
function a(t, n) {
    for (let e = 0; e < t.length && e < n.length; e++) if (t[e] != n[e]) return t[e] - n[e];
    return t.length - n.length;
}
async function l(t, n, e, l, c) {
    let s = await Promise.all([(0, r.x)(t, n, e), (0, r.x)(t, l, c)]);
    s.sort(a);
    let d = new Uint8Array(s[0].byteLength + s[1].byteLength);
    return d.set(s[0], 0), d.set(s[1], s[0].byteLength), new Uint8Array(await (0, i.E)(d, u, o));
}
