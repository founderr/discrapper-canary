n.d(t, {
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
    n(47120);
var o = n(652874),
    a = n(868888),
    i = n(731965);
let l = (0, o.Z)((0, a.XR)(() => ({ commandAnalyticsContext: new Map() })));
function r(e) {
    let { command: t, location: n, sectionName: o } = e,
        { commandAnalyticsContext: a } = l.getState(),
        r = a.get(t);
    if (null == r || r.location !== n || r.sectionName !== o) {
        let e = new Map(a);
        e.set(t, {
            location: n,
            sectionName: o
        }),
            (0, i.j)(() => l.setState({ commandAnalyticsContext: e }));
    }
}
function c(e) {
    let { commandAnalyticsContext: t } = l.getState();
    return t.get(e);
}
function d(e) {
    let { commandAnalyticsContext: t } = l.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, i.j)(() => l.setState({ commandAnalyticsContext: n }));
    }
}
