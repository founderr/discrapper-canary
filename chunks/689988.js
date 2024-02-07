"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
}), n("70102"), n("222007"), n("704744");
var i, r = n("913144");
i = class {
  initialize() {
    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
      let [e, n] = t;
      r.default.subscribe(e, "function" == typeof n ? n : n.callback)
    }), this.stores.forEach((t, e) => {
      e.addChangeListener(t), t()
    }))
  }
  terminate(t) {
    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
      let [e, n] = t;
      r.default.unsubscribe(e, "function" == typeof n ? n : n.callback)
    })))
  }
  _initialize() {}
  _terminate() {}
  constructor() {
    this.initializedCount = 0, this.actions = {}, this.stores = new Map
  }
}