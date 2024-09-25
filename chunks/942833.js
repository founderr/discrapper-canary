n.d(t, {
    C: function () {
        return o;
    },
    k: function () {
        return s;
    }
});
var r = n(470079),
    i = n(937615),
    a = n(689938);
function o(e) {
    return r.useMemo(() => {
        if (null == e) return;
        let t = null != e.role_id,
            n = e.attachments_count > 0;
        if (t && n) return a.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
        if (t) return a.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
        if (n) return a.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE;
    }, [e]);
}
function s(e) {
    return r.useMemo(() => {
        if ((null == e ? void 0 : e.price) == null) return;
        let { amount: t, currency: n } = e.price;
        return (0, i.T4)(t, n);
    }, [e]);
}
