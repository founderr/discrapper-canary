n.d(t, {
  $U: function() {
return h;
  },
  Jb: function() {
return i;
  },
  cn: function() {
return u;
  },
  em: function() {
return _;
  },
  rK: function() {
return I;
  },
  wV: function() {
return E;
  }
}), n(47120), n(724458), n(653041), n(873546), n(442837), n(638395);
var i, s, a = n(786761);
n(375954);
var r = n(306680),
  l = n(709054),
  o = n(505369);
n(109911);
var c = n(265164),
  d = n(761080);

function u(e) {
  return e < -0.9 ? 3 : e < 0 ? 2 : e > 0 ? 1 : 0;
}
async function _(e, t, n) {
let i = c.Z.getHydratedItems(),
  s = e.slice(t, n);
if (0 === s.length)
  return;
let a = s.filter(e => null == i[e.id]),
  r = a.filter(e => e.type === d.Rr.MESSAGE).map(e => ({
    channel_id: e.data.channel_id,
    message_id: e.data.message_id
  })),
  l = a.filter(e => e.type === d.Rr.SUMMARY).map(e => ({
    guild_id: e.data.guild_id,
    channel_id: e.data.channel_id,
    summary_id: e.data.summary_id
  })),
  u = a.filter(e => e.type === d.Rr.ACTIVITY).map(e => ({
    user_id: e.data.user_id,
    content_id: e.data.content_id
  }));
await o.Z.fetchHydrated(r, l, u, t, n);
  }
  (s = i || (i = {}))[s.DEFAULT = 0] = 'DEFAULT', s[s.MORE_FROM_GUILD = 1] = 'MORE_FROM_GUILD', s[s.LESS_FROM_GUILD = 2] = 'LESS_FROM_GUILD', s[s.MUTED_GUILD = 3] = 'MUTED_GUILD';

function E(e, t) {
  let n = [],
i = [],
s = 0;
  for (let t of e.messages)
if (null != t.reactions) {
  if (n.length < 5)
    for (let e of t.reactions) {
      var r, l;
      (null == e.count_details || (null !== (r = e.count_details.burst) && void 0 !== r ? r : 0) > 0 || (null !== (l = e.count_details.normal) && void 0 !== l ? l : 0) > 0) && n.push(e);
    }
  s += function(e) {
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
if (null != t.author && o !== t.author.id && (i.push((0, a.e5)(t)), o = t.author.id, i.length >= 3))
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
messages: i,
reactions: n,
messageIds: e.messages.map(e => e.id),
guildId: t,
reactionCount: s,
numTotalMessages: e.messages.length,
source: e.source
  };
}

function h(e, t) {
  let n = r.ZP.ackMessageId(e);
  return null != n && l.default.extractTimestamp(t) > l.default.extractTimestamp(n);
}

function I(e) {
  return !1;
}