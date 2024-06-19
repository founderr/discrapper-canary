t.d(s, {
  Z: function() {
    return h
  }
}), t(411104), t(757143);
var n, i = t(654861),
  a = t.n(i),
  l = t(836560),
  r = t(729594),
  o = t(772848),
  c = t(261470),
  E = t(46973),
  d = t(685756),
  _ = t(710845),
  T = t(131951),
  S = t(70956),
  u = t(358085),
  I = t(399002),
  N = t(369541),
  A = t(981631),
  C = t(65154);

function O(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let m = /^https/.test((n = "https:", "https:")) ? "wss:" : "ws:";
class h extends l.EventEmitter {
  connect() {
    this._backoff.cancel();
    let e = this._socket = new d.Z(this._endpoint);
    e.on(d.V.Connecting, this._handleConnecting.bind(this, e)), e.on(d.V.Connect, this._handleConnect.bind(this, e)), e.on(d.V.Disconnect, this._handleDisconnect.bind(this, e)), e.on(d.V.Resuming, this._handleResuming.bind(this, e)), e.on(d.V.Ready, this._handleReady.bind(this, e)), e.on(d.V.Speaking, this._handleSpeaking.bind(this, e)), e.on(d.V.Video, this._handleVideo.bind(this, e)), e.on(d.V.Ping, this._handleControlPing.bind(this)), e.on(d.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), e.on(d.V.Codecs, this._handleCodecs.bind(this)), e.on(d.V.MediaSessionId, this._handleMediaSessionId.bind(this)), e.on(d.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), e.on(d.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), e.on(d.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), e.on(d.V.SpeedTest, this._handleSpeedTest.bind(this)), e.setHeartbeatIntervalModifier(2), e.connect()
  }
  destroy() {
    if (this._backoff.cancel(), this._cleanupSocket(), null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.removeAllListeners(), this._destroyed = !0
  }
  _cleanupSocket() {
    let e = this._socket;
    null != e && (e.close(), e.removeAllListeners(), this._socket = null)
  }
  setState(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.emit("state", e, {
      hostname: this.hostname,
      channelId: a()(this.rtcServerId).prev().toString()
    }, s)
  }
  startClientToServerSpeedTest(e) {
    this.state === A.hes.RTC_CONNECTED && (this._speedTestParams = e, this._speedTestDirection = N.u_.CLIENT_TO_SERVER, this._setSpeedTestState(N.wn.STARTING_RECEIVER), this._speedTest(N.Pl.CLIENT_TO_SERVER_START, {}))
  }
  startServerToClientSpeedTest(e) {
    let s = this._connection;
    this.state === A.hes.RTC_CONNECTED && null != s && (this._speedTestParams = e, this._speedTestDirection = N.u_.SERVER_TO_CLIENT, this._setSpeedTestState(N.wn.STARTING_RECEIVER), s.startSpeedTestReceiver(() => {
      var e, s, t;
      this._setSpeedTestState(N.wn.SENDING), this._speedTest(N.Pl.SERVER_TO_CLIENT_START, {
        cluster_size: null === (e = this._speedTestParams) || void 0 === e ? void 0 : e.clusterSize,
        cluster_interval_ms: null === (s = this._speedTestParams) || void 0 === s ? void 0 : s.clusterIntervalMs,
        num_clusters: null === (t = this._speedTestParams) || void 0 === t ? void 0 : t.numClusters
      })
    }, -1))
  }
  stopClientToServerSpeedTest() {
    this._speedTest(N.Pl.CLIENT_TO_SERVER_END, {}), null != this._connection && this._connection.stopSpeedTestSender()
  }
  stopServerToClientSpeedTest() {
    this._speedTest(N.Pl.SERVER_TO_CLIENT_END, {}), null != this._connection && this._connection.stopSpeedTestReceiver(() => {})
  }
  getNetworkOverhead() {
    return this._networkOverhead
  }
  setPingInterval(e) {
    null != this._connection && this._connection.setPingInterval(e)
  }
  _setSpeedTestState(e) {
    this._speedTestState = e, this.emit("speed-test-state", e)
  }
  _completeSpeedTests(e, s) {
    this._speedTestState = N.wn.COMPLETED, this.emit("speed-test-completed", e, s)
  }
  _speedTest(e, s) {
    let t = this._socket;
    null != t && t.speedTest(e, s)
  }
  _handleConnecting(e) {
    null != this._endpoint && this.logger.info("Connecting to RTC server ".concat(this._endpoint, ", rtc-connection-id: ").concat(this._rtcConnectionId)), this.setState(A.hes.CONNECTING)
  }
  _handleConnect(e) {
    let s = this.token;
    if (null == s) throw Error("RTCConnection._handleConnect(...): Token is missing.");
    {
      this.logger.info("Connected to RTC server.");
      let t = [{
        rid: "100",
        type: C.Tr.TEST,
        quality: 100
      }];
      e.identify({
        serverId: this.rtcServerId,
        userId: this.userId,
        sessionId: this.sessionId,
        token: s,
        maxSecureFramesVersion: T.Z.getSupportedSecureFramesProtocolVersion(this.rtcServerId),
        video: !1,
        streamParameters: t
      }), this.setState(A.hes.AUTHENTICATING)
    }
  }
  _handleDisconnect(e, s, t, n) {
    this.logger.info("Disconnected from RTC server, clean: ".concat(s, ", code: ").concat(t, ", reason: ").concat(n, ", state: ").concat(this.state));
    let i = "Force Close" !== n;
    if (i) {
      let e = this._backoff.fail(this.reconnect);
      this.logger.warn("Disconnect was not clean! reason=".concat(n, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
    }
    if (null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.setState(A.hes.DISCONNECTED, {
      willReconnect: i
    })
  }
  _handleResuming(e) {
    this.emit("resuming")
  }
  _handleReady(e, s, t, n, i, a, l) {
    this.setState(A.hes.RTC_CONNECTING), this.mediaEnginePort = t, this.mediaEngineAddress = s;
    let r = T.Z.getMediaEngine().speedTester(this.userId, {
      ssrc: i,
      address: s,
      port: t,
      modes: n,
      experiments: [],
      streamParameters: a,
      qosEnabled: T.Z.getQoS()
    });
    r.on(E.aj.Connected, this._handleMediaEngineConnected.bind(this, e, r)), r.on(E.aj.Error, this._handleMediaEngineError.bind(this, e, r)), r.on(E.aj.ConnectionStateChange, this._handleMediaEngineConnectionStateChange.bind(this, e, r)), r.on(E.aj.Ping, this._handleMediaEnginePing.bind(this, e)), r.on(E.aj.PingTimeout, this._handleMediaEnginePingTimeout.bind(this, e)), this._connection = r
  }
  _handleSpeaking(e, s, t, n) {}
  _handleVideo(e, s, t, n, i) {}
  _handleControlPing(e) {}
  _handleClientDisconnect(e) {}
  _handleCodecs(e, s) {
    let t = this._connection;
    null != t && null != this.protocol ? (t.setCodecs(null != e && "" !== e ? e : C.ad.OPUS, "TEST"), this.emit("ready")) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
  }
  _handleSpeedTest(e, s) {
    let t = this._connection;
    if (null != t && null != e) {
      if (this._speedTestState === N.wn.STARTING_RECEIVER && this._speedTestDirection === N.u_.CLIENT_TO_SERVER && e === N.Pl.CLIENT_TO_SERVER_START) {
        var n;
        this._setSpeedTestState(N.wn.SENDING), t.startSpeedTestSender((e, s) => {
          this._speedTest(N.Pl.CLIENT_TO_SERVER_END, {}), this._setSpeedTestState(N.wn.AWAITING_RESULTS)
        }, this._speedTestParams.clusterSize, this._speedTestParams.clusterIntervalMs, this._speedTestParams.numClusters)
      }
      if (this._speedTestState === N.wn.AWAITING_RESULTS && this._speedTestDirection === N.u_.CLIENT_TO_SERVER && e === N.Pl.CLIENT_TO_SERVER_END) {
        let e = s.results,
          t = (0, I.un)(e, this._speedTestParams, null !== (n = this._networkOverhead) && void 0 !== n ? n : 0);
        this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(e, t)
      }
      this._speedTestState === N.wn.SENDING && this._speedTestDirection === N.u_.SERVER_TO_CLIENT && e === N.Pl.SERVER_TO_CLIENT_END && (this._setSpeedTestState(N.wn.AWAITING_RESULTS), t.stopSpeedTestReceiver((e, s) => {
        var t;
        let n = (0, I.un)(s, this._speedTestParams, null !== (t = this._networkOverhead) && void 0 !== t ? t : 0);
        this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(s, n)
      }))
    }
  }
  _handleMediaSessionId(e) {}
  _handleMediaSinkWants(e) {}
  _handleCodeVersion(e, s) {}
  _handleKeyframeInterval(e) {}
  _handleMediaEngineConnected(e, s, t, n) {
    if (this.logger.info("RTC connected to media server: ".concat(this.mediaEngineAddress, ":").concat(this.mediaEnginePort)), e !== this._socket) {
      this.logger.warn("Socket mismatch, disconnecting");
      return
    }
    switch (this.protocol = t, t) {
      case "udp":
        this.logger.info("Sending UDP info to RTC server.", n, []), e.once(d.V.Encryption, (e, t) => {
          s === this._connection && (s.setEncryption(e, t), s.getNetworkOverhead(e => this._networkOverhead = e))
        }), e.selectProtocol(t, this._rtcConnectionId, n, []);
        break;
      case "webrtc":
        this.logger.info("Sending local SDP to RTC server."), e.once(d.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(t, this._rtcConnectionId, n);
        break;
      default:
        this.logger.error("Unable to determine protocol.");
        return
    }
    this._backoff.succeed()
  }
  _handleMediaEngineError(e, s, t) {
    e === this._socket && this.logger.error("Error occurred while connecting to RTC server: ".concat(t))
  }
  _handleMediaEngineConnectionStateChange(e, s, t) {
    if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)), e !== this._socket) return;
    let n = this.state;
    switch (t) {
      case C.$j.DISCONNECTED:
        this.setState(A.hes.RTC_DISCONNECTED);
        break;
      case C.$j.CONNECTING:
        this.setState(A.hes.RTC_CONNECTING);
        break;
      case C.$j.CONNECTED:
        this.setState(A.hes.RTC_CONNECTED);
        break;
      case C.$j.NO_ROUTE:
        this.setState(A.hes.NO_ROUTE);
        break;
      case C.$j.ICE_CHECKING:
        this.setState(A.hes.ICE_CHECKING);
        break;
      case C.$j.DTLS_CONNECTING:
        this.setState(A.hes.DTLS_CONNECTING)
    }
    n === A.hes.RTC_CONNECTING && this.state === A.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === A.hes.NO_ROUTE && this._backoff.fail(this.reconnect)
  }
  _handleMediaEnginePing(e, s) {
    this.emit("ping", s)
  }
  _handleMediaEnginePingTimeout(e, s, t) {
    this.emit("ping-timeout", t)
  }
  _handleSDP(e) {
    let s = this._connection;
    null != s && null != this.protocol ? s.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
  }
  constructor({
    userId: e,
    sessionId: s,
    rtcServerId: t,
    endpoint: n,
    token: i
  }) {
    super(), O(this, "userId", void 0), O(this, "sessionId", void 0), O(this, "rtcServerId", void 0), O(this, "_endpoint", void 0), O(this, "hostname", void 0), O(this, "mediaEnginePort", void 0), O(this, "mediaEngineAddress", void 0), O(this, "token", void 0), O(this, "protocol", void 0), O(this, "state", void 0), O(this, "_socket", void 0), O(this, "_connection", void 0), O(this, "_destroyed", void 0), O(this, "_speedTestState", void 0), O(this, "_speedTestDirection", void 0), O(this, "_speedTestParams", void 0), O(this, "_rtcConnectionId", void 0), O(this, "_backoff", void 0), O(this, "logger", void 0), O(this, "_networkOverhead", void 0), O(this, "reconnect", () => {
      let e = this._socket;
      null != e && (e.close(), e.connect())
    }), this._rtcConnectionId = (0, o.Z)(), this.logger = new _.Z("RTCSpeedTestRTCConnection(".concat(t, ")")), this.userId = e, this.sessionId = s, this.rtcServerId = t, this.mediaEnginePort = null, this.mediaEngineAddress = null, this._speedTestState = null, this._speedTestDirection = null, this._speedTestParams = null, this.state = A.hes.AWAITING_ENDPOINT, this._socket = null, this.token = i, this._destroyed = !1, this._connection = null, this._backoff = new c.Z(1 * S.Z.Millis.SECOND, 10 * S.Z.Millis.SECOND), n = "".concat(m, "//").concat(n), (0, u.isAndroid)() && (n = (n = n.replace(".gg", ".media")).replace(":80", ":443"));
    let {
      hostname: a,
      port: l
    } = r.parse(n), E = null != l ? parseInt(l) : NaN;
    null != a && (80 === E || 443 === E) && (n = "".concat(m, "//").concat(a)), this._endpoint = n + "/", this.hostname = a, this._networkOverhead = null
  }
}