n.d(t, {
    N: function () {
        return c;
    }
});
var s = n(544891),
    a = n(570140),
    r = n(230307),
    i = n(70956),
    o = n(981631);
let l = 6 * i.Z.Millis.HOUR;
async function c() {
    let e = r.Z.lastFetched;
    if (!(null != e && Date.now() - e < l))
        try {
            let e = await s.tn.get({
                url: o.ANM.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0
            });
            a.Z.dispatch({
                type: 'USER_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: e.body
            });
        } catch (e) {
            return e;
        }
}
