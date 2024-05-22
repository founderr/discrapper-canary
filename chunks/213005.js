"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120"), s("653041");
var a = s("836560"),
  n = s("358085"),
  l = s("998502"),
  i = s("13140"),
  r = s("981631");
let o = [],
  d = (e, t, s) => {
    let a = (0, n.isWindows)() ? 0 : 1;
    (e !== r.KeyboardDeviceTypes.MOUSE_BUTTON || s !== a) && o.forEach(a => a._handleEvent(e, t, s))
  };
class u extends a.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (o = o.filter(e => e !== this)).length && l.default.setOnInputEventCallback(null)
  }
  toString() {
    return (0, i.toString)(this.combo)
  }
  _handleEvent(e, t, s) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [a, n] = t;
      return !(a === e && n === s)
    }) : (this.combo.push([e, s, (0, i.getEnv)()]), this.emit("change", this))
  }
  constructor() {
    var e, t, s;
    super(), e = this, s = [], (t = "combo") in e ? Object.defineProperty(e, t, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = s, o.push(this), 1 === o.length && l.default.setOnInputEventCallback(d)
  }
}