e.d(t, {
    T: function () {
        return C;
    },
    Z: function () {
        return _;
    }
}),
    e(653041);
var i = e(192379),
    l = e(442837),
    o = e(734307),
    r = e(854444),
    u = e(131704),
    a = e(680089),
    d = e(888369),
    E = e(944486),
    s = e(981631),
    c = e(647086);
function _(n) {
    let { withVoiceChannels: t = !1, withCurrentVoiceChannel: e = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 ? arguments[2] : void 0;
    return A(
        n === c._ || n === s.I_8 ? (0, r.t)() : o.Z.getGuildWithoutChangingGuildActionRows(n).guildChannels,
        {
            currentVoiceChannelId: E.Z.getVoiceChannelId(),
            selectedChannelId: E.Z.getChannelId()
        },
        {
            withVoiceChannels: t,
            withCurrentVoiceChannel: e
        },
        i
    );
}
function C(n, t, e) {
    let { withVoiceChannels: o = !1, withCurrentVoiceChannel: r = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        u = arguments.length > 4 ? arguments[4] : void 0,
        s = (0, l.e7)([d.default], () => d.default.getGuildChangeSentinel(n)),
        c = (0, l.e7)([a.Z], () => a.Z.version),
        { currentVoiceChannelId: _, selectedChannelId: C } = (0, l.cj)([E.Z], () => ({
            currentVoiceChannelId: E.Z.getVoiceChannelId(),
            selectedChannelId: E.Z.getChannelId()
        }));
    return (0, i.useMemo)(
        () =>
            A(
                t,
                {
                    currentVoiceChannelId: _,
                    selectedChannelId: C
                },
                {
                    withVoiceChannels: o,
                    withCurrentVoiceChannel: r
                },
                u
            ).map((n) => n.id),
        [t, e, s, c]
    );
}
function A(n, t) {
    let { currentVoiceChannelId: e, selectedChannelId: i } = t,
        { withVoiceChannels: l, withCurrentVoiceChannel: o } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = [];
    return (
        n.forEachShownChannel((n) => {
            ((0, u.r8)(n.type) || (l && (0, u.bw)(n.type)) || (o && (n.id === e || n.id === i))) && a.push(n);
        }, r),
        a
    );
}
