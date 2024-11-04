n.d(e, {
    I: function () {
        return c;
    }
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(963458),
    n(47120);
var r = n(309651),
    i = n(802667);
let o = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    u = {
        N: 16384,
        r: 8,
        p: 2,
        dkLen: 64
    };
function a(t, e) {
    for (let n = 0; n < t.length && n < e.length; n++) if (t[n] != e[n]) return t[n] - e[n];
    return t.length - e.length;
}
async function c(t, e, n, c, l) {
    let E = await Promise.all([(0, r.x)(t, e, n), (0, r.x)(t, c, l)]);
    E.sort(a);
    let s = new Uint8Array(E[0].byteLength + E[1].byteLength);
    return s.set(E[0], 0), s.set(E[1], E[0].byteLength), new Uint8Array(await (0, i.E)(s, o, u));
}
