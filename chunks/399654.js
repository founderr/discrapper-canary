t.d(n, {
    $: function () {
        return u;
    }
});
var i = t(544891), l = t(570140), r = t(706454), a = t(70956), s = t(844439), o = t(981631);
let c = 10 * a.Z.Millis.MINUTE;
async function u(e) {
    let {
            channelId: n,
            location: t
        } = e, a = Date.now(), u = s.ZP.getFetchState({
            location: t,
            channelId: n
        }), d = s.ZP.getLastFetchTimeMs({
            location: t,
            channelId: n
        });
    if (u !== s.M.FETCHING && (null == d || !(d + c > a))) {
        l.Z.dispatch({
            type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS',
            location: t,
            channelId: n
        });
        try {
            let e = await i.tn.get({
                url: o.ANM.APP_RECOMMENDATIONS,
                query: {
                    locale: r.default.locale,
                    channel_id: n,
                    location: t
                }
            });
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS',
                location: t,
                channelId: n,
                recommendations: e.body
            });
        } catch (e) {
            l.Z.dispatch({
                type: 'APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE',
                location: t,
                channelId: n
            });
        }
    }
}
