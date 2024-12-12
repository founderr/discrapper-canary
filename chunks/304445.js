t(47120), t(411104);
var i = t(572299),
    o = t(38618),
    a = t(905423),
    r = t(622143),
    c = t(703656),
    l = t(981631);
function s(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
n.Z = new (class e {
    initialize() {
        this.cleanup(), (this.unlistenHistory = (0, c.s1)().listen(this.handleRouteChange));
        let { pathname: e } = (0, c.s1)().location;
        a.Z.getState().resetPath(e), (this.unlistenKeyboardChange = a.Z.subscribe(this.handleKeybindRouteChange)), o.Z.addChangeListener(this.handleConnectionChange);
    }
    executeRouteRewrites(e, n) {
        if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let t of this.rewrites) {
                let o = (0, c.s1)().location.pathname,
                    a = t(e, n);
                if (null != a)
                    return (
                        (0, i.n)({
                            message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                            data: {
                                replacePath: a.path,
                                previousPath: o
                            }
                        }),
                        (0, c.dL)(a.path, a.state),
                        !0
                    );
            }
        else throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, n;
        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), (this.unlistenHistory = void 0), null === (n = this.unlistenKeyboardChange) || void 0 === n || n.call(this), (this.unlistenKeyboardChange = void 0), o.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, c.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let n = e((0, c.s1)().location, (0, c.s1)().action);
            null != n && (0, c.dL)(n.path, n.state);
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
        return (0, c.s1)();
    }
    constructor() {
        s(this, 'unlistenHistory', void 0),
            s(this, 'unlistenKeyboardChange', void 0),
            s(this, 'rewrites', new Set()),
            s(this, 'listeners', new Set()),
            s(this, 'routeChangeCount', 0),
            s(this, 'timer', -1),
            s(this, 'connected', !1),
            s(this, 'handleConnectionChange', () => {
                let e = o.Z.isConnected(),
                    n = e && !this.connected;
                (this.connected = e), n && ((this.routeChangeCount = 0), this.executeRouteRewrites((0, c.s1)().location, 'REPLACE'));
            }),
            s(this, 'handleRouteChange', (e, n) => {
                if (this.executeRouteRewrites(e, n)) return;
                if (!(0, r.r)(e)) {
                    (0, c.dL)(l.Z5c.ME);
                    return;
                }
                let t = a.Z.getState();
                for (let i of (t.basePath !== e.pathname && t.resetPath(e.pathname), this.listeners))
                    try {
                        i(e, n);
                    } catch (e) {
                        console.warn('RouteManager.listen: A route listener has caused an error', e.message);
                    }
                this.routeChangeCount = 0;
            }),
            s(this, 'handleKeybindRouteChange', (e) => {
                let { path: n } = e;
                null != n ? (clearTimeout(this.timer), (this.timer = setTimeout(this.flushRoute, 200))) : null == n && clearTimeout(this.timer);
            }),
            s(this, 'flushRoute', () => {
                clearTimeout(this.timer);
                let e = a.Z.getState();
                null != e.path && (0, c.uL)(e.path);
            });
    }
})();
