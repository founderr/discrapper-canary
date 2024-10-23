t.d(n, {
    a: function () {
        return u;
    }
});
var i = t(544891),
    a = t(570140),
    l = t(706454),
    o = t(70956),
    c = t(844439),
    d = t(981631);
let r = 10 * o.Z.Millis.MINUTE;
async function u(e) {
    let { channelId: n, location: t, withCommands: o } = e,
        u = Date.now(),
        s = c.ZP.getFetchState({
            location: t,
            channelId: n,
            withCommands: o
        }),
        m = c.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n,
            withCommands: o
        });
    if (s !== c.M.FETCHING && (null == m || !(m + r > u))) {
        a.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: t,
            channelId: n,
            withCommands: o
        });
        try {
            var E;
            let e = await i.tn.get({
                url: d.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: l.default.locale,
                    channel_id: n,
                    location: t,
                    with_commands: o
                }
            });
            a.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: t,
                channelId: n,
                recommendations: null !== (E = e.body) && void 0 !== E ? E : [],
                withCommands: o
            });
        } catch (e) {
            a.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: t,
                channelId: n,
                withCommands: o
            });
        }
    }
}
