n.d(t, {
    g: function () {
        return _;
    }
});
var r = n(411104);
var i = n(544891),
    a = n(570140),
    o = n(881052),
    s = n(70956),
    l = n(672458),
    u = n(981631);
function c(e) {
    return {
        guild_id: e.guild_id,
        members: e.members,
        page_result_count: e.page_result_count,
        total_result_count: e.total_result_count
    };
}
let d = 3;
async function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (r > d) throw Error('Unable to search guild members after max retries');
    let { autoRetry: E = !0, signal: f } = n;
    try {
        let o = await i.tn.post({
            url: u.ANM.GUILD_MEMBER_SEARCH(e),
            body: t,
            signal: f
        });
        if (o.status === l.t) {
            if (null == o.body.retry_after) throw Error('Indexing response did not include retry_after');
            if (!E) throw Error('Indexing response received but autoRetry is disabled');
            return (
                await a.Z.dispatch({
                    type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING',
                    guildId: e
                }),
                await new Promise((e) => setTimeout(e, o.body.retry_after * s.Z.Millis.SECOND)),
                _(e, t, n, r + 1)
            );
        }
        return {
            type: l.d.SUCCESSFUL_QUERY,
            body: c(o.body)
        };
    } catch (t) {
        let e = new o.Hx(t);
        return {
            type: l.d.ERROR,
            body: e
        };
    }
}
