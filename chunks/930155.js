t.d(e, {
    H: function () {
        return a;
    }
}),
    t(47120),
    t(411104);
var l = t(192379),
    i = t(442837),
    r = t(821849),
    o = t(509545);
function a(n) {
    let [e, t] = l.useState(!1),
        { plans: a, isFetching: s } = (0, i.cj)(
            [o.Z],
            () => {
                let e = o.Z.getForSKU(n);
                return {
                    plans: e,
                    isFetching: o.Z.isFetchingForSKU(n)
                };
            },
            [n]
        );
    return (
        l.useEffect(() => {
            !s &&
                (t(!1),
                (0, r.GZ)(n)
                    .then(() => {
                        t(!1);
                    })
                    .catch(() => {
                        t(!0);
                    }));
        }, [n]),
        {
            data: a,
            isLoading: s,
            error: e ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
