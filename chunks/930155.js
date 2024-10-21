t.d(e, {
    H: function () {
        return o;
    }
}),
    t(47120),
    t(411104);
var l = t(192379),
    i = t(442837),
    r = t(821849),
    a = t(509545);
function o(n) {
    let [e, t] = l.useState(!1),
        { plans: o, isFetching: s } = (0, i.cj)(
            [a.Z],
            () => {
                let e = a.Z.getForSKU(n);
                return {
                    plans: e,
                    isFetching: a.Z.isFetchingForSKU(n)
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
            data: o,
            isLoading: s,
            error: e ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
