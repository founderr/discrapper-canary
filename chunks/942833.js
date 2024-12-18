n.d(t, {
    C: function () {
        return l;
    },
    k: function () {
        return u;
    }
});
var i = n(192379),
    r = n(937615),
    o = n(388032);
function l(e) {
    return i.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        if (t && n) return o.intl.string(o.t.ih4QMT);
        if (t) return o.intl.string(o.t.o9xphY);
        if (n) return o.intl.string(o.t.DWYJub);
    }, [e]);
}
function u(e) {
    return i.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, r.T4)(t, n);
    }, [e]);
}
