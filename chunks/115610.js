n.d(t, {
  O: function() {
    return m
  }
}), n(536091);
var s = n(904245),
  i = n(339085),
  l = n(957730),
  a = n(285651),
  r = n(268350),
  o = n(926491),
  c = n(373228),
  u = n(430824),
  d = n(594174),
  E = n(176354),
  _ = n(709054),
  I = n(981631),
  T = n(185923);

function N(e) {
  let t = u.Z.getGuild(e);
  return null != t && (t.nsfwLevel === I.V_K.DEFAULT || t.nsfwLevel === I.V_K.SAFE)
}
async function m(e, t) {
  var n, I, m;
  let h = t.getGuildId();
  if (null == h || null == u.Z.getGuild(h)) return;
  let C = d.default.getCurrentUser();
  if (null == C) return;
  await (0, r.$p)();
  let S = Array.from(o.Z.getAllStickersIterator()),
    A = S.filter(e => e.type === c.n0.GUILD).filter(e => N(e.guild_id) && (0, a.kl)(e, C, t)).sort((e, t) => -_.default.compare(e.id, t.id));
  if (A.length > 5) {
    let i = [A[Math.floor(Math.pow(Math.random(), 2) * A.length)].id];
    s.Z.sendStickers(t.id, i, "", {
      messageReference: {
        guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let p = u.Z.getGuildIds().filter(N).map(e => i.Z.getUsableGuildEmoji(e)).flat().filter(e => null == E.ZP.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: h,
    intention: T.Hz.CHAT
  })).sort((e, t) => -_.default.compare(e.id, t.id));
  if (p.length > 10) {
    let n = p[Math.floor(Math.pow(Math.random(), 2) * p.length)];
    s.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), !1, {
      messageReference: {
        guild_id: null !== (I = t.getGuildId()) && void 0 !== I ? I : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let g = S.filter(e => e.type === c.n0.STANDARD),
    f = [g[Math.floor(Math.random() * g.length)].id];
  s.Z.sendStickers(t.id, f, "", {
    messageReference: {
      guild_id: null !== (m = t.getGuildId()) && void 0 !== m ? m : void 0,
      channel_id: t.id,
      message_id: e
    }
  })
}