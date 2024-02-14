"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var u = n("917351"),
  l = n.n(u),
  i = n("446674"),
  d = n("913144"),
  r = n("398604"),
  a = n("813006"),
  s = n("730647");
let E = !1,
  c = {},
  o = {},
  f = {},
  _ = e => (f[e.guild_scheduled_event.id] = new a.default(e.guild_scheduled_event.guild), o[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
    channelId: e.directory_channel_id,
    scheduledEventId: e.entity_id,
    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
    authorId: e.author_id,
    createdAt: e.created_at
  });
class v extends i.default.Store {
  isFetching() {
    return E
  }
  getEventDirectoryEntries(e) {
    if (null != e) return c[e]
  }
  getCachedGuildByEventId(e) {
    var t;
    return null !== (t = f[e]) && void 0 !== t ? t : void 0
  }
  getCachedGuildScheduledEventById(e) {
    var t;
    return null !== (t = o[e]) && void 0 !== t ? t : void 0
  }
}
v.displayName = "EventDirectoryStore";
var S = new v(d.default, {
  EVENT_DIRECTORY_FETCH_START: function() {
    E = !0
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    E = !1;
    let u = l.sortBy([...n], [function(e) {
        return (0, r.scheduledEventSort)(e.guild_scheduled_event)
      }]),
      i = l.map(u, _);
    c[t] = i
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    E = !1
  }
})