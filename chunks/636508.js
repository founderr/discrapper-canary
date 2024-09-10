n.d(t, {
    $: function () {
        return c;
    },
    W: function () {
        return d;
    }
});
var a = n(470079),
    i = n(442837),
    l = n(592125),
    s = n(944486),
    o = n(914010),
    r = n(771845);
function c() {
    var e;
    let { allowGdmActivityChannelSuggestion: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowGdmActivityChannelSuggestion: !1 },
        n = s.Z.getVoiceChannelId(),
        a = l.Z.getChannel(n);
    if (null != a && null != a.guild_id) return a.guild_id;
    if (null == a || !t) return null !== (e = o.Z.getLastSelectedGuildId()) && void 0 !== e ? e : r.ZP.getFlattenedGuildIds()[0];
}
function d() {
    let e = (0, i.e7)([r.ZP], () => r.ZP.getFlattenedGuildIds());
    return a.useMemo(
        () =>
            e.map((e) => ({
                label: e,
                value: e
            })),
        [e]
    );
}
