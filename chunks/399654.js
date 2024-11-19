t.d(n, {
    a: function () {
        return u;
    }
});
var i = t(544891),
    l = t(570140),
    o = t(706454),
    a = t(70956),
    d = t(844439),
    r = t(981631);
let c = 10 * a.Z.Millis.MINUTE;
async function u(e) {
    let { channelId: n, location: t, withCommands: a } = e,
        u = Date.now(),
        s = d.ZP.getFetchState({
            location: t,
            channelId: n,
            withCommands: a
        }),
        m = d.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n,
            withCommands: a
        });
    if (s !== d.M.FETCHING && (null == m || !(m + c > u))) {
        l.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: t,
            channelId: n,
            withCommands: a
        });
        try {
            var E;
            let e = await i.tn.get({
                url: r.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: o.default.locale,
                    channel_id: n,
                    location: t,
                    with_commands: a
                },
                rejectWithError: !1
            });
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: t,
                channelId: n,
                recommendations: null !== (E = e.body) && void 0 !== E ? E : [],
                withCommands: a
            });
        } catch (e) {
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: t,
                channelId: n,
                withCommands: a
            });
        }
    }
}
