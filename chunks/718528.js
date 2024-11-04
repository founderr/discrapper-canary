t.d(n, {
    T: function () {
        return _;
    },
    Z: function () {
        return C;
    }
}),
    t(653041);
var l = t(192379),
    i = t(442837),
    o = t(734307),
    a = t(854444),
    u = t(131704),
    r = t(680089),
    d = t(888369),
    c = t(944486),
    s = t(981631),
    E = t(647086);
function C(e) {
    let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = arguments.length > 2 ? arguments[2] : void 0;
    return h(
        e === E._ || e === s.I_8 ? (0, a.t)() : o.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
        {
            currentVoiceChannelId: c.Z.getVoiceChannelId(),
            selectedChannelId: c.Z.getChannelId()
        },
        {
            withVoiceChannels: n,
            withCurrentVoiceChannel: t
        },
        l
    );
}
function _(e, n, t) {
    let { withVoiceChannels: o = !1, withCurrentVoiceChannel: a = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        u = arguments.length > 4 ? arguments[4] : void 0,
        s = (0, i.e7)([d.default], () => d.default.getGuildChangeSentinel(e)),
        E = (0, i.e7)([r.Z], () => r.Z.version),
        { currentVoiceChannelId: C, selectedChannelId: _ } = (0, i.cj)([c.Z], () => ({
            currentVoiceChannelId: c.Z.getVoiceChannelId(),
            selectedChannelId: c.Z.getChannelId()
        }));
    return (0, l.useMemo)(
        () =>
            h(
                n,
                {
                    currentVoiceChannelId: C,
                    selectedChannelId: _
                },
                {
                    withVoiceChannels: o,
                    withCurrentVoiceChannel: a
                },
                u
            ).map((e) => e.id),
        [n, t, s, E]
    );
}
function h(e, n) {
    let { currentVoiceChannelId: t, selectedChannelId: l } = n,
        { withVoiceChannels: i, withCurrentVoiceChannel: o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0,
        r = [];
    return (
        e.forEachShownChannel((e) => {
            ((0, u.r8)(e.type) || (i && (0, u.bw)(e.type)) || (o && (e.id === t || e.id === l))) && r.push(e);
        }, a),
        r
    );
}
