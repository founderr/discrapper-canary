n.d(t, {
    a: function () {
        return u;
    }
});
var o = n(544891),
    i = n(570140),
    a = n(706454),
    l = n(70956),
    r = n(844439),
    c = n(981631);
let d = 10 * l.Z.Millis.MINUTE;
async function u(e) {
    let { channelId: t, location: n, withCommands: l } = e,
        u = Date.now(),
        m = r.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: l
        }),
        s = r.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: l
        });
    if (m !== r.M.FETCHING && (null == s || !(s + d > u))) {
        i.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: l
        });
        try {
            let e = await o.tn.get({
                url: c.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: a.default.locale,
                    channel_id: t,
                    location: n,
                    with_commands: l
                }
            });
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: t,
                recommendations: e.body,
                withCommands: l
            });
        } catch (e) {
            i.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: t,
                withCommands: l
            });
        }
    }
}
