n.d(t, {
    V: function () {
        return o;
    },
    Z: function () {
        return Y;
    }
});
var r,
    i,
    a,
    o,
    s = n(518263);
var l = n(970173);
var u = n(520712);
var c = n(268111);
var d = n(941497);
var _ = n(32026);
var E = n(480839);
var f = n(744285);
var h = n(492257);
var p = n(873817);
var m = n(47120);
var I = n(789020);
var T = n(512722),
    g = n.n(T),
    S = n(261470),
    A = n(47770),
    v = n(710845),
    N = n(857192),
    O = n(70956),
    R = n(358085),
    C = n(65154);
function y(e, t, n) {
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
let L = 3,
    b = 8;
function D() {}
!(function (e) {
    (e[(e.IDENTIFY = 0)] = 'IDENTIFY'), (e[(e.SELECT_PROTOCOL = 1)] = 'SELECT_PROTOCOL'), (e[(e.READY = 2)] = 'READY'), (e[(e.HEARTBEAT = 3)] = 'HEARTBEAT'), (e[(e.SELECT_PROTOCOL_ACK = 4)] = 'SELECT_PROTOCOL_ACK'), (e[(e.SPEAKING = 5)] = 'SPEAKING'), (e[(e.HEARTBEAT_ACK = 6)] = 'HEARTBEAT_ACK'), (e[(e.RESUME = 7)] = 'RESUME'), (e[(e.HELLO = 8)] = 'HELLO'), (e[(e.RESUMED = 9)] = 'RESUMED'), (e[(e.CLIENT_CONNECT = 11)] = 'CLIENT_CONNECT'), (e[(e.VIDEO = 12)] = 'VIDEO'), (e[(e.CLIENT_DISCONNECT = 13)] = 'CLIENT_DISCONNECT'), (e[(e.SESSION_UPDATE = 14)] = 'SESSION_UPDATE'), (e[(e.MEDIA_SINK_WANTS = 15)] = 'MEDIA_SINK_WANTS'), (e[(e.VOICE_BACKEND_VERSION = 16)] = 'VOICE_BACKEND_VERSION'), (e[(e.CHANNEL_OPTIONS_UPDATE = 17)] = 'CHANNEL_OPTIONS_UPDATE'), (e[(e.FLAGS = 18)] = 'FLAGS'), (e[(e.PLATFORM = 20)] = 'PLATFORM'), (e[(e.DAVE_PROTOCOL_PREPARE_TRANSITION = 21)] = 'DAVE_PROTOCOL_PREPARE_TRANSITION'), (e[(e.DAVE_PROTOCOL_EXECUTE_TRANSITION = 22)] = 'DAVE_PROTOCOL_EXECUTE_TRANSITION'), (e[(e.DAVE_PROTOCOL_READY_FOR_TRANSITION = 23)] = 'DAVE_PROTOCOL_READY_FOR_TRANSITION'), (e[(e.DAVE_PROTOCOL_PREPARE_EPOCH = 24)] = 'DAVE_PROTOCOL_PREPARE_EPOCH'), (e[(e.MLS_EXTERNAL_SENDER_PACKAGE = 25)] = 'MLS_EXTERNAL_SENDER_PACKAGE'), (e[(e.MLS_KEY_PACKAGE = 26)] = 'MLS_KEY_PACKAGE'), (e[(e.MLS_PROPOSALS = 27)] = 'MLS_PROPOSALS'), (e[(e.MLS_COMMIT_WELCOME = 28)] = 'MLS_COMMIT_WELCOME'), (e[(e.MLS_PREPARE_COMMIT_TRANSITION = 29)] = 'MLS_PREPARE_COMMIT_TRANSITION'), (e[(e.MLS_WELCOME = 30)] = 'MLS_WELCOME'), (e[(e.MLS_INVALID_COMMIT_WELCOME = 31)] = 'MLS_INVALID_COMMIT_WELCOME'), (e[(e.CLIENT_CANNOT_REACH_RTC_SERVER = 32)] = 'CLIENT_CANNOT_REACH_RTC_SERVER');
})(r || (r = {})),
    !(function (e) {
        (e[(e.AUTHENTICATION_FAILED = 4004)] = 'AUTHENTICATION_FAILED'), (e[(e.INVALID_SESSION = 4006)] = 'INVALID_SESSION'), (e[(e.SERVER_NOT_FOUND = 4011)] = 'SERVER_NOT_FOUND'), (e[(e.SERVER_CRASH = 4015)] = 'SERVER_CRASH'), (e[(e.CANCELED = 4016)] = 'CANCELED'), (e[(e.HEARTBEAT_TIMEOUT = 4800)] = 'HEARTBEAT_TIMEOUT'), (e[(e.UNRESUMABLE = 4801)] = 'UNRESUMABLE'), (e[(e.RESET_BACKOFF = 4802)] = 'RESET_BACKOFF');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.DISCONNECTED = 0)] = 'DISCONNECTED'), (e[(e.CONNECTING = 1)] = 'CONNECTING'), (e[(e.IDENTIFYING = 2)] = 'IDENTIFYING'), (e[(e.RESUMING = 3)] = 'RESUMING'), (e[(e.CONNECTED = 4)] = 'CONNECTED'), (e[(e.RECONNECTING = 5)] = 'RECONNECTING');
    })(a || (a = {}));
let M = 20 * O.Z.Millis.SECOND,
    P = 3,
    U = 1 * O.Z.Millis.MINUTE,
    w = 0.25,
    x = 0.1,
    G = 5 * O.Z.Millis.SECOND,
    k = 2,
    B = 8;
function F(e) {
    return e.map((e) => ({
        name: e.name,
        type: e.type,
        priority: 1000 * e.priority,
        payload_type: e.payloadType,
        rtx_payload_type: e.rtxPayloadType,
        encode: e.encode,
        decode: e.decode
    }));
}
function Z(e) {
    return null == e
        ? void 0
        : e.map((e) => ({
              type: e.type,
              rid: e.rid,
              ssrc: e.ssrc,
              active: e.active,
              quality: e.quality,
              rtx_ssrc: e.rtxSsrc,
              max_bitrate: e.maxBitrate,
              max_framerate: e.maxFrameRate,
              max_resolution:
                  null != e.maxResolution
                      ? {
                            type: e.maxResolution.type,
                            width: e.maxResolution.width,
                            height: e.maxResolution.height
                        }
                      : void 0
          }));
}
function V(e) {
    if ('audio' === e) return C.Tr.AUDIO;
    if ('test' === e) return C.Tr.TEST;
    if ('screen' === e) return C.Tr.SCREEN;
    else return C.Tr.VIDEO;
}
function H(e) {
    var t;
    return null !==
        (t =
            null == e
                ? void 0
                : e.map((e) => ({
                      type: V(e.type),
                      rid: e.rid,
                      ssrc: e.ssrc,
                      rtxSsrc: e.rtx_ssrc,
                      active: e.active,
                      quality: e.quality,
                      maxBitrate: e.max_bitrate,
                      maxFrameRate: e.max_framerate,
                      maxResolution:
                          null != e.max_resolution
                              ? {
                                    type: e.max_resolution.type,
                                    width: e.max_resolution.width,
                                    height: e.max_resolution.height
                                }
                              : void 0
                  }))) && void 0 !== t
        ? t
        : [];
}
!(function (e) {
    (e.Connecting = 'connecting'), (e.Connect = 'connect'), (e.Disconnect = 'disconnect'), (e.Resuming = 'resuming'), (e.Ready = 'ready'), (e.Speaking = 'speaking'), (e.Video = 'video'), (e.Ping = 'ping'), (e.ClientConnect = 'client-connect'), (e.ClientDisconnect = 'client-disconnect'), (e.Codecs = 'codecs'), (e.MediaSessionId = 'media-session-id'), (e.MediaSinkWants = 'media-sink-wants'), (e.VoiceBackendVersion = 'voice-backend-version'), (e.KeyframeInterval = 'keyframe-interval'), (e.ChannelOptionsUpdateSecureFramesProtocol = 'update-secure-frames-protocol'), (e.Flags = 'flags'), (e.Platform = 'platform'), (e.SDP = 'sdp'), (e.Encryption = 'encryption'), (e.BandwidthEstimationExperiment = 'bandwidth-estimation-experiment'), (e.SecureFramesInit = 'secure-frames-init'), (e.SecureFramesPrepareTransition = 'secure-frames-prepare-transition'), (e.SecureFramesExecuteTransition = 'secure-frames-execute-transition'), (e.SecureFramesPrepareEpoch = 'secure-frames-prepare-epoch'), (e.MLSExternalSenderPackage = 'mls-external-sender-package'), (e.MLSProposals = 'mls-proposals'), (e.MLSPrepareCommitTransition = 'mls-prepare-commit-transition'), (e.MLSWelcome = 'mls-welcome');
})(o || (o = {}));
class Y extends A.Z {
    createWebSocket() {
        this.logger.info('[CONNECT] '.concat(this.url)),
            null !== this.webSocket && (this.logger.error('Connect called with already existing websocket'), this.cleanupWebSocket((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this.handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.'));
            }, M));
        let e = (this.webSocket = new WebSocket(''.concat(this.url, '?v=').concat(b)));
        (e.binaryType = 'arraybuffer'),
            (e.onopen = () => {
                1 === this.connectionState ? this.emit('connect') : 5 === this.connectionState && this.doResumeOrClose(), (this.connectionState = 4);
                let e = Date.now() - this.connectionStartTime;
                this.logger.info('[CONNECTED] '.concat(this.url, ' in ').concat(e, ' ms')), this.emit('ping', Math.round(e / 2));
            }),
            (e.onmessage = (e) => {
                let { op: t, seq: n, d: r } = this.parseWebSocketMessage(e);
                if ((n && (this.lastRecvSeqNum = n), N.default.isLoggingGatewayEvents)) {
                    if (r instanceof Uint8Array) {
                        let e = [...r].map((e) => e.toString(16).padStart(2, '0')).join('');
                        this.logger.info('~> '.concat(t, ': 0x').concat(e));
                    } else this.logger.info('~> '.concat(t, ': ').concat(JSON.stringify(r)));
                }
                switch (t) {
                    case 8:
                        this.clearHelloTimeout(), this.handleHello(r);
                        break;
                    case 2:
                        this.handleReady(r);
                        break;
                    case 9:
                        this.handleResumed(r);
                        break;
                    case 4:
                        r.bandwidth_estimation_experiment && this.emit('bandwidth-estimation-experiment', r.bandwidth_estimation_experiment), this.emit('codecs', r.audio_codec, r.video_codec), r.media_session_id && this.emit('media-session-id', r.media_session_id), r.sdp ? this.emit('sdp', r.sdp) : r.mode && this.emit('encryption', r.mode, r.secret_key), r.keyframe_interval && this.emit('keyframe-interval', r.keyframe_interval), this.emit('secure-frames-init', r.dave_protocol_version || 0), (this.resumable = !0);
                        break;
                    case 5:
                        let i = r.speaking;
                        'boolean' == typeof i && (i = i ? C.Dg.VOICE : C.Dg.NONE), this.emit('speaking', r.user_id, r.ssrc, i);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(r);
                        break;
                    case 12:
                        this.emit('video', r.user_id, r.audio_ssrc, r.video_ssrc, H(r.streams));
                        break;
                    case 11:
                        this.emit('client-connect', r.user_ids);
                        break;
                    case 13:
                        this.emit('client-disconnect', r.user_id);
                        break;
                    case 14:
                        (null != r.audio_codec || null != r.video_codec) && this.emit('codecs', r.audio_codec, r.video_codec), null != r.media_session_id && this.emit('media-session-id', r.media_session_id), r.keyframe_interval && this.emit('keyframe-interval', r.keyframe_interval);
                        break;
                    case 15:
                        this.emit('media-sink-wants', r);
                        break;
                    case 16:
                        null != r.voice && null != r.rtc_worker && this.emit('voice-backend-version', r.voice, r.rtc_worker);
                        break;
                    case 18:
                        null != r.flags && null != r.user_id && this.emit('flags', r.user_id, r.flags);
                        break;
                    case 20:
                        null != r.platform && null != r.user_id && this.emit('platform', r.user_id, r.platform);
                        break;
                    case 21:
                        null != r.transition_id && null != r.protocol_version && this.emit('secure-frames-prepare-transition', r.transition_id, r.protocol_version);
                        break;
                    case 22:
                        null != r.transition_id && this.emit('secure-frames-execute-transition', r.transition_id);
                        break;
                    case 24:
                        null != r.epoch && null != r.protocol_version && this.emit('secure-frames-prepare-epoch', r.epoch, r.protocol_version);
                        break;
                    case 25:
                        this.emit('mls-external-sender-package', r);
                        break;
                    case 27:
                        this.emit('mls-proposals', r);
                        break;
                    case 29: {
                        let e = new DataView(r.buffer, r.byteOffset, k).getUint16(0, !1),
                            t = r.slice(k);
                        this.emit('mls-prepare-commit-transition', e, t);
                        break;
                    }
                    case 30: {
                        let e = new DataView(r.buffer, r.byteOffset, k).getUint16(0, !1),
                            t = r.slice(k);
                        this.emit('mls-welcome', e, t);
                        break;
                    }
                    default:
                        this.logger.info('Unhandled op '.concat(t));
                }
            }),
            (e.onerror = () => this.handleClose(!1, 0, 'An error with the websocket occurred')),
            (e.onclose = (e) => {
                let { wasClean: t, code: n, reason: r } = e;
                return this.handleClose(t, n, r);
            });
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let r = JSON.stringify({
            op: e,
            d: t
        });
        N.default.isLoggingGatewayEvents && this.logger.info('<~ '.concat(r));
        try {
            n.send(r);
        } catch (e) {}
    }
    sendBinary(e, t) {
        let n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let r = new Uint8Array(t.byteLength + 1);
        (r[0] = e), r.set(t, 1);
        try {
            n.send(r.buffer);
        } catch (e) {}
    }
    ping() {
        this.sendHeartbeat();
    }
    doResumeOrClose() {
        let e = Date.now();
        null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= U) ? (this.doResume(), (this.lastHeartbeatAckTime = e)) : this.disconnect(!1, 4801, 'Cannot resume connection.');
    }
    doResume() {
        var e, t, n;
        let r = null !== (e = this.lastRecvSeqNum) && void 0 !== e ? e : -1;
        this.logger.info(
            '[RESUME] resuming session. serverId='
                .concat(null !== (t = this.serverId) && void 0 !== t ? t : '', ' sessionId=')
                .concat(null !== (n = this.sessionId) && void 0 !== n ? n : '', ' seqAck=')
                .concat(r)
        ),
            this.emit('resuming'),
            (this.connectionState = 3),
            this.send(7, {
                token: this.token,
                session_id: this.sessionId,
                server_id: this.serverId,
                seq_ack: r
            });
    }
    handleHello(e) {
        var t, n, r;
        if (((this.serverVersion = null !== (t = e.v) && void 0 !== t ? t : L), this.serverVersion <= 3)) {
            let t = R.isPlatformEmbedded ? w : x;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier), !R.isPlatformEmbedded && (this.heartbeatInterval = Math.min(G, null !== (n = this.heartbeatInterval) && void 0 !== n ? n : NaN));
        let i = Date.now() - this.connectionStartTime;
        this.logger.info(
            '[HELLO] heartbeat interval: '
                .concat(null !== (r = this.heartbeatInterval) && void 0 !== r ? r : '??', ', version: ')
                .concat(this.serverVersion, ', took ')
                .concat(i, ' ms')
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = Date.now() - this.connectionStartTime;
        this.logger.info('[READY] took '.concat(t, ' ms')), this.serverVersion >= 6 && this.send(16, {}), this.emit('ready', e.ip, e.port, e.modes, e.ssrc, H(e.streams), e.experiments);
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, t, n) {
        if (((this.connectionState = 0), (e = e || !1), this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t)) return this.disconnect(e, t, n);
        if (this.backoff.fails > P) this.logger.warn('[WS CLOSED] Backoff exceed. Resetting.'), this.disconnect(e, t, n);
        else {
            let r = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn(
                '[WS CLOSED] (clean: '
                    .concat(e.toString(), ', code: ')
                    .concat(t, ', reason: ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
            );
        }
    }
    disconnect(e, t, n) {
        this.logger.warn('[DISCONNECT] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')), this.cleanupWebSocket(), this.cleanupState(), (this.connectionState = 0), this.emit('disconnect', e, t, n);
    }
    reconnect(e, t, n) {
        this.logger.info('[RECONNECT] wasClean='.concat(e.toString(), ' code=').concat(t, ' reason=').concat(n)), this.cleanupWebSocket((e) => e.close(4000)), (this.connectionState = 5), this.createWebSocket();
    }
    cleanupWebSocket(e) {
        this.stopHeartbeater(), this.clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null), null != t && ((t.onopen = D), (t.onmessage = D), (t.onerror = D), (t.onclose = D), null == e || e(t)), this.backoff.cancel();
    }
    cleanupState() {
        (this.serverId = null), (this.sessionId = null), (this.token = null), (this.resumable = !1), (this.lastRecvSeqNum = null);
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
        {
            let t = new Uint8Array(e.data),
                n = null;
            this.serverVersion >= B && (n = new DataView(t.buffer).getUint16(0, !1));
            let r = this.serverVersion >= B ? 2 : 0,
                i = 1;
            return {
                op: t[r],
                seq: n,
                d: t.subarray(r + i)
            };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info('Heartbeat ACK received');
        let t = null;
        (t = this.serverVersion >= B ? e.t : e), this.emit('ping', Date.now() - t), (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), this.logger.info('Expedited heartbeat succeeded'));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket((e) => e.close(4000));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, 'Heartbeat timeout.'));
        this.logger.warn('[HEARTBEAT ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    startHeartbeater() {
        g()(null != this.heartbeatInterval, 'RTCControlSocket: Heartbeat interval should never null here.'),
            this.logger.info('Starting heartbeat with interval: '.concat(this.heartbeatInterval)),
            null !== this.heartbeater && clearInterval(this.heartbeater),
            (this.heartbeatAck = !0),
            (this.heartbeater = setInterval(() => {
                this.heartbeatAck ? ((this.heartbeatAck = !1), this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
            }, this.heartbeatInterval));
    }
    sendHeartbeat() {
        if (this.serverVersion >= B) {
            var e;
            let t = null !== (e = this.lastRecvSeqNum) && void 0 !== e ? e : -1;
            this.logger.info('Sending heartbeat with last received sequence number: '.concat(t)),
                this.send(3, {
                    t: Date.now(),
                    seq_ack: t
                });
        } else this.logger.info('Sending heartbeat'), this.send(3, Date.now());
    }
    stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    connect() {
        return 0 !== this.connectionState ? (this.logger.error('Cannot start a new connection, connection state is not disconnected'), !1) : ((this.connectionState = 1), this.createWebSocket(), this.emit('connecting'), !0);
    }
    identify(e) {
        let { serverId: t, userId: n, sessionId: r, token: i, maxDaveProtocolVersion: a, video: o = !1, streamParameters: s } = e;
        (this.serverId = t),
            (this.sessionId = r),
            (this.token = i),
            (this.connectionState = 2),
            this.send(0, {
                server_id: t,
                user_id: n,
                session_id: r,
                token: i,
                max_dave_protocol_version: a,
                video: o,
                streams: Z(s)
            });
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null != this.webSocket)
            this.logger.info('Performing an expedited heartbeat '.concat('' !== t ? 'reason: ' + t : '')),
                (this.heartbeatAck = !1),
                this.sendHeartbeat(),
                null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = setTimeout(() => {
                    (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this.handleHeartbeatTimeout();
                }, e));
        else {
            if (n) return this.resetBackoff(t);
            this.logger.info('Expedited heartbeat requested, but is disconnected and a reset was not ' + 'requested '.concat('' !== t ? 'reason: ' + t : ''));
        }
        return !1;
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return !!(this.backoff.fails > 0) && null == this.webSocket && (this.logger.info('Connection backoff reset '.concat('' !== e ? 'for reason: ' + e : '')), this.backoff.succeed(), this.reconnect(!1, 4802, 'Reset backoff.'), !0);
    }
    close() {
        this.logger.info('CLOSE'), this.cleanupWebSocket((e) => e.close(4000)), this.cleanupState(), (this.connectionState = 0), this.emit('disconnect', !0, 1000, 'Force Close');
    }
    destroy() {
        this.close();
    }
    selectProtocol(e, t, n, r) {
        let i;
        let a = {};
        null == n
            ? (i = null)
            : 'sdp' in n && null != n.sdp && '' !== n.sdp
              ? ((i = n.sdp),
                (a = {
                    ...n,
                    codecs: F(n.codecs),
                    rtc_connection_id: t
                }))
              : 'address' in n &&
                null != n.address &&
                '' !== n.address &&
                n.port &&
                null != n.mode &&
                '' !== n.mode &&
                ((i = {
                    address: n.address,
                    port: n.port,
                    mode: n.mode
                }),
                (a = {
                    ...n,
                    codecs: F(n.codecs),
                    rtc_connection_id: t,
                    experiments: r
                })),
            this.send(1, {
                protocol: e,
                data: i,
                ...a
            });
    }
    updateSession(e) {
        this.send(14, { codecs: F(e.codecs) });
    }
    speaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, {
            speaking: this.serverVersion <= 3 ? !!e : e,
            delay: t,
            ssrc: n
        });
    }
    video(e, t, n, r) {
        this.send(12, {
            audio_ssrc: e,
            video_ssrc: t,
            rtx_ssrc: n,
            streams: Z(r)
        });
    }
    mediaSinkWants(e) {
        this.serverVersion >= 5 && this.send(15, e);
    }
    secureFramesReadyForTransition(e) {
        this.send(23, { transition_id: e });
    }
    sendMLSKeyPackage(e) {
        this.logger.info('Sending MLS key package'), this.sendBinary(26, new Uint8Array(e));
    }
    sendMLSCommitWelcome(e) {
        this.logger.info('Sending MLS commit + welcome message'), this.sendBinary(28, new Uint8Array(e));
    }
    flagMLSInvalidCommitWelcome(e) {
        this.send(31, { transition_id: e });
    }
    noRoute() {
        this.send(32, {});
    }
    setHeartbeatIntervalModifier(e) {
        this.heartbeatIntervalModifier = e;
    }
    constructor(e, t = C.Yn.DEFAULT) {
        super(), y(this, 'url', void 0), y(this, 'logger', void 0), y(this, 'backoff', new S.Z(1000, 5000)), y(this, 'webSocket', void 0), y(this, 'connectionState', void 0), y(this, 'heartbeatInterval', void 0), y(this, 'helloTimeout', void 0), y(this, 'heartbeater', void 0), y(this, 'lastHeartbeatAckTime', void 0), y(this, 'expeditedHeartbeatTimeout', void 0), y(this, 'heartbeatAck', void 0), y(this, 'heartbeatIntervalModifier', void 0), y(this, 'connectionStartTime', void 0), y(this, 'lastRecvSeqNum', void 0), y(this, 'sessionId', void 0), y(this, 'serverId', void 0), y(this, 'token', void 0), y(this, 'resumable', void 0), y(this, 'serverVersion', 0), (this.url = e), (this.logger = new v.Z('RTCControlSocket('.concat(t, ')'))), (this.webSocket = null), (this.connectionState = 0), (this.helloTimeout = null), (this.lastHeartbeatAckTime = null), (this.heartbeatInterval = null), (this.heartbeater = null), (this.heartbeatAck = !0), (this.expeditedHeartbeatTimeout = null), (this.heartbeatIntervalModifier = 1), (this.connectionStartTime = 0), (this.lastRecvSeqNum = null), (this.sessionId = null), (this.serverId = null), (this.token = null), (this.resumable = !1);
    }
}
