r.d(n, {
    g: function () {
        return _;
    }
});
var i = r(411104);
var a = r(544891),
    s = r(570140),
    o = r(881052),
    l = r(70956),
    u = r(672458),
    c = r(981631);
function d(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count
    };
}
let f = 3;
async function _(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (i > f) throw Error('Unable to search guild members after max retries');
    let { autoRetry: h = !0, signal: p } = r;
    try {
        let o = await a.tn.post({
            url: c.ANM.GUILD_MEMBER_SEARCH(e),
            body: n,
            signal: p,
            rejectWithError: !1
        });
        if (o.status === u.t) {
            if (null == o.body.retry_after) throw Error('Indexing response did not include retry_after');
            if (!h) throw Error('Indexing response received but autoRetry is disabled');
            return (
                await s.Z.dispatch({
                    type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING',
                    guildId: e
                }),
                await new Promise((e) => setTimeout(e, o.body.retry_after * l.Z.Millis.SECOND)),
                _(e, n, r, i + 1)
            );
        }
        return {
            type: u.d.SUCCESSFUL_QUERY,
            body: d(o.body)
        };
    } catch (n) {
        let e = new o.Hx(n);
        return {
            type: u.d.ERROR,
            body: e
        };
    }
}
