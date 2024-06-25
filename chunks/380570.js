n(47120);
var s = n(748780),
  i = n(570140),
  l = n(317770),
  a = n(716578),
  r = n(928518);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends l.Z {
  _initialize() {
    r.Z.addChangeListener(this.handlePopoutWindowChange), i.Z.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus)
  }
  _terminate() {
    r.Z.removeChangeListener(this.handlePopoutWindowChange), i.Z.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus), this.injectWindowAnimationFrame(window)
  }
  injectWindowAnimationFrame(e) {
    let t = t => e.requestAnimationFrame(t),
      n = t => e.cancelAnimationFrame(t);
    s.Z.inject.RequestAnimationFrame(t), s.Z.inject.CancelAnimationFrame(n), a.f.setRAF(t, n)
  }
  constructor(...e) {
    super(...e), o(this, "handleMainWindowFocus", e => {
      let {
        focused: t
      } = e;
      t && this.injectWindowAnimationFrame(window)
    }), o(this, "handlePopoutWindowChange", () => {
      let e = r.Z.getWindowKeys().find(e => r.Z.getWindowFocused(e));
      if (null == e) return this.injectWindowAnimationFrame(window);
      let t = r.Z.getWindow(e);
      if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
      this.injectWindowAnimationFrame(t)
    })
  }
}
t.Z = new c