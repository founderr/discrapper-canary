n.d(t, {
  $U: function() {
return u;
  },
  em: function() {
return c;
  },
  rK: function() {
return _;
  },
  wV: function() {
return d;
  }
}), n(47120), n(724458), n(653041), n(873546), n(442837), n(638395);
var i = n(786761);
n(375954);
var s = n(306680),
  a = n(709054),
  r = n(505369);
n(109911);
var l = n(265164),
  o = n(761080);
async function c(e, t, n) {
  let i = l.Z.getHydratedItems(),
s = e.slice(t, n);
  if (0 === s.length)
return;
  let a = s.filter(e => null == i[e.id]),
c = a.filter(e => e.type === o.Rr.MESSAGE).map(e => ({
  channel_id: e.data.channel_id,
  message_id: e.data.message_id
})),
d = a.filter(e => e.type === o.Rr.SUMMARY).map(e => ({
  guild_id: e.data.guild_id,
  channel_id: e.data.channel_id,
  summary_id: e.data.summary_id
})),
u = a.filter(e => e.type === o.Rr.ACTIVITY).map(e => ({
  user_id: e.data.user_id,
  content_id: e.data.content_id
}));
  await r.Z.fetchHydrated(c, d, u, t, n);
}

function d(e, t) {
  let n = [],
s = [],
a = 0;
  for (let t of e.messages)
if (null != t.reactions) {
  if (n.length < 5)
    for (let e of t.reactions) {
      var r, l;
      (null == e.count_details || (null !== (r = e.count_details.burst) && void 0 !== r ? r : 0) > 0 || (null !== (l = e.count_details.normal) && void 0 !== l ? l : 0) > 0) && n.push(e);
    }
  a += function(e) {
    let t = 0;
    if (null != e.reactions) {
      let n = (null != e.reactions ? e.reactions : []).map(e => {
        var t, n;
        return null == e.count_details ? 0 : (null !== (t = e.count_details.burst) && void 0 !== t ? t : 0) + (null !== (n = e.count_details.normal) && void 0 !== n ? n : 0);
      });
      n.length > 0 && (t = n.reduce((e, t) => e + t));
    }
    return t;
  }(t);
}
  let o = null;
  for (let t of e.messages)
if (null != t.author && o !== t.author.id && (s.push((0, i.e5)(t)), o = t.author.id, s.length >= 3))
  break;
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
messages: s,
reactions: n,
messageIds: e.messages.map(e => e.id),
guildId: t,
reactionCount: a,
numTotalMessages: e.messages.length,
source: e.source
  };
}

function u(e, t) {
  let n = s.ZP.ackMessageId(e);
  return null != n && a.default.extractTimestamp(t) > a.default.extractTimestamp(n);
}

function _(e) {
  return !1;
}