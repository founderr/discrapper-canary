s.d(t, {
  Z: function() {
    return u
  }
}), s(47120), s(653041);
var n = s(836560),
  i = s(358085),
  r = s(998502),
  l = s(13140),
  o = s(981631);
let a = [],
  d = (e, t, s) => {
    let n = (0, i.isWindows)() ? 0 : 1;
    if (e !== o.MoX.MOUSE_BUTTON || s !== n) a.forEach(n => n._handleEvent(e, t, s))
  };
class u extends n.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (a = a.filter(e => e !== this)).length && r.ZP.setOnInputEventCallback(null)
  }
  toString() {
    return (0, l.BB)(this.combo)
  }
  _handleEvent(e, t, s) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [n, i] = t;
      return !(n === e && i === s)
    }) : (this.combo.push([e, s, (0, l.dU)()]), this.emit("change", this))
  }
  constructor() {
    var e, t, s;
    super(), e = this, s = [], (t = "combo") in e ? Object.defineProperty(e, t, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = s, a.push(this), 1 === a.length && r.ZP.setOnInputEventCallback(d)
  }
}