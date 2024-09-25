n.d(t, {
    Mo: function () {
        return l;
    },
    SC: function () {
        return c;
    },
    _U: function () {
        return u;
    }
});
var r = n(47120);
var i = n(652874),
    a = n(868888),
    o = n(731965);
let s = (0, i.Z)((0, a.XR)(() => ({ commandAnalyticsContext: new Map() })));
function l(e) {
    let { command: t, location: n, sectionName: r } = e,
        { commandAnalyticsContext: i } = s.getState(),
        a = i.get(t);
    if (null == a || a.location !== n || a.sectionName !== r) {
        let e = new Map(i);
        e.set(t, {
            location: n,
            sectionName: r
        }),
            (0, o.j)(() => s.setState({ commandAnalyticsContext: e }));
    }
}
function u(e) {
    let { commandAnalyticsContext: t } = s.getState();
    return t.get(e);
}
function c(e) {
    let { commandAnalyticsContext: t } = s.getState();
    if (t.has(e)) {
        let n = new Map(t);
        n.delete(e), (0, o.j)(() => s.setState({ commandAnalyticsContext: n }));
    }
}
