"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("47120");
var n = a("836560"),
  s = a("317381"),
  l = a("626135"),
  i = a("585483"),
  r = a("70956"),
  o = a("996106"),
  u = a("631467"),
  d = a("981631");

function c(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let f = 10 * r.default.Millis.SECOND,
  E = new Map,
  h = new Set,
  _ = (e, t, a) => {
    a([u.default.CLOSE, t], e)
  };
class C extends n.EventEmitter {
  routeEvent(e, t, a, n) {
    if (!Array.isArray(a)) {
      console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
      return
    }
    let [s, l] = a;
    switch (s) {
      case u.default.HANDSHAKE:
        if (null != e) throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Already connected");
        return this.handleHandshake(t, l, n);
      case u.default.FRAME:
        if (null == e) throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleFrame(t, e, l);
      case u.default.CLOSE:
        if (null == e) throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleClose(e, l);
      default:
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Invalid opcode")
    }
  }
  constructor(e, t, n, r) {
    var u;
    super(), u = this, c(this, "validateSocketClient", void 0), c(this, "logger", void 0), c(this, "createPostMessageProxySocket", void 0), c(this, "onFrameHandled", void 0), c(this, "handshakeFailureTimeoutId", void 0), c(this, "disconnectSocket", function(e, t) {
      var a, n;
      let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      u.emit("disconnect", e, s ? void 0 : t), e.close(t.code, null !== (a = t.message) && void 0 !== a ? a : "Unknown");
      let [l] = null !== (n = Array.from(E.entries()).find(t => {
        let [a, n] = t;
        return n === e
      })) && void 0 !== n ? n : [null, null];
      null != l && E.delete(l)
    }), c(this, "handleIFrameMount", e => {
      let {
        id: t
      } = e;
      h.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(s.default.getSelfEmbeddedActivities().entries()).forEach(e => {
          let [t, a] = e;
          l.default.track(d.AnalyticEvents.ACTIVITY_HANDSHAKE_TIMED_OUT, {
            application_id: t,
            channel_id: a.channelId,
            guild_id: a.guildId,
            timeout_ms: f
          })
        })
      }, f)
    }), c(this, "handleIFrameUnmount", e => {
      var t;
      let {
        id: a
      } = e;
      h.delete(a);
      let [n, s] = null !== (t = Array.from(E.entries()).find(e => {
        let [t, n] = e;
        return n.frameId === a
      })) && void 0 !== t ? t : [null, null];
      null != s && null != n && (this.disconnectSocket(s, {
        code: d.RPCCloseCodes.CLOSE_NORMAL,
        message: "iFrame gone"
      }, !0), E.delete(n))
    }), c(this, "handleMessage", (e, t, a) => {
      let n = E.get(t);
      try {
        this.routeEvent(n, t, e, a)
      } catch (e) {
        if (e instanceof o.default && e.errorCode === d.RPCErrors.INVALID_PAYLOAD) throw e;
        null != n ? this.disconnectSocket(n, {
          code: e.code,
          message: e.message
        }, !0) : _(t, {
          code: e.code,
          message: e.message
        }, a)
      }
    }), c(this, "handleFrame", (e, t, a) => {
      var n;
      let s;
      if (e !== t.origin) throw new o.default({
        closeCode: d.RPCCloseCodes.INVALID_ORIGIN
      }, "Origin has changed");
      try {
        s = "string" == typeof a ? JSON.parse(a) : a
      } catch (e) {
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Payload not recognized encoding")
      }
      null === (n = this.onFrameHandled) || void 0 === n || n.call(this, s, this.logger, t), this.emit("request", t, s)
    }), c(this, "handleHandshake", async (e, t, n) => {
      let s;
      null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
      let l = (await a.e("56268").then(a.t.bind(a, "826753", 23))).default;
      try {
        l.assert(t, l.object().required().keys({
          v: l.number().min(1).max(1).required(),
          encoding: l.string().equal("json").optional(),
          client_id: l.string().required(),
          frame_id: l.string().required()
        }))
      } catch (e) {
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, e.message)
      }
      let i = t.frame_id;
      if (!h.has(i)) throw this.logger.error("Unrecognized frame ID ".concat(i)), new o.default({
        closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
      }, "Unrecognized frame ID ".concat(i));
      try {
        var r;
        s = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: n,
          frameId: i,
          version: Number(t.v),
          logger: this.logger,
          postClose: _,
          encoding: null !== (r = t.encoding) && void 0 !== r ? r : "json"
        })
      } catch (e) {
        throw this.logger.error("Error opening window socket ".concat(e)), e
      }
      this.logger.info("Socket Opened: ".concat(s.id));
      try {
        if (await this.validateSocketClient(s, e, t.client_id), !h.has(i)) throw this.logger.error("Frame ID ".concat(i, " no longer exists")), new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Unrecognized frame ID ".concat(i));
        E.set(e, s), h.delete(i), this.emit("connect", s), this.logger.info("Socket Validated: ".concat(s.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(s.id, ", ").concat(e.message)), e
      }
    }), c(this, "handleClose", async (e, t) => {
      let n = (await a.e("56268").then(a.t.bind(a, "826753", 23))).default;
      try {
        n.assert(t, n.object().required().unknown(!0).keys({
          code: n.number().valid(Object.values(d.RPCCloseCodes)).required(),
          message: n.string().optional()
        }))
      } catch (e) {
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, e.message)
      }
      this.disconnectSocket(e, t)
    }), i.ComponentDispatch.subscribe(d.ComponentActions.IFRAME_MOUNT, this.handleIFrameMount), i.ComponentDispatch.subscribe(d.ComponentActions.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = n, this.onFrameHandled = r
  }
}