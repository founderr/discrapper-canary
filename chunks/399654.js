n.d(e, {
    a: function () {
        return s;
    }
});
var a = n(544891),
    o = n(570140),
    r = n(706454),
    c = n(70956),
    i = n(844439),
    u = n(981631);
let l = 10 * c.Z.Millis.MINUTE;
async function s(t) {
    let { channelId: e, location: n, withCommands: c } = t,
        s = Date.now(),
        E = i.ZP.getFetchState({
            location: n,
            channelId: e,
            withCommands: c
        }),
        d = i.ZP.getLastFetchTimeMs({
            location: n,
            channelId: e,
            withCommands: c
        });
    if (E !== i.M.FETCHING && (null == d || !(d + l > s))) {
        o.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: n,
            channelId: e,
            withCommands: c
        });
        try {
            var C;
            let t = await a.tn.get({
                url: u.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: r.default.locale,
                    channel_id: e,
                    location: n,
                    with_commands: c
                }
            });
            o.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: n,
                channelId: e,
                recommendations: null !== (C = t.body) && void 0 !== C ? C : [],
                withCommands: c
            });
        } catch (t) {
            o.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: n,
                channelId: e,
                withCommands: c
            });
        }
    }
}
