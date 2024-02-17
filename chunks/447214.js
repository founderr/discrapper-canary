"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("860677");
var s, i = n("627445"),
  r = n.n(i),
  a = n("181905"),
  o = n("981980"),
  d = n("102053"),
  u = n("432710"),
  l = n("446674"),
  f = n("872717"),
  _ = n("913144"),
  c = n("288206"),
  g = n("605250"),
  m = n("155084"),
  h = n("410912"),
  v = n("313915"),
  E = n("599110"),
  p = n("922932"),
  y = n("718517"),
  T = n("773336"),
  C = n("286235"),
  S = n("41642"),
  I = n("265912"),
  A = n("799600"),
  D = n("705215"),
  N = n("342797"),
  O = n("123265"),
  P = n("340115"),
  b = n("289362"),
  V = n("571420"),
  R = n("797785"),
  k = n("49111");
let M = new g.default("GatewaySocket"),
  w = new D.default;

function L() {}
let U = 30 * y.default.Millis.SECOND,
  G = 3 * y.default.Millis.MINUTE,
  F = 1 * y.default.Millis.MINUTE;

function H(e) {
  return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
}
let B = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
s = class extends P.default {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    M.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
  }
  addAnalytics(e) {
    this.analytics = {
      ...this.analytics,
      ...e
    }
  }
  setResumeUrl(e) {
    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && M.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
  }
  _connect() {
    var e, t;
    let n;
    if (!this.willReconnect()) {
      M.verbose("Skipping _connect because willReconnect is false");
      return
    }
    if (V.getIsPaused()) {
      M.info("Skipping _connect because socket is paused");
      return
    }
    this.connectionState = S.default.CONNECTING, this.nextReconnectIsImmediate = !1;
    let s = this.compressionHandler.getAlgorithm(),
      i = w.getName(),
      r = this._getGatewayUrl(),
      a = window.GLOBAL_ENV.API_VERSION;
    d.default.mark("\uD83C\uDF10", "Socket._connect"), M.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(i, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != s ? s : "none")), null !== this.webSocket && (M.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
    }, U);
    let o = new URL(r);
    o.searchParams.append("encoding", i), o.searchParams.append("v", a.toString()), null != s && o.searchParams.append("compress", s);
    ! function(e) {
      let t, {
          gatewayURL: n,
          newCallback: s,
          onOpen: i,
          onMessage: r,
          onError: a,
          onClose: o
        } = e,
        d = window._ws,
        u = !1,
        l = !1,
        f = null,
        _ = null;
      if (window._ws = null, null != d) {
        if (t = d.ws, d.state.gateway !== n) M.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(d.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
        else {
          var c;
          let e = {
            ...d.state
          };
          null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
            ...e,
            data: e.data.substring(0, 100)
          } : e)), M.log("[FAST CONNECT] successfully took over websocket, state:", {
            ...e,
            messages: null === (c = e.messages) || void 0 === c ? void 0 : c.length
          }), u = d.state.open, l = d.state.identify, f = d.state.messages, _ = d.state.clientState
        }
      }
      null == t && ((t = (0, R.default)(n)).binaryType = "arraybuffer"), s(t), u && i(l, _), null != f && f.forEach(r), t.onopen = () => i(l, _), t.onmessage = r, t.onclose = o, t.onerror = a
    }({
      gatewayURL: o.toString(),
      newCallback: e => {
        this.webSocket = e, this.compressionHandler.bindWebSocket(e)
      },
      onOpen: (e, t) => {
        d.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
        let n = Date.now() - this.connectionStartTime;
        M.info("[CONNECTED] ".concat(o.toString(), " in ").concat(n, " ms")), this.isFastConnect = e, this.lastIdentifyClientState = t, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
      },
      onMessage: (e = this.compressionHandler, t = (e, t) => {
        let n = Date.now(),
          {
            op: s,
            s: i,
            t: r,
            d: a
          } = w.unpack(e);
        s !== P.Opcode.DISPATCH && d.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(s, " ").concat(P.Opcode[s]));
        let o = Date.now() - n;
        switch ("READY" === r ? h.default.parseReady.set(n, o) : "READY_SUPPLEMENTAL" === r ? h.default.parseReadySupplemental.set(n, o) : o > 10 && d.default.mark("\uD83C\uDF10", "Parse " + r, o), null != i && (this.seq = i), s) {
          case P.Opcode.HELLO:
            this._clearHelloTimeout(), this._handleHello(a);
            break;
          case P.Opcode.RECONNECT:
            this._handleReconnect();
            break;
          case P.Opcode.INVALID_SESSION:
            this._handleInvalidSession(a);
            break;
          case P.Opcode.HEARTBEAT:
            this._sendHeartbeat();
            break;
          case P.Opcode.HEARTBEAT_ACK:
            this._handleHeartbeatAck(a);
            break;
          case P.Opcode.DISPATCH:
            this._handleDispatch(a, r, "READY" === r ? {
              compressed_byte_size: t,
              uncompressed_byte_size: H(e),
              compression_algorithm: this.compressionHandler.getAlgorithm(),
              packing_algorithm: w.getName(),
              unpack_duration_ms: o
            } : null);
            break;
          default:
            M.info("Unhandled op ".concat(s))
        }
      }, n = 0, e.dataReady(e => {
        try {
          return t(e, n)
        } finally {
          n = 0
        }
      }), t => {
        let s = t.data;
        null != t.raw_length ? n += t.raw_length : n += H(s), e.feed(s)
      }),
      onError: () => {
        this.setResumeUrl(null), p.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
      },
      onClose: e => {
        let {
          wasClean: t,
          code: n,
          reason: s
        } = e;
        return this._handleClose(t, n, s)
      }
    })
  }
  _handleHello(e) {
    let t = this.heartbeatInterval = e.heartbeat_interval,
      n = Date.now() - this.connectionStartTime;
    M.verbose("[HELLO] via ".concat((0, N.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    M.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = S.default.WILL_RECONNECT, this._connect()
  }
  _handleInvalidSession(e) {
    M.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let s = Date.now() - this.connectionStartTime;
    if ("READY" === t) {
      let t = e.session_id;
      this.sessionId = t;
      let n = (0, N.getConnectionPath)(e);
      d.default.setServerTrace(n), M.info("[READY] took ".concat(s, "ms, as ").concat(t)), M.verbose("".concat(n)), this.connectionState = S.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
    } else "READY_SUPPLEMENTAL" === t ? (M.info("[READY_SUPPLEMENTAL] took ".concat(s, "ms")), this.connectionState = S.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (M.verbose((0, N.getConnectionPath)(e)), this.connectionState = S.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
    this.dispatcher.receiveDispatch(e, t, n)
  }
  handleResumeDispatched() {
    let e = Date.now() - this.connectionStartTime;
    M.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
  }
  handleReadyDispatched() {
    this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : B
  }
  _handleHeartbeatAck(e) {
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, M.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = S.default.WILL_RECONNECT;
    let e = this.gatewayBackoff.fail(() => this._connect());
    M.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || !1, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), 4004 === t) return this.connectionState = S.default.CLOSED, M.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = S.default.WILL_RECONNECT, this.nextReconnectIsImmediate) M.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
    else {
      let s = this.gatewayBackoff.fail(() => this._connect());
      M.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((s / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, T.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && f.default.get({
      url: k.Endpoints.ME,
      headers: {
        authorization: this.token
      }
    }).then(e => {
      let {
        status: t
      } = e;
      E.default.track(k.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = S.default.CLOSED, M.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), E.default.track(k.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }))
  }
  _reset(e, t, n) {
    this.sessionId = null, this.seq = 0, M.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
      wasClean: e,
      code: t,
      reason: n
    })
  }
  _startHeartbeater() {
    let {
      heartbeatInterval: e
    } = this;
    r(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
    let t = () => {
      this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
    };
    this.initialHeartbeatTimeout = setTimeout(() => {
      this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(t, e), t()
    }, Math.floor(Math.random() * e))
  }
  _stopHeartbeater() {
    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
  }
  _clearHelloTimeout() {
    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
  }
  _cleanup(e) {
    l.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = L, t.onmessage = L, t.onerror = L, t.onclose = L, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new A.default(w)
  }
  _doResume() {
    var e;
    this.connectionState = S.default.RESUMING, this.dispatcher.resumeAnalytics = (0, N.createResumeAnalytics)(Date.now() - this.connectionStartTime), M.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(P.Opcode.RESUME, {
      token: this.token,
      session_id: this.sessionId,
      seq: this.seq
    }, !1)
  }
  async _doIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) {
      this._handleClose(!0, 4004, "No connection info provided");
      return
    }
    this.connectionState = S.default.IDENTIFYING;
    let t = Date.now();
    this.identifyStartTime = t;
    let n = await c.default.getClientState();
    if (this.connectionState !== S.default.IDENTIFYING || this.identifyStartTime !== t) {
      M.warn("Skipping identify because connectionState or identifyStartTime has changed");
      return
    }
    let {
      token: s,
      properties: i = {},
      presence: r
    } = e;
    this.token = s, M.verbose("[IDENTIFY]");
    let o = {
        token: s,
        capabilities: I.default,
        properties: i,
        presence: r,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: (0, b.toGatewayClientState)(n)
      },
      d = JSON.stringify(o);
    this.identifyUncompressedByteSize = d.length, this.identifyCompressedByteSize = a.deflate(d).length, this.lastIdentifyClientState = o.client_state, this.identifyCount += 1, this.send(P.Opcode.IDENTIFY, o, !1)
  }
  _doFastConnectIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) {
      this._handleClose(!0, 4004, "No connection info provided");
      return
    }
    let {
      token: t
    } = e;
    this.token = t, this.connectionState = S.default.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, M.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
  }
  _doResumeOrIdentify() {
    let e = Date.now(),
      t = null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= G);
    t ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
  }
  _updateLastHeartbeatAckTime() {
    this.lastHeartbeatAckTime = Date.now()
  }
  _sendHeartbeat() {
    this.send(P.Opcode.HEARTBEAT, this.seq, !1)
  }
  getLogger() {
    return M
  }
  willReconnect() {
    return this.connectionState === S.default.WILL_RECONNECT
  }
  isClosed() {
    return this.connectionState === S.default.CLOSED
  }
  isSessionEstablished() {
    return this.connectionState === S.default.SESSION_ESTABLISHED || this.connectionState === S.default.RESUMING
  }
  isConnected() {
    return this.connectionState === S.default.IDENTIFYING || this.connectionState === S.default.RESUMING || this.connectionState === S.default.SESSION_ESTABLISHED
  }
  connect() {
    return this.isClosed() ? (M.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = S.default.WILL_RECONNECT, this._connect(), !0) : (M.error("Cannot start a new connection, connection state is not closed"), !1)
  }
  getIdentifyInitialGuildId() {
    var e;
    return null === (e = this.lastIdentifyClientState) || void 0 === e ? void 0 : e.initial_guild_id
  }
  resetSocketOnError(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      sentry: !0,
      immediate: !1
    };
    M.error("resetSocketOnError during ".concat(t, ": ").concat(e.message), e.stack);
    let s = null != e.message && e.message.indexOf("Guild data was missing from store") >= 0;
    m.default.increment({
      name: u.MetricEvents.SOCKET_CRASHED,
      tags: ["action:".concat(t)]
    }, !0), n.sentry = n.sentry && !s, n.immediate = n.immediate || s, n.sentry && C.default.captureException(e, {
      tags: {
        socketCrashedAction: t
      }
    }), E.default.track(k.AnalyticEvents.GATEWAY_SOCKET_RESET, {
      error_message: e.message,
      error_stack: e.stack,
      action: t
    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = S.default.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel(), 0 === this.dispatchExceptionBackoff._fails && n.immediate ? (M.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), this.didForceClearGuildHashes = !0, _.default.dispatch({
      type: "CLEAR_GUILD_CACHE"
    }), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * F)
  }
  close() {
    if (this.isClosed()) {
      M.verbose("close() called, but socket is already closed.");
      return
    }
    M.info("Closing connection, current state is ".concat(this.connectionState)), this._cleanup(e => e.close()), this.connectionState = S.default.CLOSED, setImmediate(() => {
      this._reset(!0, 1e3, "Disconnect requested by user")
    })
  }
  networkStateChange(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    this.expeditedHeartbeat(e, t, n, !1)
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (!this.isClosed()) {
      if (this.isConnected()) {
        M.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
          this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
        }, e);
        return
      }
      n ? this.resetBackoff(t, s) : M.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
    }
  }
  resetBackoff() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    M.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== S.default.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
  }
  constructor() {
    super(), this.dispatchExceptionBackoff = new o.default(1e3, F), this.dispatchSuccessTimer = 0, this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.lastIdentifyClientState = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
      v.default.isLoggingGatewayEvents && M.verboseDangerously("~>", e, t);
      let s = w.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket ? this.webSocket.send(s) : M.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
      } catch (e) {} else M.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }, this.dispatcher = new O.default(this), this.gatewayBackoff = new o.default(1e3, 6e4), this.connectionState_ = S.default.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new A.default(w), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}