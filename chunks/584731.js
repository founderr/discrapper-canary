"use strict";
a.r(t), a("47120");
var n = a("445346"),
  s = a("570140"),
  l = a("513418"),
  i = a("710845"),
  r = a("57132"),
  o = a("592125"),
  u = a("375954"),
  d = a("625236");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = -1 / 0,
  E = new i.default("MessagePreviewStore");
class h extends n.Store {
  isLatest(e, t) {
    var a;
    let n = this.guilds.get(null != e ? e : null);
    return null !== (a = null == n ? void 0 : n.isLatest(t, this.generation)) && void 0 !== a && a
  }
  isLocalFetchNeeded(e) {
    var t, a;
    return null === (a = null === (t = this.guilds.get(e)) || void 0 === t ? void 0 : t.localNeeded) || void 0 === a || a
  }
  message(e, t) {
    var a, n;
    return null !== (n = null === (a = this.guilds.get(e)) || void 0 === a ? void 0 : a.messageRecord(t)) && void 0 !== n ? n : null
  }
  data(e) {
    return !this.guilds.has(e) && this.guilds.set(e, new d.PreviewData), this.guilds.get(e)
  }
  handleOneGuildCreate(e) {
    var t, a;
    let n = this.data(e.id);
    n.putMany(null !== (t = e.lastMessages) && void 0 !== t ? t : [], this.generation), n.putMany(null !== (a = e.threadMessages) && void 0 !== a ? a : [], this.generation), null != e.lastMessages && (n.localNeeded = !1)
  }
  handleConnectionOpen(e) {
    if (!(0, r.isInMainTabsExperiment)()) return !1;
    for (let t of (this.generation += 1, e.guilds)) this.handleOneGuildCreate(t)
  }
  handleGuildCreate(e) {
    if (!(0, r.isInMainTabsExperiment)()) return !1;
    this.handleOneGuildCreate(e.guild)
  }
  handleGuildDelete(e) {
    if (!(0, r.isInMainTabsExperiment)()) return !1;
    this.guilds.delete(e.guild.id)
  }
  handleMessageCreate(e) {
    var t;
    if (!(0, r.isInMainTabsExperiment)() || e.optimistic || e.isPushNotification) return !1;
    this.data(null !== (t = e.guildId) && void 0 !== t ? t : null).put(e.message.channel_id, e.message, this.generation)
  }
  handleMessageDelete(e) {
    var t, a;
    if (!(0, r.isInMainTabsExperiment)()) return !1;
    let n = null !== (a = e.guildId) && void 0 !== a ? a : null;
    if ((null === (t = this.data(n)) || void 0 === t ? void 0 : t.messageId(e.channelId)) === e.id) {
      let t = u.default.getMessages(e.channelId),
        a = t.hasMoreAfter ? null : t.last();
      null != a ? this.data(n).put(e.channelId, a, this.generation) : this.data(n).delete(e.channelId)
    }
  }
  handleMessageUpdate(e) {
    var t;
    if (!(0, r.isInMainTabsExperiment)()) return;
    let a = null !== (t = e.guildId) && void 0 !== t ? t : null,
      n = e.message.channel_id,
      s = e.message.id;
    if (null == n || null == s) return !1;
    let l = this.data(a);
    if ((null == l ? void 0 : l.messageId(n)) !== s) return !1;
    null == l || l.update(e.message)
  }
  handleThreadListSync(e) {
    var t;
    if (!(0, r.isInMainTabsExperiment)()) return !1;
    this.data(e.guildId).putMany(null !== (t = e.mostRecentMessages) && void 0 !== t ? t : [], this.generation)
  }
  handleLoadMessagesSuccess(e) {
    if (!(0, r.isInMainTabsExperiment)()) return;
    let t = o.default.getBasicChannel(e.channelId);
    if (null != t) {
      var a;
      (0, l.requireSortedDescending)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (a = e.messages[0]) && void 0 !== a ? a : null, this.generation)
    }
  }
  handleLocalMessagesLoaded(e) {
    if (!(0, r.isInMainTabsExperiment)()) return;
    let t = o.default.getBasicChannel(e.channelId);
    if (null != t) {
      var a;
      (0, l.requireSortedDescending)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (a = e.messages[0]) && void 0 !== a ? a : null, f)
    }
  }
  handleMessagePreviewsLoaded(e) {
    if (!(0, r.isInMainTabsExperiment)()) return;
    E.verbose("adding remote previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
    let t = this.data(e.guildId);
    for (let a of e.messages) !t.isLatest(a.channel_id, this.generation) && t.put(a.channel_id, a, this.generation)
  }
  handleMessagePreviewsLocallyLoaded(e) {
    if (!(0, r.isInMainTabsExperiment)()) return;
    E.verbose("adding local previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
    let t = this.data(e.guildId);
    for (let [a, n] of e.messages) !t.has(a) && t.put(a, n, f);
    t.localNeeded = !1
  }
  handleLogout(e) {
    this.guilds.clear()
  }
  constructor() {
    super(s.default, {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      GUILD_CREATE: e => this.handleGuildCreate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      LOAD_MESSAGES_SUCCESS: e => this.handleLoadMessagesSuccess(e),
      LOCAL_MESSAGES_LOADED: e => this.handleLocalMessagesLoaded(e),
      LOGOUT: e => this.handleLogout(e),
      MESSAGE_CREATE: e => this.handleMessageCreate(e),
      MESSAGE_DELETE: e => this.handleMessageDelete(e),
      MESSAGE_PREVIEWS_LOADED: e => this.handleMessagePreviewsLoaded(e),
      MESSAGE_PREVIEWS_LOCALLY_LOADED: e => this.handleMessagePreviewsLocallyLoaded(e),
      MESSAGE_UPDATE: e => this.handleMessageUpdate(e),
      THREAD_LIST_SYNC: e => this.handleThreadListSync(e)
    }), c(this, "guilds", new Map), c(this, "generation", 0)
  }
}
new h