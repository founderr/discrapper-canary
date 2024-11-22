t.d(n, {
    Mo: function () {
        return d;
    },
    SC: function () {
        return c;
    },
    _U: function () {
        return r;
    }
}),
    t(47120);
var i = t(15729),
    l = t(877124),
    o = t(731965);
let a = (0, i.U)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function d(e) {
    let { command: n, location: t, sectionName: i } = e,
        { commandAnalyticsContext: l } = a.getState(),
        d = l.get(n);
    if (null == d || d.location !== t || d.sectionName !== i) {
        let e = new Map(l);
        e.set(n, {
            location: t,
            sectionName: i
        }),
            (0, o.j)(() => a.setState({ commandAnalyticsContext: e }));
    }
}
function r(e) {
    let { commandAnalyticsContext: n } = a.getState();
    return n.get(e);
}
function c(e) {
    let { commandAnalyticsContext: n } = a.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, o.j)(() => a.setState({ commandAnalyticsContext: t }));
    }
}
