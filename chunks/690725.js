n.d(t, {
    f: function () {
        return a;
    }
}),
    n(411104);
var i = n(4646),
    l = n(665672);
async function a(e) {
    let { assetsToLoad: t, drawImage: a, exportConfigs: r } = e,
        o = await (0, i.k2)(t);
    await o.loadFonts();
    {
        let e = n(503082).Z,
            t = n(97008).Z,
            i = document.createElement('canvas'),
            s = new e(i, o),
            u = new t(),
            c = new l.Z(s, u);
        a(c.canvas);
        let d = await c.export(r);
        return i.remove(), d;
    }
}
