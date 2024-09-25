n.d(t, {
    a: function () {
        return c;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(706454),
    o = n(70956),
    s = n(844439),
    l = n(981631);
let u = 10 * o.Z.Millis.MINUTE;
async function c(e) {
    let { channelId: t, location: n, withCommands: o } = e,
        c = Date.now(),
        d = s.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: o
        }),
        _ = s.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: o
        });
    if (d !== s.M.FETCHING && (null == _ || !(_ + u > c))) {
        i.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: o
        });
        try {
            let e = await r.tn.get({
                url: l.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: a.default.locale,
                    channel_id: t,
                    location: n,
                    with_commands: o
                }
            });
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: t,
                recommendations: e.body,
                withCommands: o
            });
        } catch (e) {
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: t,
                withCommands: o
            });
        }
    }
}
