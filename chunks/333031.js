n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(954955),
    a = n.n(s),
    u = n(772848),
    d = n(442837),
    c = n(902704),
    h = n(13245),
    f = n(928518),
    p = n(358085),
    m = n(610394),
    g = n(561064),
    v = n(501787),
    E = n(269041);
function Z(e, t, n) {
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
function C(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
let x = l.createContext(
    new (class e {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = f.Z.getWindow(v.OVERLAY_V3_KEY);
                null != e &&
                    this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                        subtree: !0,
                        attributes: !0
                    });
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let i = e.getBoundingClientRect();
            this.zones.set(e, {
                element: e,
                zone: C(null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t ? t : (0, u.Z)(), i)
            }),
                this.elements.add(e),
                this.resizeObserver.observe(e),
                this.globalUpdate();
        }
        unobserve(e) {
            var t;
            null != this.zones.get(e) && (null === (t = this.resizeObserver) || void 0 === t || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.globalUpdate());
        }
        updateZones() {
            if (!p.isPlatformEmbedded) return;
            let e = f.Z.getWindow(v.OVERLAY_V3_KEY);
            null != e &&
                h.Z.setClickZones(
                    Array.from(this.zones.values()).map((t) => {
                        let { zone: n } = t;
                        return {
                            name: n.name,
                            left: n.left / e.innerWidth,
                            top: n.top / e.innerHeight,
                            right: n.right / e.innerWidth,
                            bottom: n.bottom / e.innerHeight
                        };
                    })
                );
        }
        cleanUp() {
            var e, t;
            this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), this.updateZones();
        }
        constructor(e) {
            Z(this, 'resizeObserver', void 0),
                Z(this, 'mutationObserver', void 0),
                Z(this, 'zones', new Map()),
                Z(this, 'elements', new Set()),
                Z(this, 'window', void 0),
                Z(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                Z(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                Z(
                    this,
                    'globalUpdate',
                    a()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let i = t.getBoundingClientRect(),
                                    l = C(n.zone.name, i);
                                if (!(0, c.Z)(l, n.zone))
                                    (e = !0),
                                        (n = {
                                            element: n.element,
                                            zone: l
                                        }),
                                        this.zones.set(t, n);
                            }
                            e && this.updateZones();
                        },
                        500,
                        {
                            trailing: !0,
                            maxWait: 1000
                        }
                    )
                ),
                (this.window = e);
        }
    })((0, g.i)())
);
function S(e) {
    let { observe: t = !0, className: n, children: o } = e,
        s = l.useContext(x),
        a = (0, d.e7)([m.Z], () => m.Z.clickZoneDebugMode),
        [{ refHandler: u, setObserve: c }] = l.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? s.observe(e) : s.unobserve(e));
                },
                refHandler(t) {
                    null != e && s.unobserve(e), (e = t);
                }
            };
        });
    return (
        l.useLayoutEffect(() => {
            c(t);
        }, [t, c]),
        (0, i.jsx)('div', {
            ref: u,
            className: r()(n, E.clickable, a && E.debugMode),
            'data-click-zone': !0,
            children: o
        })
    );
}
