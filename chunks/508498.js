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
    s = n(470079),
    o = n(266067),
    i = n(37234),
    c = n(703656),
    l = n(981631);
function d() {
    let { search: e } = (0, o.TH)(),
        t = (0, o.UO)(),
        n = s.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        r = null != n ? parseInt(n, 10) : null;
    return {
        onClose: s.useCallback(() => {
            if (0 === r) {
                (0, c.op)(), (0, i.jN)(l.S9g.USER_SETTINGS);
                return;
            }
            if ((0, c.uv)()) {
                (0, c.op)();
                return;
            }
            (0, c.uL)(l.Z5c.APP);
        }, [r]),
        source: r,
        ...t
    };
}
((a = r || (r = {}))[(a.SETTINGS = 0)] = 'SETTINGS'), (a[(a.CHANGELOG = 1)] = 'CHANGELOG'), (a[(a.DM_LIST = 2)] = 'DM_LIST');
