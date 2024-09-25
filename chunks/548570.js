n.d(t, {
    Z: function () {
        return ei;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(653041);
var c = n(177593);
var d = n(512722),
    _ = n.n(d),
    E = n(457854);
var f = n(261470),
    h = n(956067),
    p = n(286379),
    m = n(442837),
    I = n(544891),
    T = n(570140),
    g = n(406966),
    S = n(795513),
    A = n(266750),
    v = n(250407),
    N = n(710845),
    O = n(797614),
    R = n(218543),
    C = n(857192),
    y = n(626135),
    b = n(12647),
    L = n(70956),
    D = n(358085),
    M = n(960048),
    P = n(138859),
    U = n(14639),
    w = n(639655),
    x = n(610308),
    G = n(91247),
    k = n(508569),
    B = n(183139),
    F = n(645436),
    Z = n(833508),
    V = n(981631);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let Y = new N.Z('GatewaySocket'),
    j = new x.Z();
function W(e) {
    let t,
        { gatewayURL: n, newCallback: r, onOpen: i, onMessage: a, onError: o, onClose: s } = e,
        l = window._ws,
        u = !1,
        c = !1,
        d = null,
        _ = null;
    if (((window._ws = null), null != l)) {
        if (((t = l.ws), l.state.gateway !== n)) Y.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), (t = null);
        else {
            var E;
            let e = { ...l.state };
            null != e.messages &&
                (e.messages = e.messages.map((e) =>
                    null != e.data && 'string' == typeof e.data
                        ? {
                              ...e,
                              data: e.data.substring(0, 100)
                          }
                        : e
                )),
                Y.log('[FAST CONNECT] successfully took over websocket, state:', {
                    ...e,
                    messages: null === (E = e.messages) || void 0 === E ? void 0 : E.length
                }),
                (u = l.state.open),
                (c = l.state.identify),
                (d = l.state.messages),
                (_ = l.state.clientState);
        }
    }
    null == t && ((t = (0, Z.Z)(n)).binaryType = 'arraybuffer'), r(t), u && i(c, _), null != d && d.forEach(a), (t.onopen = () => i(c, _)), (t.onmessage = a), (t.onclose = s), (t.onerror = o);
}
function K() {}
let z = 4,
    q = 1001,
    Q = 'Stream end encountered',
    X = 4004,
    $ = 30 * L.Z.Millis.SECOND,
    J = 3 * L.Z.Millis.MINUTE,
    ee = 1 * L.Z.Millis.MINUTE;
function et(e, t, n) {
    let r = 0;
    e.dataReady((e) => {
        try {
            return n(e, r);
        } finally {
            r = 0;
        }
    });
    let i = !1;
    return (n) => {
        let a = n.data;
        null != n.raw_length ? (r += n.raw_length) : (r += en(a));
        try {
            e.feed(a);
        } catch (e) {
            throw (!i && ((i = !0), t(!1, 0, 'A decompression error occurred')), e);
        }
    };
}
function en(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let er = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class ei extends B.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        Y.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = {
            ...this.analytics,
            ...e
        };
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && Y.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect() {
        if (!this.willReconnect()) {
            Y.verbose('Skipping _connect because willReconnect is false');
            return;
        }
        if (F.a()) {
            Y.info('Skipping _connect because socket is paused');
            return;
        }
        (this.connectionState = P.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let e = this.compressionHandler.getAlgorithm(),
            t = j.getName(),
            n = this._getGatewayUrl(),
            r = window.GLOBAL_ENV.API_VERSION;
        h.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            Y.info('[CONNECT] '.concat(n, ', ') + 'encoding: '.concat(t, ', ') + 'version: '.concat(r, ', ') + 'compression: '.concat(null != e ? e : 'none')),
            null !== this.webSocket && (Y.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, $));
        let i = new URL(n);
        i.searchParams.append('encoding', t),
            i.searchParams.append('v', r.toString()),
            null != e && i.searchParams.append('compress', e),
            W({
                gatewayURL: i.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    h.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    Y.info('[CONNECTED] '.concat(i.toString(), ' in ').concat(t, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: et(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: a, d: o } = j.unpack(e);
                    if ((r !== B.j.DISPATCH && h.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(r, ' ').concat(B.j[r])), C.default.isLoggingGatewayEvents)) {
                        let e = [r];
                        r === B.j.DISPATCH && e.push(a), e.push(o), Y.verboseDangerously('<~', ...e);
                    }
                    let s = Date.now() - n;
                    switch (('READY' === a ? R.Z.parseReady.set(n, s) : 'READY_SUPPLEMENTAL' === a ? R.Z.parseReadySupplemental.set(n, s) : s > 10 && h.Z.mark('\uD83C\uDF10', 'Parse ' + a, s), null != i && (this.seq = i), r)) {
                        case B.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(o);
                            break;
                        case B.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case B.j.INVALID_SESSION:
                            this._handleInvalidSession(o);
                            break;
                        case B.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case B.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(o);
                            break;
                        case B.j.DISPATCH:
                            this._handleDispatch(
                                o,
                                a,
                                'READY' === a
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: en(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: j.getName(),
                                          unpack_duration_ms: s
                                      }
                                    : null
                            );
                            break;
                        default:
                            Y.info('Unhandled op '.concat(r));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null), b.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: r } = e;
                    return this._handleClose(t, n, r);
                }
            });
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now() - this.connectionStartTime;
        Y.verbose('[HELLO] via '.concat((0, G.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        Y.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = P.Z.WILL_RECONNECT), this._connect();
    }
    _handleInvalidSession(e) {
        Y.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ('READY' === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, G.TO)(e);
            h.Z.setServerTrace(n), Y.info('[READY] took '.concat(r, 'ms, as ').concat(t)), Y.verbose(''.concat(n)), (this.connectionState = P.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === t ? (Y.info('[READY_SUPPLEMENTAL] took '.concat(r, 'ms')), (this.connectionState = P.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === t && (Y.verbose((0, G.TO)(e)), (this.connectionState = P.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        Y.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : er;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), Y.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = P.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        Y.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: t,
                reason: n
            }),
            t === X)
        )
            return (this.connectionState = P.Z.CLOSED), Y.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
        if ((this._tryDetectInvalidIOSToken(t, n, e), (this.connectionState = P.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) Y.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect();
        else {
            let r = this.gatewayBackoff.fail(() => this._connect());
            Y.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(t, ', ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > z && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, D.isIOS)() &&
            null != this.token &&
            e === q &&
            t === Q &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                I.tn
                    .get({
                        url: V.ANM.ME,
                        headers: { authorization: this.token }
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            y.default.track(V.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t && ((this.connectionState = P.Z.CLOSED), Y.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, X, 'invalid token manually detected')), y.default.track(V.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        }
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            Y.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')),
            this.emit('disconnect', {
                wasClean: e,
                code: t,
                reason: n
            });
    }
    _sendHeartbeatIfDue() {
        if (null == this.heartbeatInterval || null == this.heartbeater) return;
        let e = this.lastHeartbeatTime;
        null != e && Date.now() - e > this.heartbeatInterval + 5000 && this._sendHeartbeat();
    }
    _doHeartbeatInterval() {
        this.heartbeatAck ? ((this.heartbeatAck = !1), this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout();
    }
    _startHeartbeater() {
        let { heartbeatInterval: e } = this;
        _()(null != e, 'GatewaySocket: Heartbeat interval should never null here.'),
            null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout),
            null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            (this.initialHeartbeatTimeout = setTimeout(
                () => {
                    (this.initialHeartbeatTimeout = null), (this.heartbeatAck = !0), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e)), this._doHeartbeatInterval();
                },
                Math.floor(Math.random() * e)
            ));
    }
    _stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), (this.initialHeartbeatTimeout = null)), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    _clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    _cleanup(e) {
        m.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null), null != t && ((t.onopen = K), (t.onmessage = K), (t.onerror = K), (t.onclose = K), null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, w.I)(j));
    }
    _doResume() {
        var e;
        (this.connectionState = P.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, G.zH)(Date.now() - this.connectionStartTime)),
            Y.info('[RESUME] resuming session '.concat(null !== (e = this.sessionId) && void 0 !== e ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                B.j.RESUME,
                {
                    token: this.token,
                    session_id: this.sessionId,
                    seq: this.seq
                },
                !1
            );
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) {
            this._handleClose(!0, X, 'No connection info provided');
            return;
        }
        this.connectionState = P.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([(0, v.O)() ? g.Z.getCommittedVersions() : {}, (0, v.O)() ? A.Z.getCommittedVersions() : {}, !!(0, v.O)() && S.Z.canUseGuildVersions()]),
            a = i
                ? {
                      guild_versions: n,
                      highest_last_message_id: r.highest_last_message_id,
                      read_state_version: r.read_state_version,
                      user_guild_settings_version: r.user_guild_settings_version,
                      user_settings_version: r.user_settings_version,
                      private_channels_version: r.private_channels_version,
                      api_code_version: r.api_code_version,
                      initial_guild_id: r.initial_guild_id
                  }
                : { guild_versions: {} };
        if (this.connectionState !== P.Z.IDENTIFYING || this.identifyStartTime !== t) {
            Y.warn('Skipping identify because connectionState or identifyStartTime has changed');
            return;
        }
        let { token: o, properties: s = {}, presence: l } = e;
        (this.token = o), Y.verbose('[IDENTIFY]');
        let u = {
                token: o,
                capabilities: (0, U.t)(),
                properties: s,
                presence: l,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: a
            },
            c = JSON.stringify(u);
        (this.identifyUncompressedByteSize = c.length), (this.identifyCompressedByteSize = E.deflate(c).length), (this.identifyCount += 1), this.send(B.j.IDENTIFY, u, !1);
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) {
            this._handleClose(!0, X, 'No connection info provided');
            return;
        }
        let { token: t } = e;
        (this.token = t), (this.connectionState = P.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), Y.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= J) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(B.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return Y;
    }
    willReconnect() {
        return this.connectionState === P.Z.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === P.Z.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === P.Z.SESSION_ESTABLISHED || this.connectionState === P.Z.RESUMING;
    }
    isConnected() {
        return this.connectionState === P.Z.IDENTIFYING || this.connectionState === P.Z.RESUMING || this.connectionState === P.Z.SESSION_ESTABLISHED;
    }
    connect() {
        return this.isClosed() ? (Y.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = P.Z.WILL_RECONNECT), this._connect(), !0) : (Y.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        Y.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack),
            O.Z.increment(
                {
                    name: p.V.SOCKET_CRASHED,
                    tags: ['action:'.concat(null != r ? r : t)]
                },
                !0
            ),
            !1 !== e.sentry && M.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            y.default.track(V.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = P.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let i = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (Y.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()),
            i &&
                ((this.didForceClearGuildHashes = !0),
                T.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(t)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * ee));
    }
    resetSocketOnDispatchError(e) {
        let t = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
        this.resetSocketOnError({
            ...e,
            sentry: !t,
            clearCache: t
        });
    }
    close() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.isClosed()) {
            Y.verbose('close() called, but socket is already closed.');
            return;
        }
        Y.info('Closing connection, current state is '.concat(this.connectionState));
        let t = e ? 4000 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = P.Z.CLOSED),
            !e &&
                setImmediate(() => {
                    this._reset(!0, 1000, 'Disconnect requested by user');
                });
    }
    networkStateChange(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.expeditedHeartbeat(e, t, n, !1);
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (!this.isClosed()) {
            if (this.isConnected()) {
                Y.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n ? this.resetBackoff(t, r) : Y.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        Y.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect() : t && this.connectionState !== P.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            H(this, 'gatewayBackoff', void 0),
            H(this, 'handleIdentify', void 0),
            H(this, 'dispatchExceptionBackoff', new f.Z(1000, ee)),
            H(this, 'dispatchSuccessTimer', 0),
            H(this, 'connectionState_', void 0),
            H(this, 'webSocket', void 0),
            H(this, 'seq', void 0),
            H(this, 'sessionId', void 0),
            H(this, 'token', void 0),
            H(this, 'initialHeartbeatTimeout', void 0),
            H(this, 'expeditedHeartbeatTimeout', void 0),
            H(this, 'heartbeatInterval', void 0),
            H(this, 'helloTimeout', void 0),
            H(this, 'heartbeater', void 0),
            H(this, 'lastHeartbeatTime', void 0),
            H(this, 'lastHeartbeatAckTime', void 0),
            H(this, 'heartbeatAck', void 0),
            H(this, 'connectionStartTime', void 0),
            H(this, 'identifyStartTime', void 0),
            H(this, 'nextReconnectIsImmediate', void 0),
            H(this, 'compressionHandler', void 0),
            H(this, 'hasConnectedOnce', void 0),
            H(this, 'isFastConnect', void 0),
            H(this, 'didForceClearGuildHashes', !1),
            H(this, 'identifyUncompressedByteSize', 0),
            H(this, 'identifyCompressedByteSize', 0),
            H(this, 'analytics', {}),
            H(this, 'identifyCount', 0),
            H(this, 'resumeUrl', null),
            H(this, 'iosGoingAwayEventCount', 0),
            H(this, 'dispatcher', void 0),
            H(this, 'send', (e, t, n) => {
                C.default.isLoggingGatewayEvents && Y.verboseDangerously('~>', e, t);
                let r = j.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else Y.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new k.Z(this)),
            (this.gatewayBackoff = new f.Z(1000, 60000)),
            (this.connectionState_ = P.Z.CLOSED),
            (this.webSocket = null),
            (this.seq = 0),
            (this.sessionId = null),
            (this.token = null),
            (this.initialHeartbeatTimeout = null),
            (this.expeditedHeartbeatTimeout = null),
            (this.lastHeartbeatTime = null),
            (this.lastHeartbeatAckTime = null),
            (this.helloTimeout = null),
            (this.heartbeatInterval = null),
            (this.heartbeater = null),
            (this.heartbeatAck = !0),
            (this.connectionStartTime = 0),
            (this.identifyStartTime = 0),
            (this.nextReconnectIsImmediate = !1),
            (this.compressionHandler = (0, w.I)(j)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
