n.d(t, {
    C: function () {
        return u;
    },
    k: function () {
        return l;
    }
});
var r = n(470079),
    i = n(937615),
    o = n(689938);
function u(e) {
    return r.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        if (t && n) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
        if (t) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
        if (n) return o.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
    }, [e]);
}
function l(e) {
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, i.T4)(t, n);
    }, [e]);
}
