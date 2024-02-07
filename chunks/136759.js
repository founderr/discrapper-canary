"use strict";
n.r(t), n.d(t, {
  persist: function() {
    return u
  }
}), n("222007");
Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
var r = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  l = (e, t, n) => t in e ? r(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : e[t] = n,
  s = (e, t) => {
    for (var n in t || (t = {})) i.call(t, n) && l(e, n, t[n]);
    if (a)
      for (var n of a(t)) o.call(t, n) && l(e, n, t[n]);
    return e
  };
let c = e => t => {
    try {
      let n = e(t);
      if (n instanceof Promise) return n;
      return {
        then: e => c(e)(n),
        catch (e) {
          return this
        }
      }
    } catch (e) {
      return {
        then(e) {
          return this
        },
        catch: t => c(t)(e)
      }
    }
  },
  u = (e, t) => (n, r, a) => {
    let i, o, l = s({
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: e => e,
      version: 0,
      merge: (e, t) => s(s({}, t), e)
    }, t);
    (l.blacklist || l.whitelist) && console.warn("The ".concat(l.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
    let u = !1,
      d = new Set,
      f = new Set;
    try {
      i = l.getStorage()
    } catch (e) {}
    if (!i) return e(function() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      console.warn("[zustand persist middleware] Unable to update item '".concat(l.name, "', the given storage is currently unavailable.")), n(...t)
    }, r, a);
    !i.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(l.name, "' does not contain a 'removeItem' method, which will be required in v4."));
    let h = c(l.serialize),
      m = () => {
        let e;
        let t = l.partialize(s({}, r()));
        l.whitelist && Object.keys(t).forEach(e => {
          var n;
          (null == (n = l.whitelist) ? void 0 : n.includes(e)) || delete t[e]
        }), l.blacklist && l.blacklist.forEach(e => delete t[e]);
        let n = h({
          state: t,
          version: l.version
        }).then(e => i.setItem(l.name, e)).catch(t => {
          e = t
        });
        if (e) throw e;
        return n
      },
      p = a.setState;
    a.setState = (e, t) => {
      p(e, t), m()
    };
    let g = e(function() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        n(...t), m()
      }, r, a),
      v = () => {
        var e;
        if (!i) return;
        u = !1, d.forEach(e => e(r()));
        let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, r())) || void 0;
        return c(i.getItem.bind(i))(l.name).then(e => {
          if (e) return l.deserialize(e)
        }).then(e => {
          if (e) {
            if ("number" != typeof e.version || e.version === l.version) return e.state;
            if (l.migrate) return l.migrate(e.state, e.version);
            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
          }
        }).then(e => {
          var t;
          return n(o = l.merge(e, null != (t = r()) ? t : g), !0), m()
        }).then(() => {
          null == t || t(o, void 0), u = !0, f.forEach(e => e(o))
        }).catch(e => {
          null == t || t(void 0, e)
        })
      };
    return a.persist = {
      setOptions: e => {
        l = s(s({}, l), e), e.getStorage && (i = e.getStorage())
      },
      clearStorage: () => {
        var e;
        null == (e = null == i ? void 0 : i.removeItem) || e.call(i, l.name)
      },
      rehydrate: () => v(),
      hasHydrated: () => u,
      onHydrate: e => (d.add(e), () => {
        d.delete(e)
      }),
      onFinishHydration: e => (f.add(e), () => {
        f.delete(e)
      })
    }, v(), o || g
  }