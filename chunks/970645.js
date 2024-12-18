n.d(t, {
    o: function () {
        return a;
    }
});
var s = n(544891),
    i = n(570140),
    r = n(355467),
    o = n(853872),
    l = n(981631);
async function a() {
    try {
        i.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH' });
        let { body: e } = await s.tn.get({
                url: l.ANM.CHECKOUT_RECOVERY,
                rejectWithError: !0
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !o.Z.hasFetchedPaymentSources && (await (0, r.tZ)()),
            i.Z.dispatch({
                type: 'CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS',
                isTargeted: t
            });
    } catch (e) {
        i.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE' });
    }
}
