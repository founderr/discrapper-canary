"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007"), s("424973");
var n, r = s("44170"),
  i = s("773336"),
  l = s("50885"),
  a = s("13798"),
  o = s("49111");
let d = [],
  u = (e, t, s) => {
    let n = (0, i.isWindows)() ? 0 : 1;
    (e !== o.KeyboardDeviceTypes.MOUSE_BUTTON || s !== n) && d.forEach(n => n._handleEvent(e, t, s))
  };
n = class extends r.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (d = d.filter(e => e !== this)).length && l.default.setOnInputEventCallback(null)
  }
  toString() {
    return (0, a.toString)(this.combo)
  }
  _handleEvent(e, t, s) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [n, r] = t;
      return !(n === e && r === s)
    }) : (this.combo.push([e, s, (0, a.getEnv)()]), this.emit("change", this))
  }
  constructor() {
    super(), this.combo = [], d.push(this), 1 === d.length && l.default.setOnInputEventCallback(u)
  }
}