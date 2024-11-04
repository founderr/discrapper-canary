n.d(t, {
    $: function () {
        return s;
    }
});
var i = n(544891),
    r = n(570140),
    a = n(34756),
    l = n(981631);
async function s(e) {
    r.Z.dispatch({
        type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_START',
        applicationId: e
    });
    try {
        let t = (
            await i.tn.get({
                url: l.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
                oldFormErrors: !0
            })
        ).body;
        return (
            r.Z.dispatch({
                type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: t,
                applicationId: e
            }),
            t
        );
    } catch (t) {
        throw (
            (r.Z.dispatch({
                type: 'APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL',
                applicationId: e
            }),
            new a.Z(t))
        );
    }
}
