"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
}), s("222007"), s("424973");
var a, n = s("44170"),
  l = s("773336"),
  i = s("50885"),
  r = s("13798"),
  o = s("49111");
let d = [],
  u = (e, t, s) => {
    let a = (0, l.isWindows)() ? 0 : 1;
    (e !== o.KeyboardDeviceTypes.MOUSE_BUTTON || s !== a) && d.forEach(a => a._handleEvent(e, t, s))
  };
a = class extends n.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (d = d.filter(e => e !== this)).length && i.default.setOnInputEventCallback(null)
  }
  toString() {
    return (0, r.toString)(this.combo)
  }
  _handleEvent(e, t, s) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [a, n] = t;
      return !(a === e && n === s)
    }) : (this.combo.push([e, s, (0, r.getEnv)()]), this.emit("change", this))
  }
  constructor() {
    super(), this.combo = [], d.push(this), 1 === d.length && i.default.setOnInputEventCallback(u)
  }
}