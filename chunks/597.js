t.d(n, {
    c: function () {
        return d;
    }
});
var i = t(954955),
    c = t.n(i),
    l = t(544891),
    r = t(570140),
    u = t(486527),
    o = t(981631);
let d = c()(async (e) => {
    try {
        r.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let n = await l.tn.get({
            url: o.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: u.C2.GUILD_SCHEDULED_EVENT }
        });
        r.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: e,
            entries: n.body
        });
    } catch (e) {
        r.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
