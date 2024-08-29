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
var a,
    r,
    s = n(470079),
    o = n(266067),
    i = n(37234),
    l = n(703656),
    c = n(981631);
function d() {
    let { search: e } = (0, o.TH)(),
        t = (0, o.UO)(),
        n = s.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        a = null != n ? parseInt(n, 10) : null;
    return {
        onClose: s.useCallback(() => {
            if (0 === a) {
                (0, l.op)(), (0, i.jN)(c.S9g.USER_SETTINGS);
                return;
            }
            if ((0, l.uv)()) {
                (0, l.op)();
                return;
            }
            (0, l.uL)(c.Z5c.APP);
        }, [a]),
        source: a,
        ...t
    };
}
((r = a || (a = {}))[(r.SETTINGS = 0)] = 'SETTINGS'), (r[(r.CHANGELOG = 1)] = 'CHANGELOG'), (r[(r.DM_LIST = 2)] = 'DM_LIST');
