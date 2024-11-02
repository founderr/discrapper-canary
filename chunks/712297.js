n.d(e, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(192379),
    E = n(399606),
    i = n(16084),
    u = n(881052),
    S = n(128069),
    o = n(855775),
    l = n(55563),
    _ = n(474936);
function A(t) {
    let { applicationId: e, skuIDs: n, currentPaymentSourceId: A, isGift: a } = t,
        T = r.useMemo(() => n.filter((t) => !_.YQ.includes(t)), [JSON.stringify(n)]),
        I = (0, E.e7)([l.Z], () => T.every((t) => !l.Z.isFetching(t) && null != l.Z.get(t))),
        { previewErrorsById: c, setErrorById: R } = (function () {
            let [t, e] = r.useState({});
            return {
                previewErrorsById: t,
                setErrorById: r.useCallback(
                    (t, n) => {
                        e((e) => ({
                            ...e,
                            [t]: n
                        }));
                    },
                    [e]
                )
            };
        })(),
        C = (0, E.cj)(
            [l.Z],
            () => {
                let t = {};
                for (let n of T) {
                    var e;
                    t[n] = null !== (e = l.Z.get(n)) && void 0 !== e ? e : void 0;
                }
                return t;
            },
            [T]
        );
    r.useEffect(() => {
        for (let t of T) !l.Z.isFetching(t) && null == l.Z.get(t) && (0, i.$N)(e, t);
    }, [e, T]);
    let N = (0, E.cj)(
        [o.Z],
        () => {
            let t = {};
            for (let n of T) {
                var e;
                t[n] = null !== (e = o.Z.getPricesForSku(n)) && void 0 !== e ? e : void 0;
            }
            return t;
        },
        [T]
    );
    return (
        r.useEffect(() => {
            for (let t of T)
                !o.Z.isFetchingSKU(t) &&
                    (0, i.x2)(e, t, A, { isGift: a }).catch((e) => {
                        e instanceof u.HF && (e.code === S.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === S.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && R(t, e);
                    });
        }, [e, T, A, a, R]),
        {
            hasFetchedSkus: I,
            skusById: C,
            skuPricePreviewsById: N,
            previewErrorsById: c
        }
    );
}
