n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var E = n(192379),
    r = n(399606),
    u = n(16084),
    i = n(881052),
    S = n(128069),
    _ = n(855775),
    o = n(55563),
    A = n(474936);
function l(e) {
    let { applicationId: t, skuIDs: n, currentPaymentSourceId: l, isGift: a } = e,
        T = E.useMemo(() => n.filter((e) => !A.YQ.includes(e)), [JSON.stringify(n)]),
        I = (0, r.e7)([o.Z], () => T.every((e) => !o.Z.isFetching(e) && null != o.Z.get(e))),
        { previewErrorsById: c, setErrorById: R } = (function () {
            let [e, t] = E.useState({});
            return {
                previewErrorsById: e,
                setErrorById: E.useCallback(
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
        C = (0, r.cj)(
            [o.Z],
            () => {
                let e = {};
                for (let n of T) {
                    var t;
                    e[n] = null !== (t = o.Z.get(n)) && void 0 !== t ? t : void 0;
                }
                return e;
            },
            [T]
        );
    E.useEffect(() => {
        for (let e of T) !o.Z.isFetching(e) && null == o.Z.get(e) && (0, u.$N)(t, e);
    }, [t, T]);
    let N = (0, r.cj)(
        [_.Z],
        () => {
            let e = {};
            for (let n of T) {
                var t;
                e[n] = null !== (t = _.Z.getPricesForSku(n)) && void 0 !== t ? t : void 0;
            }
            return e;
        },
        [T]
    );
    return (
        E.useEffect(() => {
            for (let e of T)
                !_.Z.isFetchingSKU(e) &&
                    (0, u.x2)(t, e, l, { isGift: a }).catch((t) => {
                        t instanceof i.HF && (t.code === S.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === S.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && R(e, t);
                    });
        }, [t, T, l, a, R]),
        {
            hasFetchedSkus: I,
            skusById: C,
            skuPricePreviewsById: N,
            previewErrorsById: c
        }
    );
}
