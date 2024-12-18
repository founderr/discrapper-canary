i.d(t, {
    AS: function () {
        return s;
    },
    S4: function () {
        return r;
    },
    X4: function () {
        return d;
    }
}),
    i(47120);
var n = i(192379),
    l = i(481060);
function o(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
class s {
    updateState(e, t) {
        this.items = e;
        let i = this.locked !== t;
        (this.locked = t), this.computeLayout(i);
    }
    initialize(e) {
        if (null == this.resizeObserver) {
            for (let [, { element: i }] of ((this.resizeObserver = new e.ResizeObserver(this.handleResize)), this.listeners)) {
                var t;
                null === (t = this.resizeObserver) || void 0 === t || t.observe(i);
            }
            this.queueCompute();
        }
    }
    cleanUp() {
        var e;
        null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), (this.resizeObserver = void 0), this.listeners.clear();
    }
    queueCompute() {
        !this.queuedCompute && ((this.queuedCompute = !0), Promise.resolve().then(() => this.computeLayout()));
    }
    computeLayout() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.queuedCompute = !1;
        let t = 0,
            i = 0;
        for (let n of this.items) {
            let l = this.listeners.get(n.notification.id);
            if (null == l) continue;
            let { offsetHeight: o } = l.element;
            (l.top !== t || l.height !== o || l.index !== i) && (e = !0), (l.top = t), (l.height = o), (l.index = i), 0 === t && (this.matchHeight !== o && (e = !0), (this.matchHeight = o)), (t += o + 8), i++;
        }
        e && this.broadcastLayoutUpdates();
    }
    broadcastLayoutUpdates() {
        for (let e of this.items) {
            let t = this.listeners.get(e.notification.id);
            null != t &&
                t.callback({
                    locked: this.locked,
                    matchHeight: this.matchHeight,
                    height: t.height,
                    top: t.top,
                    index: t.index
                });
        }
    }
    subscribe(e, t, i) {
        var n;
        this.listeners.set(e, {
            notificationId: e,
            callback: i,
            element: t,
            height: 0,
            top: 0,
            index: 0
        }),
            null === (n = this.resizeObserver) || void 0 === n || n.observe(t),
            this.queueCompute();
    }
    unsubscribe(e) {
        var t;
        let i = this.listeners.get(e);
        null != i && (null === (t = this.resizeObserver) || void 0 === t || t.unobserve(i.element), this.listeners.delete(e), this.queueCompute());
    }
    getLayoutSpecs(e) {
        return this.listeners.get(e);
    }
    constructor(e) {
        o(this, 'resizeObserver', void 0),
            o(this, 'listeners', new Map()),
            o(this, 'queuedCompute', !1),
            o(this, 'items', []),
            o(this, 'matchHeight', 0),
            o(this, 'locked', !0),
            o(this, 'handleResize', (e) => {
                this.computeLayout();
            }),
            (this.locked = e);
    }
}
let r = n.createContext(new s(!0));
function a(e, t, i) {
    return t && 0 !== e ? 20 * Math.max(e / 5, 0) : i;
}
let u = {
    mass: 0.8,
    friction: 25,
    tension: 320
};
function d(e, t, i) {
    let [o, s] = (0, l.useSpring)(
            () => ({
                from: {
                    opacity: 0,
                    scale: 1,
                    transform: 0,
                    height: 0,
                    contentOpacity: 1
                }
            }),
            void 0,
            []
        ),
        d = n.useRef(s),
        c = n.useContext(r),
        h = n.useMemo(() => {
            let t = !1;
            return (i) => {
                null == i
                    ? c.unsubscribe(e)
                    : c.subscribe(e, i, (e) => {
                          var i, n, l, o;
                          let { locked: s, matchHeight: r, height: c, top: h, index: f } = e,
                              { current: p } = d;
                          let E = {
                              opacity: ((i = f), (n = s) && i > 4 ? 0 : n ? Math.min(1 - i / 4, 1) : 1),
                              scale: ((l = f), s ? Math.min(1 - l / 4, 1) : 1),
                              transform: a(f, s, h),
                              contentOpacity: ((o = f), s ? (o > 0 ? 0 : 1) : 1),
                              height: s ? r : c
                          };
                          p({
                              from: t
                                  ? void 0
                                  : {
                                        opacity: 0,
                                        scale: 1.1,
                                        transform: -((s ? r : c) * 1),
                                        contentOpacity: 1,
                                        height: s ? r : c
                                    },
                              to: E,
                              config: u
                          }),
                              (t = !0);
                      });
            };
        }, [e, c]);
    return (
        n.useLayoutEffect(() => {
            if (t === l.TransitionStates.YEETED) {
                let t = c.getLayoutSpecs(e);
                if (null == t) {
                    i();
                    return;
                }
                d.current({
                    to: {
                        scale: 0.8,
                        opacity: 0,
                        transform: a(t.index, c.locked, t.top) + (c.locked ? 0 : t.height / 2)
                    },
                    config: u
                }),
                    setTimeout(i, 300);
            }
        }, [t, i, e, c]),
        {
            ref: h,
            springs: o
        }
    );
}
