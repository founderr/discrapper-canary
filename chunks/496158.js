t.d(n, {
    D: function () {
        return r;
    }
});
var i = t(470079), l = t(430824);
function r(e) {
    return i.useMemo(() => {
        var n;
        return {
            channel: n = e,
            guild: null != n.guild_id ? l.Z.getGuild(n.guild_id) : null
        };
    }, [e]);
}
