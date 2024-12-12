t.d(n, {
    C: function () {
        return a;
    }
});
var l = t(544891),
    i = t(405222),
    r = t(981631);
async function a(e) {
    let n = await l.tn.get({
        url: r.ANM.GUILD_CLAN_DISCOVERY_INFO(e),
        rejectWithError: !1
    });
    return (0, i.x)(n.body);
}
