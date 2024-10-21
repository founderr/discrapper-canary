t.d(n, {
    $: function () {
        return l;
    },
    W: function () {
        return f;
    }
});
var a = t(192379),
    c = t(442837),
    s = t(592125),
    d = t(944486),
    i = t(914010),
    o = t(771845);
function l() {
    var e;
    let { allowGdmActivityChannelSuggestion: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowGdmActivityChannelSuggestion: !1 },
        t = d.Z.getVoiceChannelId(),
        a = s.Z.getChannel(t);
    if (null != a && null != a.guild_id) return a.guild_id;
    if (null == a || !n) return null !== (e = i.Z.getLastSelectedGuildId()) && void 0 !== e ? e : o.ZP.getFlattenedGuildIds()[0];
}
function f() {
    let e = (0, c.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
    return a.useMemo(
        () =>
            e.map((e) => ({
                label: e,
                value: e
            })),
        [e]
    );
}
