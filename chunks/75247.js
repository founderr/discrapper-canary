"use strict";
let t;
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("860677"), E("222007"), E("424973");
var o, I, T = E("627445"),
  r = E.n(T),
  a = E("102053");
E("704744");
var n = E("782648"),
  i = E("805833");
let A = [],
  s = !1,
  R = new Promise(e => {
    t = () => {
      e(), t = null
    }
  });
(o = class {
  static initialize() {
    s = !0, A.forEach(e => e.initializeIfNeeded()), null != t && t()
  }
  static destroy() {
    A.length = 0, i.default.destroy()
  }
  static getAll() {
    return A
  }
  registerActionHandlers(e, _) {
    this._dispatcher.register(this.getName(), e, e => {
      (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny()) && (i.default.markChanged(this), i.default.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && i.default.resume(!1))
    }, _, this._dispatchToken)
  }
  getName() {
    var e;
    return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name
  }
  initializeIfNeeded() {
    if (!this._isInitialized) {
      let e = Date.now();
      this.initialize(), this._isInitialized = !0;
      let _ = Date.now() - e;
      _ > 5 && a.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", _)
    }
  }
  initialize() {}
  syncWith(e, _, E) {
    var t, o;
    let I;
    this.waitFor(...e);
    let T = 0,
      r = () => {
        T !== i.default.getChangeSentinel() && (T = i.default.getChangeSentinel(), !1 !== _() && this.emitChange())
      };
    t = null != E ? E : 0, o = r, I = null, r = 0 === t ? function() {
      clearImmediate(I), I = setImmediate(o)
    } : function() {
      null == I && (I = setTimeout(() => {
        try {
          o()
        } finally {
          I = null
        }
      }, t))
    }, e.forEach(e => e.addChangeListener(r))
  }
  waitFor() {
    for (var e = arguments.length, _ = Array(e), E = 0; E < e; E++) _[E] = arguments[E];
    let t = _.map((e, _) => (r(null != e, "Store.waitFor(...) called with null Store at index ".concat(_, " for store ").concat(this.getName())), null != e._dispatcher) ? (r(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."), e.getDispatchToken()) : null);
    this._dispatcher.addDependencies(this.getDispatchToken(), t.filter(e => null != e))
  }
  emitChange() {
    i.default.markChanged(this)
  }
  getDispatchToken() {
    return this._dispatchToken
  }
  mustEmitChanges() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
    this._mustEmitChanges = e
  }
  constructor(e, _, E) {
    this._changeCallbacks = new n.default, this._reactChangeCallbacks = new n.default, this._isInitialized = !1, this.addChangeListener = this._changeCallbacks.add, this.addConditionalChangeListener = this._changeCallbacks.addConditional, this.removeChangeListener = this._changeCallbacks.remove, this.addReactChangeListener = this._reactChangeCallbacks.add, this.removeReactChangeListener = this._reactChangeCallbacks.remove, this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), null !== _ && this.registerActionHandlers(null != _ ? _ : {}, E), A.push(this), s && this.initializeIfNeeded()
  }
}).initialized = R, I = o