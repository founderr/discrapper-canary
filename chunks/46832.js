n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var i = n(836560),
    r = n(317381),
    l = n(626135),
    a = n(585483),
    s = n(70956),
    o = n(996106),
    c = n(631467),
    d = n(452426),
    u = n(186901),
    h = n(981631);
function m(e, t, n) {
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
let p = 10 * s.Z.Millis.SECOND,
    g = new Map(),
    f = new Set(),
    _ = (e, t, n) => {
        n([c.Z.CLOSE, t], e);
    };
class I extends i.EventEmitter {
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n)) {
            console.warn('[PostMessageTransport] Protocol error: event data should be an Array!');
            return;
        }
        let [r, l] = n;
        switch (r) {
            case c.Z.HANDSHAKE:
                if (null != e) throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Already connected');
                return this.handleHandshake(t, l, i);
            case c.Z.FRAME:
                if (null == e) throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Not connected');
                return this.handleFrame(t, e, l);
            case c.Z.CLOSE:
                if (null == e) throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Not connected');
                return this.handleClose(e, l);
            default:
                throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Invalid opcode');
        }
    }
    constructor(e, t, i, s) {
        var c;
        super(),
            (c = this),
            m(this, 'validateSocketClient', void 0),
            m(this, 'logger', void 0),
            m(this, 'createPostMessageProxySocket', void 0),
            m(this, 'onFrameHandled', void 0),
            m(this, 'handshakeFailureTimeoutId', void 0),
            m(this, 'disconnectSocket', function (e, t) {
                var n, i;
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                c.emit('disconnect', e, r ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : 'Unknown');
                let [l] =
                    null !==
                        (i = Array.from(g.entries()).find((t) => {
                            let [n, i] = t;
                            return i === e;
                        })) && void 0 !== i
                        ? i
                        : [null, null];
                null != l && g.delete(l);
            }),
            m(this, 'handleIFrameMount', (e) => {
                let { id: t } = e;
                f.add(t),
                    (this.handshakeFailureTimeoutId = setTimeout(() => {
                        Array.from(r.ZP.getSelfEmbeddedActivities().entries()).forEach((e) => {
                            let [t, n] = e;
                            l.default.track(h.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                                application_id: t,
                                channel_id: n.channelId,
                                guild_id: n.guildId,
                                timeout_ms: p
                            });
                        });
                    }, p));
            }),
            m(this, 'handleIFrameUnmount', (e) => {
                var t;
                let { id: n } = e;
                f.delete(n);
                let [i, r] =
                    null !==
                        (t = Array.from(g.entries()).find((e) => {
                            let [t, i] = e;
                            return i.frameId === n;
                        })) && void 0 !== t
                        ? t
                        : [null, null];
                null != r &&
                    null != i &&
                    (this.disconnectSocket(
                        r,
                        {
                            code: h.$VG.CLOSE_NORMAL,
                            message: 'iFrame gone'
                        },
                        !0
                    ),
                    g.delete(i));
            }),
            m(this, 'handleMessage', (e, t, n) => {
                let i = g.get(t);
                try {
                    this.routeEvent(i, t, e, n);
                } catch (e) {
                    if (e instanceof o.Z && e.errorCode === h.lTL.INVALID_PAYLOAD) throw e;
                    null != i
                        ? this.disconnectSocket(
                              i,
                              {
                                  code: e.code,
                                  message: e.message
                              },
                              !0
                          )
                        : _(
                              t,
                              {
                                  code: e.code,
                                  message: e.message
                              },
                              n
                          );
                }
            }),
            m(this, 'handleFrame', (e, t, n) => {
                var i;
                let r;
                if (e !== t.origin) throw new o.Z({ closeCode: h.$VG.INVALID_ORIGIN }, 'Origin has changed');
                try {
                    r = 'string' == typeof n ? JSON.parse(n) : n;
                } catch (e) {
                    throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Payload not recognized encoding');
                }
                null === (i = this.onFrameHandled) || void 0 === i || i.call(this, r, this.logger, t), this.emit('request', t, r);
            }),
            m(this, 'handleHandshake', async (e, t, i) => {
                let r;
                null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
                let a = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
                try {
                    a.assert(
                        t,
                        (0, d.Z)(a)
                            .required()
                            .keys({
                                v: a.number().min(1).max(1).required(),
                                encoding: a.string().equal('json').optional(),
                                client_id: a.string().required(),
                                frame_id: a.string().required(),
                                sdk_version: a.string().optional()
                            })
                    );
                } catch (e) {
                    throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, e.message);
                }
                let s = t.frame_id;
                if (!f.has(s)) throw (this.logger.error('Unrecognized frame ID '.concat(s)), new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Unrecognized frame ID '.concat(s)));
                null != t.sdk_version &&
                    l.default.track(h.rMx.ACTIVITY_HANDSHAKE, {
                        application_id: t.client_id,
                        sdk_version: t.sdk_version
                    });
                try {
                    var c;
                    r = this.createPostMessageProxySocket({
                        origin: e,
                        postMessageToRPCClient: i,
                        frameId: s,
                        version: Number(t.v),
                        logger: this.logger,
                        postClose: _,
                        encoding: null !== (c = t.encoding) && void 0 !== c ? c : 'json'
                    });
                } catch (e) {
                    throw (this.logger.error('Error opening window socket '.concat(e)), e);
                }
                this.logger.info('Socket Opened: '.concat(r.id));
                try {
                    if ((await this.validateSocketClient(r, e, t.client_id), !f.has(s))) throw (this.logger.error('Frame ID '.concat(s, ' no longer exists')), new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, 'Unrecognized frame ID '.concat(s)));
                    g.set(e, r), f.delete(s), r.authorization.scopes.push(u.b_), this.emit('connect', r), this.logger.info('Socket Validated: '.concat(r.id));
                } catch (e) {
                    throw (this.logger.info('Socket Closed: '.concat(r.id, ', ').concat(e.message)), e);
                }
            }),
            m(this, 'handleClose', async (e, t) => {
                let i = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
                try {
                    i.assert(
                        t,
                        (0, d.Z)(i)
                            .required()
                            .keys({
                                code: i.number().valid(Object.values(h.$VG)).required(),
                                message: i.string().optional()
                            })
                    );
                } catch (e) {
                    throw new o.Z({ closeCode: h.$VG.CLOSE_UNSUPPORTED }, e.message);
                }
                this.disconnectSocket(e, t);
            }),
            a.S.subscribe(h.CkL.IFRAME_MOUNT, this.handleIFrameMount),
            a.S.subscribe(h.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = i),
            (this.onFrameHandled = s);
    }
}
