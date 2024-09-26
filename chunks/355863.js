let r, i;
var a,
    o,
    s = n(653041);
var l = n(47120);
var u = n(411104);
var c = n(724458);
var d = n(392711),
    _ = n.n(d),
    E = n(772848),
    f = n(442837),
    h = n(433517),
    p = n(570140),
    m = n(131792),
    I = n(252982),
    T = n(434529),
    g = n(981631);
function S(e, t, n) {
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
!(function (e) {
    (e.REQUIRED = 'REQUIRED'), (e.OPTIONAL = 'OPTIONAL'), (e.OPTIONAL_DEFAULT = 'OPTIONAL_DEFAULT');
})(a || (a = {}));
let A = 'migrated',
    v = {
        [g.Odu.GUILDS]: {
            minSize: {
                width: 312,
                height: 300
            },
            resizeX: !1,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL',
            defaultSettings: {
                anchor: {
                    left: 0.175,
                    top: 0.15,
                    bottom: null,
                    right: null
                },
                size: {
                    width: 'auto',
                    height: 0.65
                },
                pinned: !1
            }
        },
        [g.Odu.TEXT]: {
            minSize: {
                width: 430,
                height: 300
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL',
            defaultSettings: {
                anchor: {
                    left: 0.26,
                    top: 0.15,
                    bottom: null,
                    right: null
                },
                size: {
                    width: 0.565,
                    height: 0.65
                },
                pinned: !0
            }
        },
        [g.Odu.VOICE]: {
            minSize: {
                width: 272,
                height: 100
            },
            resizeX: !1,
            resizeY: !1,
            dragAnywhere: !0,
            layoutPolicy: 'REQUIRED',
            defaultSettings: {
                anchor: {
                    left: 0.011,
                    top: 0.011,
                    bottom: null,
                    right: null
                },
                size: {
                    width: 'auto',
                    height: 'auto'
                },
                pinned: !0
            }
        },
        [g.Odu.GUILDS_TEXT]: {
            minSize: {
                height: 300,
                width: 610
            },
            resizeX: !0,
            resizeY: !0,
            dragAnywhere: !1,
            layoutPolicy: 'OPTIONAL_DEFAULT',
            defaultSettings: {
                anchor: {
                    left: 0.15,
                    top: 0.15,
                    bottom: null,
                    right: null
                },
                size: {
                    width: 0.7,
                    height: 0.65
                },
                pinned: !1
            }
        }
    };
function N(e) {
    let { layoutId: t, widgets: n, defaultResolution: a } = e;
    if (null != r[t]) return !1;
    let o = [];
    n.forEach((e, t) => {
        let n = O(e.type),
            r = {
                ...e,
                zIndex: t
            };
        '' === r.id && (r.id = (0, E.Z)()),
            null != n && ((r.pinned = n.pinned), -1 !== n.anchor.left && (r.anchor = (0, T.jL)(n.anchor, a)), -1 !== n.size.width && (r.size = (0, T.Ox)(n.size, a))),
            (i = {
                ...i,
                [r.id]: new I.Z(r)
            }),
            o.push(r.id);
    }),
        (r = {
            ...r,
            [t]: new m.Z({
                id: t,
                widgets: o
            })
        });
}
function O(e) {
    let t = r[A];
    if (null != t)
        for (let n of t.widgets) {
            let t = i[n];
            if (null != t && t.type === e) return t;
        }
    return null;
}
function R(e, t) {
    let n = i[e];
    if (null == n) return !1;
    let a = r[n.layoutId];
    return null != a && t(n, a);
}
function C(e) {
    let { widgetId: t, anchor: n, size: r } = e;
    return R(t, (e, t) => D(e, n, r));
}
function y(e) {
    let { widgetId: t } = e;
    return R(t, (e, t) => L(t, e.id));
}
function L(e, t) {
    let n = G(e);
    n.sort((e, t) => e.zIndex - t.zIndex);
    let r = n.findIndex((e) => e.id === t);
    if (r === n.length - 1) return !1;
    n.push(n.splice(r, 1)[0]);
    for (let e = 0; e < n.length; e++) w(n[e], e);
    return !0;
}
function b(e) {
    let { widgetId: t } = e;
    return R(t, (e, t) => {
        x(e);
    });
}
function D(e, t, n) {
    i = {
        ...i,
        [e.id]: e.merge({
            anchor: t,
            size: n
        })
    };
}
function M(e) {
    let { widgetId: t } = e;
    (i = { ...i }),
        delete i[t],
        _().forEach(r, (e, n) => {
            if (n === A) return;
            let i = e.widgets.indexOf(t);
            if (i >= 0) {
                let t = [...e.widgets];
                t.splice(i, 1),
                    (r = {
                        ...r,
                        [n]: e.set('widgets', t)
                    });
            }
        });
}
function P(e) {
    let { layoutId: t } = e,
        n = r[t];
    if (null == n) return !1;
    n.widgets.forEach((e) => {
        (i = { ...i }), delete i[e];
    }),
        (r = {
            ...r,
            [n.id]: n.set('widgets', [])
        });
}
function U(e) {
    let { widgetConfigs: t } = e;
    t.forEach((e) => {
        let t = new I.Z(e),
            n = r[t.layoutId];
        if (null == n) throw Error('LayoutStore - handleAddWidget: Invalid layoutId');
        (t = t.set('zIndex', n.widgets.length)),
            (i = {
                ...i,
                [t.id]: t
            });
        let a = [...n.widgets, t.id];
        r = {
            ...r,
            [n.id]: n.set('widgets', a)
        };
    });
}
function w(e, t) {
    i = {
        ...i,
        [e.id]: e.set('zIndex', t)
    };
}
function x(e) {
    i = {
        ...i,
        [e.id]: e.set('pinned', !e.pinned)
    };
}
function G(e) {
    let t = [];
    return (
        e.widgets.forEach((e) => {
            let n = i[e];
            null != n && t.push(n);
        }),
        t
    );
}
function k(e) {
    let t = {};
    return (
        _().forEach(e, (e, n) => {
            t[n] = new m.Z(e);
        }),
        t
    );
}
function B(e) {
    let t = {};
    return (
        _().forEach(e, (e, n) => {
            t[n] = new I.Z(e);
        }),
        t
    );
}
function F(e) {
    var t;
    return null === (t = v[e]) || void 0 === t ? void 0 : t.defaultSettings;
}
class Z extends (o = f.ZP.PersistedStore) {
    initialize(e) {
        null != e && null != e.layouts && null != e.widgets ? ((r = k(e.layouts)), (i = B(e.widgets))) : ((r = {}), (i = {}));
        let t = !1,
            n = [];
        _().forEach(v, (e, t) => {
            'REQUIRED' === e.layoutPolicy && n.push(t);
        }),
            _().forEach(r, (e, a) => {
                let o = this.getWidgetsForLayout(a),
                    s = !1;
                for (let e of n) {
                    let n = o.find((t) => t.type === e);
                    if (null != n) continue;
                    s = t = !0;
                    let r = (0, E.Z)();
                    (n = new I.Z({
                        ...this.getWidgetDefaultSettings(e),
                        type: e,
                        id: r,
                        layoutId: a,
                        zIndex: o.length
                    })),
                        o.push(n),
                        (i = {
                            ...i,
                            [r]: n
                        });
                }
                s &&
                    ((e = e.set(
                        'widgets',
                        o.map((e) => {
                            let { id: t } = e;
                            return t;
                        })
                    )),
                    (r = {
                        ...r,
                        [a]: e
                    }));
            }),
            _().forEach(i, (e, n) => {
                let a = r[e.layoutId];
                (null == a || 0 > a.widgets.indexOf(n)) && ((i = { ...i }), delete i[n], (t = !0));
            }),
            t && (this.persist(), this.emitChange());
    }
    getState() {
        return {
            layouts: r,
            widgets: i
        };
    }
    getLayouts() {
        return r;
    }
    getLayout(e) {
        return r[e];
    }
    getAllWidgets() {
        return i;
    }
    getWidget(e) {
        return i[e];
    }
    getWidgetsForLayout(e) {
        let t = this.getLayout(e);
        return null == t
            ? []
            : t.widgets.reduce((e, t) => {
                  let n = this.getWidget(t);
                  return null != n && e.push(n), e;
              }, []);
    }
    getWidgetConfig(e) {
        return v[e];
    }
    getWidgetDefaultSettings(e) {
        return F(e);
    }
    getWidgetType(e) {
        let t = i[e];
        return null != t ? t.type : '';
    }
    getRegisteredWidgets() {
        return v;
    }
    getDefaultLayout(e) {
        let t = [];
        return (
            _().forEach(this.getRegisteredWidgets(), (n, r) => {
                switch (n.layoutPolicy) {
                    case 'REQUIRED':
                    case 'OPTIONAL_DEFAULT':
                        t.push({
                            ...n.defaultSettings,
                            type: r,
                            id: (0, E.Z)(),
                            layoutId: e
                        });
                }
            }),
            t
        );
    }
}
S(Z, 'displayName', 'LayoutStore'),
    S(Z, 'persistKey', 'LayoutStore'),
    S(Z, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r } = { ...h.K.get('OverlayStore') };
            if (5 === r && e) {
                let r = A,
                    i = [],
                    a = e.map((e) => {
                        let a = null != t ? t[e] : null,
                            o = null != n ? n[e] : null,
                            s = {
                                id: e,
                                layoutId: r,
                                type: e,
                                anchor: a || {
                                    top: -1,
                                    left: -1,
                                    bottom: null,
                                    right: null
                                },
                                size: o || {
                                    width: -1,
                                    height: -1
                                },
                                pinned: !0,
                                zIndex: 0
                            };
                        return i.push([s.id, s]), s.id;
                    }),
                    o = {
                        id: r,
                        widgets: a
                    };
                return {
                    layouts: [[r, o]],
                    widgets: i
                };
            }
            return {
                layouts: [],
                widgets: []
            };
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = new Set(Object.keys(g.Odu)),
                i = Array.from(n).filter((e) => {
                    let [t] = e;
                    return !r.has(t);
                }),
                a = Array.from(t).filter((e) => {
                    let [t] = e;
                    return t !== A;
                });
            return (
                a.forEach((e) => {
                    let [t, n] = e,
                        r = null,
                        a = null;
                    if (
                        (n.widgets.find((e) => {
                            let n = i.find((n) => {
                                let [r, i] = n;
                                return r === e && i.layoutId === t;
                            });
                            return null != n && (null == a && n[1].type === g.Odu.VOICE && (a = n[0]), null == r && n[1].type === g.Odu.TEXT && (r = n[1].pinned), (null != r && null != a) || void 0);
                        }),
                        r || null == a)
                    )
                        return;
                    let o = (0, E.Z)();
                    (n.widgets = [a, o]),
                        i.push([
                            o,
                            {
                                ...F(g.Odu.GUILDS_TEXT),
                                type: g.Odu.GUILDS_TEXT,
                                id: o,
                                layoutId: t,
                                zIndex: 2
                            }
                        ]);
                }),
                {
                    widgets: i,
                    layouts: a
                }
            );
        },
        (e) => {
            let { layouts: t, widgets: n } = e,
                r = t.reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {});
            return {
                layouts: r,
                widgets: n.reduce((e, t) => {
                    let [n, r] = t;
                    return (e[n] = r), e;
                }, {})
            };
        }
    ]),
    (t.Z = new Z(p.Z, {
        LAYOUT_CREATE: N,
        LAYOUT_SET_PINNED: b,
        LAYOUT_UPDATE_WIDGET: C,
        LAYOUT_SET_TOP_WIDGET: y,
        LAYOUT_DELETE_WIDGET: M,
        LAYOUT_DELETE_ALL_WIDGETS: P,
        LAYOUT_CREATE_WIDGETS: U
    }));
