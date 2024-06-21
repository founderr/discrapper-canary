"use strict";
n.d(t, {
  $U: function() {
    return _
  },
  es: function() {
    return l
  },
  rK: function() {
    return c
  },
  wV: function() {
    return u
  }
}), n(653041), n(724458), n(47120), n(442837), n(638395);
var i = n(786761);
n(375954);
var r = n(306680),
  s = n(709054),
  o = n(505369);
n(109911), n(265164);
var a = n(761080);
async function l(e, t) {
  let n = [];
  for (let i = 0; i < t.length && (null == e[t[i].id] && n.push(t[i]), !(n.length >= 15)); i++);
  if (n.length > 0) {
    let e = n.filter(e => e.type === a.Rr.MESSAGE).map(e => ({
        channel_id: e.data.channel_id,
        message_id: e.data.message_id
      })),
      t = n.filter(e => e.type === a.Rr.SUMMARY).map(e => ({
        guild_id: e.data.guild_id,
        channel_id: e.data.channel_id,
        summary_id: e.data.summary_id
      })),
      i = n.filter(e => e.type === a.Rr.ACTIVITY).map(e => ({
        user_id: e.data.user_id,
        outbox_content_id: e.data.outbox_content_id
      }));
    await o.Z.fetchHydrated(e, t, i)
  }
}

function u(e, t) {
  let n = [],
    r = [],
    s = 0;
  for (let t of e.messages)
    if (null != t.reactions) {
      if (n.length < 5)
        for (let e of t.reactions) {
          var o, a;
          (null == e.count_details || (null !== (o = e.count_details.burst) && void 0 !== o ? o : 0) > 0 || (null !== (a = e.count_details.normal) && void 0 !== a ? a : 0) > 0) && n.push(e)
        }
      s += function(e) {
        let t = 0;
        if (null != e.reactions) {
          let n = (null != e.reactions ? e.reactions : []).map(e => {
            var t, n;
            return null == e.count_details ? 0 : (null !== (t = e.count_details.burst) && void 0 !== t ? t : 0) + (null !== (n = e.count_details.normal) && void 0 !== n ? n : 0)
          });
          n.length > 0 && (t = n.reduce((e, t) => e + t))
        }
        return t
      }(t)
    } let l = null;
  for (let t of e.messages)
    if (null != t.author && l !== t.author.id && (r.push((0, i.e5)(t)), l = t.author.id, r.length >= 3)) break;
  return {
    id: e.id,
    topic: e.topic,
    summShort: e.summ_short,
    people: Array.from(new Set(e.people)),
    startId: e.start_id,
    endId: e.end_id,
    count: e.count,
    channelId: e.channel_id,
    type: e.type,
    messages: r,
    reactions: n,
    messageIds: e.messages.map(e => e.id),
    guildId: t,
    reactionCount: s,
    numTotalMessages: e.messages.length,
    source: e.source
  }
}

function _(e, t) {
  let n = r.ZP.ackMessageId(e);
  return null != n && s.default.extractTimestamp(t) > s.default.extractTimestamp(n)
}

function c(e) {
  return !1
}