n.d(t, {
    J: function () {
        return h;
    }
});
var i = n(470079),
    a = n(399606),
    s = n(430198),
    l = n(754688),
    r = n(314897),
    o = n(592125),
    c = n(271383),
    d = n(430824),
    u = n(914010),
    _ = n(594174),
    E = n(158222),
    I = n(312146),
    m = n(487554),
    T = n(874748),
    N = n(981631);
function h(e, t) {
    let n = (0, I.p$)(),
        h = (0, T.LR)(e),
        C = (0, a.e7)(
            [c.ZP, r.default],
            () => {
                let e = r.default.getId();
                return c.ZP.isMember(null == h ? void 0 : h.guildId, e);
            },
            [h]
        ),
        f = (0, a.e7)([s.Z], () => null != h && (null == h ? void 0 : h.channelId) != null && s.Z.isChannelGated(h.guildId, h.channelId), [h]),
        p = t.hasFlag(N.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: g,
            guild: A,
            parentChannel: S,
            user: M,
            selectedGuildId: O,
            canAccess: x
        } = (0, a.cj)(
            [m.Z, d.Z, o.Z, _.default, u.Z],
            () => {
                var e;
                let t = null === (e = m.Z.getMediaPostEmbed(null == h ? void 0 : h.threadId)) || void 0 === e ? void 0 : e.media,
                    n = d.Z.getGuild(null == h ? void 0 : h.guildId),
                    i = o.Z.getChannel(null == h ? void 0 : h.channelId),
                    a = _.default.getUser(null == t ? void 0 : t.author_id),
                    s = u.Z.getGuildId(),
                    r = null != i && (0, l.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: a,
                    selectedGuildId: s,
                    canAccess: r
                };
            },
            [h]
        ),
        R = i.useMemo(() => {
            let e = (0, T.ku)({
                mediaPostEmbedData: g,
                guild: A,
                parentChannel: S,
                user: M,
                selectedGuildId: O,
                canAccess: x
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: M
                  };
        }, [g, A, S, M, O, x]);
    return (
        i.useEffect(() => {
            if ((null == h ? void 0 : h.threadId) != null) {
                let e = m.Z.getEmbedFetchState(h.threadId);
                !0 === n && e === m.M.NOT_FETCHED && (!C || !1 !== f) && (C || !p) && (0, E.xP)(null == h ? void 0 : h.threadId);
            }
        }, [h, n, C, f, p]),
        R
    );
}
