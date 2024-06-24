n(47120);
var s = n(392711),
  i = n.n(s),
  a = n(710845),
  l = n(592125),
  r = n(306680),
  c = n(709054),
  o = n(287328);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new a.Z("ReadStates");
t.Z = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await o.Z.readStates(e).getMany(),
      s = performance.now();
    return u.log("asynchronously loaded in ".concat(s - t, "ms (readStates: ").concat(n.length, ")")), n
  }
  resetInMemoryState() {
    this.readStateVersion = null
  }
  handleConnectionOpen(e) {
    this.readStateVersion = e.readState.version
  }
  handleReadStateAction(e) {
    null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : u.log("Received null read states version", e))
  }
  handleWriteCaches(e, t) {
    let n = r.ZP.getAllReadStates(!1);
    if (t) {
      var s;
      if (null == this.readStateVersion) return;
      let t = "0",
        a = "0",
        r = Object.keys(l.Z.getMutablePrivateChannels()),
        d = new Set(r);
      for (let e of (a = null !== (s = i()(r).sort(c.default.compare).reverse().value()[0]) && void 0 !== s ? s : "0", n)) null != e._lastMessageId && (1 === c.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === c.default.compare(e._lastMessageId, a) && (a = e._lastMessageId));
      o.Z.nonGuildVersionsTransaction(e).putAll([{
        id: "highest_last_message_id",
        versionString: t
      }, {
        id: "private_channels_version",
        versionString: a
      }, {
        id: "read_state_version",
        version: this.readStateVersion
      }])
    }
    let a = o.Z.readStatesTransaction(e);
    a.delete(), n.forEach(e => a.put("".concat(e.type, "-").concat(e.channelId), e))
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