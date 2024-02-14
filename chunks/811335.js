"use strict";
E.r(_), E.d(_, {
  default: function() {
    return i
  }
});
var t, o, n = E("44170");
(t = o || (o = {})).VERTICAL = "vertical", t.HORIZONTAL = "horizontal";
let a = {
  open: !1,
  orientation: null
};
class r extends n.EventEmitter {
  get orientations() {
    return Object.values(o)
  }
  get state() {
    return a
  }
  check() {
    let e = function() {
        try {
          return window.outerWidth - window.innerWidth
        } catch (e) {
          return 0
        }
      }() > 160,
      _ = function() {
        try {
          return window.outerHeight - window.innerHeight
        } catch (e) {
          return 0
        }
      }() > 160,
      E = e ? "vertical" : "horizontal";
    if (!(_ && e) && (function() {
        try {
          return window.Firebug.chrome.isInitialized
        } catch (e) {
          return !1
        }
      }() || e || _)) {
      let e = a.open;
      a = {
        open: !0,
        orientation: E
      }, (!e || a.orientation !== E) && this.emit("changed", a)
    } else a.open && (a.open = !1, this.emit("changed", a))
  }
  constructor() {
    super(), setInterval(() => this.check(), 500)
  }
}
var i = r