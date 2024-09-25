n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(399606),
    o = n(16084),
    s = n(881052),
    l = n(128069),
    u = n(855775),
    c = n(55563),
    d = n(474936);
function _() {
    let [e, t] = i.useState({});
    return {
        previewErrorsById: e,
        setErrorById: i.useCallback(
            (e, n) => {
                t((t) => ({
                    ...t,
                    [e]: n
                }));
            },
            [t]
        )
    };
}
function E(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: r, isGift: E } = e,
        f = i.useMemo(() => n.filter((e) => !d.YQ.includes(e)), [JSON.stringify(n)]),
        h = (0, a.e7)([c.Z], () => f.every((e) => !c.Z.isFetching(e) && null != c.Z.get(e))),
        { previewErrorsById: p, setErrorById: m } = _(),
        I = (0, a.cj)(
            [c.Z],
            () => {
                let e = {};
                for (let n of f) {
                    var t;
                    e[n] = null !== (t = c.Z.get(n)) && void 0 !== t ? t : void 0;
                }
                return e;
            },
            [f]
        );
    i.useEffect(() => {
        for (let e of f) !c.Z.isFetching(e) && null == c.Z.get(e) && (0, o.$N)(t, e);
    }, [t, f]);
    let T = (0, a.cj)(
        [u.Z],
        () => {
            let e = {};
            for (let n of f) {
                var t;
                e[n] = null !== (t = u.Z.getPricesForSku(n)) && void 0 !== t ? t : void 0;
            }
            return e;
        },
        [f]
    );
    return (
        i.useEffect(() => {
            for (let e of f)
                !u.Z.isFetchingSKU(e) &&
                    (0, o.x2)(t, e, r, { isGift: E }).catch((t) => {
                        t instanceof s.HF && (t.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && m(e, t);
                    });
        }, [t, f, r, E, m]),
        {
            hasFetchedSkus: h,
            skusById: I,
            skuPricePreviewsById: T,
            previewErrorsById: p
        }
    );
}
