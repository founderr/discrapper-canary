n.d(t, {
    n: function () {
        return r;
    }
});
var i = n(512969),
    l = n(905423),
    a = n(981631);
function r() {
    let e = (0, l.Z)((e) => e.guildId),
        { pathname: t } = (0, i.TH)(),
        n = t.startsWith(a.Z5c.GUILD_DISCOVERY) || t.startsWith(a.Z5c.GLOBAL_DISCOVERY),
        r = t.startsWith(a.Z5c.GUILD_MEMBER_VERIFICATION('')),
        s = t.startsWith(a.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    return null == e && !(n || r || s);
}
