n(47120), n(411104);
var i = n(413135),
    r = n(836560),
    a = n(392711),
    l = n.n(a),
    s = n(710845),
    o = n(998502),
    c = n(901077),
    d = n(76238),
    u = n(852926),
    h = n(981631);
let m = o.ZP.requireModule('discord_rpc').RPCIPC,
    p = new s.Z('RPCServer:IPC'),
    g = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4
    };
function f(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function _(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function E(e) {
    return new Promise((t, n) => {
        'string' == typeof e && (e = m.net.createConnection(e)),
            e.pause(),
            e.on('readable', () => {
                try {
                    C(e);
                } catch (t) {
                    e.end(
                        I(g.CLOSE, {
                            code: 1003,
                            message: t.message
                        })
                    ),
                        e.destroy();
                }
            });
        let i = () => {
                try {
                    e.end(), e.destroy();
                } catch (e) {}
            },
            r = Promise.race([
                new Promise((t) => e.on('error', () => t())),
                new Promise((t, n) => {
                    e.on('pong', () => n(Error('socket responded with pong')));
                }),
                new Promise((e, t) => {
                    setTimeout(() => t(Error('socket alive timeout')), 1000);
                })
            ]).then(
                () => {
                    i();
                },
                (e) => {
                    throw (i(), e);
                }
            );
        return e.write(I(g.PING, l().uniqueId())), r.then(t, n);
    });
}
function I(e, t) {
    var n;
    t = JSON.stringify(t);
    let r = i.Buffer.byteLength(t),
        a = i.Buffer.alloc(8 + r);
    return a.writeInt32LE(e, 0), a.writeInt32LE(r, 4), a.write(t, 8, r), (n = a).buffer.slice(n.byteOffset, n.byteOffset + n.byteLength);
}
function C(e) {
    let t = e.read(8);
    if (null == t) return;
    let n = i.Buffer.from(t),
        r = n.readInt32LE(0),
        a = n.readInt32LE(4);
    if (!Object.values(g).includes(r) || a < 0) throw Error('protocol error');
    if (null == (t = e.read(a))) throw Error('data size does not match what was received');
    let l = JSON.parse((n = i.Buffer.from(t)).toString());
    switch (r) {
        case g.PING:
            e.emit('ping', l), e.write(I(g.PONG, l));
            break;
        case g.PONG:
            e.emit('pong', l);
            break;
        case g.HANDSHAKE:
            if (_(e)) throw Error('already did handshake');
            f(e, !0), e.emit('handshake', l);
            break;
        case g.FRAME:
            if (!_(e)) throw Error('did not handshake');
            e.emit('request', l);
            break;
        case g.CLOSE:
            e.end(), e.destroy();
    }
    C(e);
}
class v extends d.Z {
    send(e) {
        p.info('Socket Emit: '.concat(this.id), (0, c.Z)(e)), this.socket.write(I(g.FRAME, e));
    }
    close(e, t) {
        this.socket.end(
            I(g.CLOSE, {
                code: e,
                message: t
            })
        ),
            this.socket.destroy();
    }
    constructor(e, t, n) {
        var i, r, a;
        super('ipc', t, n),
            (i = this),
            (a = void 0),
            (r = 'socket') in i
                ? Object.defineProperty(i, r, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (i[r] = a),
            (this.socket = e);
    }
}
class S extends r.EventEmitter {
    handleConnection(e) {
        f(e, !1),
            e.pause(),
            e.on('readable', () => {
                try {
                    C(e);
                } catch (t) {
                    e.end(
                        I(g.CLOSE, {
                            code: h.$VG.CLOSE_UNSUPPORTED,
                            message: t.message
                        })
                    ),
                        e.destroy();
                }
            }),
            e.once('handshake', (t) => {
                let n;
                let i = t.client_id,
                    r = +t.v;
                try {
                    n = new v(e, r, 'json');
                } catch (t) {
                    e.end(
                        I(g.CLOSE, {
                            code: t.code,
                            message: t.message
                        })
                    ),
                        e.destroy();
                    return;
                }
                p.info('Socket Opened: '.concat(n.id)),
                    e.on('error', (e) => p.error('Socket Error: '.concat(e.message))),
                    e.on('close', () => {
                        p.info('Socket Close: '.concat(n.id)), this.emit('disconnect', n);
                    }),
                    (0, u.em)(n, null, i)
                        .then(() => {
                            e.on('request', (e) => {
                                p.info('Socket Message: '.concat(n.id), (0, c.Z)(e)), this.emit('request', n, e);
                            }),
                                this.emit('connect', n);
                        })
                        .catch((e) => {
                            let { code: t, message: i } = e;
                            return n.close(t, i);
                        });
            });
    }
    constructor() {
        super();
        let e = m.net.createServer((e) => this.handleConnection(e));
        e.on('error', (e) => p.error('Error: '.concat(e.message))),
            m.getAvailableSocket(E).then((t) => {
                e.listen(t, () => {
                    ('function' == typeof e.listening ? e.listening() : e.listening) && p.info('Starting on '.concat(e.address()));
                });
            });
    }
}
t.Z = new S();
