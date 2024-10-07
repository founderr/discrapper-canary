n.d(t, {
    O: function () {
        return N;
    }
}),
    n(536091);
var i = n(904245),
    a = n(339085),
    s = n(957730),
    l = n(285651),
    r = n(268350),
    o = n(926491),
    c = n(373228),
    d = n(430824),
    u = n(594174),
    _ = n(176354),
    E = n(709054),
    I = n(981631),
    m = n(185923);
function T(e) {
    let t = d.Z.getGuild(e);
    return null != t && (t.nsfwLevel === I.V_K.DEFAULT || t.nsfwLevel === I.V_K.SAFE);
}
async function N(e, t) {
    var n, I, N;
    let h = t.getGuildId();
    if (null == h || null == d.Z.getGuild(h)) return;
    let C = u.default.getCurrentUser();
    if (null == C) return;
    await (0, r.$p)();
    let p = Array.from(o.Z.getAllStickersIterator()),
        f = p
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => T(e.guild_id) && (0, l.kl)(e, C, t))
            .sort((e, t) => -E.default.compare(e.id, t.id));
    if (f.length > 5) {
        let a = [f[Math.floor(Math.pow(Math.random(), 2) * f.length)].id];
        i.Z.sendStickers(t.id, a, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let A = d.Z.getGuildIds()
        .filter(T)
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
    if (A.length > 10) {
        let n = A[Math.floor(Math.pow(Math.random(), 2) * A.length)];
        i.Z.sendMessage(t.id, s.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (I = t.getGuildId()) && void 0 !== I ? I : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let g = p.filter((e) => e.type === c.n0.STANDARD),
        S = [g[Math.floor(Math.random() * g.length)].id];
    i.Z.sendStickers(t.id, S, '', {
        messageReference: {
            guild_id: null !== (N = t.getGuildId()) && void 0 !== N ? N : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}
