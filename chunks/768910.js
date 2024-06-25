s(47120);
var n = s(392711),
  a = s.n(n),
  i = s(710845),
  r = s(592125),
  l = s(306680),
  o = s(709054),
  c = s(287328);

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let _ = new i.Z("ReadStates");
t.Z = new class e {
  async getAll(e) {
    let t = performance.now(),
      s = await c.Z.readStates(e).getMany(),
      n = performance.now();
    return _.log("asynchronously loaded in ".concat(n - t, "ms (readStates: ").concat(s.length, ")")), s
  }
  resetInMemoryState() {
    this.readStateVersion = null
  }
  handleConnectionOpen(e) {
    this.readStateVersion = e.readState.version
  }
  handleReadStateAction(e) {
    null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : _.log("Received null read states version", e))
  }
  handleWriteCaches(e, t) {
    let s = l.ZP.getAllReadStates(!1);
    if (t) {
      var n;
      if (null == this.readStateVersion) return;
      let t = "0",
        i = "0",
        l = Object.keys(r.Z.getMutablePrivateChannels()),
        E = new Set(l);
      for (let e of (i = null !== (n = a()(l).sort(o.default.compare).reverse().value()[0]) && void 0 !== n ? n : "0", s)) null != e._lastMessageId && (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), E.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, i) && (i = e._lastMessageId));
      c.Z.nonGuildVersionsTransaction(e).putAll([{
        id: "highest_last_message_id",
        versionString: t
      }, {
        id: "private_channels_version",
        versionString: i
      }, {
        id: "read_state_version",
        version: this.readStateVersion
      }])
    }
    let i = c.Z.readStatesTransaction(e);
    i.delete(), s.forEach(e => i.put("".concat(e.type, "-").concat(e.channelId), e))
  }
  constructor() {
    E(this, "readStateVersion", null), E(this, "actions", {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      CHANNEL_PINS_ACK: e => this.handleReadStateAction(e),
      MESSAGE_ACK: e => this.handleReadStateAction(e),
      BACKGROUND_SYNC_FINISHED: (e, t) => {
        !e.messagesOnly && this.handleWriteCaches(t, !1)
      },
      WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0)
    })
  }
}