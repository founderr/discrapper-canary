n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(653041);
var i = n(836560),
    a = n(317381),
    s = n(626135),
    r = n(585483),
    l = n(70956),
    o = n(996106),
    c = n(631467),
    d = n(452426),
    u = n(186901),
    _ = n(981631);
function h(e, t, n) {
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
let E = 10 * l.Z.Millis.SECOND,
    m = new Map(),
    I = new Set(),
    g = (e, t, n) => {
        n([c.Z.CLOSE, t], e);
    };
class p extends i.EventEmitter {
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n)) {
            console.warn('[PostMessageTransport] Protocol error: event data should be an Array!');
            return;
        }
        let [a, s] = n;
        switch (a) {
            case c.Z.HANDSHAKE:
                if (null != e) throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Already connected');
                return this.handleHandshake(t, s, i);
            case c.Z.FRAME:
                if (null == e) throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Not connected');
                return this.handleFrame(t, e, s);
            case c.Z.CLOSE:
                if (null == e) throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Not connected');
                return this.handleClose(e, s);
            default:
                throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Invalid opcode');
        }
    }
    constructor(e, t, i, l) {
        var c;
        super(),
            (c = this),
            h(this, 'validateSocketClient', void 0),
            h(this, 'logger', void 0),
            h(this, 'createPostMessageProxySocket', void 0),
            h(this, 'onFrameHandled', void 0),
            h(this, 'handshakeFailureTimeoutId', void 0),
            h(this, 'disconnectSocket', function (e, t) {
                var n, i;
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                c.emit('disconnect', e, a ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : 'Unknown');
                let [s] =
                    null !==
                        (i = Array.from(m.entries()).find((t) => {
                            let [n, i] = t;
                            return i === e;
                        })) && void 0 !== i
                        ? i
                        : [null, null];
                null != s && m.delete(s);
            }),
            h(this, 'handleIFrameMount', (e) => {
                let { id: t } = e;
                I.add(t),
                    (this.handshakeFailureTimeoutId = setTimeout(() => {
                        Array.from(a.ZP.getSelfEmbeddedActivities().entries()).forEach((e) => {
                            let [t, n] = e;
                            s.default.track(_.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                                application_id: t,
                                channel_id: n.channelId,
                                guild_id: n.guildId,
                                timeout_ms: E
                            });
                        });
                    }, E));
            }),
            h(this, 'handleIFrameUnmount', (e) => {
                var t;
                let { id: n } = e;
                I.delete(n);
                let [i, a] =
                    null !==
                        (t = Array.from(m.entries()).find((e) => {
                            let [t, i] = e;
                            return i.frameId === n;
                        })) && void 0 !== t
                        ? t
                        : [null, null];
                null != a &&
                    null != i &&
                    (this.disconnectSocket(
                        a,
                        {
                            code: _.$VG.CLOSE_NORMAL,
                            message: 'iFrame gone'
                        },
                        !0
                    ),
                    m.delete(i));
            }),
            h(this, 'handleMessage', (e, t, n) => {
                let i = m.get(t);
                try {
                    this.routeEvent(i, t, e, n);
                } catch (e) {
                    if (e instanceof o.Z && e.errorCode === _.lTL.INVALID_PAYLOAD) throw e;
                    null != i
                        ? this.disconnectSocket(
                              i,
                              {
                                  code: e.code,
                                  message: e.message
                              },
                              !0
                          )
                        : g(
                              t,
                              {
                                  code: e.code,
                                  message: e.message
                              },
                              n
                          );
                }
            }),
            h(this, 'handleFrame', (e, t, n) => {
                var i;
                let a;
                if (e !== t.origin) throw new o.Z({ closeCode: _.$VG.INVALID_ORIGIN }, 'Origin has changed');
                try {
                    a = 'string' == typeof n ? JSON.parse(n) : n;
                } catch (e) {
                    throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Payload not recognized encoding');
                }
                null === (i = this.onFrameHandled) || void 0 === i || i.call(this, a, this.logger, t), this.emit('request', t, a);
            }),
            h(this, 'handleHandshake', async (e, t, i) => {
                let a;
                null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
                let s = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
                try {
                    s.assert(
                        t,
                        (0, d.Z)(s)
                            .required()
                            .keys({
                                v: s.number().min(1).max(1).required(),
                                encoding: s.string().equal('json').optional(),
                                client_id: s.string().required(),
                                frame_id: s.string().required(),
                                sdk_version: s.string().optional()
                            })
                    );
                } catch (e) {
                    throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, e.message);
                }
                let r = t.frame_id;
                if (!I.has(r)) throw (this.logger.error('Unrecognized frame ID '.concat(r)), new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Unrecognized frame ID '.concat(r)));
                try {
                    var l;
                    a = this.createPostMessageProxySocket({
                        origin: e,
                        postMessageToRPCClient: i,
                        frameId: r,
                        version: Number(t.v),
                        logger: this.logger,
                        postClose: g,
                        encoding: null !== (l = t.encoding) && void 0 !== l ? l : 'json'
                    });
                } catch (e) {
                    throw (this.logger.error('Error opening window socket '.concat(e)), e);
                }
                this.logger.info('Socket Opened: '.concat(a.id));
                try {
                    if ((await this.validateSocketClient(a, e, t.client_id), !I.has(r))) throw (this.logger.error('Frame ID '.concat(r, ' no longer exists')), new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, 'Unrecognized frame ID '.concat(r)));
                    m.set(e, a), I.delete(r), a.authorization.scopes.push(u.b_), this.emit('connect', a), this.logger.info('Socket Validated: '.concat(a.id));
                } catch (e) {
                    throw (this.logger.info('Socket Closed: '.concat(a.id, ', ').concat(e.message)), e);
                }
            }),
            h(this, 'handleClose', async (e, t) => {
                let i = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
                try {
                    i.assert(
                        t,
                        (0, d.Z)(i)
                            .required()
                            .keys({
                                code: i.number().valid(Object.values(_.$VG)).required(),
                                message: i.string().optional()
                            })
                    );
                } catch (e) {
                    throw new o.Z({ closeCode: _.$VG.CLOSE_UNSUPPORTED }, e.message);
                }
                this.disconnectSocket(e, t);
            }),
            r.S.subscribe(_.CkL.IFRAME_MOUNT, this.handleIFrameMount),
            r.S.subscribe(_.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = i),
            (this.onFrameHandled = l);
    }
}
