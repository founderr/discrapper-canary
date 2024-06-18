"use strict";
n.d(t, {
  AT: function() {
    return I
  },
  g5: function() {
    return c
  },
  gc: function() {
    return E
  }
}), n(47120), n(411104);
var i = n(123763),
  r = n.n(i),
  s = n(956067),
  o = n(433517),
  a = n(445346);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {
    _state: void 0,
    _version: void 0
  },
  _ = null;
class c extends a.y {
  getClass() {
    return this.constructor
  }
  static clearAll(e) {
    return _ = e, null == c._clearAllPromise && (c._clearAllPromise = new Promise(t => {
      requestIdleCallback(() => {
        c.clearPersistQueue(e), c.allPersistKeys.forEach(t => {
          c.shouldClear(e, t) && o.K.remove(t)
        }), a.y.getAll().forEach(t => {
          t instanceof c && c.shouldClear(e, t.getClass().persistKey) && (t._isInitialized = !1, t.initializeIfNeeded())
        }), c._clearAllPromise = null, t()
      }, {
        timeout: 500
      })
    })), c._clearAllPromise
  }
  static shouldClear(e, t) {
    var n;
    return (null === (n = e.omit) || void 0 === n ? !void 0 : !n.includes(t)) && ("all" === e.type || "user-data-only" === e.type && !c.userAgnosticPersistKeys.has(t))
  }
  static clearPersistQueue(e) {
    c._writeResolvers.forEach((t, n) => {
      let [i, r] = t;
      c.shouldClear(e, n) && (c._writePromises.delete(n), c._writeResolvers.delete(n), cancelIdleCallback(r), i(!1))
    }), c._writePromises.clear(), c._writeResolvers.clear()
  }
  static getAllStates() {
    return Promise.all(Array.from(c._writePromises.values())).then(() => {
      let e = {};
      return c.allPersistKeys.forEach(t => {
        var n;
        e[t] = (null !== (n = o.K.get(t)) && void 0 !== n ? n : u)._state
      }), e
    })
  }
  static initializeAll(e) {
    a.y.getAll().forEach(t => {
      if (t instanceof c) {
        let n = t.getClass().persistKey;
        e.hasOwnProperty(n) && t.initializeFromState(e[n])
      }
    })
  }
  initializeFromState(e) {
    this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (c.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
  }
  static destroy() {
    _ = null, a.y.destroy(), c.clearPersistQueue({
      type: "all"
    }), c.allPersistKeys.clear(), c.userAgnosticPersistKeys.clear()
  }
  initializeIfNeeded() {
    if (!this._isInitialized) {
      let e = Date.now();
      c.allPersistKeys.add(this.getClass().persistKey);
      let {
        state: t,
        requiresPersist: n
      } = c.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
      this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), this._isInitialized = !0;
      let i = Date.now() - e;
      i > 5 && s.Z.mark("\uD83E\uDDA5", this.getName() + ".initialize()", i)
    }
  }
  static migrateAndReadStoreState(e, t) {
    if (null != _ && c.shouldClear(_, e)) return o.K.remove(e), {
      state: void 0,
      requiresPersist: !1
    };
    let n = null != c._clearAllPromise ? null : o.K.get(e),
      {
        _state: i,
        _version: r,
        ...s
      } = null != n ? n : u,
      a = null == t ? 0 : t.length;
    if (0 !== a && r !== a && null != t) {
      let e = null != r ? r : 0,
        n = i;
      for (null == r && (n = s); e < a;) n = (0, t[e])(n), e++;
      return {
        state: n,
        requiresPersist: !0
      }
    }
    if (Object.values(s).length > 0) return {
      state: s,
      requiresPersist: !0
    };
    return {
      state: i,
      requiresPersist: !1
    }
  }
  asyncPersist() {
    let {
      persistKey: e,
      disableWrite: t,
      throttleDelay: n
    } = this.getClass();
    if (c.disableWrites || t) return Promise.resolve(!1);
    let i = c._writePromises.get(e);
    return null != i ? i : (i = new Promise(t => {
      let i = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
      c._writeResolvers.set(e, [t, requestIdleCallback(i, {
        timeout: 500
      })])
    }), c._writePromises.set(e, i), i)
  }
  persist() {
    let {
      persistKey: e
    } = this.getClass(), t = this.getState(), n = this._version;
    o.K.set(e, {
      _state: t,
      _version: n
    })
  }
  clear() {
    let {
      persistKey: e
    } = this.getClass();
    o.K.remove(e)
  }
  constructor(e, t) {
    if (super(e, t), l(this, "_version", null == this.getClass().migrations ? 0 : this.getClass().migrations.length), l(this, "callback", e => {
        let {
          persistKey: t
        } = this.getClass();
        this.persist(), c._writePromises.delete(t), c._writeResolvers.delete(t), e()
      }), l(this, "throttledCallback", r()(e => this.callback(e), this.getClass().throttleDelay, {
        leading: !1
      })), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
    if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
    if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
    this.addChangeListener(() => this.asyncPersist())
  }
}
l(c, "allPersistKeys", new Set), l(c, "userAgnosticPersistKeys", new Set), l(c, "_writePromises", new Map), l(c, "_writeResolvers", new Map), l(c, "_clearAllPromise", void 0), l(c, "disableWrites", !1), l(c, "persistKey", void 0), l(c, "disableWrite", !1), l(c, "throttleDelay", 0), l(c, "migrations", void 0);
class d extends c {
  initializeFromState(e) {
    return c.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
  }
  initializeIfNeeded() {
    return c.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
  }
  getState() {
    return this.getUserAgnosticState()
  }
}
class E extends d {}
class I extends d {}