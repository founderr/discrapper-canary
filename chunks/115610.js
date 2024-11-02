n.d(t, {
    O: function () {
        return T;
    }
}),
    n(536091);
var i = n(904245),
    a = n(339085),
    s = n(957730),
    r = n(285651),
    l = n(268350),
    o = n(926491),
    c = n(373228),
    u = n(430824),
    d = n(594174),
    _ = n(176354),
    E = n(709054),
    I = n(981631),
    m = n(185923);
function f(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === I.V_K.DEFAULT || t.nsfwLevel === I.V_K.SAFE);
}
async function T(e, t) {
    var n, I, T;
    let h = t.getGuildId();
    if (null == h || null == u.Z.getGuild(h)) return;
    let N = d.default.getCurrentUser();
    if (null == N) return;
    await (0, l.$p)();
    let p = Array.from(o.Z.getAllStickersIterator()),
        C = p
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => f(e.guild_id) && (0, r.kl)(e, N, t))
            .sort((e, t) => -E.default.compare(e.id, t.id));
    if (C.length > 5) {
        let a = [C[Math.floor(Math.pow(Math.random(), 2) * C.length)].id];
        i.Z.sendStickers(t.id, a, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let g = u.Z.getGuildIds()
        .filter(f)
        .map((e) => a.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                _.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: h,
                    intention: m.Hz.CHAT
                })
        )
        .sort((e, t) => -E.default.compare(e.id, t.id));
    if (g.length > 10) {
        let n = g[Math.floor(Math.pow(Math.random(), 2) * g.length)];
        i.Z.sendMessage(t.id, s.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (I = t.getGuildId()) && void 0 !== I ? I : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let S = p.filter((e) => e.type === c.n0.STANDARD),
        A = [S[Math.floor(Math.random() * S.length)].id];
    i.Z.sendStickers(t.id, A, '', {
        messageReference: {
            guild_id: null !== (T = t.getGuildId()) && void 0 !== T ? T : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}
