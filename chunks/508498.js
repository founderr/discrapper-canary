r.d(t, {
    Db: function () {
        return d;
    }
}),
    r(610138),
    r(216116),
    r(78328),
    r(815648),
    r(47120);
var a,
    n,
    s = r(470079),
    i = r(266067),
    o = r(37234),
    l = r(703656),
    c = r(981631);
function d() {
    let { search: e } = (0, i.TH)(),
        t = (0, i.UO)(),
        r = s.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        a = null != r ? parseInt(r, 10) : null;
    return {
        onClose: s.useCallback(() => {
            if (0 === a) {
                (0, l.op)(), (0, o.jN)(c.S9g.USER_SETTINGS);
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
((n = a || (a = {}))[(n.SETTINGS = 0)] = 'SETTINGS'), (n[(n.CHANGELOG = 1)] = 'CHANGELOG'), (n[(n.DM_LIST = 2)] = 'DM_LIST');
