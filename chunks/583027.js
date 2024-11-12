t.d(n, {
    Mo: function () {
        return r;
    },
    SC: function () {
        return d;
    },
    _U: function () {
        return c;
    }
}),
    t(47120);
var i = t(905837),
    l = t(280836),
    a = t(731965);
let o = (0, i.Ue)((0, l.XR)(() => ({ commandAnalyticsContext: new Map() })));
function r(e) {
    let { command: n, location: t, sectionName: i } = e,
        { commandAnalyticsContext: l } = o.getState(),
        r = l.get(n);
    if (null == r || r.location !== t || r.sectionName !== i) {
        let e = new Map(l);
        e.set(n, {
            location: t,
            sectionName: i
        }),
            (0, a.j)(() => o.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: n } = o.getState();
    return n.get(e);
}
function d(e) {
    let { commandAnalyticsContext: n } = o.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, a.j)(() => o.setState({ commandAnalyticsContext: t }));
    }
}
