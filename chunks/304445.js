n(47120), n(411104);
var r = n(572299),
    i = n(38618),
    a = n(905423),
    s = n(622143),
    o = n(703656),
    l = n(981631);
function u(e, t, n) {
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
t.Z = new (class e {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, o.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, o.s1)().location;
        a.Z.getState().resetPath(e), (this.unlistenKeyboardChange = a.Z.subscribe(this.handleKeybindRouteChange)), i.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, t) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
                let i = (0, o.s1)().location.pathname,
                    a = n(e, t);
                if (null != a)
                    return (
                        (0, r.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: a.path,
                                previousPath: i
                            }
                        }),
                        (0, o.dL)(a.path, a.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, t;
        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), (this.unlistenHistory = void 0), null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), (this.unlistenKeyboardChange = void 0), i.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, o.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, o.s1)().location, (0, o.s1)().action);
            null != t && (0, o.dL)(t.path, t.state);
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
        return (0, o.s1)();
    }
    constructor() {
        u(this, 'unlistenHistory', void 0),
            u(this, 'unlistenKeyboardChange', void 0),
            u(this, 'rewrites', new Set()),
            u(this, 'listeners', new Set()),
            u(this, 'routeChangeCount', 0),
            u(this, 'timer', -1),
            u(this, 'connected', !1),
            u(this, 'handleConnectionChange', () => {
                let e = i.Z.isConnected(),
                    t = e && !this.connected;
                (this.connected = e), t && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, o.s1)().location, 'REPLACE'));
            }),
            u(this, 'handleRouteChange', (e, t) => {
                if (this.executeRouteRewrites(e, t)) return;
                if (!(0, s.r)(e)) {
                    (0, o.dL)(l.Z5c.ME);
                    return;
                }
                let n = a.Z.getState();
                for (let r of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
                    try {
                        r(e, t);
                    } catch (e) {
                        console.warn('RouteManager.listen: A route listener has caused an error', e.message);
                    }
                this.routeChangeCount = 0;
            }),
            u(this, 'handleKeybindRouteChange', (e) => {
                let { path: t } = e;
                null != t ? (clearTimeout(this.timer), (this.timer = setTimeout(this.flushRoute, 200))) : null == t && clearTimeout(this.timer);
            }),
            u(this, 'flushRoute', () => {
                clearTimeout(this.timer);
                let e = a.Z.getState();
                null != e.path && (0, o.uL)(e.path);
            });
    }
})();
