n(47120);
var s = n(392711),
  a = n.n(s),
  i = n(710845),
  r = n(592125),
  l = n(306680),
  o = n(709054),
  c = n(287328);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new i.Z("ReadStates");
t.Z = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await c.Z.readStates(e).getMany(),
      s = performance.now();
    return _.log("asynchronously loaded in ".concat(s - t, "ms (readStates: ").concat(n.length, ")")), n
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
    let n = l.ZP.getAllReadStates(!1);
    if (t) {
      var s;
      if (null == this.readStateVersion) return;
      let t = "0",
        i = "0",
        l = Object.keys(r.Z.getMutablePrivateChannels()),
        d = new Set(l);
      for (let e of (i = null !== (s = a()(l).sort(o.default.compare).reverse().value()[0]) && void 0 !== s ? s : "0", n)) null != e._lastMessageId && (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, i) && (i = e._lastMessageId));
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
    i.delete(), n.forEach(e => i.put("".concat(e.type, "-").concat(e.channelId), e))
  }
  constructor() {
    d(this, "readStateVersion", null), d(this, "actions", {
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