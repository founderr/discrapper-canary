"use strict";
n.r(t), n.d(t, {
  sendRandomStickerOrEmoji: function() {
    return m
  }
}), n("834022");
var s = n("249654"),
  l = n("819689"),
  a = n("385976"),
  i = n("884351"),
  r = n("866353"),
  o = n("467094"),
  u = n("364685"),
  d = n("161585"),
  c = n("305961"),
  E = n("697218"),
  f = n("402671"),
  _ = n("49111"),
  T = n("958706");

function I(e) {
  let t = c.default.getGuild(e);
  return null != t && (t.nsfwLevel === _.GuildNSFWContentLevel.DEFAULT || t.nsfwLevel === _.GuildNSFWContentLevel.SAFE)
}
async function m(e, t) {
  var n, _, m;
  let N = t.getGuildId();
  if (null == N) return;
  let p = c.default.getGuild(N);
  if (null == p) return;
  let A = E.default.getCurrentUser();
  if (null == A) return;
  await (0, o.fetchStickerPacks)();
  let S = Array.from(u.default.getAllStickersIterator()),
    C = S.filter(e => e.type === d.MetaStickerType.GUILD),
    h = C.filter(e => I(e.guild_id) && (0, r.isSendableSticker)(e, A, t)).sort((e, t) => -s.default.compare(e.id, t.id));
  if (h.length > 5) {
    let s = [h[Math.floor(Math.pow(Math.random(), 2) * h.length)].id];
    l.default.sendStickers(t.id, s, "", {
      messageReference: {
        guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let g = c.default.getGuilds(),
    M = Object.keys(g).filter(I).map(e => a.default.getUsableGuildEmoji(e)).flat().filter(e => null == f.default.getEmojiUnavailableReason({
      emoji: e,
      channel: t,
      guildId: N,
      intention: T.EmojiIntention.CHAT
    })).sort((e, t) => -s.default.compare(e.id, t.id));
  if (M.length > 10) {
    let n = M[Math.floor(Math.pow(Math.random(), 2) * M.length)];
    l.default.sendMessage(t.id, i.default.parse(t, n.allNamesString), !1, {
      messageReference: {
        guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let O = S.filter(e => e.type === d.MetaStickerType.STANDARD),
    R = [O[Math.floor(Math.random() * O.length)].id];
  l.default.sendStickers(t.id, R, "", {
    messageReference: {
      guild_id: null !== (m = t.getGuildId()) && void 0 !== m ? m : void 0,
      channel_id: t.id,
      message_id: e
    }
  })
}