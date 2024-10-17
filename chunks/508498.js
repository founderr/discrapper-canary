s.d(t, {
    Db: function () {
        return d;
    }
}),
    s(610138),
    s(216116),
    s(78328),
    s(815648),
    s(47120);
var a,
    r,
    n = s(470079),
    i = s(266067),
    l = s(37234),
    o = s(703656),
    c = s(981631);
function d() {
    let { search: e } = (0, i.TH)(),
        t = (0, i.UO)(),
        s = n.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        a = null != s ? parseInt(s, 10) : null;
    return {
        onClose: n.useCallback(() => {
            if (0 === a) {
                (0, o.op)(), (0, l.jN)(c.S9g.USER_SETTINGS);
                return;
            }
            if ((0, o.uv)()) {
                (0, o.op)();
                return;
            }
            (0, o.uL)(c.Z5c.APP);
        }, [a]),
        source: a,
        ...t
    };
}
((r = a || (a = {}))[(r.SETTINGS = 0)] = 'SETTINGS'), (r[(r.CHANGELOG = 1)] = 'CHANGELOG'), (r[(r.DM_LIST = 2)] = 'DM_LIST');
