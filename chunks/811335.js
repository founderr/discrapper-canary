"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i, a, l = n("44170");
(i = a || (a = {})).VERTICAL = "vertical", i.HORIZONTAL = "horizontal";
let s = {
  open: !1,
  orientation: null
};
class r extends l.EventEmitter {
  get orientations() {
    return Object.values(a)
  }
  get state() {
    return s
  }
  check() {
    let e = function() {
        try {
          return window.outerWidth - window.innerWidth
        } catch (e) {
          return 0
        }
      }() > 160,
      t = function() {
        try {
          return window.outerHeight - window.innerHeight
        } catch (e) {
          return 0
        }
      }() > 160,
      n = e ? "vertical" : "horizontal";
    if (!(t && e) && (function() {
        try {
          return window.Firebug.chrome.isInitialized
        } catch (e) {
          return !1
        }
      }() || e || t)) {
      let e = s.open;
      s = {
        open: !0,
        orientation: n
      }, (!e || s.orientation !== n) && this.emit("changed", s)
    } else s.open && (s.open = !1, this.emit("changed", s))
  }
  constructor() {
    super(), setInterval(() => this.check(), 500)
  }
}
var o = r