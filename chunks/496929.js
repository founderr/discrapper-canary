r.d(n, {
    Qv: function () {
        return c;
    },
    p0: function () {
        return u;
    },
    yD: function () {
        return l;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(73346),
    o = r(981631);
function l(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (
        a.Z.wait(() => {
            a.Z.dispatch({
                type: 'ENTITLEMENT_FETCH_APPLICATION_START',
                applicationId: e
            });
        }),
        i.tn
            .get({
                url: o.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
                oldFormErrors: !0,
                query: { exclude_consumed: n },
                rejectWithError: !0
            })
            .then(
                (n) => (
                    a.Z.dispatch({
                        type: 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS',
                        applicationId: e,
                        entitlements: n.body
                    }),
                    n.body
                )
            )
            .catch(() => {
                a.Z.dispatch({
                    type: 'ENTITLEMENT_FETCH_APPLICATION_FAIL',
                    applicationId: e
                });
            })
    );
}
async function u(e) {
    let { withSku: n = !1, withApplication: r = !1, entitlementType: s } = e;
    a.Z.dispatch({ type: 'ENTITLEMENTS_FETCH_FOR_USER_START' });
    try {
        let e = await i.tn.get({
            url: o.ANM.ENTITLEMENTS_FOR_USER,
            query: {
                with_sku: n,
                with_application: r,
                entitlement_type: s
            },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'ENTITLEMENTS_FETCH_FOR_USER_SUCCESS',
            entitlements: e.body
        });
    } catch (e) {
        a.Z.dispatch({ type: 'ENTITLEMENTS_FETCH_FOR_USER_FAIL' });
    }
}
async function c() {
    a.Z.dispatch({ type: 'ENTITLEMENTS_GIFTABLE_FETCH' });
    try {
        let e = await (0, s.Kb)({
            url: o.ANM.ENTITLEMENTS_GIFTABLE,
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS',
            entitlements: e.body
        });
    } catch (e) {
        a.Z.dispatch({ type: 'ENTITLEMENTS_GIFTABLE_FETCH_FAIL' });
    }
}
