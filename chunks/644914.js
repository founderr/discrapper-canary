n.d(t, {
    TE: function () {
        return _;
    },
    h_: function () {
        return v;
    }
}),
    n(47120);
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(442837),
    s = n(159300),
    o = n(901461),
    c = n(314897),
    d = n(592125),
    u = n(984933),
    h = n(650774),
    p = n(430824),
    m = n(819640),
    f = n(375954),
    g = n(496675),
    C = n(709054),
    x = n(981631);
function _(e, t) {
    return (0, a.cj)(
        [g.Z],
        () => ({
            canInvite: (0, s.b)(g.Z, t, e),
            canManageGuild: null != t && g.Z.can(x.Plq.MANAGE_GUILD, t),
            canMessage: null != e && g.Z.can(x.Plq.SEND_MESSAGES, e),
            canCreateChannel: null != t && g.Z.can(x.Plq.MANAGE_CHANNELS, t)
        }),
        [t, e]
    );
}
function v(e) {
    var t;
    return {
        guildPopulated: (function (e) {
            let t = (0, a.e7)([d.Z], () => d.Z.getChannel(null == e ? void 0 : e.systemChannelId)),
                n = (0, a.Wu)([f.Z], () => (null != t ? f.Z.getMessages(t.id).toArray() : []));
            return (0, a.e7)(
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
            let t = (0, a.e7)([d.Z], () => (null != e ? d.Z.getMutableBasicGuildChannelsForGuild(e.id) : null));
            return (function (e) {
                let t = (0, a.e7)([c.default], () => c.default.getId());
                return (0, a.e7)([f.Z], () =>
                    r().some(e, (e) => {
                        let n = f.Z.getMessages(e.id).toArray();
                        return r().some(n, (e) => e.author.id === t && !(0, o.Z)(e));
                    })
                );
            })(i.useMemo(() => (null == t ? [] : r().values(t)), [t]));
        })(e),
        guildPersonalized: (function (e) {
            let t = (0, a.e7)([m.Z], () => m.Z.hasLayers()),
                n = (0, a.e7)([p.Z], () => p.Z.getGuild(null == e ? void 0 : e.id));
            return (null == n ? void 0 : n.icon) != null && !t;
        })(e),
        guildChannelCreated:
            ((t = e),
            (0, a.e7)(
                [u.ZP],
                () => {
                    let e = u.ZP.getChannels(null == t ? void 0 : t.id),
                        n = e[u.Zb];
                    function i(e) {
                        return null != t && C.default.extractTimestamp(e.channel.id) - C.default.extractTimestamp(t.id) > 500;
                    }
                    return e[u.sH].some(i) || n.some(i);
                },
                [t]
            ))
    };
}
