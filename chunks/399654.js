n.d(t, {
    a: function () {
        return s;
    }
});
var r = n(544891),
    o = n(570140),
    a = n(706454),
    c = n(70956),
    i = n(844439),
    l = n(981631);
let u = 10 * c.Z.Millis.MINUTE;
async function s(e) {
    let { channelId: t, location: n, withCommands: c } = e,
        s = Date.now(),
        E = i.ZP.getFetchState({
            location: n,
            channelId: t,
            withCommands: c
        }),
        d = i.ZP.getLastFetchTimeMs({
            location: n,
            channelId: t,
            withCommands: c
        });
    if (E !== i.M.FETCHING && (null == d || !(d + u > s))) {
        o.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: t,
            withCommands: c
        });
        try {
            let e = await r.tn.get({
                url: l.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: a.default.locale,
                    channel_id: t,
                    location: n,
                    with_commands: c
                }
            });
            o.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: t,
                recommendations: e.body,
                withCommands: c
            });
        } catch (e) {
            o.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: t,
                withCommands: c
            });
        }
    }
}
