n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var i = n(836560),
  s = n(317381),
  l = n(626135),
  a = n(585483),
  r = n(70956),
  o = n(996106),
  c = n(631467),
  u = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = 10 * r.Z.Millis.SECOND,
  h = new Map,
  _ = new Set,
  I = (e, t, n) => {
    n([c.Z.CLOSE, t], e)
  };
class m extends i.EventEmitter {
  routeEvent(e, t, n, i) {
    if (!Array.isArray(n)) {
      console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
      return
    }
    let [s, l] = n;
    switch (s) {
      case c.Z.HANDSHAKE:
        if (null != e) throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Already connected");
        return this.handleHandshake(t, l, i);
      case c.Z.FRAME:
        if (null == e) throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleFrame(t, e, l);
      case c.Z.CLOSE:
        if (null == e) throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Not connected");
        return this.handleClose(e, l);
      default:
        throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Invalid opcode")
    }
  }
  constructor(e, t, i, r) {
    var c;
    super(), c = this, d(this, "validateSocketClient", void 0), d(this, "logger", void 0), d(this, "createPostMessageProxySocket", void 0), d(this, "onFrameHandled", void 0), d(this, "handshakeFailureTimeoutId", void 0), d(this, "disconnectSocket", function(e, t) {
      var n, i;
      let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      c.emit("disconnect", e, s ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : "Unknown");
      let [l] = null !== (i = Array.from(h.entries()).find(t => {
        let [n, i] = t;
        return i === e
      })) && void 0 !== i ? i : [null, null];
      null != l && h.delete(l)
    }), d(this, "handleIFrameMount", e => {
      let {
        id: t
      } = e;
      _.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(s.ZP.getSelfEmbeddedActivities().entries()).forEach(e => {
          let [t, n] = e;
          l.default.track(u.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
            application_id: t,
            channel_id: n.channelId,
            guild_id: n.guildId,
            timeout_ms: E
          })
        })
      }, E)
    }), d(this, "handleIFrameUnmount", e => {
      var t;
      let {
        id: n
      } = e;
      _.delete(n);
      let [i, s] = null !== (t = Array.from(h.entries()).find(e => {
        let [t, i] = e;
        return i.frameId === n
      })) && void 0 !== t ? t : [null, null];
      null != s && null != i && (this.disconnectSocket(s, {
        code: u.$VG.CLOSE_NORMAL,
        message: "iFrame gone"
      }, !0), h.delete(i))
    }), d(this, "handleMessage", (e, t, n) => {
      let i = h.get(t);
      try {
        this.routeEvent(i, t, e, n)
      } catch (e) {
        if (e instanceof o.Z && e.errorCode === u.lTL.INVALID_PAYLOAD) throw e;
        null != i ? this.disconnectSocket(i, {
          code: e.code,
          message: e.message
        }, !0) : I(t, {
          code: e.code,
          message: e.message
        }, n)
      }
    }), d(this, "handleFrame", (e, t, n) => {
      var i;
      let s;
      if (e !== t.origin) throw new o.Z({
        closeCode: u.$VG.INVALID_ORIGIN
      }, "Origin has changed");
      try {
        s = "string" == typeof n ? JSON.parse(n) : n
      } catch (e) {
        throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Payload not recognized encoding")
      }
      null === (i = this.onFrameHandled) || void 0 === i || i.call(this, s, this.logger, t), this.emit("request", t, s)
    }), d(this, "handleHandshake", async (e, t, i) => {
      let s;
      null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
      let l = (await n.e("56268").then(n.t.bind(n, 826753, 23))).default;
      try {
        l.assert(t, l.object().required().keys({
          v: l.number().min(1).max(1).required(),
          encoding: l.string().equal("json").optional(),
          client_id: l.string().required(),
          frame_id: l.string().required()
        }))
      } catch (e) {
        throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      let a = t.frame_id;
      if (!_.has(a)) throw this.logger.error("Unrecognized frame ID ".concat(a)), new o.Z({
        closeCode: u.$VG.CLOSE_UNSUPPORTED
      }, "Unrecognized frame ID ".concat(a));
      try {
        var r;
        s = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: i,
          frameId: a,
          version: Number(t.v),
          logger: this.logger,
          postClose: I,
          encoding: null !== (r = t.encoding) && void 0 !== r ? r : "json"
        })
      } catch (e) {
        throw this.logger.error("Error opening window socket ".concat(e)), e
      }
      this.logger.info("Socket Opened: ".concat(s.id));
      try {
        if (await this.validateSocketClient(s, e, t.client_id), !_.has(a)) throw this.logger.error("Frame ID ".concat(a, " no longer exists")), new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Unrecognized frame ID ".concat(a));
        h.set(e, s), _.delete(a), this.emit("connect", s), this.logger.info("Socket Validated: ".concat(s.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(s.id, ", ").concat(e.message)), e
      }
    }), d(this, "handleClose", async (e, t) => {
      let i = (await n.e("56268").then(n.t.bind(n, 826753, 23))).default;
      try {
        i.assert(t, i.object().required().unknown(!0).keys({
          code: i.number().valid(Object.values(u.$VG)).required(),
          message: i.string().optional()
        }))
      } catch (e) {
        throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      this.disconnectSocket(e, t)
    }), a.S.subscribe(u.CkL.IFRAME_MOUNT, this.handleIFrameMount), a.S.subscribe(u.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = i, this.onFrameHandled = r
  }
}