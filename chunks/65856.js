n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(733860),
    n(653041),
    n(411104),
    n(47120);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(626135),
    l = n(70956),
    u = n(996106),
    c = n(863141),
    d = n(34954),
    _ = n(186901),
    E = n(981631);
function f(e, t, n) {
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
let h = 'RPC_STORE_WAIT',
    p = [];
class I {
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
        if (e.transport === _.He.IPC) {
            let n = this.getCurrentUser();
            if (null == n) {
                e.close(E.$VG.CLOSE_NORMAL, 'User logged out');
                return;
            }
            t.user = (0, c.Z)(n);
        }
        this.dispatch(e, null, E.Etm.DISPATCH, E.zMe.READY, t);
    }
    handleDisconnect(e, t) {
        var n;
        this.removeSubscriptions(e), this.sockets.delete(e), null === (n = this.abortControllers.get(e)) || void 0 === n || n.abort('DISCONNECTED'), this.abortControllers.delete(e), this.onDisconnect(e, t);
    }
    handleRequest(e, t) {
        new Promise((n) => {
            if (null == t.nonce || '' === t.nonce) throw new u.Z({ errorCode: E.lTL.INVALID_PAYLOAD }, 'Payload requires a nonce');
            let r = t.cmd,
                i = this.commands[r];
            if (null == i) throw new u.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'Invalid command: '.concat(t.cmd));
            if (!(0, d.Z)(e.authorization.scopes, i.scope)) throw new u.Z({ errorCode: E.lTL.INVALID_PERMISSIONS }, 'Not authenticated or invalid scope');
            o.default.track(E.rMx.RPC_COMMAND_SENT, {
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
                            let a = await this.getJoi();
                            i()(null != e.validation, 'command.validation must not be null'),
                                a.validate(t.args, e.validation(a), { convert: !1 }, (t) => {
                                    if (null != t) {
                                        r(new u.Z({ errorCode: E.lTL.INVALID_PAYLOAD }, t.message));
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Etm.DISPATCH,
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Etm.DISPATCH,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.lTL.UNKNOWN_ERROR,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'Unknown Error';
        o.default.track(E.rMx.RPC_SERVER_ERROR_CAUGHT, {
            command: n,
            code: r,
            message: i
        }),
            this.dispatch(e, t, n, E.zMe.ERROR, {
                code: r,
                message: i
            });
    }
    isSubscribed(e, t) {
        return void 0 !== this.subscriptions.find((n) => n.socket.application.id === e && n.evt === t);
    }
    getSubscription(e, t, n) {
        return this.subscriptions.find((r) => r.socket === e && r.evt === t && s().isEqual(r.args, n));
    }
    addSubscription(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = this.dispatch.bind(this, e, null, E.Etm.DISPATCH, t);
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
        s().remove(this.subscriptions, (r) => r.socket === e && r.evt === t && s().isEqual(r.args, n));
    }
    removeSubscriptions(e) {
        s().remove(this.subscriptions, (t) => t.socket === e);
    }
    dispatchToSubscriptions(e, t, n, r) {
        var i;
        if (!(null != r && '' !== r && ((i = r), p.includes(i) || (p.unshift(i), p.splice(50), 0))))
            this.subscriptions.forEach((r) => {
                var i, a, o;
                if (r.evt !== e) return;
                if (('function' != typeof t || !!t(r)) && ('object' != typeof t || ((a = t), (o = null !== (i = r.args) && void 0 !== i ? i : {}), !!s().isEqual(a, s().pick(o, Object.keys(a)))))) this.dispatch(r.socket, null, E.Etm.DISPATCH, r.evt, n);
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
        let i = s().uniqueId(),
            a = () => this.removeSubscription(e, h, { uniqueId: i });
        return new Promise((r, s) => {
            let o = setTimeout(() => {
                a(), s(Error('timeout'));
            }, n * l.Z.Millis.SECOND);
            this.addSubscription(e, h, { uniqueId: i }, () => {
                let e = t();
                e && (clearTimeout(o), r(e));
            });
        }).then((e) => (a(), e));
    }
    constructor(e) {
        f(this, 'getCurrentUser', () => null), f(this, 'onConnect', () => {}), f(this, 'onDisconnect', () => {}), f(this, 'getJoi', void 0), f(this, 'events', {}), f(this, 'commands', {}), f(this, 'sockets', new Set()), f(this, 'subscriptions', []), f(this, 'abortControllers', new Map()), (this.getJoi = e);
    }
}
