t.d(s, {
    Z: function () {
        return d;
    }
}),
    t(47120),
    t(653041);
var n = t(836560),
    a = t(358085),
    i = t(998502),
    r = t(13140),
    o = t(981631);
let l = [],
    c = (e, s, t) => {
        let n = (0, a.isWindows)() ? 0 : 1;
        if (e !== o.MoX.MOUSE_BUTTON || t !== n) l.forEach((n) => n._handleEvent(e, s, t));
    };
class d extends n.EventEmitter {
    destroy() {
        this.removeAllListeners(), 0 === (l = l.filter((e) => e !== this)).length && i.ZP.setOnInputEventCallback(null);
    }
    toString() {
        return (0, r.BB)(this.combo);
    }
    _handleEvent(e, s, t) {
        0 === s
            ? (this.combo = this.combo.filter((s) => {
                  let [n, a] = s;
                  return !(n === e && a === t);
              }))
            : (this.combo.push([e, t, (0, r.dU)()]), this.emit('change', this));
    }
    constructor() {
        var e, s, t;
        super(),
            (e = this),
            (t = []),
            (s = 'combo') in e
                ? Object.defineProperty(e, s, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[s] = t),
            l.push(this),
            1 === l.length && i.ZP.setOnInputEventCallback(c);
    }
}
