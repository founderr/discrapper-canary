n.d(t, {
    J: function () {
        return T;
    }
});
var i = n(192379),
    a = n(399606),
    s = n(430198),
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
    f = n(874748),
    h = n(981631);
function T(e, t) {
    let n = (0, I.p$)(),
        T = (0, f.LR)(e),
        N = (0, a.e7)(
            [c.ZP, l.default],
            () => {
                let e = l.default.getId();
                return c.ZP.isMember(null == T ? void 0 : T.guildId, e);
            },
            [T]
        ),
        p = (0, a.e7)([s.Z], () => null != T && (null == T ? void 0 : T.channelId) != null && s.Z.isChannelGated(T.guildId, T.channelId), [T]),
        C = t.hasFlag(h.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: g,
            guild: S,
            parentChannel: A,
            user: x,
            selectedGuildId: R,
            canAccess: v
        } = (0, a.cj)(
            [m.Z, u.Z, o.Z, _.default, d.Z],
            () => {
                var e;
                let t = null === (e = m.Z.getMediaPostEmbed(null == T ? void 0 : T.threadId)) || void 0 === e ? void 0 : e.media,
                    n = u.Z.getGuild(null == T ? void 0 : T.guildId),
                    i = o.Z.getChannel(null == T ? void 0 : T.channelId),
                    a = _.default.getUser(null == t ? void 0 : t.author_id),
                    s = d.Z.getGuildId(),
                    l = null != i && (0, r.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: a,
                    selectedGuildId: s,
                    canAccess: l
                };
            },
            [T]
        ),
        M = i.useMemo(() => {
            let e = (0, f.ku)({
                mediaPostEmbedData: g,
                guild: S,
                parentChannel: A,
                user: x,
                selectedGuildId: R,
                canAccess: v
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: x
                  };
        }, [g, S, A, x, R, v]);
    return (
        i.useEffect(() => {
            if ((null == T ? void 0 : T.threadId) != null) {
                let e = m.Z.getEmbedFetchState(T.threadId);
                !0 === n && e === m.M.NOT_FETCHED && (!N || !1 !== p) && (N || !C) && (0, E.xP)(null == T ? void 0 : T.threadId);
            }
        }, [T, n, N, p, C]),
        M
    );
}
