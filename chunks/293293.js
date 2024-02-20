"use strict";
r.r(t), r.d(t, {
  scheduler: function() {
    return l
  },
  updateCount: function() {
    return h
  }
});
var n = r("738558"),
  i = r("355070"),
  o = r("41551"),
  s = 0,
  a = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  },
  u = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
  c = function(e) {
    return void 0 === e && (e = 0), Date.now() + e
  },
  f = !1,
  l = new(function() {
    function e() {
      var e = this;
      this.stopped = !0, this.listener = function() {
        return e.schedule()
      }
    }
    return e.prototype.run = function(e) {
      var t = this;
      if (void 0 === e && (e = 250), !f) {
        f = !0;
        var r = c(e);
        (0, o.queueResizeObserver)(function() {
          var i = !1;
          try {
            i = (0, n.process)()
          } finally {
            if (f = !1, e = r - c(), !s) return;
            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
          }
        })
      }
    }, e.prototype.schedule = function() {
      this.stop(), this.run()
    }, e.prototype.observe = function() {
      var e = this,
        t = function() {
          return e.observer && e.observer.observe(document.body, a)
        };
      document.body ? t() : i.global.addEventListener("DOMContentLoaded", t)
    }, e.prototype.start = function() {
      var e = this;
      this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), u.forEach(function(t) {
        return i.global.addEventListener(t, e.listener, !0)
      }))
    }, e.prototype.stop = function() {
      var e = this;
      !this.stopped && (this.observer && this.observer.disconnect(), u.forEach(function(t) {
        return i.global.removeEventListener(t, e.listener, !0)
      }), this.stopped = !0)
    }, e
  }()),
  h = function(e) {
    !s && e > 0 && l.start(), (s += e) || l.stop()
  }