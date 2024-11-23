n.d(t, {
    Db: function () {
        return d;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r,
    a,
    i = n(192379),
    l = n(512969),
    s = n(37234),
    o = n(703656),
    c = n(981631);
function d() {
    let { search: e } = (0, l.TH)(),
        t = (0, l.UO)(),
        n = i.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        r = null != n ? parseInt(n, 10) : null;
    return {
        onClose: i.useCallback(() => {
            if (0 === r) {
                (0, o.op)(), (0, s.jN)(c.S9g.USER_SETTINGS);
                return;
            }
            if ((0, o.uv)()) {
                (0, o.op)();
                return;
            }
            (0, o.uL)(c.Z5c.APP);
        }, [r]),
        source: r,
        ...t
    };
}
((a = r || (r = {}))[(a.SETTINGS = 0)] = 'SETTINGS'), (a[(a.CHANGELOG = 1)] = 'CHANGELOG'), (a[(a.DM_LIST = 2)] = 'DM_LIST');
