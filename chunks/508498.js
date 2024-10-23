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
var s,
    n,
    a = r(192379),
    i = r(512969),
    l = r(37234),
    o = r(703656),
    c = r(981631);
function d() {
    let { search: e } = (0, i.TH)(),
        t = (0, i.UO)(),
        r = a.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        s = null != r ? parseInt(r, 10) : null;
    return {
        onClose: a.useCallback(() => {
            if (0 === s) {
                (0, o.op)(), (0, l.jN)(c.S9g.USER_SETTINGS);
                return;
            }
            if ((0, o.uv)()) {
                (0, o.op)();
                return;
            }
            (0, o.uL)(c.Z5c.APP);
        }, [s]),
        source: s,
        ...t
    };
}
((n = s || (s = {}))[(n.SETTINGS = 0)] = 'SETTINGS'), (n[(n.CHANGELOG = 1)] = 'CHANGELOG'), (n[(n.DM_LIST = 2)] = 'DM_LIST');
