n.d(t, {
    XR: function () {
        return r;
    },
    tJ: function () {
        return o;
    }
});
let r = (e) => (t, n, r) => {
        let i = r.subscribe;
        return (
            (r.subscribe = (e, t, n) => {
                let a = e;
                if (t) {
                    let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                        s = e(r.getState());
                    (a = (n) => {
                        let r = e(n);
                        if (!i(s, r)) {
                            let e = s;
                            t((s = r), e);
                        }
                    }),
                        (null == n ? void 0 : n.fireImmediately) && t(s, s);
                }
                return i(a);
            }),
            e(t, n, r)
        );
    },
    i = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => i(e)(n),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => i(t)(e)
            };
        }
    },
    a = (e, t) => (n, r, a) => {
        let s,
            o,
            l = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            },
            u = !1,
            c = new Set(),
            d = new Set();
        try {
            s = l.getStorage();
        } catch (e) {}
        if (!s)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...e);
                },
                r,
                a
            );
        let f = i(l.serialize),
            _ = () => {
                let e;
                let t = f({
                    state: l.partialize({ ...r() }),
                    version: l.version
                })
                    .then((e) => s.setItem(l.name, e))
                    .catch((t) => {
                        e = t;
                    });
                if (e) throw e;
                return t;
            },
            h = a.setState;
        a.setState = (e, t) => {
            h(e, t), _();
        };
        let p = e(
                (...e) => {
                    n(...e), _();
                },
                r,
                a
            ),
            m = () => {
                var e;
                if (!s) return;
                (u = !1), c.forEach((e) => e(r()));
                let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, r())) || void 0;
                return i(s.getItem.bind(s))(l.name)
                    .then((e) => {
                        if (e) return l.deserialize(e);
                    })
                    .then((e) => {
                        if (e) {
                            if ('number' != typeof e.version || e.version === l.version) return e.state;
                            if (l.migrate) return l.migrate(e.state, e.version);
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                        }
                    })
                    .then((e) => {
                        var t;
                        return n((o = l.merge(e, null != (t = r()) ? t : p)), !0), _();
                    })
                    .then(() => {
                        null == t || t(o, void 0), (u = !0), d.forEach((e) => e(o));
                    })
                    .catch((e) => {
                        null == t || t(void 0, e);
                    });
            };
        return (
            (a.persist = {
                setOptions: (e) => {
                    (l = {
                        ...l,
                        ...e
                    }),
                        e.getStorage && (s = e.getStorage());
                },
                clearStorage: () => {
                    null == s || s.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => m(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                    c.add(e),
                    () => {
                        c.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                )
            }),
            m(),
            o || p
        );
    },
    s = (e, t) => (n, r, a) => {
        let s,
            o = {
                storage: (function (e, t) {
                    let n;
                    try {
                        n = e();
                    } catch (e) {
                        return;
                    }
                    return {
                        getItem: (e) => {
                            var t;
                            let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                                i = null != (t = n.getItem(e)) ? t : null;
                            return i instanceof Promise ? i.then(r) : r(i);
                        },
                        setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
                        removeItem: (e) => n.removeItem(e)
                    };
                })(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            },
            l = !1,
            u = new Set(),
            c = new Set(),
            d = o.storage;
        if (!d)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), n(...e);
                },
                r,
                a
            );
        let f = () => {
                let e = o.partialize({ ...r() });
                return d.setItem(o.name, {
                    state: e,
                    version: o.version
                });
            },
            _ = a.setState;
        a.setState = (e, t) => {
            _(e, t), f();
        };
        let h = e(
            (...e) => {
                n(...e), f();
            },
            r,
            a
        );
        a.getInitialState = () => h;
        let p = () => {
            var e, t;
            if (!d) return;
            (l = !1),
                u.forEach((e) => {
                    var t;
                    return e(null != (t = r()) ? t : h);
                });
            let a = (null == (t = o.onRehydrateStorage) ? void 0 : t.call(o, null != (e = r()) ? e : h)) || void 0;
            return i(d.getItem.bind(d))(o.name)
                .then((e) => {
                    if (e) {
                        if ('number' != typeof e.version || e.version === o.version) return e.state;
                        if (o.migrate) return o.migrate(e.state, e.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                    }
                })
                .then((e) => {
                    var t;
                    return n((s = o.merge(e, null != (t = r()) ? t : h)), !0), f();
                })
                .then(() => {
                    null == a || a(s, void 0), (s = r()), (l = !0), c.forEach((e) => e(s));
                })
                .catch((e) => {
                    null == a || a(void 0, e);
                });
        };
        return (
            (a.persist = {
                setOptions: (e) => {
                    (o = {
                        ...o,
                        ...e
                    }),
                        e.storage && (d = e.storage);
                },
                clearStorage: () => {
                    null == d || d.removeItem(o.name);
                },
                getOptions: () => o,
                rehydrate: () => p(),
                hasHydrated: () => l,
                onHydrate: (e) => (
                    u.add(e),
                    () => {
                        u.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    c.add(e),
                    () => {
                        c.delete(e);
                    }
                )
            }),
            !o.skipHydration && p(),
            s || h
        );
    },
    o = (e, t) => ('getStorage' in t || 'serialize' in t || 'deserialize' in t ? (console.warn('[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.'), a(e, t)) : s(e, t));
