n.d(t, {
    J: function () {
        return h;
    }
});
var i = n(470079),
    s = n(399606),
    a = n(430198),
    r = n(754688),
    l = n(314897),
    o = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(914010),
    _ = n(594174),
    E = n(158222),
    I = n(312146),
    m = n(487554),
    T = n(874748),
    N = n(981631);
function h(e, t) {
    let n = (0, I.p$)(),
        h = (0, T.LR)(e),
        C = (0, s.e7)(
            [c.ZP, l.default],
            () => {
                let e = l.default.getId();
                return c.ZP.isMember(null == h ? void 0 : h.guildId, e);
            },
            [h]
        ),
        f = (0, s.e7)([a.Z], () => null != h && (null == h ? void 0 : h.channelId) != null && a.Z.isChannelGated(h.guildId, h.channelId), [h]),
        p = t.hasFlag(N.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: g,
            guild: S,
            parentChannel: A,
            user: R,
            selectedGuildId: O,
            canAccess: x
        } = (0, s.cj)(
            [m.Z, u.Z, o.Z, _.default, d.Z],
            () => {
                var e;
                let t = null === (e = m.Z.getMediaPostEmbed(null == h ? void 0 : h.threadId)) || void 0 === e ? void 0 : e.media,
                    n = u.Z.getGuild(null == h ? void 0 : h.guildId),
                    i = o.Z.getChannel(null == h ? void 0 : h.channelId),
                    s = _.default.getUser(null == t ? void 0 : t.author_id),
                    a = d.Z.getGuildId(),
                    l = null != i && (0, r.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: s,
                    selectedGuildId: a,
                    canAccess: l
                };
            },
            [h]
        ),
        M = i.useMemo(() => {
            let e = (0, T.ku)({
                mediaPostEmbedData: g,
                guild: S,
                parentChannel: A,
                user: R,
                selectedGuildId: O,
                canAccess: x
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: R
                  };
        }, [g, S, A, R, O, x]);
    return (
        i.useEffect(() => {
            if ((null == h ? void 0 : h.threadId) != null) {
                let e = m.Z.getEmbedFetchState(h.threadId);
                !0 === n && e === m.M.NOT_FETCHED && (!C || !1 !== f) && (C || !p) && (0, E.xP)(null == h ? void 0 : h.threadId);
            }
        }, [h, n, C, f, p]),
        M
    );
}
