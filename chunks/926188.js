n.d(t, {
    I: function () {
        return o;
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
    E = n(802667);
let i = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    a = {
        N: 16384,
        r: 8,
        p: 2,
        dkLen: 64
    };
function u(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function o(e, t, n, o, c) {
    let s = await Promise.all([(0, r.x)(e, t, n), (0, r.x)(e, o, c)]);
    s.sort(u);
    let _ = new Uint8Array(s[0].byteLength + s[1].byteLength);
    return _.set(s[0], 0), _.set(s[1], s[0].byteLength), new Uint8Array(await (0, E.E)(_, i, a));
}
