n.d(t, {
    O: function () {
        return g;
    }
});
var r = n(536091);
var i = n(904245),
    a = n(339085),
    o = n(957730),
    s = n(285651),
    l = n(268350),
    u = n(926491),
    c = n(373228),
    d = n(430824),
    _ = n(594174),
    E = n(176354),
    f = n(709054),
    h = n(981631),
    p = n(185923);
let m = 5,
    I = 10;
function T(e) {
    let t = d.Z.getGuild(e);
    return null != t && (t.nsfwLevel === h.V_K.DEFAULT || t.nsfwLevel === h.V_K.SAFE);
}
async function g(e, t) {
    var n, r, h;
    let g = t.getGuildId();
    if (null == g || null == d.Z.getGuild(g)) return;
    let S = _.default.getCurrentUser();
    if (null == S) return;
    await (0, l.$p)();
    let A = Array.from(u.Z.getAllStickersIterator()),
        v = A.filter((e) => e.type === c.n0.GUILD)
            .filter((e) => T(e.guild_id) && (0, s.kl)(e, S, t))
            .sort((e, t) => -f.default.compare(e.id, t.id));
    if (v.length > m) {
        let r = [v[Math.floor(Math.pow(Math.random(), 2) * v.length)].id];
        i.Z.sendStickers(t.id, r, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let N = d.Z.getGuildIds()
        .filter(T)
        .map((e) => a.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                E.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: g,
                    intention: p.Hz.CHAT
                })
        )
        .sort((e, t) => -f.default.compare(e.id, t.id));
    if (N.length > I) {
        let n = N[Math.floor(Math.pow(Math.random(), 2) * N.length)];
        i.Z.sendMessage(t.id, o.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (r = t.getGuildId()) && void 0 !== r ? r : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let O = A.filter((e) => e.type === c.n0.STANDARD),
        R = [O[Math.floor(Math.random() * O.length)].id];
    i.Z.sendStickers(t.id, R, '', {
        messageReference: {
            guild_id: null !== (h = t.getGuildId()) && void 0 !== h ? h : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}
