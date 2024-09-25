t.d(n, {
    T: function () {
        return A;
    },
    Z: function () {
        return c;
    }
}),
    t(653041);
var i = t(470079),
    o = t(442837),
    l = t(734307),
    E = t(854444),
    r = t(131704),
    a = t(680089),
    u = t(888369),
    d = t(944486),
    s = t(981631),
    _ = t(647086);
function c(e) {
    let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return C(
        e === _._ || e === s.I_8 ? (0, E.t)() : l.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        },
        {
            withVoiceChannels: n,
            withCurrentVoiceChannel: t
        },
        i
    );
}
function A(e, n, t) {
    let { withVoiceChannels: l = !1, withCurrentVoiceChannel: E = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 ? arguments[4] : void 0,
        s = (0, o.e7)([u.default], () => u.default.getGuildChangeSentinel(e)),
        _ = (0, o.e7)([a.Z], () => a.Z.version),
        { currentVoiceChannelId: c, selectedChannelId: A } = (0, o.cj)([d.Z], () => ({
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId()
        }));
    return (0, i.useMemo)(
        () =>
            C(
                n,
                {
                    currentVoiceChannelId: c,
                    selectedChannelId: A
                },
                {
                    withVoiceChannels: l,
                    withCurrentVoiceChannel: E
                },
                r
            ).map((e) => e.id),
        [n, t, s, _]
    );
}
function C(e, n) {
    let { currentVoiceChannelId: t, selectedChannelId: i } = n,
        { withVoiceChannels: o, withCurrentVoiceChannel: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        E = arguments.length > 3 ? arguments[3] : void 0,
        a = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, r.r8)(e.type) || (o && (0, r.bw)(e.type)) || (l && (e.id === t || e.id === i))) && a.push(e);
        }, E),
        a
    );
}
