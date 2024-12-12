r.d(n, {
    D: function () {
        return o;
    }
});
var i = r(570140),
    a = r(576007),
    s = r(672458);
async function o(e, n, r) {
    let o = await (0, a.g)(e, n, r);
    if (o.type === s.d.ERROR) throw o.body;
    let { body: l } = o;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS',
        guildId: e,
        members: l.members,
        page_result_count: l.page_result_count,
        total_result_count: l.total_result_count
    });
}
