n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(954955),
    s = n.n(a),
    u = n(772848),
    c = n(442837),
    d = n(902704),
    h = n(13245),
    f = n(928518),
    p = n(358085),
    m = n(610394),
    v = n(561064),
    g = n(501787),
    E = n(269041);
function _(e, t, n) {
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
let S = r.createContext(
    new (class e {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = f.Z.getWindow(g.$J);
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
            let e = f.Z.getWindow(g.$J);
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
            _(this, 'resizeObserver', void 0),
                _(this, 'mutationObserver', void 0),
                _(this, 'zones', new Map()),
                _(this, 'elements', new Set()),
                _(this, 'window', void 0),
                _(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                _(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                _(
                    this,
                    'globalUpdate',
                    s()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let i = t.getBoundingClientRect(),
                                    r = C(n.zone.name, i);
                                if (!(0, d.Z)(r, n.zone))
                                    (e = !0),
                                        (n = {
                                            element: n.element,
                                            zone: r
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
    })((0, v.i)())
);
function Z(e) {
    let { observe: t = !0, className: n, children: l } = e,
        a = r.useContext(S),
        s = (0, c.e7)([m.Z], () => m.Z.clickZoneDebugMode),
        [{ refHandler: u, setObserve: d }] = r.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? a.observe(e) : a.unobserve(e));
                },
                refHandler(t) {
                    null != e && a.unobserve(e), (e = t);
                }
            };
        });
    return (
        r.useLayoutEffect(() => {
            d(t);
        }, [t, d]),
        (0, i.jsx)('div', {
            ref: u,
            className: o()(n, s && E.debugMode),
            'data-click-zone': !0,
            children: l
        })
    );
}
