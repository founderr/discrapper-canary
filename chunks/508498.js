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
    s = n(192379),
    i = n(512969),
    l = n(37234),
    o = n(703656),
    c = n(981631);
function d() {
    let { search: e } = (0, i.TH)(),
        t = (0, i.UO)(),
        n = s.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        r = null != n ? parseInt(n, 10) : null;
    return {
        onClose: s.useCallback(() => {
            if (0 === r) {
                (0, o.op)(), (0, l.jN)(c.S9g.USER_SETTINGS);
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
