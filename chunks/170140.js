n.d(t, {
    J: function () {
        return C;
    }
});
var i = n(192379),
    r = n(399606),
    l = n(430198),
    a = n(754688),
    o = n(314897),
    s = n(592125),
    c = n(271383),
    d = n(430824),
    u = n(914010),
    m = n(594174),
    h = n(158222),
    f = n(312146),
    p = n(487554),
    g = n(874748),
    _ = n(981631);
function C(e, t) {
    let n = (0, f.p$)(),
        C = (0, g.LR)(e),
        E = (0, r.e7)(
            [c.ZP, o.default],
            () => {
                let e = o.default.getId();
                return c.ZP.isMember(null == C ? void 0 : C.guildId, e);
            },
            [C]
        ),
        I = (0, r.e7)([l.Z], () => null != C && (null == C ? void 0 : C.channelId) != null && l.Z.isChannelGated(C.guildId, C.channelId), [C]),
        x = t.hasFlag(_.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: v,
            guild: N,
            parentChannel: T,
            user: S,
            selectedGuildId: b,
            canAccess: A
        } = (0, r.cj)(
            [p.Z, d.Z, s.Z, m.default, u.Z],
            () => {
                var e;
                let t = null === (e = p.Z.getMediaPostEmbed(null == C ? void 0 : C.threadId)) || void 0 === e ? void 0 : e.media,
                    n = d.Z.getGuild(null == C ? void 0 : C.guildId),
                    i = s.Z.getChannel(null == C ? void 0 : C.channelId),
                    r = m.default.getUser(null == t ? void 0 : t.author_id),
                    l = u.Z.getGuildId(),
                    o = null != i && (0, a.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: r,
                    selectedGuildId: l,
                    canAccess: o
                };
            },
            [C]
        ),
        j = i.useMemo(() => {
            let e = (0, g.ku)({
                mediaPostEmbedData: v,
                guild: N,
                parentChannel: T,
                user: S,
                selectedGuildId: b,
                canAccess: A
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: S
                  };
        }, [v, N, T, S, b, A]);
    return (
        i.useEffect(() => {
            if ((null == C ? void 0 : C.threadId) != null) {
                let e = p.Z.getEmbedFetchState(C.threadId);
                !0 === n && e === p.M.NOT_FETCHED && (!E || !1 !== I) && (E || !x) && (0, h.xP)(null == C ? void 0 : C.threadId);
            }
        }, [C, n, E, I, x]),
        j
    );
}
