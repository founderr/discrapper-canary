n.r(t);
var r = n(411104);
var i = n(836560);
var a = n(525654),
    o = n.n(a),
    s = n(664751),
    l = n(772848),
    u = n(544891),
    c = n(996106),
    d = n(981631);
let _ = d.V6Z + d.frH - 1;
function E(e, t) {
    if (null == e || null == t) throw Error('cmd and name required');
    return ''.concat(e, ':').concat(t);
}
let f = s.parse(location.search.slice(1)),
    h = parseInt(null != f.rpc && '' !== f.rpc ? f.rpc : d.V6Z, 10),
    p = null;
class m extends i.EventEmitter {
    get port() {
        return h;
    }
    get connected() {
        return null != p && p.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == p) {
            if (h > _) {
                (h = d.V6Z), this.emit('disconnected');
                return;
            }
            try {
                p = new WebSocket('ws://127.0.0.1:'.concat(this.port, '/?v=').concat(d.X6Q));
            } catch (e) {
                this.disconnect({ code: d.$VG.CLOSE_ABNORMAL });
                return;
            }
            null != p &&
                ((p.onmessage = (e) => {
                    let t;
                    try {
                        if ('string' == typeof e.data) t = JSON.parse(e.data);
                        else throw Error('payload data not a string');
                    } catch (e) {
                        this.emit('error', e), this.disconnect();
                        return;
                    }
                    let { cmd: n, evt: r, nonce: i, data: a } = t;
                    if (n === d.Etm.DISPATCH) {
                        if (r === d.zMe.READY) {
                            this.emit('connected');
                            return;
                        }
                        if (r === d.zMe.ERROR) {
                            this.emit('error', new c.Z({ errorCode: a.code }, a.message)), this.disconnect();
                            return;
                        }
                        this.emit(E(n, r), a);
                        return;
                    }
                    let o = null;
                    r === d.zMe.ERROR && ((o = new c.Z({ errorCode: a.code }, a.message)), (a = null)), this.emit(E(n, i), o, a);
                }),
                (p.onclose = p.onerror = (e) => this.disconnect(e)));
        }
    }
    disconnect(e) {
        if (null != e && 'code' in e && [d.$VG.CLOSE_ABNORMAL, d.$VG.INVALID_CLIENTID].includes(e.code)) {
            h++, (p = null), this.connect();
            return;
        }
        null != p && (this.emit('disconnected'), p.close(), (p = null));
    }
    subscribe(e, t, n) {
        return this.on(E(d.Etm.DISPATCH, e), n), this.request(d.Etm.SUBSCRIBE, t, e);
    }
    unsubscribe(e, t, n) {
        return this.removeListener(E(d.Etm.DISPATCH, e), n), this.request(d.Etm.UNSUBSCRIBE, t, e);
    }
    request(e, t, n) {
        return new Promise((r, i) => {
            if (!this.connected) {
                this.once('connected', () => {
                    this.removeAllListeners('disconnected'), r(this.request(e, t, n));
                }),
                    this.once('disconnected', () => {
                        this.removeAllListeners('connected'), i(Error('disconnected during request'));
                    }),
                    this.connect();
                return;
            }
            let a = (0, l.Z)(),
                o = JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: a
                });
            this.once(E(e, a), (e, t) => (null != e ? i(e) : r(t))), null == p || p.send(o);
        });
    }
    requestOnce(e, t, n) {
        return u.tn
            .post({
                url: 'http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(d.X6Q),
                body: {
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, l.Z)()
                }
            })
            .then((e) => {
                let {
                    body: { evt: t, data: n }
                } = e;
                if (t === d.zMe.ERROR) throw new c.Z({ errorCode: n.code }, n.message);
                return n;
            });
    }
    requestRedirect(e, t, n) {
        if ('Chrome' === o().name && parseInt(o().version, 10) >= 58) return this.requestOnce(e, t, n);
        let r = encodeURIComponent(
                JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, l.Z)()
                })
            ),
            i = encodeURIComponent(''.concat(location.protocol, '//').concat(location.host).concat(location.pathname, '?done=true'));
        return window.open('http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(d.X6Q, '&payload=').concat(r, '&callback=').concat(i), '_self'), new Promise(() => null);
    }
}
t.default = new m();
