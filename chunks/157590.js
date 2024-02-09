"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
}), n("222007");
var i, r = n("817736"),
  l = n("118810");
let s = {
  root: null,
  rootMargin: "0px",
  threshold: .5
};
i = class {
  isVisible(t) {
    return null == this._observer || this._visibleComponents.has(t)
  }
  observe(t) {
    let e = this._observer;
    if (null == e) return;
    this.unobserve(t);
    let n = (0, r.findDOMNode)(t);
    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, t), this._components.set(t, n), e.observe(n))
  }
  unobserve(t) {
    let e = this._observer;
    if (null == e) return;
    let n = this._components.get(t);
    null != n && (this._nodes.delete(n), this._components.delete(t), this._visibleComponents.delete(t), e.unobserve(n))
  }
  constructor(t = s) {
    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = t => {
      t.forEach(t => {
        let e;
        if (null != t.isIntersecting) e = t.isIntersecting;
        else {
          let {
            threshold: n
          } = this._options;
          e = null == n ? t.intersectionRatio > 0 : Array.isArray(n) ? n.some(e => t.intersectionRatio > e) : t.intersectionRatio > n
        }
        let n = this._nodes.get(t.target);
        if (null != n) {
          let t = !1;
          e ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), t = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), t = !0), t && n.forceUpdate()
        }
      })
    }, this._options = t, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, t))
  }
}