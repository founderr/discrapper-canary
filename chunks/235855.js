"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007"), n("70102");
var i = n("884691"),
  l = n("748820"),
  r = n("157590");
let s = (0, l.v4)(),
  a = new Map,
  u = new Map;
class o extends i.Component {
  componentDidMount() {
    if (this.props.active) {
      let e = this.getVisibilityObserver();
      e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
    }
  }
  componentDidUpdate(e) {
    let t = this.getVisibilityObserver(),
      n = t.isVisible(this);
    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
  }
  componentWillUnmount() {
    this.getVisibilityObserver().unobserve(this)
  }
  getVisibilityObserverId() {
    let {
      rootMargin: e,
      threshold: t
    } = this.props;
    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
  }
  getVisibilityObserver() {
    let e = this.getVisibilityObserverId(),
      t = u.get(e);
    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
    return t
  }
  render() {
    return i.Children.only(this.props.children)
  }
  constructor(e) {
    super(e), this.isVisible = !1;
    let {
      root: t,
      rootMargin: n,
      threshold: i
    } = e;
    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, l.v4)()) : this.elementId = s;
    let o = this.getVisibilityObserverId();
    !u.has(o) && u.set(o, new r.default({
      root: t,
      rootMargin: n,
      threshold: i
    }))
  }
}
o.defaultProps = {
  active: !0,
  children: i.createElement("span"),
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0, Number.MIN_VALUE]
};
var d = o