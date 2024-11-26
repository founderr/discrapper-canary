n.d(e, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(192379),
    E = n(399606),
    i = n(16084),
    u = n(881052),
    S = n(128069),
    o = n(228624),
    l = n(855775),
    _ = n(55563),
    A = n(474936);
function a(t) {
    let { applicationId: e, skuIDs: n, currentPaymentSourceId: a, isGift: T } = t,
        I = r.useMemo(() => n.filter((t) => !A.YQ.includes(t)), [JSON.stringify(n)]),
        c = (0, E.e7)([_.Z], () => I.every((t) => !_.Z.isFetching(t) && null != _.Z.get(t))),
        { previewErrorsById: R, setErrorById: C } = (function () {
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
        N = (0, E.cj)(
            [_.Z],
            () => {
                let t = {};
                for (let n of I) {
                    var e;
                    t[n] = null !== (e = _.Z.get(n)) && void 0 !== e ? e : void 0;
                }
                return t;
            },
            [I]
        ),
        s = (0, o.hv)('useSkus');
    r.useEffect(() => {
        for (let t of I) !_.Z.isFetching(t) && null == _.Z.get(t) && (0, i.$N)(e, t, s);
    }, [e, I, s]);
    let M = (0, E.cj)(
        [l.Z],
        () => {
            let t = {};
            for (let n of I) {
                var e;
                t[n] = null !== (e = l.Z.getPricesForSku(n)) && void 0 !== e ? e : void 0;
            }
            return t;
        },
        [I]
    );
    return (
        r.useEffect(() => {
            for (let t of I)
                !l.Z.isFetchingSKU(t) &&
                    (0, i.x2)(e, t, a, { isGift: T }).catch((e) => {
                        e instanceof u.HF && (e.code === S.SM.BILLING_BUNDLE_ALREADY_PURCHASED || e.code === S.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && C(t, e);
                    });
        }, [e, I, a, T, C]),
        {
            hasFetchedSkus: c,
            skusById: N,
            skuPricePreviewsById: M,
            previewErrorsById: R
        }
    );
}
