"use strict";
var r;
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007"), r = class e {
  toJS() {
    return {
      ...this
    }
  }
  set(e, t) {
    return this[e] !== t ? new this.constructor({
      ...this,
      [e]: t
    }) : this
  }
  merge(e) {
    let t = null;
    for (let n in e) {
      if (!e.hasOwnProperty(n)) continue;
      let r = e[n];
      this[n] !== r && (null == t && (t = {
        ...this
      }), t[n] = e[n])
    }
    return null != t ? new this.constructor(t) : this
  }
  update(t, n, r) {
    null == r && (r = n, n = void 0);
    let i = this[t];
    return i instanceof e || (i instanceof Array ? i = [...i] : i instanceof Object && (i = {
      ...i
    })), void 0 === i && (i = n), this.set(t, r(i))
  }
}