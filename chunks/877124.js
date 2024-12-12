r.d(n, {
    FL: function () {
        return u;
    },
    XR: function () {
        return l;
    },
    tJ: function () {
        return d;
    }
});
let i = new Map(),
    a = (e) => {
        let n = i.get(e);
        return n ? Object.fromEntries(Object.entries(n.stores).map(([e, n]) => [e, n.getState()])) : {};
    },
    s = (e, n, r) => {
        if (void 0 === e)
            return {
                type: 'untracked',
                connection: n.connect(r)
            };
        let a = i.get(r.name);
        if (a)
            return {
                type: 'tracked',
                store: e,
                ...a
            };
        let s = {
            connection: n.connect(r),
            stores: {}
        };
        return (
            i.set(r.name, s),
            {
                type: 'tracked',
                store: e,
                ...s
            }
        );
    },
    o = (e, n) => {
        let r;
        try {
            r = JSON.parse(e);
        } catch (e) {
            console.error('[zustand devtools middleware] Could not parse the received json', e);
        }
        void 0 !== r && n(r);
    },
    l = (e) => (n, r, i) => {
        let a = i.subscribe;
        return (
            (i.subscribe = (e, n, r) => {
                let s = e;
                if (n) {
                    let a = (null == r ? void 0 : r.equalityFn) || Object.is,
                        o = e(i.getState());
                    (s = (r) => {
                        let i = e(r);
                        if (!a(o, i)) {
                            let e = o;
                            n((o = i), e);
                        }
                    }),
                        (null == r ? void 0 : r.fireImmediately) && n(o, o);
                }
                return a(s);
            }),
            e(n, r, i)
        );
    };
function u(e, n) {
    let r;
    try {
        r = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var i;
            let a = (e) => (null === e ? null : JSON.parse(e, null == n ? void 0 : n.reviver)),
                s = null != (i = r.getItem(e)) ? i : null;
            return s instanceof Promise ? s.then(a) : a(s);
        },
        setItem: (e, i) => r.setItem(e, JSON.stringify(i, null == n ? void 0 : n.replacer)),
        removeItem: (e) => r.removeItem(e)
    };
}
let c = (e) => (n) => {
        try {
            let r = e(n);
            if (r instanceof Promise) return r;
            return {
                then: (e) => c(e)(r),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (n) => c(n)(e)
            };
        }
    },
    d = (e, n) => (r, i, a) => {
        let s,
            o = {
                storage: u(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, n) => ({
                    ...n,
                    ...e
                }),
                ...n
            },
            l = !1,
            d = new Set(),
            f = new Set(),
            _ = o.storage;
        if (!_)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), r(...e);
                },
                i,
                a
            );
        let h = () => {
                let e = o.partialize({ ...i() });
                return _.setItem(o.name, {
                    state: e,
                    version: o.version
                });
            },
            p = a.setState;
        a.setState = (e, n) => {
            p(e, n), h();
        };
        let m = e(
            (...e) => {
                r(...e), h();
            },
            i,
            a
        );
        a.getInitialState = () => m;
        let g = () => {
            var e, n;
            if (!_) return;
            (l = !1),
                d.forEach((e) => {
                    var n;
                    return e(null != (n = i()) ? n : m);
                });
            let a = (null == (n = o.onRehydrateStorage) ? void 0 : n.call(o, null != (e = i()) ? e : m)) || void 0;
            return c(_.getItem.bind(_))(o.name)
                .then((e) => {
                    if (e) {
                        if ('number' != typeof e.version || e.version === o.version) return [!1, e.state];
                        if (o.migrate) return [!0, o.migrate(e.state, e.version)];
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                    }
                    return [!1, void 0];
                })
                .then((e) => {
                    var n;
                    let [a, l] = e;
                    if ((r((s = o.merge(l, null != (n = i()) ? n : m)), !0), a)) return h();
                })
                .then(() => {
                    null == a || a(s, void 0), (s = i()), (l = !0), f.forEach((e) => e(s));
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
                        e.storage && (_ = e.storage);
                },
                clearStorage: () => {
                    null == _ || _.removeItem(o.name);
                },
                getOptions: () => o,
                rehydrate: () => g(),
                hasHydrated: () => l,
                onHydrate: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    f.add(e),
                    () => {
                        f.delete(e);
                    }
                )
            }),
            !o.skipHydration && g(),
            s || m
        );
    };
