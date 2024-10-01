n.d(t, {
    f: function () {
        return i;
    }
}),
    n(411104);
var a = n(4646),
    l = n(665672);
async function i(e) {
    let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
        s = await (0, a.k2)(t);
    await s.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            a = document.createElement('canvas'),
            o = new e(a, s),
            u = new t(),
            c = new l.Z(o, u);
        i(c.canvas);
        let d = await c.export(r);
        return a.remove(), d;
    }
}
