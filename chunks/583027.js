t.d(n, {
    Mo: function () {
        return c;
    },
    SC: function () {
        return r;
    },
    _U: function () {
        return d;
    }
}),
    t(47120);
var i = t(903797),
    a = t(60071),
    l = t(731965);
let o = (0, i.Z)((0, a.XR)(() => ({ commandAnalyticsContext: new Map() })));
function c(e) {
    let { command: n, location: t, sectionName: i } = e,
        { commandAnalyticsContext: a } = o.getState(),
        c = a.get(n);
    if (null == c || c.location !== t || c.sectionName !== i) {
        let e = new Map(a);
        e.set(n, {
            location: t,
            sectionName: i
        }),
            (0, l.j)(() => o.setState({ commandAnalyticsContext: e }));
    }
}
function d(e) {
    let { commandAnalyticsContext: n } = o.getState();
    return n.get(e);
}
function r(e) {
    let { commandAnalyticsContext: n } = o.getState();
    if (n.has(e)) {
        let t = new Map(n);
        t.delete(e), (0, l.j)(() => o.setState({ commandAnalyticsContext: t }));
    }
}
