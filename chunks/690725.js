n.d(t, {
    f: function () {
        return i;
    }
}),
    n(411104);
var l = n(4646),
    a = n(665672);
async function i(e) {
    let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
        s = await (0, l.k2)(t);
    await s.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            l = document.createElement('canvas'),
            o = new e(l, s),
            u = new t(),
            c = new a.Z(o, u);
        i(c.canvas);
        let d = await c.export(r);
        return l.remove(), d;
    }
}
