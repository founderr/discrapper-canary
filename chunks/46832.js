"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var a = n("836560"),
  s = n("317381"),
  i = n("626135"),
  l = n("585483"),
  r = n("70956"),
  o = n("996106"),
  u = n("631467"),
  d = n("981631");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = 10 * r.default.Millis.SECOND,
  E = new Map,
  h = new Set,
  _ = (e, t, n) => {
    n([u.default.CLOSE, t], e)
  };
class C extends a.EventEmitter {
  routeEvent(e, t, n, a) {
    if (!Array.isArray(n)) {
      console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
      return
    }
    let [s, i] = n;
    switch (s) {
      case u.default.HANDSHAKE:
        if (null != e) throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Already connected");
        return this.handleHandshake(t, i, a);
      case u.default.FRAME:
        if (null == e) throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleFrame(t, e, i);
      case u.default.CLOSE:
        if (null == e) throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleClose(e, i);
      default:
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Invalid opcode")
    }
  }
  constructor(e, t, a, r) {
    var u;
    super(), u = this, c(this, "validateSocketClient", void 0), c(this, "logger", void 0), c(this, "createPostMessageProxySocket", void 0), c(this, "onFrameHandled", void 0), c(this, "handshakeFailureTimeoutId", void 0), c(this, "disconnectSocket", function(e, t) {
      var n, a;
      let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      u.emit("disconnect", e, s ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : "Unknown");
      let [i] = null !== (a = Array.from(E.entries()).find(t => {
        let [n, a] = t;
        return a === e
      })) && void 0 !== a ? a : [null, null];
      null != i && E.delete(i)
    }), c(this, "handleIFrameMount", e => {
      let {
        id: t
      } = e;
      h.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(s.default.getSelfEmbeddedActivities().entries()).forEach(e => {
          let [t, n] = e;
          i.default.track(d.AnalyticEvents.ACTIVITY_HANDSHAKE_TIMED_OUT, {
            application_id: t,
            channel_id: n.channelId,
            guild_id: n.guildId,
            timeout_ms: f
          })
        })
      }, f)
    }), c(this, "handleIFrameUnmount", e => {
      var t;
      let {
        id: n
      } = e;
      h.delete(n);
      let [a, s] = null !== (t = Array.from(E.entries()).find(e => {
        let [t, a] = e;
        return a.frameId === n
      })) && void 0 !== t ? t : [null, null];
      null != s && null != a && (this.disconnectSocket(s, {
        code: d.RPCCloseCodes.CLOSE_NORMAL,
        message: "iFrame gone"
      }, !0), E.delete(a))
    }), c(this, "handleMessage", (e, t, n) => {
      let a = E.get(t);
      try {
        this.routeEvent(a, t, e, n)
      } catch (e) {
        if (e instanceof o.default && e.errorCode === d.RPCErrors.INVALID_PAYLOAD) throw e;
        null != a ? this.disconnectSocket(a, {
          code: e.code,
          message: e.message
        }, !0) : _(t, {
          code: e.code,
          message: e.message
        }, n)
      }
    }), c(this, "handleFrame", (e, t, n) => {
      var a;
      let s;
      if (e !== t.origin) throw new o.default({
        closeCode: d.RPCCloseCodes.INVALID_ORIGIN
      }, "Origin has changed");
      try {
        s = "string" == typeof n ? JSON.parse(n) : n
      } catch (e) {
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Payload not recognized encoding")
      }
      null === (a = this.onFrameHandled) || void 0 === a || a.call(this, s, this.logger, t), this.emit("request", t, s)
    }), c(this, "handleHandshake", async (e, t, a) => {
      let s;
      null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
      let i = (await n.e("56268").then(n.t.bind(n, "826753", 23))).default;
      try {
        i.assert(t, i.object().required().keys({
          v: i.number().min(1).max(1).required(),
          encoding: i.string().equal("json").optional(),
          client_id: i.string().required(),
          frame_id: i.string().required()
        }))
      } catch (e) {
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, e.message)
      }
      let l = t.frame_id;
      if (!h.has(l)) throw this.logger.error("Unrecognized frame ID ".concat(l)), new o.default({
        closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
      }, "Unrecognized frame ID ".concat(l));
      try {
        var r;
        s = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: a,
          frameId: l,
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
        if (await this.validateSocketClient(s, e, t.client_id), !h.has(l)) throw this.logger.error("Frame ID ".concat(l, " no longer exists")), new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, "Unrecognized frame ID ".concat(l));
        E.set(e, s), h.delete(l), this.emit("connect", s), this.logger.info("Socket Validated: ".concat(s.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(s.id, ", ").concat(e.message)), e
      }
    }), c(this, "handleClose", async (e, t) => {
      let a = (await n.e("56268").then(n.t.bind(n, "826753", 23))).default;
      try {
        a.assert(t, a.object().required().unknown(!0).keys({
          code: a.number().valid(Object.values(d.RPCCloseCodes)).required(),
          message: a.string().optional()
        }))
      } catch (e) {
        throw new o.default({
          closeCode: d.RPCCloseCodes.CLOSE_UNSUPPORTED
        }, e.message)
      }
      this.disconnectSocket(e, t)
    }), l.ComponentDispatch.subscribe(d.ComponentActions.IFRAME_MOUNT, this.handleIFrameMount), l.ComponentDispatch.subscribe(d.ComponentActions.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = a, this.onFrameHandled = r
  }
}