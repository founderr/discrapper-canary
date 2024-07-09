n.d(t, {
    J: function () {
        return N;
    }
});
var i = n(470079), a = n(399606), s = n(430198), r = n(754688), l = n(314897), o = n(592125), c = n(271383), d = n(430824), u = n(914010), _ = n(594174), E = n(158222), m = n(312146), I = n(487554), T = n(874748), h = n(981631);
function N(e, t) {
    let n = (0, m.p$)(), N = (0, T.LR)(e), p = (0, a.e7)([
            c.ZP,
            l.default
        ], () => {
            let e = l.default.getId();
            return c.ZP.isMember(null == N ? void 0 : N.guildId, e);
        }, [N]), f = (0, a.e7)([s.Z], () => null != N && (null == N ? void 0 : N.channelId) != null && s.Z.isChannelGated(N.guildId, N.channelId), [N]), C = t.hasFlag(h.iLy.IS_CROSSPOST), {
            rawMediaPostEmbedData: g,
            guild: S,
            parentChannel: A,
            user: x,
            selectedGuildId: R,
            canAccess: O
        } = (0, a.cj)([
            I.Z,
            d.Z,
            o.Z,
            _.default,
            u.Z
        ], () => {
            var e;
            let t = null === (e = I.Z.getMediaPostEmbed(null == N ? void 0 : N.threadId)) || void 0 === e ? void 0 : e.media, n = d.Z.getGuild(null == N ? void 0 : N.guildId), i = o.Z.getChannel(null == N ? void 0 : N.channelId), a = _.default.getUser(null == t ? void 0 : t.author_id), s = u.Z.getGuildId(), l = null != i && (0, r.YO)(i);
            return {
                rawMediaPostEmbedData: t,
                guild: n,
                parentChannel: i,
                user: a,
                selectedGuildId: s,
                canAccess: l
            };
        }, [N]), M = i.useMemo(() => {
            let e = (0, T.ku)({
                mediaPostEmbedData: g,
                guild: S,
                parentChannel: A,
                user: x,
                selectedGuildId: R,
                canAccess: O
            });
            return null == e ? null : {
                ...e,
                user: x
            };
        }, [
            g,
            S,
            A,
            x,
            R,
            O
        ]);
    return i.useEffect(() => {
        if ((null == N ? void 0 : N.threadId) != null) {
            let e = I.Z.getEmbedFetchState(N.threadId);
            !0 === n && e === I.M.NOT_FETCHED && (!p || !1 !== f) && (p || !C) && (0, E.xP)(null == N ? void 0 : N.threadId);
        }
    }, [
        N,
        n,
        p,
        f,
        C
    ]), M;
}
