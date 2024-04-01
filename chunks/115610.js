"use strict";
n.r(t), n.d(t, {
  sendRandomStickerOrEmoji: function() {
    return m
  }
}), n("536091");
var s = n("904245"),
  l = n("339085"),
  a = n("957730"),
  i = n("285651"),
  r = n("268350"),
  o = n("926491"),
  u = n("373228"),
  d = n("430824"),
  c = n("594174"),
  E = n("176354"),
  f = n("709054"),
  _ = n("981631"),
  T = n("185923");

function I(e) {
  let t = d.default.getGuild(e);
  return null != t && (t.nsfwLevel === _.GuildNSFWContentLevel.DEFAULT || t.nsfwLevel === _.GuildNSFWContentLevel.SAFE)
}
async function m(e, t) {
  var n, _, m;
  let N = t.getGuildId();
  if (null == N || null == d.default.getGuild(N)) return;
  let p = c.default.getCurrentUser();
  if (null == p) return;
  await (0, r.fetchStickerPacks)();
  let S = Array.from(o.default.getAllStickersIterator()),
    C = S.filter(e => e.type === u.MetaStickerType.GUILD).filter(e => I(e.guild_id) && (0, i.isSendableSticker)(e, p, t)).sort((e, t) => -f.default.compare(e.id, t.id));
  if (C.length > 5) {
    let l = [C[Math.floor(Math.pow(Math.random(), 2) * C.length)].id];
    s.default.sendStickers(t.id, l, "", {
      messageReference: {
        guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let A = d.default.getGuildIds().filter(I).map(e => l.default.getUsableGuildEmoji(e)).flat().filter(e => null == E.default.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: N,
    intention: T.EmojiIntention.CHAT
  })).sort((e, t) => -f.default.compare(e.id, t.id));
  if (A.length > 10) {
    let n = A[Math.floor(Math.pow(Math.random(), 2) * A.length)];
    s.default.sendMessage(t.id, a.default.parse(t, n.allNamesString), !1, {
      messageReference: {
        guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let h = S.filter(e => e.type === u.MetaStickerType.STANDARD),
    g = [h[Math.floor(Math.random() * h.length)].id];
  s.default.sendStickers(t.id, g, "", {
    messageReference: {
      guild_id: null !== (m = t.getGuildId()) && void 0 !== m ? m : void 0,
      channel_id: t.id,
      message_id: e
    }
  })
}