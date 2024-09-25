n.d(t, {
    XR: function () {
        return c;
    },
    tJ: function () {
        return I;
    }
});
var r = Object.defineProperty,
    i = Object.getOwnPropertySymbols,
    a = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable,
    s = (e, t, n) =>
        t in e
            ? r(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
              })
            : (e[t] = n),
    l = (e, t) => {
        for (var n in t || (t = {})) a.call(t, n) && s(e, n, t[n]);
        if (i) for (var n of i(t)) o.call(t, n) && s(e, n, t[n]);
        return e;
    };
let u = (e, t) => {
        let n;
        try {
            n = JSON.parse(e);
        } catch (e) {
            console.error('[zustand devtools middleware] Could not parse the received json', e);
        }
        void 0 !== n && t(n);
    },
    c = (e) => (t, n, r) => {
        let i = r.subscribe;
        return (
            (r.subscribe = (e, t, n) => {
                let a = e;
                if (t) {
                    let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                        o = e(r.getState());
                    (a = (n) => {
                        let r = e(n);
                        if (!i(o, r)) {
                            let e = o;
                            t((o = r), e);
                        }
                    }),
                        (null == n ? void 0 : n.fireImmediately) && t(o, o);
                }
                return i(a);
            }),
            e(t, n, r)
        );
    };
var d = Object.defineProperty,
    _ = Object.getOwnPropertySymbols,
    E = Object.prototype.hasOwnProperty,
    f = Object.prototype.propertyIsEnumerable,
    h = (e, t, n) =>
        t in e
            ? d(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
              })
            : (e[t] = n),
    p = (e, t) => {
        for (var n in t || (t = {})) E.call(t, n) && h(e, n, t[n]);
        if (_) for (var n of _(t)) f.call(t, n) && h(e, n, t[n]);
        return e;
    };
let m = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => m(e)(n),
                catch(e) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => m(t)(e)
            };
        }
    },
    I = (e, t) => (n, r, i) => {
        let a,
            o,
            s = p(
                {
                    getStorage: () => localStorage,
                    serialize: JSON.stringify,
                    deserialize: JSON.parse,
                    partialize: (e) => e,
                    version: 0,
                    merge: (e, t) => p(p({}, t), e)
                },
                t
            );
        (s.blacklist || s.whitelist) && console.warn(`The ${s.blacklist ? 'blacklist' : 'whitelist'} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);
        let l = !1,
            u = new Set(),
            c = new Set();
        try {
            a = s.getStorage();
        } catch (e) {}
        if (!a)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...e);
                },
                r,
                i
            );
        !a.removeItem && console.warn(`[zustand persist middleware] The given storage for item '${s.name}' does not contain a 'removeItem' method, which will be required in v4.`);
        let d = m(s.serialize),
            _ = () => {
                let e;
                let t = s.partialize(p({}, r()));
                s.whitelist &&
                    Object.keys(t).forEach((e) => {
                        var n;
                        (null == (n = s.whitelist) ? void 0 : n.includes(e)) || delete t[e];
                    }),
                    s.blacklist && s.blacklist.forEach((e) => delete t[e]);
                let n = d({
                    state: t,
                    version: s.version
                })
                    .then((e) => a.setItem(s.name, e))
                    .catch((t) => {
                        e = t;
                    });
                if (e) throw e;
                return n;
            },
            E = i.setState;
        i.setState = (e, t) => {
            E(e, t), _();
        };
        let f = e(
                (...e) => {
                    n(...e), _();
                },
                r,
                i
            ),
            h = () => {
                var e;
                if (!a) return;
                (l = !1), u.forEach((e) => e(r()));
                let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, r())) || void 0;
                return m(a.getItem.bind(a))(s.name)
                    .then((e) => {
                        if (e) return s.deserialize(e);
                    })
                    .then((e) => {
                        if (e) {
                            if ('number' != typeof e.version || e.version === s.version) return e.state;
                            if (s.migrate) return s.migrate(e.state, e.version);
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                        }
                    })
                    .then((e) => {
                        var t;
                        return n((o = s.merge(e, null != (t = r()) ? t : f)), !0), _();
                    })
                    .then(() => {
                        null == t || t(o, void 0), (l = !0), c.forEach((e) => e(o));
                    })
                    .catch((e) => {
                        null == t || t(void 0, e);
                    });
            };
        return (
            (i.persist = {
                setOptions: (e) => {
                    (s = p(p({}, s), e)), e.getStorage && (a = e.getStorage());
                },
                clearStorage: () => {
                    var e;
                    null == (e = null == a ? void 0 : a.removeItem) || e.call(a, s.name);
                },
                rehydrate: () => h(),
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
            h(),
            o || f
        );
    };
