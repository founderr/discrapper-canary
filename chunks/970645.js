n.d(t, {
    o: function () {
        return s;
    }
});
var i = n(544891),
    l = n(570140),
    r = n(355467),
    a = n(853872),
    o = n(981631);
async function s() {
    try {
        l.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH' });
        let { body: e } = await i.tn.get({
                url: o.ANM.CHECKOUT_RECOVERY,
                rejectWithError: !0
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !a.Z.hasFetchedPaymentSources && (await (0, r.tZ)()),
            l.Z.dispatch({
                type: 'CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS',
                isTargeted: t
            });
    } catch (e) {
        l.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE' });
    }
}
