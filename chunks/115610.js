"use strict";
n.r(t), n.d(t, {
  sendRandomStickerOrEmoji: function() {
    return I
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
  f = n("176354"),
  E = n("709054"),
  _ = n("981631"),
  m = n("185923");

function T(e) {
  let t = d.default.getGuild(e);
  return null != t && (t.nsfwLevel === _.GuildNSFWContentLevel.DEFAULT || t.nsfwLevel === _.GuildNSFWContentLevel.SAFE)
}
async function I(e, t) {
  var n, _, I;
  let p = t.getGuildId();
  if (null == p || null == d.default.getGuild(p)) return;
  let h = c.default.getCurrentUser();
  if (null == h) return;
  await (0, r.fetchStickerPacks)();
  let N = Array.from(o.default.getAllStickersIterator()),
    S = N.filter(e => e.type === u.MetaStickerType.GUILD).filter(e => T(e.guild_id) && (0, i.isSendableSticker)(e, h, t)).sort((e, t) => -E.default.compare(e.id, t.id));
  if (S.length > 5) {
    let l = [S[Math.floor(Math.pow(Math.random(), 2) * S.length)].id];
    s.default.sendStickers(t.id, l, "", {
      messageReference: {
        guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let C = d.default.getGuildIds().filter(T).map(e => l.default.getUsableGuildEmoji(e)).flat().filter(e => null == f.default.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: p,
    intention: m.EmojiIntention.CHAT
  })).sort((e, t) => -E.default.compare(e.id, t.id));
  if (C.length > 10) {
    let n = C[Math.floor(Math.pow(Math.random(), 2) * C.length)];
    s.default.sendMessage(t.id, a.default.parse(t, n.allNamesString), !1, {
      messageReference: {
        guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let A = N.filter(e => e.type === u.MetaStickerType.STANDARD),
    g = [A[Math.floor(Math.random() * A.length)].id];
  s.default.sendStickers(t.id, g, "", {
    messageReference: {
      guild_id: null !== (I = t.getGuildId()) && void 0 !== I ? I : void 0,
      channel_id: t.id,
      message_id: e
    }
  })
}