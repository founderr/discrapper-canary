n.d(t, {
    Z: function () {
        return _;
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
    c = n(442837),
    d = n(902704),
    h = n(13245),
    f = n(928518),
    p = n(358085),
    m = n(610394),
    v = n(561064),
    g = n(501787),
    E = n(608631);
function x(e, t, n) {
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
let Z = l.createContext(
    new (class e {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = f.Z.getWindow(g.OVERLAY_V3_KEY);
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
                this.updateZones();
        }
        unobserve(e) {
            var t;
            null != this.zones.get(e) && (null === (t = this.resizeObserver) || void 0 === t || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones());
        }
        updateZones() {
            if (!p.isPlatformEmbedded) return;
            let e = f.Z.getWindow(g.OVERLAY_V3_KEY);
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
            x(this, 'resizeObserver', void 0),
                x(this, 'mutationObserver', void 0),
                x(this, 'zones', new Map()),
                x(this, 'elements', new Set()),
                x(this, 'window', void 0),
                x(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                x(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                x(
                    this,
                    'globalUpdate',
                    a()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let i = t.getBoundingClientRect(),
                                    l = C(n.zone.name, i);
                                if (!(0, d.Z)(l, n.zone))
                                    (e = !0),
                                        (n = {
                                            element: n.element,
                                            zone: l
                                        }),
                                        this.zones.set(t, n);
                            }
                            e && this.updateZones();
                        },
                        250,
                        {
                            trailing: !0,
                            maxWait: 1000
                        }
                    )
                ),
                (this.window = e);
        }
    })((0, v.i)())
);
function _(e) {
    let { observe: t = !0, className: n, children: o } = e,
        s = l.useContext(Z),
        a = (0, c.e7)([m.Z], () => m.Z.clickZoneDebugMode),
        [{ refHandler: u, setObserve: d }] = l.useState(() => {
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
            d(t);
        }, [t, d]),
        (0, i.jsx)('div', {
            ref: u,
            className: r()(n, E.clickable, a && E.debugMode),
            'data-click-zone': !0,
            children: o
        })
    );
}
