t.d(n, {
    C: function () {
        return o;
    },
    k: function () {
        return u;
    }
});
var i = t(192379),
    r = t(937615),
    l = t(388032);
function o(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let n = null != e.role_id,
            t = e.attachments_count > 0;
        if (n && t) return l.intl.string(l.t.ih4QMT);
        if (n) return l.intl.string(l.t.o9xphY);
        if (t) return l.intl.string(l.t.DWYJub);
    }, [e]);
}
function u(e) {
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: n, currency: t } = e.price;
        return (0, r.T4)(n, t);
    }, [e]);
}
