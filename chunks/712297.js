n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    a = n(16084),
    s = n(881052),
    o = n(128069),
    l = n(228624),
    u = n(855775),
    c = n(55563),
    d = n(474936);
function f(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: f, isGift: _ } = e,
        p = r.useMemo(() => n.filter((e) => !d.YQ.includes(e)), [JSON.stringify(n)]),
        h = (0, i.e7)([c.Z], () => p.every((e) => !c.Z.isFetching(e) && null != c.Z.get(e))),
        { previewErrorsById: m, setErrorById: g } = (function () {
            let [e, t] = r.useState({});
            return {
                previewErrorsById: e,
                setErrorById: r.useCallback(
                    (e, n) => {
                        t((t) => ({
                            ...t,
                            [e]: n
                        }));
                    },
                    [t]
                )
            };
        })(),
        E = (0, i.cj)(
            [c.Z],
            () => {
                let e = {};
                for (let n of p) {
                    var t;
                    e[n] = null !== (t = c.Z.get(n)) && void 0 !== t ? t : void 0;
                }
                return e;
            },
            [p]
        ),
        v = (0, l.hv)('useSkus');
    r.useEffect(() => {
        for (let e of p) !c.Z.isFetching(e) && null == c.Z.get(e) && (0, a.$N)(t, e, v);
    }, [t, p, v]);
    let I = (0, i.cj)(
        [u.Z],
        () => {
            let e = {};
            for (let n of p) {
                var t;
                e[n] = null !== (t = u.Z.getPricesForSku(n)) && void 0 !== t ? t : void 0;
            }
            return e;
        },
        [p]
    );
    return (
        r.useEffect(() => {
            for (let e of p)
                !u.Z.isFetchingSKU(e) &&
                    (0, a.x2)(t, e, f, { isGift: _ }).catch((t) => {
                        t instanceof s.HF && (t.code === o.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === o.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && g(e, t);
                    });
        }, [t, p, f, _, g]),
        {
            hasFetchedSkus: h,
            skusById: E,
            skuPricePreviewsById: I,
            previewErrorsById: m
        }
    );
}
