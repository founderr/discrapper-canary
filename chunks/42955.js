t.d(s, {
  Z: function() {
return g;
  }
}), t(411104), t(757143);
var n, a = t(654861),
  i = t.n(a),
  r = t(836560),
  o = t(729594),
  l = t(772848),
  c = t(261470),
  d = t(46973),
  _ = t(685756),
  E = t(710845),
  u = t(131951),
  T = t(70956),
  I = t(358085),
  S = t(399002),
  N = t(369541),
  C = t(981631),
  m = t(65154);

function A(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
let h = /^https/.test((n = 'https:', 'https:')) ? 'wss:' : 'ws:';
class g extends r.EventEmitter {
  connect() {
this._backoff.cancel();
let e = this._socket = new _.Z(this._endpoint);
e.on(_.V.Connecting, this._handleConnecting.bind(this, e)), e.on(_.V.Connect, this._handleConnect.bind(this, e)), e.on(_.V.Disconnect, this._handleDisconnect.bind(this, e)), e.on(_.V.Resuming, this._handleResuming.bind(this, e)), e.on(_.V.Ready, this._handleReady.bind(this, e)), e.on(_.V.Speaking, this._handleSpeaking.bind(this, e)), e.on(_.V.Video, this._handleVideo.bind(this, e)), e.on(_.V.Ping, this._handleControlPing.bind(this)), e.on(_.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), e.on(_.V.Codecs, this._handleCodecs.bind(this)), e.on(_.V.MediaSessionId, this._handleMediaSessionId.bind(this)), e.on(_.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), e.on(_.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), e.on(_.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), e.on(_.V.SpeedTest, this._handleSpeedTest.bind(this)), e.setHeartbeatIntervalModifier(2), e.connect();
  }
  destroy() {
if (this._backoff.cancel(), this._cleanupSocket(), null != this._connection) {
  let e = this._connection;
  this._connection = null, e.destroy();
}
this.removeAllListeners(), this._destroyed = !0;
  }
  _cleanupSocket() {
let e = this._socket;
null != e && (e.close(), e.removeAllListeners(), this._socket = null);
  }
  setState(e) {
let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)), this.state = e, this.emit('state', e, {
  hostname: this.hostname,
  channelId: i()(this.rtcServerId).prev().toString()
}, s);
  }
  startClientToServerSpeedTest(e) {
this.state === C.hes.RTC_CONNECTED && (this._speedTestParams = e, this._speedTestDirection = N.u_.CLIENT_TO_SERVER, this._setSpeedTestState(N.wn.STARTING_RECEIVER), this._speedTest(N.Pl.CLIENT_TO_SERVER_START, {}));
  }
  startServerToClientSpeedTest(e) {
let s = this._connection;
this.state === C.hes.RTC_CONNECTED && null != s && (this._speedTestParams = e, this._speedTestDirection = N.u_.SERVER_TO_CLIENT, this._setSpeedTestState(N.wn.STARTING_RECEIVER), s.startSpeedTestReceiver(() => {
  var e, s, t;
  this._setSpeedTestState(N.wn.SENDING), this._speedTest(N.Pl.SERVER_TO_CLIENT_START, {
    cluster_size: null === (e = this._speedTestParams) || void 0 === e ? void 0 : e.clusterSize,
    cluster_interval_ms: null === (s = this._speedTestParams) || void 0 === s ? void 0 : s.clusterIntervalMs,
    num_clusters: null === (t = this._speedTestParams) || void 0 === t ? void 0 : t.numClusters
  });
}, -1));
  }
  stopClientToServerSpeedTest() {
this._speedTest(N.Pl.CLIENT_TO_SERVER_END, {}), null != this._connection && this._connection.stopSpeedTestSender();
  }
  stopServerToClientSpeedTest() {
this._speedTest(N.Pl.SERVER_TO_CLIENT_END, {}), null != this._connection && this._connection.stopSpeedTestReceiver(() => {});
  }
  getNetworkOverhead() {
return this._networkOverhead;
  }
  setPingInterval(e) {
null != this._connection && this._connection.setPingInterval(e);
  }
  _setSpeedTestState(e) {
this._speedTestState = e, this.emit('speed-test-state', e);
  }
  _completeSpeedTests(e, s) {
this._speedTestState = N.wn.COMPLETED, this.emit('speed-test-completed', e, s);
  }
  _speedTest(e, s) {
let t = this._socket;
null != t && t.speedTest(e, s);
  }
  _handleConnecting(e) {
null != this._endpoint && this.logger.info('Connecting to RTC server '.concat(this._endpoint, ', rtc-connection-id: ').concat(this._rtcConnectionId)), this.setState(C.hes.CONNECTING);
  }
  _handleConnect(e) {
let s = this.token;
if (null == s)
  throw Error('RTCConnection._handleConnect(...): Token is missing.');
{
  this.logger.info('Connected to RTC server.');
  let t = [{
    rid: '100',
    type: m.Tr.TEST,
    quality: 100
  }];
  e.identify({
    serverId: this.rtcServerId,
    userId: this.userId,
    sessionId: this.sessionId,
    token: s,
    maxSecureFramesVersion: u.Z.getSupportedSecureFramesProtocolVersion(this.rtcServerId),
    video: !1,
    streamParameters: t
  }), this.setState(C.hes.AUTHENTICATING);
}
  }
  _handleDisconnect(e, s, t, n) {
this.logger.info('Disconnected from RTC server, clean: '.concat(s, ', code: ').concat(t, ', reason: ').concat(n, ', state: ').concat(this.state));
let a = 'Force Close' !== n;
if (a) {
  let e = this._backoff.fail(this.reconnect);
  this.logger.warn('Disconnect was not clean! reason='.concat(n, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
}
if (null != this._connection) {
  let e = this._connection;
  this._connection = null, e.destroy();
}
this.setState(C.hes.DISCONNECTED, {
  willReconnect: a
});
  }
  _handleResuming(e) {
this.emit('resuming');
  }
  _handleReady(e, s, t, n, a, i, r) {
this.setState(C.hes.RTC_CONNECTING), this.mediaEnginePort = t, this.mediaEngineAddress = s;
let o = u.Z.getMediaEngine().speedTester(this.userId, {
  ssrc: a,
  address: s,
  port: t,
  modes: n,
  experiments: [],
  streamParameters: i,
  qosEnabled: u.Z.getQoS()
});
o.on(d.aj.Connected, this._handleMediaEngineConnected.bind(this, e, o)), o.on(d.aj.Error, this._handleMediaEngineError.bind(this, e, o)), o.on(d.aj.ConnectionStateChange, this._handleMediaEngineConnectionStateChange.bind(this, e, o)), o.on(d.aj.Ping, this._handleMediaEnginePing.bind(this, e)), o.on(d.aj.PingTimeout, this._handleMediaEnginePingTimeout.bind(this, e)), this._connection = o;
  }
  _handleSpeaking(e, s, t, n) {}
  _handleVideo(e, s, t, n, a) {}
  _handleControlPing(e) {}
  _handleClientDisconnect(e) {}
  _handleCodecs(e, s) {
let t = this._connection;
null != t && null != this.protocol ? (t.setCodecs(null != e && '' !== e ? e : m.ad.OPUS, 'TEST'), this.emit('ready')) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
  }
  _handleSpeedTest(e, s) {
let t = this._connection;
if (null != t && null != e) {
  if (this._speedTestState === N.wn.STARTING_RECEIVER && this._speedTestDirection === N.u_.CLIENT_TO_SERVER && e === N.Pl.CLIENT_TO_SERVER_START) {
    var n;
    this._setSpeedTestState(N.wn.SENDING), t.startSpeedTestSender((e, s) => {
      this._speedTest(N.Pl.CLIENT_TO_SERVER_END, {}), this._setSpeedTestState(N.wn.AWAITING_RESULTS);
    }, this._speedTestParams.clusterSize, this._speedTestParams.clusterIntervalMs, this._speedTestParams.numClusters);
  }
  if (this._speedTestState === N.wn.AWAITING_RESULTS && this._speedTestDirection === N.u_.CLIENT_TO_SERVER && e === N.Pl.CLIENT_TO_SERVER_END) {
    let e = s.results,
      t = (0, S.un)(e, this._speedTestParams, null !== (n = this._networkOverhead) && void 0 !== n ? n : 0);
    this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(e, t);
  }
  this._speedTestState === N.wn.SENDING && this._speedTestDirection === N.u_.SERVER_TO_CLIENT && e === N.Pl.SERVER_TO_CLIENT_END && (this._setSpeedTestState(N.wn.AWAITING_RESULTS), t.stopSpeedTestReceiver((e, s) => {
    var t;
    let n = (0, S.un)(s, this._speedTestParams, null !== (t = this._networkOverhead) && void 0 !== t ? t : 0);
    this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(s, n);
  }));
}
  }
  _handleMediaSessionId(e) {}
  _handleMediaSinkWants(e) {}
  _handleCodeVersion(e, s) {}
  _handleKeyframeInterval(e) {}
  _handleMediaEngineConnected(e, s, t, n) {
if (this.logger.info('RTC connected to media server: '.concat(this.mediaEngineAddress, ':').concat(this.mediaEnginePort)), e !== this._socket) {
  this.logger.warn('Socket mismatch, disconnecting');
  return;
}
switch (this.protocol = t, t) {
  case 'udp':
    this.logger.info('Sending UDP info to RTC server.', n, []), e.once(_.V.Encryption, (e, t) => {
      s === this._connection && (s.setEncryption(e, t), s.getNetworkOverhead(e => this._networkOverhead = e));
    }), e.selectProtocol(t, this._rtcConnectionId, n, []);
    break;
  case 'webrtc':
    this.logger.info('Sending local SDP to RTC server.'), e.once(_.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(t, this._rtcConnectionId, n);
    break;
  default:
    this.logger.error('Unable to determine protocol.');
    return;
}
this._backoff.succeed();
  }
  _handleMediaEngineError(e, s, t) {
e === this._socket && this.logger.error('Error occurred while connecting to RTC server: '.concat(t));
  }
  _handleMediaEngineConnectionStateChange(e, s, t) {
if (this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)
  return;
let n = this.state;
switch (t) {
  case m.$j.DISCONNECTED:
    this.setState(C.hes.RTC_DISCONNECTED);
    break;
  case m.$j.CONNECTING:
    this.setState(C.hes.RTC_CONNECTING);
    break;
  case m.$j.CONNECTED:
    this.setState(C.hes.RTC_CONNECTED);
    break;
  case m.$j.NO_ROUTE:
    this.setState(C.hes.NO_ROUTE);
    break;
  case m.$j.ICE_CHECKING:
    this.setState(C.hes.ICE_CHECKING);
    break;
  case m.$j.DTLS_CONNECTING:
    this.setState(C.hes.DTLS_CONNECTING);
}
n === C.hes.RTC_CONNECTING && this.state === C.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === C.hes.NO_ROUTE && this._backoff.fail(this.reconnect);
  }
  _handleMediaEnginePing(e, s) {
this.emit('ping', s);
  }
  _handleMediaEnginePingTimeout(e, s, t) {
this.emit('ping-timeout', t);
  }
  _handleSDP(e) {
let s = this._connection;
null != s && null != this.protocol ? s.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
  }
  constructor({
userId: e,
sessionId: s,
rtcServerId: t,
endpoint: n,
token: a
  }) {
super(), A(this, 'userId', void 0), A(this, 'sessionId', void 0), A(this, 'rtcServerId', void 0), A(this, '_endpoint', void 0), A(this, 'hostname', void 0), A(this, 'mediaEnginePort', void 0), A(this, 'mediaEngineAddress', void 0), A(this, 'token', void 0), A(this, 'protocol', void 0), A(this, 'state', void 0), A(this, '_socket', void 0), A(this, '_connection', void 0), A(this, '_destroyed', void 0), A(this, '_speedTestState', void 0), A(this, '_speedTestDirection', void 0), A(this, '_speedTestParams', void 0), A(this, '_rtcConnectionId', void 0), A(this, '_backoff', void 0), A(this, 'logger', void 0), A(this, '_networkOverhead', void 0), A(this, 'reconnect', () => {
  let e = this._socket;
  null != e && (e.close(), e.connect());
}), this._rtcConnectionId = (0, l.Z)(), this.logger = new E.Z('RTCSpeedTestRTCConnection('.concat(t, ')')), this.userId = e, this.sessionId = s, this.rtcServerId = t, this.mediaEnginePort = null, this.mediaEngineAddress = null, this._speedTestState = null, this._speedTestDirection = null, this._speedTestParams = null, this.state = C.hes.AWAITING_ENDPOINT, this._socket = null, this.token = a, this._destroyed = !1, this._connection = null, this._backoff = new c.Z(1 * T.Z.Millis.SECOND, 10 * T.Z.Millis.SECOND), n = ''.concat(h, '//').concat(n), (0, I.isAndroid)() && (n = (n = n.replace('.gg', '.media')).replace(':80', ':443'));
let {
  hostname: i,
  port: r
} = o.parse(n), d = null != r ? parseInt(r) : NaN;
null != i && (80 === d || 443 === d) && (n = ''.concat(h, '//').concat(i)), this._endpoint = n + '/', this.hostname = i, this._networkOverhead = null;
  }
}