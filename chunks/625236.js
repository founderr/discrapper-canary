"use strict";
a.r(t), a.d(t, {
  PreviewData: function() {
    return o
  }
}), a("47120");
var n = a("786761"),
  s = a("23750"),
  l = a("306680"),
  i = a("709054");

function r(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class o {
  isLatest(e, t) {
    return this.messageGeneration(e, t) === t
  }
  messageGeneration(e, t) {
    let a = this.messages.get(e);
    return null == a ? -1 / 0 : a.generation !== t && null != a.message && a.message.id === l.default.lastMessageId(e) ? (this.messages.set(e, {
      ...a,
      generation: t
    }), t) : a.generation
  }
  messageId(e) {
    var t, a;
    let n = this.messages.get(e);
    return null !== (a = null == n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) && void 0 !== a ? a : null
  }
  messageRecord(e) {
    var t;
    let a = this.messages.get(e);
    return null != a && null != a.message && !(a.message instanceof s.default) && (a.message = (0, n.createMessageRecord)(a.message)), null !== (t = null == a ? void 0 : a.message) && void 0 !== t ? t : null
  }
  has(e) {
    return this.messages.has(e)
  }
  put(e, t, a) {
    this.messages.set(e, {
      message: t,
      generation: a
    })
  }
  putNew(e, t, a) {
    var n;
    let s = this.messages.get(e);
    null != t && function(e, t) {
      return null == t || i.default.compare(e, t) > 0
    }(t.id, null == s ? void 0 : null === (n = s.message) || void 0 === n ? void 0 : n.id) && this.put(e, t, a)
  }
  putMany(e, t) {
    for (let a of e) this.put(a.channel_id, a, t)
  }
  update(e) {
    var t;
    if (null == e.id || null == e.channel_id) return;
    let a = e.channel_id,
      l = this.messages.get(a);
    if ((null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.id) !== e.id) return;
    let i = l.message instanceof s.default ? (0, n.updateMessageRecord)(l.message, e) : (0, n.updateServerMessage)(l.message, e);
    this.messages.set(a, {
      ...l,
      message: i
    })
  }
  delete(e) {
    this.messages.delete(e)
  }
  constructor() {
    r(this, "localNeeded", !0), r(this, "messages", new Map)
  }
}