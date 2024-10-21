n.d(e, {
    Mo: function () {
        return i;
    },
    SC: function () {
        return l;
    },
    _U: function () {
        return u;
    }
}),
    n(47120);
var a = n(903797),
    o = n(60071),
    r = n(731965);
let c = (0, a.Z)((0, o.XR)(() => ({ commandAnalyticsContext: new Map() })));
function i(t) {
    let { command: e, location: n, sectionName: a } = t,
        { commandAnalyticsContext: o } = c.getState(),
        i = o.get(e);
    if (null == i || i.location !== n || i.sectionName !== a) {
        let t = new Map(o);
        t.set(e, {
            location: n,
            sectionName: a
        }),
            (0, r.j)(() => c.setState({ commandAnalyticsContext: t }));
    }
}
function u(t) {
    let { commandAnalyticsContext: e } = c.getState();
    return e.get(t);
}
function l(t) {
    let { commandAnalyticsContext: e } = c.getState();
    if (e.has(t)) {
        let n = new Map(e);
        n.delete(t), (0, r.j)(() => c.setState({ commandAnalyticsContext: n }));
    }
}
