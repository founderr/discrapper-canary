var r = n(47120);
var i = n(411104);
var a = n(572299),
    o = n(38618),
    s = n(905423),
    l = n(622143),
    u = n(703656),
    c = n(981631);
function d(e, t, n) {
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
let _ = 10;
class E {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, u.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, u.s1)().location;
        s.Z.getState().resetPath(e), (this.unlistenKeyboardChange = s.Z.subscribe(this.handleKeybindRouteChange)), o.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < _))
            for (let n of this.rewrites) {
                let r = (0, u.s1)().location.pathname,
                    i = n(e, t);
                if (null != i)
                    return (
                        (0, a.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: i.path,
                                previousPath: r
                            }
                        }),
                        (0, u.dL)(i.path, i.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, t, n, r;
        null === (e = (t = this).unlistenHistory) || void 0 === e || e.call(t), (this.unlistenHistory = void 0), null === (n = (r = this).unlistenKeyboardChange) || void 0 === n || n.call(r), (this.unlistenKeyboardChange = void 0), o.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, u.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, u.s1)().location, (0, u.s1)().action);
            null != t && (0, u.dL)(t.path, t.state);
        }
        return this.rewrites.add(e), () => this.removeRouteRewriter(e);
    }
    removeRouteChangeListener(e) {
        this.listeners.delete(e);
    }
    removeRouteRewriter(e) {
        this.rewrites.delete(e);
    }
    getHistory() {
        return (0, u.s1)();
    }
    constructor() {
        d(this, 'unlistenHistory', void 0),
            d(this, 'unlistenKeyboardChange', void 0),
            d(this, 'rewrites', new Set()),
            d(this, 'listeners', new Set()),
            d(this, 'routeChangeCount', 0),
            d(this, 'timer', -1),
            d(this, 'connected', !1),
            d(this, 'handleConnectionChange', () => {
                let e = o.Z.isConnected(),
                    t = e && !this.connected;
                (this.connected = e), t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, u.s1)().location, 'REPLACE'));
            }),
            d(this, 'handleRouteChange', (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, l.r)(e)) {
                    (0, u.dL)(c.Z5c.ME);
                    return;
                }
                let n = s.Z.getState();
                for (let r of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
                    try {
                        r(e, t);
                    } catch (e) {
                        console.warn('RouteManager.listen: A route listener has caused an error', e.message);
                    }
                this.routeChangeCount = 0;
            }),
            d(this, 'handleKeybindRouteChange', (e) => {
                let { path: t } = e;
                null != t ? (clearTimeout(this.timer), (this.timer = setTimeout(this.flushRoute, 200))) : null == t && clearTimeout(this.timer);
            }),
            d(this, 'flushRoute', () => {
                clearTimeout(this.timer);
                let e = s.Z.getState();
                null != e.path && (0, u.uL)(e.path);
            });
    }
}
t.Z = new E();
