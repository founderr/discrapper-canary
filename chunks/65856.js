n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(733860);
var i = n(653041);
var a = n(411104);
var o = n(47120);
var s = n(512722),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(626135),
    _ = n(70956),
    E = n(996106),
    f = n(863141),
    h = n(34954),
    p = n(186901),
    m = n(981631);
function I(e, t, n) {
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
let T = 'RPC_STORE_WAIT',
    g = [];
function S(e, t) {
    return c().isEqual(e, c().pick(t, Object.keys(e)));
}
function A(e) {
    return !!g.includes(e) || (g.unshift(e), g.splice(50), !1);
}
class v {
    registerTransport(e) {
        e.on('connect', (e) => this.handleConnect(e)), e.on('request', (e, t) => this.handleRequest(e, t)), e.on('disconnect', (e, t) => this.handleDisconnect(e, t));
    }
    handleConnect(e) {
        this.sockets.add(e), this.abortControllers.set(e, new AbortController()), this.onConnect(e);
        let t = {
            v: e.version,
            config: {
                cdn_host: window.GLOBAL_ENV.CDN_HOST,
                api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                environment: 'production'
            }
        };
        if (e.transport === p.He.IPC) {
            let n = this.getCurrentUser();
            if (null == n) {
                e.close(m.$VG.CLOSE_NORMAL, 'User logged out');
                return;
            }
            t.user = (0, f.Z)(n);
        }
        this.dispatch(e, null, m.Etm.DISPATCH, m.zMe.READY, t);
    }
    handleDisconnect(e, t) {
        var n;
        this.removeSubscriptions(e), this.sockets.delete(e), null === (n = this.abortControllers.get(e)) || void 0 === n || n.abort('DISCONNECTED'), this.abortControllers.delete(e), this.onDisconnect(e, t);
    }
    handleRequest(e, t) {
        new Promise((n) => {
            if (null == t.nonce || '' === t.nonce) throw new E.Z({ errorCode: m.lTL.INVALID_PAYLOAD }, 'Payload requires a nonce');
            let r = t.cmd,
                i = this.commands[r];
            if (null == i) throw new E.Z({ errorCode: m.lTL.INVALID_COMMAND }, 'Invalid command: '.concat(t.cmd));
            if (!(0, h.Z)(e.authorization.scopes, i.scope)) throw new E.Z({ errorCode: m.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            d.default.track(m.rMx.RPC_COMMAND_SENT, {
                command: r,
                scope: 'object' == typeof i.scope ? JSON.stringify(i.scope) : i.scope,
                application_id: e.application.id,
                socket_scope: e.authorization.scopes.toString()
            }),
                n(i);
        })
            .then(
                (e) =>
                    new Promise(async (n, r) => {
                        if (null != e.validation) {
                            let i = await this.getJoi();
                            l()(null != e.validation, 'command.validation must not be null'),
                                i.validate(t.args, e.validation(i), { convert: !1 }, (t) => {
                                    if (null != t) {
                                        r(new E.Z({ errorCode: m.lTL.INVALID_PAYLOAD }, t.message));
                                        return;
                                    }
                                    n(e);
                                });
                        } else n(e);
                    })
            )
            .then((n) => {
                var r, i;
                return n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: null !== (i = t.args) && void 0 !== i ? i : {},
                    isSocketConnected: () => this.sockets.has(e),
                    signal: null === (r = this.abortControllers.get(e)) || void 0 === r ? void 0 : r.signal
                });
            })
            .then((n) => this.dispatch(e, t.nonce, t.cmd, null, n))
            .catch((n) => {
                let { code: r, message: i } = n;
                return this.error(e, t.nonce, t.cmd, r, i);
            });
    }
    setCommandHandler(e, t) {
        this.commands[e] = t;
    }
    setEventHandler(e, t) {
        this.events[e] = t;
    }
    dispatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Etm.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        e.send({
            cmd: n,
            data: i,
            evt: r,
            nonce: t
        });
    }
    error(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Etm.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.lTL.UNKNOWN_ERROR,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'Unknown Error';
        d.default.track(m.rMx.RPC_SERVER_ERROR_CAUGHT, {
            command: n,
            code: r,
            message: i
        }),
            this.dispatch(e, t, n, m.zMe.ERROR, {
                code: r,
                message: i
            });
    }
    isSubscribed(e, t) {
        return void 0 !== this.subscriptions.find((n) => n.socket.application.id === e && n.evt === t);
    }
    getSubscription(e, t, n) {
        return this.subscriptions.find((r) => r.socket === e && r.evt === t && c().isEqual(r.args, n));
    }
    addSubscription(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = this.dispatch.bind(this, e, null, m.Etm.DISPATCH, t);
        if (null == this.getSubscription(e, t, n))
            this.subscriptions.push({
                update: r,
                dispatch: i,
                prevState: r
                    ? r({
                          prevState: null,
                          dispatch: i
                      })
                    : null,
                socket: e,
                evt: t,
                args: n
            });
    }
    removeSubscription(e, t, n) {
        c().remove(this.subscriptions, (r) => r.socket === e && r.evt === t && c().isEqual(r.args, n));
    }
    removeSubscriptions(e) {
        c().remove(this.subscriptions, (t) => t.socket === e);
    }
    dispatchToSubscriptions(e, t, n, r) {
        !(null != r && '' !== r && A(r)) &&
            this.subscriptions.forEach((r) => {
                var i;
                if (r.evt === e && ('function' != typeof t || !!t(r)) && ('object' != typeof t || !!S(t, null !== (i = r.args) && void 0 !== i ? i : {}))) this.dispatch(r.socket, null, m.Etm.DISPATCH, r.evt, n);
            });
    }
    updateSubscriptions() {
        this.subscriptions.forEach((e) => {
            if (!!e.update) e.prevState = e.update(e);
        });
    }
    storeWait(e, t, n) {
        let r = t();
        if (r || 0 === n) return Promise.resolve(r);
        let i = c().uniqueId(),
            a = () => this.removeSubscription(e, T, { uniqueId: i });
        return new Promise((r, o) => {
            let s = setTimeout(() => {
                a(), o(Error('timeout'));
            }, n * _.Z.Millis.SECOND);
            this.addSubscription(e, T, { uniqueId: i }, () => {
                let e = t();
                e && (clearTimeout(s), r(e));
            });
        }).then((e) => (a(), e));
    }
    constructor(e) {
        I(this, 'getCurrentUser', () => null), I(this, 'onConnect', () => {}), I(this, 'onDisconnect', () => {}), I(this, 'getJoi', void 0), I(this, 'events', {}), I(this, 'commands', {}), I(this, 'sockets', new Set()), I(this, 'subscriptions', []), I(this, 'abortControllers', new Map()), (this.getJoi = e);
    }
}
