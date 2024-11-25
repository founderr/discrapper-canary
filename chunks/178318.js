let i, r;
n(47120), n(610138), n(216116), n(78328), n(815648), n(653041), n(411104);
var l = n(836560),
    a = n(392711),
    s = n.n(a),
    o = n(729594),
    c = n(570140),
    d = n(710845),
    u = n(857192),
    h = n(998502),
    m = n(996106),
    p = n(901077),
    g = n(76238),
    f = n(852926),
    _ = n(186901),
    E = n(981631),
    I = n(413135).Buffer;
function C(e, t, n) {
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
try {
    i = h.ZP.requireModule('discord_erlpack');
} catch (e) {
    try {
        i = h.ZP.requireModule('erlpack');
    } catch (e) {}
}
let v = h.ZP.requireModule('discord_rpc').RPCWebSocket,
    S = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    N = new d.Z('RPCServer:WSS'),
    T = [];
function A(e) {
    return 'function' == typeof e ? e() : e;
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!A(r.listening)) return;
                      let e = r.address().port;
                      N.info('Starting on '.concat(e)),
                          c.Z.dispatch({
                              type: 'RPC_SERVER_READY',
                              port: e
                          });
                  };
    r.listen(E.V6Z + (e % E.frH), '127.0.0.1', t);
}
function x(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l =
            null != A(e.headers).origin
                ? {
                      'Access-Control-Allow-Origin': A(e.headers).origin,
                      'Access-Control-Allow-Credentials': 'true',
                      'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE',
                      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                  }
                : {};
    (n = n ? JSON.stringify(n) : ''),
        (i = 200 === i && 0 === n.length ? 204 : i),
        t.setHeader('Content-Length', I.byteLength(n).toString()),
        t.setHeader('Content-Type', 'application/json'),
        t.writeHead(i, {
            ...r,
            ...l
        }),
        t.end(n);
}
function Z(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    x(
        e,
        t,
        {
            code: r,
            message: i
        },
        n
    );
}
class L extends g.Z {
    send(e) {
        (u.default.isLoggingOverlayEvents || (e.cmd !== E.Etm.OVERLAY && e.evt !== E.zMe.OVERLAY)) && N.info('Socket Emit: '.concat(this.id), (0, p.Z)(e)), null != i && 'etf' === this.encoding ? this._socket.send(i.pack(e), { binary: !0 }) : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
    constructor(e, t, n) {
        if ((super('ws', t, n), C(this, '_socket', void 0), -1 === ['etf', 'json'].indexOf(n))) throw new m.Z({ closeCode: E.$VG.INVALID_ENCODING }, 'Invalid Encoding: '.concat(n));
        if ('etf' === n && null == i) throw new m.Z({ closeCode: E.$VG.INVALID_ENCODING }, 'Erlpack cannot be used on this client');
        this._socket = e;
    }
}
class y extends g.Z {
    send(e) {
        (u.default.isLoggingOverlayEvents || e.cmd !== E.Etm.OVERLAY) && N.info('Socket Emit: '.concat(this.id), e), this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
    constructor(e, t, n, i) {
        if ((super('http', n, i), C(this, '_sendCallback', void 0), C(this, '_closeCallback', void 0), 'json' !== i)) throw new m.Z({ closeCode: E.$VG.INVALID_ENCODING }, 'Invalid Encoding: '.concat(i));
        (this._sendCallback = e), (this._closeCallback = t);
    }
}
class O extends l.EventEmitter {
    handleRequest(e, t) {
        let [n, i] = A(e.url).split('?'),
            r = A(e.method);
        if ('/rpc' === n && 'OPTIONS' === r) {
            x(e, t, { body: '' });
            return;
        }
        let l = 'POST' === r;
        if ('/rpc' === n && ('GET' === r || l)) {
            let n = new URLSearchParams(i),
                r = l ? A(e.headers)['content-type'].split('/')[1] : 'json',
                s = function () {
                    var e;
                    let { protocol: i, host: r } = o.parse(null !== (e = n.get('callback')) && void 0 !== e ? e : '');
                    i === location.protocol && r === location.host ? t.setHeader('Location', n.get('callback')) : t.setHeader('Location', S), t.writeHead(301), t.end();
                },
                c = new y(l ? x.bind(null, e, t) : s, l ? Z.bind(null, e, t, 400) : s, Number(n.get('v')), r);
            if (l)
                (0, f.em)(c, A(e.headers).origin, n.get('client_id'))
                    .then(() => {
                        let n = '';
                        e.on('data', (e) => (n += e)), e.on('error', () => Z(e, t, 500, 'Internal Server Error')), e.on('end', () => this.handleMessage(c, n));
                    })
                    .catch((e) => {
                        let { code: t, message: n } = e;
                        return c.close(t, n);
                    });
            else {
                var a;
                (c.authorization.scopes = [_.CN]), this.handleMessage(c, decodeURIComponent(null !== (a = n.get('payload')) && void 0 !== a ? a : ''));
            }
            return;
        }
        Z(e, t, 404, 'Not Found');
    }
    handleConnection(e) {
        var t, n;
        let i;
        let r = new URLSearchParams(A(e.upgradeReq).url.split('?')[1]),
            l = null !== (t = A(e.upgradeReq).headers.origin) && void 0 !== t ? t : '';
        try {
            i = new L(e, Number(r.get('v')), null !== (n = r.get('encoding')) && void 0 !== n ? n : 'json');
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        N.info('Socket Opened: '.concat(i.id)),
            e.on('error', (e) => N.error('WS Error: '.concat(e.message))),
            e.on('close', (e, t) => {
                N.info('Socket Closed: '.concat(i.id, ', code ').concat(e, ', message ').concat(t)), s().remove(T, (e) => e === i), this.emit('disconnect', i);
            }),
            (0, f.em)(i, l, r.get('client_id'))
                .then(() => {
                    T.push(i), e.on('message', (e) => this.handleMessage(i, e)), this.emit('connect', i);
                })
                .catch((e) => {
                    let { code: t, message: n } = e;
                    return i.close(t, n);
                });
    }
    handleMessage(e, t) {
        let n;
        try {
            if (null != i && 'etf' === e.encoding) n = i.unpack(t);
            else if ('string' == typeof t) n = JSON.parse(t);
            else throw Error();
        } catch (t) {
            e.close(E.$VG.CLOSE_UNSUPPORTED, 'Payload not '.concat(e.encoding));
            return;
        }
        (u.default.isLoggingOverlayEvents || n.cmd !== E.Etm.OVERLAY) && N.info('Socket Message: '.concat(e.id), (0, p.Z)(n)), this.emit('request', e, n);
    }
    constructor() {
        var e;
        super();
        let t = 0;
        (r = v.http.createServer()).on('error', (e) => {
            N.error('Error: '.concat(e.message)), ('EADDRINUSE' === e.code || e.message.includes('EADDRINUSE')) && setTimeout(() => b(++t), 1000);
        }),
            r.on('request', this.handleRequest.bind(this)),
            b(t);
        let n = {
            instanceId: null !== (e = r.instanceId) && void 0 !== e ? e : 0,
            server: r
        };
        new v.ws.Server(n).on('connection', (e) => this.handleConnection(e));
    }
}
t.Z = new O();
