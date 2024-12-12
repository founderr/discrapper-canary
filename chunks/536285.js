r.r(n);
var i = r(411104);
var a = r(836560);
var s = r(525654),
    o = r.n(s),
    l = r(664751),
    u = r(772848),
    c = r(544891),
    d = r(996106),
    f = r(981631);
let _ = f.V6Z + f.frH - 1;
function h(e, n) {
    if (null == e || null == n) throw Error('cmd and name required');
    return ''.concat(e, ':').concat(n);
}
let p = l.parse(location.search.slice(1)),
    m = parseInt(null != p.rpc && '' !== p.rpc ? p.rpc : f.V6Z, 10),
    g = null;
class E extends a.EventEmitter {
    get port() {
        return m;
    }
    get connected() {
        return null != g && g.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == g) {
            if (m > _) {
                (m = f.V6Z), this.emit('disconnected');
                return;
            }
            try {
                g = new WebSocket('ws://127.0.0.1:'.concat(this.port, '/?v=').concat(f.X6Q));
            } catch (e) {
                this.disconnect({ code: f.$VG.CLOSE_ABNORMAL });
                return;
            }
            null != g &&
                ((g.onmessage = (e) => {
                    let n;
                    try {
                        if ('string' == typeof e.data) n = JSON.parse(e.data);
                        else throw Error('payload data not a string');
                    } catch (e) {
                        this.emit('error', e), this.disconnect();
                        return;
                    }
                    let { cmd: r, evt: i, nonce: a, data: s } = n;
                    if (r === f.Etm.DISPATCH) {
                        if (i === f.zMe.READY) {
                            this.emit('connected');
                            return;
                        }
                        if (i === f.zMe.ERROR) {
                            this.emit('error', new d.Z({ errorCode: s.code }, s.message)), this.disconnect();
                            return;
                        }
                        this.emit(h(r, i), s);
                        return;
                    }
                    let o = null;
                    i === f.zMe.ERROR && ((o = new d.Z({ errorCode: s.code }, s.message)), (s = null)), this.emit(h(r, a), o, s);
                }),
                (g.onclose = g.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && 'code' in e && [f.$VG.CLOSE_ABNORMAL, f.$VG.INVALID_CLIENTID].includes(e.code)) {
            m++, (g = null), this.connect();
            return;
        }
        null != g && (this.emit('disconnected'), g.close(), (g = null));
    }
    subscribe(e, n, r) {
        return this.on(h(f.Etm.DISPATCH, e), r), this.request(f.Etm.SUBSCRIBE, n, e);
    }
    unsubscribe(e, n, r) {
        return this.removeListener(h(f.Etm.DISPATCH, e), r), this.request(f.Etm.UNSUBSCRIBE, n, e);
    }
    request(e, n, r) {
        return new Promise((i, a) => {
            if (!this.connected) {
                this.once('connected', () => {
                    this.removeAllListeners('disconnected'), i(this.request(e, n, r));
                }),
                    this.once('disconnected', () => {
                        this.removeAllListeners('connected'), a(Error('disconnected during request'));
                    }),
                    this.connect();
                return;
            }
            let s = (0, u.Z)(),
                o = JSON.stringify({
                    cmd: e,
                    args: n,
                    evt: r,
                    nonce: s
                });
            this.once(h(e, s), (e, n) => (null != e ? a(e) : i(n))), null == g || g.send(o);
        });
    }
    requestOnce(e, n, r) {
        return c.tn
            .post({
                url: 'http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(f.X6Q),
                body: {
                    cmd: e,
                    args: n,
                    evt: r,
                    nonce: (0, u.Z)()
                },
                rejectWithError: !1
            })
            .then((e) => {
                let {
                    body: { evt: n, data: r }
                } = e;
                if (n === f.zMe.ERROR) throw new d.Z({ errorCode: r.code }, r.message);
                return r;
            });
    }
    requestRedirect(e, n, r) {
        if ('Chrome' === o().name && parseInt(o().version, 10) >= 58) return this.requestOnce(e, n, r);
        let i = encodeURIComponent(
                JSON.stringify({
                    cmd: e,
                    args: n,
                    evt: r,
                    nonce: (0, u.Z)()
                })
            ),
            a = encodeURIComponent(''.concat(location.protocol, '//').concat(location.host).concat(location.pathname, '?done=true'));
        return window.open('http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(f.X6Q, '&payload=').concat(i, '&callback=').concat(a), '_self'), new Promise(() => null);
    }
}
n.default = new E();
