n.d(t, {
    TE: function () {
        return v;
    },
    h_: function () {
        return _;
    }
}),
    n(47120);
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    s = n(442837),
    a = n(159300),
    o = n(901461),
    c = n(314897),
    u = n(592125),
    d = n(984933),
    h = n(650774),
    m = n(430824),
    p = n(819640),
    f = n(375954),
    g = n(496675),
    C = n(709054),
    x = n(981631);
function v(e, t) {
    return (0, s.cj)(
        [g.Z],
        () => ({
            canInvite: (0, a.b)(g.Z, t, e),
            canManageGuild: null != t && g.Z.can(x.Plq.MANAGE_GUILD, t),
            canMessage: null != e && g.Z.can(x.Plq.SEND_MESSAGES, e),
            canCreateChannel: null != t && g.Z.can(x.Plq.MANAGE_CHANNELS, t)
        }),
        [t, e]
    );
}
function _(e) {
    var t;
    return {
        guildPopulated: (function (e) {
            let t = (0, s.e7)([u.Z], () => u.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
                n = (0, s.Wu)([f.Z], () => (null != t ? f.Z.getMessages(t.id).toArray() : []));
            return (0, s.e7)(
                [h.Z],
                () => {
                    var t;
                    let i = null !== (t = h.Z.getMemberCount(null == e ? void 0 : e.id)) && void 0 !== t ? t : 0,
                        l = n.some((e) => e.type === x.uaV.USER_JOIN);
                    return i > 1 || l;
                },
                [e, n]
            );
        })(e),
        guildMessaged: (function (e) {
            let t = (0, s.e7)([u.Z], () => (null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null));
            return (function (e) {
                let t = (0, s.e7)([c.default], () => c.default.getId());
                return (0, s.e7)([f.Z], () =>
                    r().some(e, (e) => {
                        let n = f.Z.getMessages(e.id).toArray();
                        return r().some(n, (e) => e.author.id === t && !(0, o.Z)(e));
                    })
                );
            })(i.useMemo(() => (null == t ? [] : r().values(t)), [t]));
        })(e),
        guildPersonalized: (function (e) {
            let t = (0, s.e7)([p.Z], () => p.Z.hasLayers()),
                n = (0, s.e7)([m.Z], () => m.Z.getGuild(null == e ? void 0 : e.id));
            return (null == n ? void 0 : n.icon) != null && !t;
        })(e),
        guildChannelCreated:
            ((t = e),
            (0, s.e7)(
                [d.ZP],
                () => {
                    let e = d.ZP.getChannels(null == t ? void 0 : t.id),
                        n = e[d.Zb];
                    function i(e) {
                        return null != t && C.default.extractTimestamp(e.channel.id) - C.default.extractTimestamp(t.id) > 500;
                    }
                    return e[d.sH].some(i) || n.some(i);
                },
                [t]
            ))
    };
}
