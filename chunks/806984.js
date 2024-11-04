t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(192379),
    o = t(512722),
    u = t.n(o),
    a = t(563132),
    c = t(390917),
    l = t(464797);
function s(e) {
    let { handleClose: n } = e,
        { guildProductListing: t, guildId: o } = (0, l._)(),
        { selectedSkuPricePreview: s } = (0, a.usePaymentContext)();
    return (
        r.useEffect(() => {
            u()(null != s, 'selectedSkuPricePreview cannot be null'),
                (0, c.u)({
                    guildId: o,
                    guildProductListingId: t.id,
                    skuPricePreview: s
                }),
                n();
        }, []),
        null
    );
}
