n(47120);
var s = n(445346),
  i = n(570140),
  l = n(513418),
  a = n(710845),
  r = n(57132),
  o = n(592125),
  c = n(375954),
  u = n(625236);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = -1 / 0,
  h = new a.Z("MessagePreviewStore");
class _ extends s.y {
  isLatest(e, t) {
    var n;
    let s = this.guilds.get(null != e ? e : null);
    return null !== (n = null == s ? void 0 : s.isLatest(t, this.generation)) && void 0 !== n && n
  }
  isLocalFetchNeeded(e) {
    var t, n;
    return null === (n = null === (t = this.guilds.get(e)) || void 0 === t ? void 0 : t.localNeeded) || void 0 === n || n
  }
  message(e, t) {
    var n, s;
    return null !== (s = null === (n = this.guilds.get(e)) || void 0 === n ? void 0 : n.messageRecord(t)) && void 0 !== s ? s : null
  }
  data(e) {
    return !this.guilds.has(e) && this.guilds.set(e, new u.B), this.guilds.get(e)
  }
  handleOneGuildCreate(e) {
    var t, n;
    let s = this.data(e.id);
    s.putMany(null !== (t = e.lastMessages) && void 0 !== t ? t : [], this.generation), s.putMany(null !== (n = e.threadMessages) && void 0 !== n ? n : [], this.generation), null != e.lastMessages && (s.localNeeded = !1)
  }
  handleConnectionOpen(e) {
    if (!(0, r.cn)()) return !1;
    for (let t of (this.generation += 1, e.guilds)) this.handleOneGuildCreate(t)
  }
  handleGuildCreate(e) {
    if (!(0, r.cn)()) return !1;
    this.handleOneGuildCreate(e.guild)
  }
  handleGuildDelete(e) {
    if (!(0, r.cn)()) return !1;
    this.guilds.delete(e.guild.id)
  }
  handleMessageCreate(e) {
    var t;
    if (!(0, r.cn)() || e.optimistic || e.isPushNotification) return !1;
    this.data(null !== (t = e.guildId) && void 0 !== t ? t : null).put(e.message.channel_id, e.message, this.generation)
  }
  handleMessageDelete(e) {
    var t, n;
    if (!(0, r.cn)()) return !1;
    let s = null !== (n = e.guildId) && void 0 !== n ? n : null;
    if ((null === (t = this.data(s)) || void 0 === t ? void 0 : t.messageId(e.channelId)) === e.id) {
      let t = c.Z.getMessages(e.channelId),
        n = t.hasMoreAfter ? null : t.last();
      null != n ? this.data(s).put(e.channelId, n, this.generation) : this.data(s).delete(e.channelId)
    }
  }
  handleMessageUpdate(e) {
    var t;
    if (!(0, r.cn)()) return;
    let n = null !== (t = e.guildId) && void 0 !== t ? t : null,
      s = e.message.channel_id,
      i = e.message.id;
    if (null == s || null == i) return !1;
    let l = this.data(n);
    if ((null == l ? void 0 : l.messageId(s)) !== i) return !1;
    null == l || l.update(e.message)
  }
  handleThreadListSync(e) {
    var t;
    if (!(0, r.cn)()) return !1;
    this.data(e.guildId).putMany(null !== (t = e.mostRecentMessages) && void 0 !== t ? t : [], this.generation)
  }
  handleLoadMessagesSuccess(e) {
    if (!(0, r.cn)()) return;
    let t = o.Z.getBasicChannel(e.channelId);
    if (null != t) {
      var n;
      (0, l.Z)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (n = e.messages[0]) && void 0 !== n ? n : null, this.generation)
    }
  }
  handleLocalMessagesLoaded(e) {
    if (!(0, r.cn)()) return;
    let t = o.Z.getBasicChannel(e.channelId);
    if (null != t) {
      var n;
      (0, l.Z)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (n = e.messages[0]) && void 0 !== n ? n : null, E)
    }
  }
  handleMessagePreviewsLoaded(e) {
    if (!(0, r.cn)()) return;
    h.verbose("adding remote previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
    let t = this.data(e.guildId);
    for (let n of e.messages) !t.isLatest(n.channel_id, this.generation) && t.put(n.channel_id, n, this.generation)
  }
  handleMessagePreviewsLocallyLoaded(e) {
    if (!(0, r.cn)()) return;
    h.verbose("adding local previews (guildId: ".concat(e.guildId, ", messages: ").concat(e.messages.length, ")"));
    let t = this.data(e.guildId);
    for (let [n, s] of e.messages) !t.has(n) && t.put(n, s, E);
    t.localNeeded = !1
  }
  handleLogout(e) {
    this.guilds.clear()
  }
  constructor() {
    super(i.Z, {
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
    }), d(this, "guilds", new Map), d(this, "generation", 0)
  }
}
new _