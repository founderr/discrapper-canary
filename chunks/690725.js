n.d(e, {
    f: function () {
        return o;
    }
}),
    n(411104);
var i = n(4646),
    l = n(665672);
async function o(t) {
    let { assetsToLoad: e, drawImage: o, exportConfigs: r } = t,
        a = await (0, i.k2)(e);
    await a.loadFonts();
    {
        let t = n(503082).Z,
            e = n(97008).Z,
            i = document.createElement('canvas'),
            s = new t(i, a),
            u = new e(),
            c = new l.Z(s, u);
        o(c.canvas);
        let d = await c.export(r);
        return i.remove(), d;
    }
}
