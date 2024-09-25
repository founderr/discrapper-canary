r.d(n, {
    Z: function () {
        return c;
    }
});
var t = r(470079),
    a = r(512722),
    o = r.n(a),
    i = r(598),
    s = r(390917),
    l = r(464797);
function c(e) {
    let { handleClose: n } = e,
        { guildProductListing: r, guildId: a } = (0, l._)(),
        { selectedSkuPricePreview: c } = (0, i.usePaymentContext)();
    return (
        t.useEffect(() => {
            o()(null != c, 'selectedSkuPricePreview cannot be null'),
                (0, s.u)({
                    guildId: a,
                    guildProductListingId: r.id,
                    skuPricePreview: c
                }),
                n();
        }, []),
        null
    );
}
