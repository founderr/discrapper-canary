n.d(t, {
    J: function () {
        return I;
    }
});
var r = n(470079),
    i = n(399606),
    a = n(430198),
    o = n(754688),
    s = n(314897),
    l = n(592125),
    u = n(271383),
    c = n(430824),
    d = n(914010),
    _ = n(594174),
    E = n(158222),
    f = n(312146),
    h = n(487554),
    p = n(874748),
    m = n(981631);
function I(e, t) {
    let n = (0, f.p$)(),
        I = (0, p.LR)(e),
        T = (0, i.e7)(
            [u.ZP, s.default],
            () => {
                let e = s.default.getId();
                return u.ZP.isMember(null == I ? void 0 : I.guildId, e);
            },
            [I]
        ),
        g = (0, i.e7)([a.Z], () => null != I && (null == I ? void 0 : I.channelId) != null && a.Z.isChannelGated(I.guildId, I.channelId), [I]),
        S = t.hasFlag(m.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: A,
            guild: v,
            parentChannel: N,
            user: O,
            selectedGuildId: R,
            canAccess: C
        } = (0, i.cj)(
            [h.Z, c.Z, l.Z, _.default, d.Z],
            () => {
                var e;
                let t = null === (e = h.Z.getMediaPostEmbed(null == I ? void 0 : I.threadId)) || void 0 === e ? void 0 : e.media,
                    n = c.Z.getGuild(null == I ? void 0 : I.guildId),
                    r = l.Z.getChannel(null == I ? void 0 : I.channelId),
                    i = _.default.getUser(null == t ? void 0 : t.author_id),
                    a = d.Z.getGuildId(),
                    s = null != r && (0, o.YO)(r);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: r,
                    user: i,
                    selectedGuildId: a,
                    canAccess: s
                };
            },
            [I]
        ),
        y = r.useMemo(() => {
            let e = (0, p.ku)({
                mediaPostEmbedData: A,
                guild: v,
                parentChannel: N,
                user: O,
                selectedGuildId: R,
                canAccess: C
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: O
                  };
        }, [A, v, N, O, R, C]);
    return (
        r.useEffect(() => {
            if ((null == I ? void 0 : I.threadId) != null) {
                let e = h.Z.getEmbedFetchState(I.threadId);
                !0 === n && e === h.M.NOT_FETCHED && (!T || !1 !== g) && (T || !S) && (0, E.xP)(null == I ? void 0 : I.threadId);
            }
        }, [I, n, T, g, S]),
        y
    );
}
