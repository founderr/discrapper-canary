"use strict";
a.r(t), a("47120");
var n = a("748780"),
  s = a("570140"),
  l = a("317770"),
  i = a("716578"),
  r = a("928518");

function o(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class u extends l.default {
  _initialize() {
    r.default.addChangeListener(this.handlePopoutWindowChange), s.default.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus)
  }
  _terminate() {
    r.default.removeChangeListener(this.handlePopoutWindowChange), s.default.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus), this.injectWindowAnimationFrame(window)
  }
  injectWindowAnimationFrame(e) {
    let t = t => e.requestAnimationFrame(t),
      a = t => e.cancelAnimationFrame(t);
    n.default.inject.RequestAnimationFrame(t), n.default.inject.CancelAnimationFrame(a), i.frameLoop.setRAF(t, a)
  }
  constructor(...e) {
    super(...e), o(this, "handleMainWindowFocus", e => {
      let {
        focused: t
      } = e;
      t && this.injectWindowAnimationFrame(window)
    }), o(this, "handlePopoutWindowChange", () => {
      let e = r.default.getWindowKeys().find(e => r.default.getWindowFocused(e));
      if (null == e) return this.injectWindowAnimationFrame(window);
      let t = r.default.getWindow(e);
      if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
      this.injectWindowAnimationFrame(t)
    })
  }
}
t.default = new u