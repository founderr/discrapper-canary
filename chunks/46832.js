n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var s = n(836560),
  i = n(317381),
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
class m extends s.EventEmitter {
  routeEvent(e, t, n, s) {
    if (!Array.isArray(n)) {
      console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
      return
    }
    let [i, l] = n;
    switch (i) {
      case c.Z.HANDSHAKE:
        if (null != e) throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Already connected");
        return this.handleHandshake(t, l, s);
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
  constructor(e, t, s, r) {
    var c;
    super(), c = this, d(this, "validateSocketClient", void 0), d(this, "logger", void 0), d(this, "createPostMessageProxySocket", void 0), d(this, "onFrameHandled", void 0), d(this, "handshakeFailureTimeoutId", void 0), d(this, "disconnectSocket", function(e, t) {
      var n, s;
      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      c.emit("disconnect", e, i ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : "Unknown");
      let [l] = null !== (s = Array.from(h.entries()).find(t => {
        let [n, s] = t;
        return s === e
      })) && void 0 !== s ? s : [null, null];
      null != l && h.delete(l)
    }), d(this, "handleIFrameMount", e => {
      let {
        id: t
      } = e;
      _.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
        Array.from(i.ZP.getSelfEmbeddedActivities().entries()).forEach(e => {
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
      let [s, i] = null !== (t = Array.from(h.entries()).find(e => {
        let [t, s] = e;
        return s.frameId === n
      })) && void 0 !== t ? t : [null, null];
      null != i && null != s && (this.disconnectSocket(i, {
        code: u.$VG.CLOSE_NORMAL,
        message: "iFrame gone"
      }, !0), h.delete(s))
    }), d(this, "handleMessage", (e, t, n) => {
      let s = h.get(t);
      try {
        this.routeEvent(s, t, e, n)
      } catch (e) {
        if (e instanceof o.Z && e.errorCode === u.lTL.INVALID_PAYLOAD) throw e;
        null != s ? this.disconnectSocket(s, {
          code: e.code,
          message: e.message
        }, !0) : I(t, {
          code: e.code,
          message: e.message
        }, n)
      }
    }), d(this, "handleFrame", (e, t, n) => {
      var s;
      let i;
      if (e !== t.origin) throw new o.Z({
        closeCode: u.$VG.INVALID_ORIGIN
      }, "Origin has changed");
      try {
        i = "string" == typeof n ? JSON.parse(n) : n
      } catch (e) {
        throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Payload not recognized encoding")
      }
      null === (s = this.onFrameHandled) || void 0 === s || s.call(this, i, this.logger, t), this.emit("request", t, i)
    }), d(this, "handleHandshake", async (e, t, s) => {
      let i;
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
        i = this.createPostMessageProxySocket({
          origin: e,
          postMessageToRPCClient: s,
          frameId: a,
          version: Number(t.v),
          logger: this.logger,
          postClose: I,
          encoding: null !== (r = t.encoding) && void 0 !== r ? r : "json"
        })
      } catch (e) {
        throw this.logger.error("Error opening window socket ".concat(e)), e
      }
      this.logger.info("Socket Opened: ".concat(i.id));
      try {
        if (await this.validateSocketClient(i, e, t.client_id), !_.has(a)) throw this.logger.error("Frame ID ".concat(a, " no longer exists")), new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, "Unrecognized frame ID ".concat(a));
        h.set(e, i), _.delete(a), this.emit("connect", i), this.logger.info("Socket Validated: ".concat(i.id))
      } catch (e) {
        throw this.logger.info("Socket Closed: ".concat(i.id, ", ").concat(e.message)), e
      }
    }), d(this, "handleClose", async (e, t) => {
      let s = (await n.e("56268").then(n.t.bind(n, 826753, 23))).default;
      try {
        s.assert(t, s.object().required().unknown(!0).keys({
          code: s.number().valid(Object.values(u.$VG)).required(),
          message: s.string().optional()
        }))
      } catch (e) {
        throw new o.Z({
          closeCode: u.$VG.CLOSE_UNSUPPORTED
        }, e.message)
      }
      this.disconnectSocket(e, t)
    }), a.S.subscribe(u.CkL.IFRAME_MOUNT, this.handleIFrameMount), a.S.subscribe(u.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = s, this.onFrameHandled = r
  }
}