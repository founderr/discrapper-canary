"use strict";
E.r(_), E.d(_, {
  DeviceSettingsStore: function() {
    return R
  },
  OfflineCacheStore: function() {
    return N
  },
  default: function() {
    return o
  }
}), E("222007"), E("70102");
var t, o, I = E("773179"),
  T = E.n(I),
  r = E("102053"),
  a = E("95410"),
  n = E("75247");
let i = {
    _state: void 0,
    _version: void 0
  },
  A = null;
(t = class e extends n.default {
  getClass() {
    return this.constructor
  }
  static clearAll(_) {
    return A = _, null == e._clearAllPromise && (e._clearAllPromise = new Promise(E => {
      requestIdleCallback(() => {
        e.clearPersistQueue(_), e.allPersistKeys.forEach(E => {
          e.shouldClear(_, E) && a.default.remove(E)
        }), n.default.getAll().forEach(E => {
          E instanceof e && e.shouldClear(_, E.getClass().persistKey) && (E._isInitialized = !1, E.initializeIfNeeded())
        }), e._clearAllPromise = null, E()
      }, {
        timeout: 500
      })
    })), e._clearAllPromise
  }
  static shouldClear(_, E) {
    var t;
    return (null === (t = _.omit) || void 0 === t ? !void 0 : !t.includes(E)) && ("all" === _.type || "user-data-only" === _.type && !e.userAgnosticPersistKeys.has(E))
  }
  static clearPersistQueue(_) {
    e._writeResolvers.forEach((E, t) => {
      let [o, I] = E;
      e.shouldClear(_, t) && (e._writePromises.delete(t), e._writeResolvers.delete(t), cancelIdleCallback(I), o(!1))
    }), e._writePromises.clear(), e._writeResolvers.clear()
  }
  static getAllStates() {
    return Promise.all(Array.from(e._writePromises.values())).then(() => {
      let _ = {};
      return e.allPersistKeys.forEach(e => {
        var E;
        _[e] = (null !== (E = a.default.get(e)) && void 0 !== E ? E : i)._state
      }), _
    })
  }
  static initializeAll(_) {
    n.default.getAll().forEach(E => {
      if (E instanceof e) {
        let e = E.getClass().persistKey;
        _.hasOwnProperty(e) && E.initializeFromState(_[e])
      }
    })
  }
  initializeFromState(_) {
    this.initialize(_) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (e.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
  }
  static destroy() {
    A = null, n.default.destroy(), e.clearPersistQueue({
      type: "all"
    }), e.allPersistKeys.clear(), e.userAgnosticPersistKeys.clear()
  }
  initializeIfNeeded() {
    if (!this._isInitialized) {
      let _ = Date.now();
      e.allPersistKeys.add(this.getClass().persistKey);
      let {
        state: E,
        requiresPersist: t
      } = e.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
      this.initialize(E) && this.asyncPersist(), t && this.asyncPersist(), this._isInitialized = !0;
      let o = Date.now() - _;
      o > 5 && r.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", o)
    }
  }
  static migrateAndReadStoreState(_, E) {
    if (null != A && e.shouldClear(A, _)) return a.default.remove(_), {
      state: void 0,
      requiresPersist: !1
    };
    let t = null != e._clearAllPromise ? null : a.default.get(_),
      {
        _state: o,
        _version: I,
        ...T
      } = null != t ? t : i,
      r = null == E ? 0 : E.length;
    if (0 !== r && I !== r && null != E) {
      let e = null != I ? I : 0,
        _ = o;
      for (null == I && (_ = T); e < r;) {
        let t = E[e];
        _ = t(_), e++
      }
      return {
        state: _,
        requiresPersist: !0
      }
    }
    if (Object.values(T).length > 0) return {
      state: T,
      requiresPersist: !0
    };
    return {
      state: o,
      requiresPersist: !1
    }
  }
  asyncPersist() {
    let {
      persistKey: _,
      disableWrite: E,
      throttleDelay: t
    } = this.getClass();
    if (e.disableWrites || E) return Promise.resolve(!1);
    let o = e._writePromises.get(_);
    return null != o ? o : (o = new Promise(E => {
      let o = t > 0 ? () => this.throttledCallback(E) : () => this.callback(E);
      e._writeResolvers.set(_, [E, requestIdleCallback(o, {
        timeout: 500
      })])
    }), e._writePromises.set(_, o), o)
  }
  persist() {
    let {
      persistKey: e
    } = this.getClass(), _ = this.getState(), E = this._version;
    a.default.set(e, {
      _state: _,
      _version: E
    })
  }
  clear() {
    let {
      persistKey: e
    } = this.getClass();
    a.default.remove(e)
  }
  constructor(_, E) {
    if (super(_, E), this._version = null == this.getClass().migrations ? 0 : this.getClass().migrations.length, this.callback = _ => {
        let {
          persistKey: E
        } = this.getClass();
        this.persist(), e._writePromises.delete(E), e._writeResolvers.delete(E), _()
      }, this.throttledCallback = T.throttle(e => this.callback(e), this.getClass().throttleDelay, {
        leading: !1
      }), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
    if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
    if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
    this.addChangeListener(() => this.asyncPersist())
  }
}).allPersistKeys = new Set, t.userAgnosticPersistKeys = new Set, t._writePromises = new Map, t._writeResolvers = new Map, t.disableWrites = !1, t.disableWrite = !1, t.throttleDelay = 0, o = t;
class s extends o {
  initializeFromState(e) {
    return o.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
  }
  initializeIfNeeded() {
    return o.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
  }
  getState() {
    return this.getUserAgnosticState()
  }
}
class R extends s {}
class N extends s {}