"use strict";
s.r(t), s("47120");
var a = s("392711"),
  n = s.n(a),
  l = s("710845"),
  i = s("592125"),
  r = s("306680"),
  u = s("709054"),
  o = s("287328");

function d(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let c = new l.default("ReadStates");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      s = await o.default.readStates(e).getMany(),
      a = performance.now();
    return c.log("asynchronously loaded in ".concat(a - t, "ms (readStates: ").concat(s.length, ")")), s
  }
  resetInMemoryState() {
    this.readStateVersion = null
  }
  handleConnectionOpen(e) {
    this.readStateVersion = e.readState.version
  }
  handleReadStateAction(e) {
    null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : c.log("Received null read states version", e))
  }
  handleWriteCaches(e, t) {
    let s = r.default.getAllReadStates(!1);
    if (t) {
      var a;
      if (null == this.readStateVersion) return;
      let t = "0",
        l = "0",
        r = Object.keys(i.default.getMutablePrivateChannels()),
        d = new Set(r);
      for (let e of (l = null !== (a = n()(r).sort(u.default.compare).reverse().value()[0]) && void 0 !== a ? a : "0", s)) null != e._lastMessageId && (1 === u.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === u.default.compare(e._lastMessageId, l) && (l = e._lastMessageId));
      o.default.nonGuildVersionsTransaction(e).putAll([{
        id: "highest_last_message_id",
        versionString: t
      }, {
        id: "private_channels_version",
        versionString: l
      }, {
        id: "read_state_version",
        version: this.readStateVersion
      }])
    }
    let l = o.default.readStatesTransaction(e);
    l.delete(), s.forEach(e => l.put("".concat(e.type, "-").concat(e.channelId), e))
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