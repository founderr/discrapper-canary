n.d(t, {
    FL: function () {
        return i;
    },
    XR: function () {
        return r;
    },
    tJ: function () {
        return l;
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
};
function i(e, t) {
    let n;
    try {
        n = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var r;
            let i = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                a = null != (r = n.getItem(e)) ? r : null;
            return a instanceof Promise ? a.then(i) : i(a);
        },
        setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
        removeItem: (e) => n.removeItem(e)
    };
}
let a = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => a(e)(n),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => a(t)(e)
            };
        }
    },
    s = (e, t) => (n, r, i) => {
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
                i
            );
        let f = a(l.serialize),
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
            h = i.setState;
        i.setState = (e, t) => {
            h(e, t), _();
        };
        let p = e(
                (...e) => {
                    n(...e), _();
                },
                r,
                i
            ),
            m = () => {
                var e;
                if (!s) return;
                (u = !1), c.forEach((e) => e(r()));
                let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, r())) || void 0;
                return a(s.getItem.bind(s))(l.name)
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
            (i.persist = {
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
    o = (e, t) => (n, r, s) => {
        let o,
            l = {
                storage: i(() => localStorage),
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
            d = new Set(),
            f = l.storage;
        if (!f)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...e);
                },
                r,
                s
            );
        let _ = () => {
                let e = l.partialize({ ...r() });
                return f.setItem(l.name, {
                    state: e,
                    version: l.version
                });
            },
            h = s.setState;
        s.setState = (e, t) => {
            h(e, t), _();
        };
        let p = e(
            (...e) => {
                n(...e), _();
            },
            r,
            s
        );
        s.getInitialState = () => p;
        let m = () => {
            var e, t;
            if (!f) return;
            (u = !1),
                c.forEach((e) => {
                    var t;
                    return e(null != (t = r()) ? t : p);
                });
            let i = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = r()) ? e : p)) || void 0;
            return a(f.getItem.bind(f))(l.name)
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
                    null == i || i(o, void 0), (o = r()), (u = !0), d.forEach((e) => e(o));
                })
                .catch((e) => {
                    null == i || i(void 0, e);
                });
        };
        return (
            (s.persist = {
                setOptions: (e) => {
                    (l = {
                        ...l,
                        ...e
                    }),
                        e.storage && (f = e.storage);
                },
                clearStorage: () => {
                    null == f || f.removeItem(l.name);
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
            !l.skipHydration && m(),
            o || p
        );
    },
    l = (e, t) => ('getStorage' in t || 'serialize' in t || 'deserialize' in t ? (console.warn('[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.'), s(e, t)) : o(e, t));
