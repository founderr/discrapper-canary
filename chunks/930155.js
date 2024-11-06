e.d(t, {
    H: function () {
        return a;
    }
}),
    e(47120),
    e(411104);
var l = e(192379),
    i = e(442837),
    r = e(821849),
    u = e(509545);
function a(n) {
    let [t, e] = l.useState(!1),
        a = (0, i.Wu)([u.Z], () => u.Z.getForSKU(n), [n]),
        o = (0, i.e7)([u.Z], () => u.Z.isFetchingForSKU(n), [n]);
    return (
        l.useEffect(() => {
            !o &&
                (e(!1),
                (0, r.GZ)(n)
                    .then(() => {
                        e(!1);
                    })
                    .catch(() => {
                        e(!0);
                    }));
        }, [n]),
        {
            data: a,
            isLoading: o,
            error: t ? Error('SubscriptionPlans failed to fetch') : void 0
        }
    );
}
