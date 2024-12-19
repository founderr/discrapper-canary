t.d(n, {
    f: function () {
        return r;
    }
}),
    t(411104);
var l = t(4646),
    i = t(665672);
async function r(e) {
    let { assetsToLoad: n, drawImage: r, exportConfigs: o } = e,
        a = await (0, l.k2)(n);
    await a.loadFonts();
    {
        let e = t(503082).Z,
            n = t(97008).Z,
            l = document.createElement('canvas'),
            u = new e(l, a),
            d = new n(),
            s = new i.Z(u, d);
        r(s.canvas);
        let c = await s.export(o);
        return l.remove(), c;
    }
}
